---
title: "Auto-Trading Week 1 — Position Rotation Is Starting to Take Shape"
date: 2026-04-30
excerpt: "A trailing stop sell → cash recovery → RS-qualified buy rotation structure appeared in live trading for the first time. Three consecutive trailing wins, zero stop-losses. The next challenges: high-priced stock handling, holiday detection, and fixing the export bug."
tags: ["AutoTrading", "PositionRotation", "TrailingStop", "RSFilter", "WeeklyRecap", "stock-auto-trade"]
published: true
project_tag: "AutoTrading"
---

Week 1 on the live account is done. Weekly realized P&L: +₩40,658. But once unrealized P&L is included, the closing balance was ₩13,941 lower than where the week started. Taken at face value, it's hard to call this a clear win yet.

But the metric I was actually watching this week wasn't the return.

## What This Week Was Really About

After switching BUY_DRY_RUN to False, the system placed its first real orders on its own. It scanned each morning, picked stocks that passed the RS filter, submitted the orders, and when a trailing stop fired in the afternoon, the sell went through. The key trading decisions and order submissions were handled within the system's own flow — no operational downtime, no API errors. Zero stop-losses out of 7 trades.

That's the core result for this week.

## What the Trailing Wins Showed

Samsung Electronics, NAVER, KB Financial — all three exits were positive. Samsung fired on a gap-down, so the gain was modest, but it didn't go negative. The trailing stop's approach — allow a defined range from the peak before selling — worked as intended in live conditions.

Between 4/20 and 4/22, stop-losses locked in –₩61,800. Trailing P&L through this week has reached +₩51,658. Recovery rate: 83.6%. The structure where trailing gains gradually follow stop-loss losses is actually forming.

## What Cash Recycling Means

On the morning of 4/30, available buying power was around ₩70,000–₩80,000. Even when RS-qualified candidates appeared in the scan, there wasn't enough capital to buy. Only after KB Financial was sold at 13:50 did cash recover enough to enter LG Electronics at the 14:00 scan.

At first this looked like a structural constraint. Looking at it again, it's the right design. The system needs to empty a position before it can take the next opportunity. It doesn't force entries. When an existing position exits with a gain, the next candidate fills that slot. Rotation has begun.

## What the RS Filter Changed

Samsung Electronics was RS-qualified on 4/29 but fell out of the filter on 4/30. The KOSPI ETF itself rallied hard, making Samsung's relative strength comparatively lower. The system detected this automatically and didn't buy.

The stronger the market, the stronger a stock has to be to survive the filter. That's what the RS filter does. This week was the first live confirmation.

## What's Still Open

The web export error was supposedly fixed, but it reappeared on 4/30. Log visibility has improved, but the data export side is still unstable.

SK Hynix ranks first by RS but its share price of around ₩1,300,000 exceeds the per-trade budget. The question is whether to leave it in the universe anyway, or exclude it from the start. Shinhan Financial keeps getting blocked at MA20 deviation of 1.7–1.9%. Whether to adjust the parameter or hold the current threshold is a decision for this week.

## The Operating Principle Going Forward

What the system is doing right now is validating the structure. Growing the returns comes after that. Error-free execution, trailing stops working as designed, position rotation repeating — I need a few more weeks of confirmation before the next phase can even be discussed.

This week was the first of those weeks.

---

This is a personal automated trading system operations log. Not investment advice.
