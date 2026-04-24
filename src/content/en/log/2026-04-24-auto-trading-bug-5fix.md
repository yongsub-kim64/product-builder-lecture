---
title: "One Live Day — Fixed 5 Bugs and Found a Strategy Gap"
date: 2026-04-24
excerpt: "Morning orders all failed, 18 duplicate KT sell reservations stacked, and a full regime detection redesign. 5 bugs fixed, 6 strategy changes, 4 orders executed. Seed ₩5M → close ₩4.89M."
tags: ["AutoTrading", "LiveAccount", "BugFix", "StrategyImprovement", "RegimeDetection", "AICollaboration"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Monday pre-market 08:50: check BULL signal recorded → 10:00 scan: confirm Samsung Electronics passes new deviation threshold and buy executes"
---

Date: 2026-04-24

Five bugs fixed. Six strategy changes. That was today.

## Bug 1 — Wrong Cash Field

The 10:00 scan fired buy signals. Every order failed. Log: "exceeds orderable amount."

Balance screen showed ₩620,000. KIS said ₩0.

The cause: T+2 settlement. When you buy stock, the cash is locked for two days. During that period, KIS returns 0 for `ord_psbl_cash_amt` (orderable amount). The system was reading `prvs_rcdl_excc_amt` (previous day settlement amount) instead. Asked AI to explain the difference between the two fields. Switched to the correct one.

| Item | Before | After |
|------|--------|-------|
| Field referenced | Previous day settlement | KIS orderable amount (direct) |
| Result | Included T+2 locked funds → error | Reflects actual available cash |

## Bug 2 — Duplicate Sell Reservations

KT trend-break sell reservations were stacking every 5 minutes. 18 total by end of day.

Fixed main.py first — problem persisted. Traced the actual execution path with AI. Found a separate function in scheduler.py running independently every 5 minutes during market hours. Manually deleted 17 reservations. Added deduplication logic.

## Strategy — Full Regime Detection Redesign

Afternoon was structural. KOSPI was rising; held positions kept falling.

**Problem 1: MA20 deviation cap blocking recovery trades**

For large-caps like Samsung Electronics and SK Hynix, an MA20 deviation of 13–14% during a recovery is normal. The 7% cap was treating that as overbought. Split deviation thresholds by stock type.

**Problem 2: No buffer between buy and sell conditions**

A position bought just above MA20 would immediately trigger a trend-break sell signal on any dip. KT was exactly this case. Added a buffer zone to the sell condition.

**Regime Detection Redesign**

| Item | Before | After |
|------|--------|-------|
| Basis | Prior day KOSPI close (single value) | 5-condition scoring system |
| Transition | Immediate | 2 consecutive days with same signal |
| Cash ratio | Fixed | Bull 20% / Neutral 35% / Bear 60% |

## Today's Numbers

- Seed ₩5M → Closing balance ₩4.89M
- Realized P&L: –₩93,000 (Kia · KT stop-losses)
- Bugs fixed: 5 / Strategy changes: 6 / Orders executed: 4

## To Verify Next Monday

- Pre-market cycle 08:50: BULL signal recorded?
- 10:00 scan: Samsung Electronics passes new deviation threshold?
