---
title: "KIS Auto-Trading — First Live Order Filled, Live Transition Complete"
date: 2026-04-14
excerpt: "10:30 AM. Kakao, 20 shares @ ₩48,350. The system that ran in DRY_RUN mode is now live. Three fixes before the open, trailing activation logs and Telegram position summary in the afternoon, --live flag added to the scheduler."
tags: ["AutoTrading", "KIS API", "Python", "LiveTrading", "TrailingStop", "MA20", "RSI", "Telegram"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Confirm scheduler auto-run at 08:40 tomorrow. Monitor Samsung Electronics trailing activation threshold (₩211,380)"
---

Date: 2026-04-14

10:30 AM. Kakao (035720), 20 shares @ ₩48,350. The first live order was filled.

The auto-trading system that had been running in DRY_RUN validation mode went live today.

## Three Pre-Open Fixes

**STEP 6 — RSI Wilder method + MA20 5% deviation cap**

Replaced the existing RSI calculation with Wilder smoothing. Added a filter to block buys when a stock's price deviates more than 5% above MA20. The goal was to prevent chasing highs.

**STEP 7 — Trailing stop introduced**

Switched from a fixed take-profit to a trend-following exit structure. The system now sells when price drops a set percentage from the peak, designed to capture more upside in strong trending stocks.

**STEP 8 — Cash balance fallback logic**

Caught cases where the cash balance query failed due to unexpected API responses. Added fallback logic to improve stability.

## Afternoon Additions

Added trailing activation logs and a post-market Telegram position summary (STEP 9). Now possible to see in real time which stocks have reached the trailing threshold and what the portfolio looks like after close.

Added `--live` argument to the task scheduler. Automated live trading starts tomorrow at 08:40.

## End-of-Day Results

- Samsung Electronics: +1.60%
- Kakao: −0.41%
- Total portfolio value: ₩10,002,370

Samsung Electronics trailing activation threshold: ₩211,380. Today's high was ₩209,750 — missed by ₩1,630.

## What's Next

Confirm the scheduler fires at 08:40 tomorrow. Monitor whether Samsung Electronics reaches ₩211,380. The first real check of whether trailing stop produces different outcomes than the fixed +6% take-profit.
