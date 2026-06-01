---
title: "Why the Auto-Trader's Partial Take-Profit Never Fired — Scheduler Execution Path Over Logic"
date: 2026-06-01
excerpt: "Partial take-profit was enabled, the rule_engine logic was implemented, and the thresholds were configured. But the intraday 5-minute sell loop was calling check_sell_signal without passing the actual position size or partial_sold state — so PARTIAL_SELL could structurally never be returned. The fix wasn't in the strategy logic. It was rewiring the scheduler's call."
tags: ["auto-trading", "partial-sell", "live-account", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

I reviewed today's live trading logs. One position was bought during the session and later closed by the trailing stop for a gain. On the surface it looked like a clean, normal trade.

But following the logs closely revealed a problem. The position's return had exceeded the partial take-profit threshold — yet partial take-profit never executed once.

## I Suspected the rule_engine First

`PARTIAL_SELL_ENABLED = True`. Threshold, split ratio — all configured. The `rule_engine.check_sell_signal` function had PARTIAL_SELL logic implemented as the highest-priority branch.

So my first instinct was to look for a bug in the condition or a miscalculation in the threshold. But after reviewing the logic directly, rule_engine was fine.

## The Real Cause: Required Values Weren't Being Passed

The problem was elsewhere. In `scheduler.py`'s `job_intraday_sell` — the 5-minute intraday sell loop — the call to `check_sell_signal` was missing two arguments:

- `total_qty`: actual position size (was defaulting to 0)
- `partial_sold`: whether a partial sell had already occurred (missing entirely)

Inside `check_sell_signal`, the PARTIAL_SELL branch only activates when `total_qty > 0`. With 0 being passed in, this condition was always False — PARTIAL_SELL could never be returned, by design.

The rule_engine logic was correct. The execution path was broken.

## The Fix: Connect Actual State to the Scheduler

The fix was straightforward. In `job_intraday_sell`, read the actual position size from the live account balance and pass it as `total_qty`. Read the `partial_sold` flag from the BUY entry in `order_log.json` and pass it as well.

The corrected execution flow:

1. 5-minute loop triggers
2. Fetch `qty` from live account balance
3. Read `partial_sold` from `order_log.json` BUY entry
4. Call `check_sell_signal(code, avg_price, hold_days, peak_price, total_qty=qty, partial_sold=partial_sold)`
5. If return ≥ threshold and `partial_sold=False` → returns `PARTIAL_SELL`
6. Execute sell for `floor(qty × PARTIAL_SELL_RATIO)` shares
7. Write `partial_sold=True` to order_log
8. Next loop reads `partial_sold=True` → second partial sell prevented
9. Remaining shares continue under trailing stop management

## Edge Case Verification

**When total_qty=1**: `floor(1 × 0.5) = 0`. A 0-share order is guarded against and skipped.

**After partial_sold=True**: On the next loop, `partial_sold=True` is read and the PARTIAL_SELL branch is not entered. The remaining shares are managed entirely by trailing stop.

**When remaining qty=0**: After a partial sell that zeroes out the remaining position, trailing peak is cleared and same-day sell is recorded.

## Additional Finding: Logs Can Be a Sensitive Data Leak

While reviewing the logs, I found another problem. When the Telegram API was called, `httpx` was logging the HTTP request URL at INFO level — and that URL contains the bot token. Some account identifiers were also being written to logs in plain text.

Actions taken:

- Reissued the Telegram bot token
- Applied a log-masking filter (`_RedactingFilter`) in `telegram_alert.py`
- Set `httpx`, `httpcore`, and `telegram` loggers to WARNING to block INFO-level HTTP request logs
- Masked account identifiers in `scheduler.py`'s direct log output
- Wrote a retroactive masking tool (`tools/mask_logs.py`) for existing log files

## Operational Checklist From Today

In automated trading, "the logic exists" and "the logic actually runs" are completely different statements. The checklist to verify:

1. Is the config flag enabled?
2. Is the logic implemented in rule_engine?
3. Is the function called from the actual scheduler execution path?
4. Are the required state values being passed as arguments?
5. Is the execution result saved to order_log?
6. Is the saved state re-read on the next loop?
7. Are there no sensitive values left in logs?

## What to Watch in the Next Live Session

- Does `PARTIAL_SELL` appear in the sell decision log?
- Is the share calculation based on actual position size?
- Is `partial_sold=True` written to order_log?
- Is `partial_sold=True` re-read on the next 5-minute loop?
- Do remaining shares continue under trailing stop management?
- Are there no token or account identifiers in the log output?

→ [What Matters in Auto-Trading Is Execution Path, Not Just Logic](/en/insight/insight-035/)  
→ [Auto-Trading Project — Full Record](/projects/stock-auto-trade/)

---
> ※ This is a personal record of execution path and log security issues found during live auto-trading operations — not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
