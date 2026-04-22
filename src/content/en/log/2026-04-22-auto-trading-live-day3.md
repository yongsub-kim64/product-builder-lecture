---
title: "Auto-Trading Live Day 3 — 2 Stop-Losses, System Worked Correctly"
date: 2026-04-22
excerpt: "Live day 3. KB Financial and Kakao hit the -3% stop-loss, -₩61,800 total. MA60 filter correctly blocked 3 downtrend stocks (NAVER, Kia, Hyundai Motor) — first real-money validation after the 4/21 API replacement. Budget safety margin: success at 13:00, failed again at 14:00. KT entered as new position. Closing balance ₩4,906,290."
tags: ["AutoTrading", "LiveAccount", "StopLoss", "MA60", "BudgetSafetyMargin", "KIS API"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Review budget safety margin improvement (after market close 2026-04-23)"
---

Date: 2026-04-22

Closed at -₩61,800. Two stop-losses executed.

## Two Stop-Losses Executed

KB Financial hit at 09:05 (-3.32%, -₩31,800). Kakao hit at 10:32 (-3.02%, -₩30,000). Both executed by the rule — no deliberation.

| Stock | Time | P&L |
|-------|------|-----|
| KB Financial (105560) | 09:05 | -₩31,800 (-3.32%) |
| Kakao (035720) | 10:32 | -₩30,000 (-3.02%) |

## MA60 Filter — First Real-Money Validation

What I was more interested in was the MA60 filter. NAVER, Kia, and Hyundai Motor — three downtrend stocks — were correctly blocked from entry.

The API replacement made on 4/21 after market close (switching to inquire-daily-itemchartprice) was validated in live trading for the first time. 65 data points returned; MA20 + MA60 calculated correctly.

| Blocked Stock | Reason |
|---------------|--------|
| NAVER | Downtrend — below MA60 |
| Kia | Downtrend — below MA60 |
| Hyundai Motor | Downtrend — below MA60 |

## Budget Safety Margin — Partial Validation

Applied safe_budget = available_budget × 0.95:

- 13:00 scan — first application **successful**
- 14:00 scan — **failed again** (situation exceeded the 5% buffer)

Confirmed today that a 5% margin is insufficient in certain scenarios. Will review improvement options after market close tomorrow.

## KT — New Position

Bought KT (030200). Entry confirmed after MA20 > MA60 uptrend check. End-of-day: -0.16%.

## End-of-Day Results

- Closing portfolio value: ₩4,906,290
- Shinhan Group (-1.28%) is on watch for tomorrow

## To Check Tomorrow

- Budget safety margin improvement (raise margin or explicitly track intraday spend)
- Shinhan Group stop-loss proximity
