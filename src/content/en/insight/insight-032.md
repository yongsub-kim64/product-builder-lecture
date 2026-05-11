---
title: "What Auto-Trading Misses in a Bull Market Is Not Individual Stocks — It's Market Context"
date: 2026-05-11
excerpt: "An analysis of how a fixed MA20 deviation filter structurally blocks leading stocks during KOSPI surges, and why regime detection must come before stock screening."
tags: ["AutoTrading", "StrategyDesign", "RegimeDetection", "MarketAnalysis", "stock-auto-trade"]
published: true
project_tag: "AutoTrading"
---

## Summary

When an auto-trading program misses opportunities during a strong market, the problem may not be the stock selection criteria.

When the market is strong, the first thing that breaks is when fixed stock conditions become misaligned with market conditions.

## A Fixed Filter Can Backfire as the Market Gets Stronger

An MA20 deviation limit of 5% is a reasonable rule. It prevents entries in overextended zones and reduces the risk of chasing moves.

But when KOSPI itself surges sharply, the situation changes.

In a rally, the strongest stocks gap above their MA20 by the most. The stocks leading the market rise the fastest and the furthest.

In that situation, a fixed 5% ceiling blocks the leading stocks. More precisely, the structure produces "rejected because too strong" outcomes.

The key insight is that the filter itself is not wrong. The problem arises when the context the filter was designed for (neutral conditions) differs from the context it is applied in (a bull surge). That mismatch creates a backfire.

## Auto-Trading Must Evaluate Market Regime Before Individual Stocks

Evaluating individual stock candidates should be the second step in an auto-trading program.

The first step is: what state is the market in right now?

In a BULL regime, the deviation threshold should be relaxed. In a BEAR regime, it should be tightened. In a NEUTRAL regime, the existing standard applies.

This is not changing the value of a condition. It is adjusting the meaning of the condition to match market context.

## A BULL Regime Does Not Mean All Conditions Should Be Relaxed

In regime-based relaxation, what matters most is knowing what to relax and what to hold.

Relaxing the MA20 deviation ceiling from 5% to 8% in a BULL regime is reasonable. It is an adjustment that permits leading stocks in a strong market.

But the RSI 75 chase-block must remain in place. Entering a stock that has already run hard is risky even in a bull market.

Allowing 8% deviation in BULL is not the same as removing the ceiling — the ceiling was just raised. The distinction between relaxing a limit and eliminating it is the core of regime-based strategy.

## Universe Expansion Is Not Risk Expansion

Expanding the stock universe from 20 to 40 may look like a risk increase.

It is not.

Universe expansion is candidate pool expansion. The number of positions actually held remains the same. The daily buy limit also stays the same.

A narrow universe means that even in a strong market, there may be no qualifying signal to act on. Widening the pool while keeping the selection criteria the same is the right direction.

## A Pullback Filter Should Start as an OR Condition

A pullback pattern is an effective condition for improving signal quality.

But applying a pullback-only filter from the start narrows the signal pool too aggressively. The strategy may go long stretches without any actionable signals.

Applying it in an OR structure with the MA20 deviation condition allows validation of the pullback concept without creating signal scarcity. Once enough data accumulates, the condition can be converted to AND or standalone.

Starting with an observable structure is more important than starting with a pure structure.

## Partial Profit-Taking Is Not Abandoning the Trend

The partial profit-taking structure can be misread.

Taking 50% off at +6% is not abandoning the trend. It locks in half the gain while letting the other half continue following the trend.

A strong stock can keep rising beyond +6%. The remaining 50% captures that additional move. If the market reverses quickly, the already-locked 50% protects the risk-reward profile.

Full-position trailing maximizes returns in strong trends but is exposed to sharp reversals. Partial profit-taking reduces that vulnerability while keeping the trend-following upside — a structural compromise that addresses the core weakness.

## The Core Insight

The key to auto-trading is not adding more conditions. It is reflecting in the system the fact that the meaning of conditions changes depending on market context.

Fixed conditions work as intended only in the context they were designed for. When the context changes, the same condition plays a different role.

A maturing auto-trading system is not one that has more rules. It is one where the system can determine — on its own — which conditions are appropriate and when.

---

Related Log: [Auto-Trading System Upgraded to Read Market Regime](/en/log/2026-05-11-auto-trading-regime-upgrade/)
Project Hub: [AI Auto-Trading Experiment](/en/projects/stock-auto-trade/)
