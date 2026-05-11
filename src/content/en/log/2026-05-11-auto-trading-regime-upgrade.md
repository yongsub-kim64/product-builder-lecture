---
title: "Auto-Trading System Upgraded to Read Market Regime"
date: 2026-05-11
excerpt: "Root-cause analysis of repeated zero-buy days during KOSPI surges, and a strategy engine overhaul that switches MA20 deviation thresholds dynamically based on BULL / NEUTRAL / BEAR market regime detection."
tags: ["AutoTrading", "StrategyEngine", "RegimeDetection", "BullMarket", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "AutoTrading"
project_link: "stock-auto-trade"
---

## Summary

On May 11, 2026, the auto-trading system moved away from a fixed-condition buy structure and was upgraded to a regime-aware structure: it first reads the KOSPI market regime and then adjusts buy criteria accordingly.

Morning live trading logs confirmed the same problem repeating: zero buy signals even on days when KOSPI was surging. The cause was the same. The MA20 deviation ceiling was fixed at 5%, meaning that on strong up-days, the strongest candidates all failed the deviation filter.

This upgrade is a structural shift in the strategy engine to fix that problem.

## Background

The auto-trading program had allowed only stocks within 5% of their 20-day moving average as buy candidates.

This rule was designed to prevent entries in overextended zones. But when KOSPI itself is rising sharply, that logic breaks down.

In a strong market, the strongest stocks naturally gap above their MA20 by the most. A fixed 5% ceiling ends up blocking the leading stocks — not because they are dangerous, but because the market itself is strong.

DRY RUN logs showed this pattern repeating.

- Multiple stocks rejected by MA20 deviation on KOSPI surge days
- The rejection reason was not "chasing an overextended move" but "the market itself is strong"

This was a sign that the fixed threshold was misfiring.

## Regime Detection System

The core of this upgrade is a regime detection system based on KOSPI's 5-day return.

The KOSPI 5-day return is calculated and the market is classified into three regimes.

| Regime | Condition | MA20 Deviation Ceiling |
|---|---|---|
| BULL | KOSPI 5-day return ≥ +2% | 8% |
| NEUTRAL | -1% to +2% | 5% |
| BEAR | below -1% | 3% |

In a BULL regime, the MA20 deviation ceiling is relaxed from 5% to 8%. In a BEAR regime, it is tightened to 3%. The structure relaxes conditions when the market is strong, while keeping an upper bound on chase-buying.

## 11:00 BULL-Only Buy Cycle

The previous buy scan ran three times per day: 10:00 / 13:00 / 14:00.

An 11:00 BULL-only buy cycle was added. It activates only when the market is classified as BULL, giving a second morning window after the opening session confirms direction.

In NEUTRAL or BEAR regimes this cycle does not run.

## Universe Expansion and Pullback Filter

The stock universe was expanded from 20 to 40 candidates.

This is not a risk expansion. It is a candidate pool expansion. The maximum holdings (4 positions) and the daily buy limit remain unchanged.

A pullback filter was also added. Stocks that declined on at least one of the past 5 days and are now rebounding are classified as pullback candidates.

For now, the pullback condition is applied in an OR structure with the MA20 deviation condition. A candidate that satisfies either one qualifies. Applying pullback-only conditions at this stage would narrow the signal pool too much.

## RSI Adjustment

The RSI upper limit was relaxed from 65 to 70.

The RSI 75 chase-block remains in place. In a BULL regime, stocks with slightly elevated RSI up to 70 are allowed. Above 75, the system treats the move as already fully priced in and blocks the entry.

## Partial Profit-Taking

A partial profit-taking structure was introduced.

When a position gains +6%, 50% of the holding is automatically sold. The remaining 50% continues to be managed by the trailing stop.

This serves two purposes.

- Half the gain is locked in immediately, improving the risk-reward structure.
- If the strong trend continues, the remaining half captures further upside.

The previous structure was full-position trailing. That works well in strong trends but exposes the full gain to rapid reversals.

## Trailing Stop Relaxation by Range

The trailing stop trigger was also adjusted by gain range.

| Range | Allowable pullback from peak |
|---|---|
| +4% to +8% | -2.5% |
| +8% to +15% | -2.0% |
| +15% or more | -1.5% |

The larger the gain, the tighter the trailing. This is designed to protect larger profits more aggressively.

## Daily Buy Limit and Sell Structure

The daily buy limit was raised from 2 to 3. With the universe doubling and regime-based opportunities expanding, up to 3 buys per day are now allowed.

Per-cycle limit of 1 buy, same-day duplicate buy block, and sector overlap limit all remain in place.

Two additions were made to the sell cycle.

- Settlement-price pnl adjustment: Both fill-price-based and current-price-based pnl are tracked to improve accuracy.
- Simultaneous sell aggregated alert: When multiple positions exit in the same cycle, Telegram alerts are consolidated into one to reduce noise.

## What This Upgrade Means

This upgrade is a turning point for the auto-trading program.

The previous structure was stock-condition-centric. The same criteria were applied to every candidate regardless of market conditions.

This structure is different. It first identifies the market regime, then adjusts the buy range for that regime, and only then evaluates individual stocks within those bounds.

Read the market first. Then evaluate candidates within it.

The auto-trading program has moved beyond filtering by price conditions alone. It now changes the meaning of the conditions themselves based on market context.

## Next Validation Items

Live logs will be collected over the next 1–2 weeks to validate the following.

- Buy frequency by regime: Does BULL regime actually produce more buys?
- Pullback entry performance: Risk-reward comparison between pullback and MA20 deviation entries
- Partial profit-taking effect: Final return comparison — partial take vs. full trailing
- Risk-reward improvement: Does this structural change improve the overall risk-reward profile?

---

Related Insight: [What Auto-Trading Misses in a Bull Market Is Not Individual Stocks — It's Market Context](/en/insight/insight-032/)
