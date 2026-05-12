---
title: "In Auto-Trading, Rejection Reasons Matter More Than Buy Signals"
date: 2026-05-08
excerpt: "The core insight from the first refinement of the stock auto-trading strategy engine: before chasing more buy signals, the system must explain why it did not buy."
tags: ["AutoTrading", "StrategyEngine", "RiskManagement", "OperatingInsight", "stock-auto-trade"]
published: true
project_tag: "AutoTrading"
---

## Summary

The latest stock auto-trading program improvement confirmed something again.

What matters in auto-trading is not simply finding more buy signals. What matters even more is having a structure that can explain why the system did not buy.

## Zero Buys May Not Be a Failure

On May 8, 2026, the DRY RUN produced zero BUY signals.

At a glance, it may look as if the program did nothing. But the logs tell a different story.

Most stocks were rejected by the MA20 deviation filter. The market had risen sharply in a short period, and many stocks were positioned too far above the 20-day moving average.

In that situation, not buying was not a passive decision. It was a decision to avoid chasing prices.

An auto-trading program is not better just because it trades all the time. Doing nothing in a bad entry zone is also a strategy.

## Logs Are Not Just Records

This refinement changed the placement of the `[Profit-Risk Analysis]` log.

Previously, the profit-risk analysis log only appeared after the system reached the actual buy quantity calculation stage. That meant stocks rejected by earlier filters did not leave behind their stop-loss price, target price, or risk-reward structure.

With that structure, it was hard for the operator to inspect the system's judgment process.

So the profit-risk analysis log was moved to the front of the per-stock review loop. Now, even if a stock never reaches final buy execution, the log still records the review price, stop-loss price, target price, risk-reward structure, and rejection reason.

This looks like a small change, but operationally it is important.

In an auto-trading program, logs are not just after-the-fact records. Logs are a device for verifying the system's judgment.

## Fixed Stop-Loss Is Easy, But Not Complete

This patch organized the stop-loss threshold at -2.5% and the target profit at +5.0%. In theory, that creates a 2.0:1 risk-reward structure.

But this structure has a limit.

If every stock uses the same stop-loss percentage, the system cannot fully reflect each stock's volatility.

For a low-volatility stock, a -2.5% stop-loss may be reasonable. For a high-volatility stock, it may be too tight.

That is why the risk-reward filter was not activated immediately. It is more stable to first inspect the calculation through logs, then apply ATR-based dynamic stop-losses, and only then activate the filter.

## The Order of Auto-Trading Improvement

This work clarified the order in which the auto-trading system should improve.

1. First, review actual trading results.
2. Check whether the risk-reward structure is favorable.
3. Organize stop-loss and target profit rules.
4. Make the judgment process visible through logs.
5. Keep filters observable before making them aggressively blocking.
6. Move to the next structural improvement after enough records accumulate.

This order matters because an auto-trading program is not completed in one pass.

Adding a complex strategy from the start may look impressive. But in practice, it becomes harder to know where the system is failing.

A good auto-trading system is not necessarily a complex system. It is a system whose judgment process can be traced.

## The Core Insight

The core insight from this improvement is simple.

An auto-trading program needs the ability not to buy before it needs the ability to buy.

Not chasing after a sharp market rise.  
Not entering when the risk-reward structure is poor.  
Not concentrating too heavily in one sector.  
Being able to verify the judgment process through logs.

When these structures accumulate, the auto-trading program becomes more than an execution tool. It becomes an operable system.

This patch was not meant to increase profits immediately. It was meant to reduce losses and make judgment clearer.

At this stage of the auto-trading program, that matters more.

---

Related Log: [Stock Auto-Trading Program — Strategy Engine First Refinement](/en/log/2026-05-08-auto-trading-strategy-engine-first-refinement/)
Project Hub: [AI Auto-Trading Experiment](/en/projects/stock-auto-trade/)

---
> ※ This content is a personal experiment log and does not constitute investment advice.  
> Investment decisions and responsibilities rest solely with the individual.
