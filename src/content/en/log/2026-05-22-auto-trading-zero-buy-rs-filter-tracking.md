---
title: "The Day the Auto-Trader Bought Nothing — Tracing the Reason for Zero Orders"
date: 2026-05-22
excerpt: "Four scans ran in live mode but zero orders were placed. Six BUY signals fired, yet no stock passed the RS filter. Suspected ETF benchmark skew, compared four universe metrics, found the skew exists inside our own universe too. Built a D+1/D+3/D+5 tracker for rejected stocks instead of changing the logic."
tags: ["auto-trading", "RS-filter", "live-account", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

The auto-trading program ran normally in live mode. Four buy scans fired at 10:00, 11:00, 13:00, and 14:00. End-of-day summary, Telegram alerts, and web export all completed.

The result: zero orders.

| Item | Result |
|---|---|
| BUY signals | 6 |
| Actual orders | 0 |
| Holdings | 0 |
| P&L | +₩0 |

It looked like a day of missed opportunities. But following the logs, the system hadn't stalled — it had made a deliberate decision. Six BUY signals came in, but none passed the RS filter, so the system held cash. Final verdict: "No strong candidates — empty slots remain in cash."

## Was the RS Filter Too Strict?

I suspected the RS filter was too tight. The KOSPI200 ETF's 20-day RS had climbed to +27%, meaning individual stocks with decent momentum still showed low excess RS against the ETF.

So I recalculated RS using different benchmarks.

| Benchmark | RS |
|---|---|
| ETF-based RS | +27.34% |
| Universe simple average RS | +9.14% |
| Universe market-cap weighted RS | +36.57% |
| Candidate pool weighted RS | +2.84% |

The result surprised me. The universe market-cap weighted RS was actually higher than the ETF. The problem wasn't the ETF — our own universe was tilted toward a handful of mega-caps just as much.

## Why I Didn't Change the Logic

Simple average lowers the bar and lets too many stocks through. Market-cap weighted makes the filter even stricter due to the mega-cap concentration. Candidate pool weighted weakens the filter's purpose entirely. All three alternatives introduce new distortions.

So I didn't touch the buy logic. Instead, I built a tracker for stocks that get rejected by the RS filter — logging their D+1, D+3, and D+5 performance on a trading-day basis. KRX holiday handling for 2026 is included. No data yet. It starts accumulating now.

## Zero Buys Isn't Failure

Buying nothing isn't failure. What matters is whether you can explain why you didn't buy. Today, that explanation got one step clearer.

Next step: record the first day of D+1 data for RS-rejected stocks and confirm the tracker is working as intended.

→ [The RS Filter Problem Wasn't the Formula — It Was a Skewed Benchmark](/en/insight/insight-034/)  
→ [Auto-Trading Project — Full Record](/projects/stock-auto-trade/)

---
> ※ This content is a personal experiment record, not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
