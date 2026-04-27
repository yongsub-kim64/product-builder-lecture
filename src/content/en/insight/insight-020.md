---
title: "Filling Slots with Weak Stocks Is Not Diversification — It's Distributing Losses"
date: 2026-04-27
excerpt: "MAX_HOLD=5 was a ceiling, not a target. When a system runs to fill a number, it picks available stocks, not strong ones. Four positions down on the day KOSPI hit an all-time high proved it."
tags: ["AutoTrading", "RSFilter", "RelativeStrength", "StockSelectionPhilosophy", "Diversification", "KOSPI200"]
published: true
project_tag: "AutoTrading"
---

On the day KOSPI hit an intraday all-time high, 4 of my 5 positions were down.

Only Samsung Electronics moved with the market. The other four drifted in their own directions, indifferent to what the broader market was doing. My first thought was that it was a stock-picking problem. But when I looked at the logs, the real problem was somewhere else.

The system was running to fill MAX_HOLD=5.

Because the structure picked stocks in qualification order, it wasn't selecting the strongest candidates first — it was taking whoever qualified first. The result: stocks that passed the absolute conditions (MA20, RSI, etc.) but moved independently from the market filled the portfolio. From the system's perspective, everything was normal. From a returns perspective, nothing was.

---

In hindsight, it's obvious. Absolute conditions aren't enough. A stock that doesn't go up on a day the entire market goes up is not a strong stock. You have to look at how strong it is relative to the market.

Today I added an RS (Relative Strength) filter. Using the KOSPI200 ETF's 20-day return as the benchmark, any stock with excess return below -3% is disqualified as a buy candidate. In plain terms: if a stock can't keep up when the market rises, it's out from the start. The remaining candidates are sorted by excess return and purchased strongest-first. And if only 2 strong candidates qualify, buy 2 and leave the remaining slots in cash.

MAX_HOLD=5 was a risk-diversification ceiling. It was never a mandatory target to fill. Filling slots with weak stocks isn't diversification — it's distributing your losses.

---

Today I also formalized a habit I've been developing: never apply a strategy change directly to the live account. I added a BUY_DRY_RUN flag that runs buy decisions in simulation mode only. Sell logic stays on live execution. After 2–3 trading days, if the numbers check out, I switch.

Now I'm waiting to see whether the RS filter actually screens out weak stocks — and whether the candidates that pass it outperform the ones that don't.

---

**What I built:** Added an RS filter — only stocks with excess return ≥ -3% vs. KOSPI200 ETF qualify as buy candidates.

**What broke:** 5 portfolio slots filled with weak stocks. 4 positions down on a KOSPI all-time high day.

**What I learned:** MAX_HOLD is a ceiling, not a target. Filling slots is not diversification — it's distributing losses.

---

Whether you trade manually or algorithmically — have you ever filled a slot with a weak stock just to hit a position count?
