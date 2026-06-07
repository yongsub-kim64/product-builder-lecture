---
title: "Auto-Trading Partial Sell Live Verification — Confirming State Carries Across Loop Boundaries"
date: 2026-06-02
excerpt: "After fixing partial take-profit, the real question was whether the state actually carried through. PARTIAL_SELL firing is one thing. But does partial_sold=True get saved? Does the next loop read it and prevent a second trigger? Does the remaining position stay under trailing stop management? This log tracks those verifications step by step."
tags: ["auto-trading", "partial-sell", "execution-path", "live-verification", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

The previous log traced why partial take-profit wasn't executing. The intraday 5-minute sell loop (`job_intraday_sell`) was calling `check_sell_signal` without passing the actual position size (`total_qty`) or the `partial_sold` state. With `total_qty=0`, the PARTIAL_SELL branch could never be entered — by structure, not by logic.

The fix was straightforward. But fixing the code wasn't the end. The Python process was already running. **Changes don't take effect until the process is restarted.**

This log covers what was verified after the restart — whether the fix actually worked across live scheduler loop boundaries.

## State Flow Verified Step by Step

One thing working doesn't mean the whole chain is connected. Each checkpoint below was confirmed in sequence.

**1. PARTIAL_SELL returned**

When the return crossed the threshold, `check_sell_signal` now returned `PARTIAL_SELL`. Before the fix, `total_qty=0` made this branch structurally unreachable. After the fix, with actual position size passed in, the signal fired.

**2. partial_sold=True saved**

After partial take-profit executed, the BUY entry in `order_log.json` was checked for `partial_sold=True`. Without this write, the next loop has no way to know a partial sell already happened.

**3. Second trigger prevented on next loop**

Five minutes later, on the next loop entry, `partial_sold=True` was re-read from order_log. The PARTIAL_SELL branch was skipped. The remaining position became the trailing stop's sole responsibility.

**4. Trailing stop continuity confirmed**

After partial take-profit, the remaining shares continued to be tracked in the trailing stop loop. `peak_price` updates kept running, and the structure for a trailing sell on a sufficient peak-to-current drop remained intact.

## peak_price Restoration After Restart

For the remaining shares to be properly managed by trailing stop after a restart, `peak_price` needs to survive the restart.

`peak_price` is stored in `logs/trailing_stop.json`. File-based storage means the peak persists across process restarts. No explicit restore call is needed — the next loop reads the file and the peak is back.

One additional observation: `reset_daily_logs()` (called at market open) does not touch `trailing_stop.json`. The peak stays in the file until a sell completes and `remove_trailing_peak` is called. This means carry-over positions from the previous day retain their peak continuity into the next session — which is the intended behavior.

## Process Restart and When a Fix Actually Takes Effect

Saving a code change does not update a running Python process. The scheduler was already executing. To apply the fix, the process had to be restarted.

But restarting alone wasn't enough. After the restart, these had to be confirmed in the actual live loop:

- Does PARTIAL_SELL fire at the right threshold?
- Is `partial_sold=True` written to order_log?
- Does the next loop read that flag and skip the second trigger?
- Does the remaining position carry forward under trailing stop management?

The completion criterion for a fix is not when the file is saved. **It is when the next scheduler loop confirms the intended state is saved and re-read.**

## Log Security Observation

This verification round also included a check that sensitive values weren't appearing in log output.

The masking filter (`_RedactingFilter`) applied to the root logger, suppression of `httpx` INFO-level HTTP request logs, and account identifier masking in `print()` paths — all were observed to be working as intended throughout the session.

→ [Why Partial Take-Profit Wasn't Executing — Scheduler Path and Log Security](/en/log/2026-06-01-auto-trading-partial-sell-scheduler-fix/)  
→ [An Auto-Trading Operator Doesn't Need to Know All the Code](/en/insight/insight-038/)  
→ [Auto-Trading Project — Full Record](/projects/stock-auto-trade/)

---
> ※ This is an operational record of execution path verification, state persistence checks, and log security review conducted while running an auto-trading program — not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
