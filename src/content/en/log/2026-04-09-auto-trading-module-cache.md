---
title: "KIS Auto-Trading — Module Cache Issue Identified & Buy Cycle Restored"
date: 2026-04-09
excerpt: "The code was updated, but the process was still running on yesterday's state. Found the root cause, patched the MA60 gap in the paper trading environment with a fallback, and restored the DRY_RUN buy cycle."
tags: ["AutoTrading", "KIS API", "Python", "DRY_RUN", "OperationsSOP", "PaperTrading", "Debugging"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "v1.1"
project_link: "stock-auto-trade"
next_action: "SOP review before live switch / internalize scheduler restart routine"
---

Date: 2026-04-09

The pre-market 08:50 cycle was running normally. But the same message kept appearing at the buy step: "Market regime unfavorable — skipping all buys."

## Root Cause

At first, I assumed the strategy conditions were set too strictly. But the conditions weren't the problem. The running scheduler process was holding the pre-fix version of rule_engine.py in memory. The file had changed, but the process had been running on yesterday's state all along.

## Fixes Applied

After confirming the cause, I added diagnostic logs to `is_market_ok()` to trace the actual branching path. In the paper trading environment, MA60 can be missing because the KIS API only provides 30 days of data. The existing logic treated this case as unconditional False, blocking the entire buy cycle. I fixed this so that when IS_PAPER=True and MA60=None, the system falls back to a close > MA20 judgment.

`check_buy_signal()` in the individual stock scan had the same issue. When MA60 was unavailable, every stock was skipped with "insufficient data," meaning stocks with valid MA20 and RSI calculations were never surfacing in the paper trading environment. I patched this so that under paper trading, the MA60 condition is skipped and the remaining conditions are used for evaluation. I also fixed a format error in the BUY reason string that occurred when MA60=None.

## DRY_RUN Results

After applying the fixes, I restarted the process and ran DRY_RUN again.

- **Regime assessment**: MA60=None + IS_PAPER=True → fallback to close > MA20 → buy-eligible judgment
- **Samsung Electronics, LG Chem**: BUY signal confirmed
- **SK Hynix**: share price too high, cash limit exceeded → PASS
- **Kakao**: current price below MA20 → PASS
- Scan terminated after hitting the maximum position count limit

No actual orders were placed since it was a DRY_RUN, but the buy signal logic and scan flow itself is back to normal.

## Operations Rule Established

One clear operations rule emerged from today's work: **always restart the scheduler after modifying code.** This has been documented as docs/SOP_scheduler_restart.md and reflected in README, PROJECT_STATUS, ARCHITECTURE, and the devlog.
