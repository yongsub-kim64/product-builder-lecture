---
title: "Auto-Trading System: First Live Week — Apr 13–16 Operations Log"
date: 2026-04-16
excerpt: "Four days of first live operations. DRY RUN validation → first buy → first trailing stop trigger → lock file failure recovery → universe expanded to 20 stocks. Weekly realized P&L: +₩15,000. Total portfolio: ₩10,037,479."
tags: ["AutoTrading", "KIS API", "Python", "LiveTrading", "TrailingStop", "MA20", "psutil", "TaskScheduler"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Collect scan performance data for the new 20-stock universe and confirm the effect of loosening deviation threshold to 7%"
---

Date: 2026-04-13 – 2026-04-16

On April 13, 2026, the system ran on a live market for the first time.

## Apr 13 Mon — DRY RUN Full Cycle Validation

Ran the full cycle in `--dry-run` mode. BUY signals: 0. Every stock was in an over-extended state above MA20, so the system bought nothing. Expected behavior. Final validation before the live switch was complete.

## Apr 14 Tue — Live Switch, First Order Filled

Switched to `--live` mode. The first live buy was executed.

- Kakao (035720), 20 shares @ ₩48,350, filled at 10:30 AM

Added the `--live` argument to the task scheduler the same day. Automated live trading would start from the next morning.

## Apr 15 Wed — First Trailing Stop Trigger, Lock File Failure

The busiest day of the week.

**First live trailing stop trigger**

Samsung Electronics reached ₩215,250 in the morning. In the afternoon, the trailing stop fired for the first time.

- Exit time: 2:51 PM (automated)
- Exit price: ₩210,750
- Return: +3.57%
- Realized P&L: +₩15,000

**Lock file failure and recovery**

At 8:40 AM, a stale lock file caused the scheduled run to fail. Manually recovered, then applied psutil PID validation (STEP 10). On restart, the system now checks whether the PID stored in the lock file is still alive — if it's a zombie lock, it's auto-deleted.

## Apr 16 Thu — Scheduler Auto-Recovery Confirmed, Universe Expanded

Closing VS Code killed the scheduler. The task scheduler auto-restarted at 10:35 AM. STEP 10 detected the stale lock, deleted it, and started cleanly. The recovery logic applied yesterday worked in production.

Also expanded the stock universe from 5 to 20 tickers, and loosened the MA20 deviation cap from 5% to 7%. Goal: more entry opportunities.

## Weekly Summary

- Realized P&L: +₩15,000 (one trailing stop exit on Samsung Electronics)
- Total portfolio value: ₩10,037,479

## What's Next

Collect scan performance data for the new 20-stock universe and confirm the effect of loosening the deviation threshold to 7%.
