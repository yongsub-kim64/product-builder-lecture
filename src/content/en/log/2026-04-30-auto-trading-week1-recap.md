---
title: "Week 1 Auto-Trading Recap — Apr 29–30"
date: 2026-04-30
excerpt: "Two live trading days. Weekly realized P&L: +₩40,658. Trailing stop hit three consecutive wins (zero stop-losses). Closing portfolio value ₩4,928,266 — down ₩13,941 from the week's start on unrealized P&L."
tags: ["AutoTrading", "WeeklyRecap", "TrailingStop", "LiveTrading", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "AutoTrading"
project_link: "stock-auto-trade"
---

Two live trading days. Weekly realized P&L was +₩40,658. On a mark-to-market basis, the closing portfolio value was ₩13,941 lower than the week's opening balance.

---

## Weekly Key Metrics

- Opening balance ₩4,942,207 → Closing balance ₩4,928,266. Weekly change: –₩13,941.
- Weekly realized P&L: +₩40,658. Cumulative realized P&L: –₩10,142 (stop-losses –₩61,800 / trailing +₩51,658).

## Trade Log

4/29: Samsung Electronics sold +₩11,004, NAVER sold +₩20,000, SK Telecom new buy, KB Financial additional buy.
4/30: KB Financial sold +₩9,654, LG Electronics new buy.
Total 7 trades (3 sells / 4 buys). Zero stop-losses this week.

## Trailing Stop Performance

Samsung Electronics, NAVER, KB Financial — all three exits were positive. Samsung fired on a gap-down open, so the gain was small, but there was no loss. All three fell within the intended trailing range (3–6%).

## Buy Scans and RS Filter Activity

6 scans during the week (10:00 ×2, 13:00 ×2, 14:00 ×2). On the morning of 4/30, available buying power was only ₩70,000–₩80,000 — not enough for any entry. After KB Financial was sold at 13:50, cash recovered and LG Electronics was entered at the 14:00 scan.

On 4/30, the KOSPI ETF RS baseline rose sharply, pushing Samsung Electronics out of the RS filter. A real-world demonstration that the filter dynamically adjusts candidates as market strength changes.

The 20% cash reserve target logic structurally blocked any chasing buys on the 4/30 morning scans.

## Issues Found

- **P1**: Web export 'result' key error — reoccurred on 4/30 after a previous fix. Needs full root-cause investigation.
- **P2**: SK Hynix ranks #1 by RS but its share price (~₩1,300,000) repeatedly exceeds the per-trade budget. Universe composition needs review.
- **P2**: Shinhan Financial repeatedly blocked at MA20 deviation of 1.7–1.9%. Parameter adjustment under consideration.
- **P3**: Holiday detection logic for 5/1 not confirmed.

## Next Week Checklist

Fully resolve web export bug / confirm holiday detection logic / monitor SK Telecom 12-share position stop-loss level (₩92,521) / decide handling for high-priced stocks / prepare commission and tax accounting (scheduled after 2 weeks of live data).

---

This is a personal automated trading system operations log. Not investment advice.
