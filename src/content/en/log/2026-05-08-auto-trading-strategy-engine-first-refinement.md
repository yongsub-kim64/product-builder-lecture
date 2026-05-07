---
title: "Stock Auto-Trading Program — Strategy Engine First Refinement"
date: 2026-05-08
excerpt: "A strategy engine refinement log for the stock auto-trading program, based on live-account operating data: capital structure, stop-loss rules, target profit, sector overlap limits, and profit-risk analysis log placement."
tags: ["AutoTrading", "StrategyEngine", "RiskManagement", "DRY RUN", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "AutoTrading"
project_link: "stock-auto-trade"
---

## Summary

On May 8, 2026, I completed the first refinement of the strategy engine for the stock auto-trading program.

This was not a full redesign. It was a structural cleanup based on live-account operating data: reduce the weak points in the current strategy and prepare the system for the next stage of improvement.

Looking at roughly two weeks of live-account operation, the previous strategy had a problem: losses were wider than gains.

Average gains were around 2.5%, while stop-losses were around -3.0%. The resulting risk-reward profile was close to 0.8:1, which is unfavorable for long-term operation.

An auto-trading program should not simply look for more buy signals. When it enters, it needs a structure that limits losses and lets profits run further.

## Core Changes

The main refinements were:

- Reflect the ₩10M live-account operating baseline
- Set the per-position budget to ₩2M
- Keep 20% of capital in cash
- Tighten the stop-loss threshold from -3.0% to -2.5%
- Add a +5.0% target profit baseline
- Strengthen the MA20 deviation limit from 7% to 5%
- Shorten the holding period from 10 trading days to 5 trading days
- Add sector overlap limits
- Add an RSI momentum condition
- Move the profit-risk analysis log to an earlier point in the buy-signal check

The patch focused mainly on `config.py`, `risk_engine.py`, `rule_engine.py`, and `main.py`.

## Capital Structure

The biggest change is the operating structure.

Previously, the per-position budget and total operating capital were somewhat loosely connected. This time, the total operating baseline was set to ₩10M, and the per-position budget was organized around ₩2M.

The maximum number of holdings is now 4. That means roughly 80% of the account can be used for positions, while 20% remains in cash.

This cash buffer is not decorative. It is a minimum cushion for sharp drawdowns, additional buy opportunities, and system-level issues.

## Stop-Loss and Target Profit

The stop-loss threshold was tightened from around -3.0% to -2.5%. A +5.0% target profit baseline was also added.

On paper, this creates a 2.0:1 risk-reward structure.

However, this patch does not use the risk-reward filter as an actual buy-blocking condition yet. `RR_FILTER_ENABLED=False` remains in place, and the system logs the calculation first.

The reason is simple.

The stop-loss is still applied as a fixed percentage across all stocks. Without reflecting each stock's volatility, enabling a risk-reward filter immediately would not add enough practical differentiation.

The better next step is to apply ATR-based dynamic stop-losses first, then activate the risk-reward filter.

## Sector Overlap and RSI Momentum

This refinement also added `SECTOR_MAP` to prevent the system from buying multiple stocks in the same sector.

The current 20-stock universe is manually mapped by sector. If the system already holds a stock in a sector, it skips a new buy in the same sector even if the candidate passes other conditions.

For example, if a semiconductor stock is already held, another semiconductor stock will be blocked from new entry.

This is a guardrail against excessive concentration in one theme or sector.

The RSI condition was also improved. Previously, the system only checked whether RSI was inside a certain range. Now it also checks whether the current RSI is higher than the previous RSI and whether the current RSI is at least 30.

The intent is to avoid simply buying oversold stocks and instead look for signs that a real rebound momentum has started.

## Sell Priority

The sell logic was also clarified.

The priority order is:

1. Stop-loss
2. Trailing stop
3. Daily loss limit breach
4. Holding-period exceeded
5. Trend breakdown

Stop-loss, trailing stop, and daily loss limit are immediate exit conditions. Trend breakdown is handled as a next-open exit condition.

This priority matters because the program needs to know what judgment comes first when multiple conditions are triggered at the same time.

## Profit-Risk Analysis Log Placement

One of the most important changes in this patch was moving the `[Profit-Risk Analysis]` log.

Previously, the profit-risk analysis log was printed during the actual buy quantity calculation stage. The problem was that if a stock failed an earlier filter such as MA20 deviation, RSI, or RS, the profit-risk analysis log was never printed.

That made it difficult to see:

- What price the stock was reviewed at
- What stop-loss price was calculated
- What target price was set
- What risk-reward structure was formed
- Which filter blocked the candidate

So the log was moved to the beginning of the per-stock loop inside `check_buy_signal()`.

Now every reviewed candidate prints the profit-risk analysis first. After that, the log records whether the stock failed MA20 deviation, RSI, RS, or another filter.

This is a small code change, but it matters operationally. In an auto-trading program, the judgment process is more important than the result alone.

## DRY RUN Result

As of May 8, 2026, the DRY RUN produced no actual buy signals.

The rejection reasons were:

| Rejection reason | Count |
|---|---:|
| MA20 deviation above 5% | 9 |
| Below MA20 | 8 |
| RSI range failure | 1 |
| RS failure | 1 |
| BUY signal reached | 0 |

This result was interpreted as normal behavior, not a bug.

The KOSPI had risen sharply in a short period, and many stocks were positioned too far above their 20-day moving average. The strategy engine blocked chase-buying in that condition.

In other words, zero buys did not mean the program stopped. It meant the system judged that not entering was more appropriate under the current market conditions.

## What This Work Means

This refinement was not about making the auto-trading program more aggressive.

It was closer to the opposite.

The core meaning of this work is:

- Reduce forced entries
- Make the stop-loss rule clearer
- Structure target profit and loss limits
- Reduce sector concentration
- Make the judgment process more visible through logs

Before an auto-trading program is code that makes money, it has to be an operating system that controls losses.

This was the first cleanup toward that direction.

## Next Improvements

The next stage will review these items first:

1. ATR-based dynamic stop-loss calculation by stock
2. Risk-reward filter activation
3. Log tag format unification
4. Unused constant cleanup
5. High-priced stock trailing rule alignment
6. Fee and tax reflection

With this patch, the basic structure of the strategy engine became clearer. The next key task is to move from a fixed stop-loss structure to a volatility-based stop-loss structure.

---

Related Insight: [In Auto-Trading, Rejection Reasons Matter More Than Buy Signals](/en/insight/insight-031/)
