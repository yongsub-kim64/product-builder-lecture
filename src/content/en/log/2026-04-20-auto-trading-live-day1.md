---
title: "Auto-Trading Live Day 1 — 2 Bugs Fixed, 5 Stocks Bought"
date: 2026-04-20
excerpt: "First day on the live account. Two morning bugs resolved (cached paper token / MA60 data shortage), first buys executed at 10:33. Five stocks — Kakao, Kia, KB Financial, Shinhan, NAVER — ₩4,690,300 deployed. End-of-day unrealized P&L: –₩54,030 (–1.08%), all 5 positions held."
tags: ["AutoTrading", "KIS API", "LiveAccount", "Troubleshooting", "MA60", "TokenCache"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Verify Windows Task Scheduler auto-start (2026-04-21 08:45)"
---

Date: 2026-04-20

First day on the live account. Rougher than expected, but the system ran through to the end.

## Morning Troubleshooting — 2 Bugs

### 1. Stale Paper-Trading Token in Cache

The paper-trading token had been left in the cache, causing repeated HTTP 500 errors on live account API calls. Deleted token.json, re-issued a live account token, resolved.

### 2. MA60 Data Shortage → All Buys Blocked

The KIS live API returned only 30 of the 65 candles requested, making MA60 calculation impossible. Under the live-account conservative principle, all buys were blocked.

Fixed by adding a fallback: when MA60=None, use MA20 instead.

| Bug | Fix |
|-----|-----|
| Stale paper-trading token in cache | Deleted token.json, re-issued live account token |
| MA60=None + IS_PAPER=False blocked all buys | When MA60=None, fall back to MA20 regardless of paper/live mode (per-stock MA60 condition still applies) |

I described the symptoms to AI and we found the root cause together. AI wrote the fix. My role was to review and apply it.

## First Live Buys (10:33)

| Stock | Qty | Price |
|-------|-----|-------|
| Kakao (035720) | 20 shares | ₩49,600 |
| Kia (000270) | 6 shares | ₩159,600 |
| KB Financial (105560) | 6 shares | ₩162,700 |
| Shinhan Group (055550) | 9 shares | ₩100,400 |
| NAVER (035420) | 4 shares | ₩216,000 |

- Total deployed: ₩4,690,300
- Remaining cash: ₩305,970

## End-of-Day Results

- Total portfolio value: ₩4,945,970
- Realized P&L: ₩0 (no sells)
- Unrealized P&L: –₩54,030 (–1.08%)
- All 5 positions held (stop-loss threshold –3% not reached)

The system evaluated conditions and sold nothing. That was the correct call.

## Infrastructure Check

Received daily summary Telegram message at 15:30. Website data export also completed normally.

Infrastructure changes (configured the day before):
- Windows Task Scheduler registered (daily auto-start at 08:45)
- run_live.bat created (with log file redirect)

## To Check Tomorrow

- Windows Task Scheduler auto-start (2026-04-21 08:45)
- MA60 data return count (count=130 test)
