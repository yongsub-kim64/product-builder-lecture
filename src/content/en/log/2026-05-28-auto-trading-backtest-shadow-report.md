---
title: "I Did Not Fix the Auto-Trader Right Away. I Added Instrumentation Before Trusting the Backtest"
date: 2026-05-28
excerpt: "Recent losses made me review whether the trading conditions should change. Instead of changing them immediately, I first found look-ahead bias and universe bias in the backtest, kept the current rules, and added logs plus a shadow_report structure for observation."
tags: ["auto-trading", "backtest", "operations-experiment", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

Today I reviewed the auto-trading program.

The initial goal was simple. Recent trades had been losing money, so I wanted to check whether the trading conditions needed to change. But the more I inspected the system, the clearer the real issue became. The problem was not only the conditions themselves. It was that I did not yet have enough structure to decide whether changing them was justified.

When I opened the backtest code, I found look-ahead bias. Look-ahead bias means a backtest uses information that would not have been available at the actual trading moment, which can make performance look better than it really is. The code was deciding signals with the close price on day T, then also treating that same day T close as the execution price.

That price is not knowable during the live intraday scan.

After changing execution to the T+1 open, the performance numbers came down. That was the more honest baseline.

I also confirmed universe bias. If today's 40-stock universe is taken back five years and used as if it had been known then, future survivors and winners are already included. That makes the absolute return figure difficult to trust as a forecast.

I compared RS criteria and MA20 deviation ceilings. old-15 is the stricter RS rule, while loosen-30 is the more relaxed RS rule introduced for recent market conditions. I also compared MA20 deviation ceilings of 8%, 12%, and 15%.

Some conditions looked better in the backtest. But when I checked them against 30 live trades, changing immediately did not look justified. Under old-15, more than half of those trades may have been blocked. Backtest numbers alone were not enough evidence to change live rules.

The conclusion today was simple.

Keep the current conditions. Strengthen the logs instead. Each buy signal now records RS, excess RS, MA20 deviation, signal time, and buy price. I also prepared a shadow_report structure. A shadow_report is an observation record that compares live trades against candidate rules without changing the actual orders.

I will collect two weeks of live trading data, then review again.

Today was not the day I fixed the program. It was the day I added instrumentation so I would not fix it carelessly.

## Work Log

| Item | Note |
|---|---|
| What I built | shadow_report structure and stronger live-trade logging |
| What broke | The backtest had look-ahead bias |
| What I learned | Observation structure comes before strategy changes |

-> [Related Insight: Why a Good-Looking Backtest Is Not Enough Reason to Change Strategy](/en/insight/insight-035/)  
-> [Auto-Trading Project - Full Record](/en/projects/stock-auto-trade/)

---
> This content is a personal experiment record, not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
