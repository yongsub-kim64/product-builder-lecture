---
title: "Korean Stock Auto-Trading Program — First Trading Day After the Weekend Upgrade"
date: 2026-05-04
excerpt: "An operations log covering the first trading day after the weekend upgrade to the Korean stock auto-trading program, including the move toward a ₩10M seed structure."
tags: ["AutoTrading", "OperationsLog", "SeedExpansion", "RiskManagement", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "AutoTrading"
project_link: "stock-auto-trade"
---

## Summary

This is not the first operations log for the Korean stock auto-trading program.

The live account transition preparation and pre-checks had already been completed. This log records the results from the first trading day using the updated program after fixing issues identified over the weekend.

The core of this upgrade was to solve the high-priced blue-chip buying limitation found under the ₩5M seed structure without loosening the buy conditions themselves.

In the previous structure, high-priced blue-chip stocks above ₩1M per share could be automatically excluded simply because one share exceeded the per-position budget. Even a strong stock like SK Hynix could structurally fall outside the buy universe because of seed size.

But simply raising the high-priced stock limit would make one position too large. So the improvement was not a specific-stock exception. It was a total-asset-ratio-based structure.

As a result, high-priced stocks that were difficult to buy under a ₩5M seed can now be evaluated normally inside the portfolio under a ₩10M seed. However, the RS condition, MA20 deviation condition, stop-loss condition, and holding-period condition were not relaxed.

## Background

The Korean stock auto-trading program had been operating based on an approximately ₩5M live account.

The basic structure was:

- Maximum number of holdings: 5
- Per-position budget: about ₩1M
- Basic buy structure: equal allocation across 5 positions
- High-priced stock limitation: buying becomes difficult when one share exceeds the per-position budget

Under this structure, stocks above ₩1M per share could not even be bought as a single share.

At first, I considered raising the high-priced stock allowance in strong markets. But buying a stock above ₩1.3M in a ₩5M account would push one position above 25% of the account. Raising the high-priced stock limit in a strong market could increase opportunity, but a stop-loss could also shake the entire account significantly.

So the direction of this upgrade was not "allow exceptions for high-priced stocks." It was "expand the evaluation range automatically as the seed grows."

## Key Improvements

The main weekend upgrades were:

1. Automatically recalculate the per-position budget based on total assets
2. Limit one position to 22% of total assets
3. Evaluate high-priced stocks by total-asset ratio without individual stock exceptions
4. Keep RS / MA20 deviation / stop-loss / holding-period conditions unchanged
5. Apply an effective_max_hold structure based on market strength
6. Persist market state through market_cache.json
7. Unify DRY RUN / LIVE Telegram prefixes
8. Prevent duplicate runs with a PID lock file
9. Convert the daily loss limit from a fixed amount to a total-asset ratio
10. Add an intraday early-sell branch for positions exceeding the holding period

The most important change is the total-asset-ratio-based structure.

With a ₩5M seed, one share of SK Hynix took up too much of the account. With a ₩10M seed, the same one share fits into the portfolio with a much more stable weight. That is why I added another ₩5M, and the program now recalculates per-position budgets and maximum buyable amounts automatically as total assets change.

## First Trading Day After the Update

On the first trading day after the weekend upgrade, I checked how the updated auto-trading logic worked in practice.

The operating result was:

- LG Electronics trailing sell executed
- Realized P&L: +₩12,000
- New buys: 0
- Reason for no new buys: no stocks passed the RS criteria
- Shinhan Financial: waiting for next-day open sell after exceeding holding period
- SK Hynix: price condition became structurally more feasible after seed expansion, but buy was blocked by the MA20 deviation condition

The LG Electronics sell executed normally under the trailing stop condition. The stock was in profit, the drop from the high met the trigger condition, and the program placed the sell order as planned.

No new buy occurred. There were BUY signals, but no stock passed the RS criteria. This was not an error. It was the system following the principle: keep cash when there is no strong candidate.

Even after adding ₩5M, the program did not expand buying aggressively. The structure now allows high-priced stocks to enter the price-feasible range, but the RS and MA20 deviation conditions remain unchanged. Stocks that do not meet the conditions continue to be blocked.

The key point of this trading day is not the profit amount. It is the system decision structure.

Under the ₩5M seed, the system structurally "could not buy" high-priced stocks.  
Under the ₩10M seed, it "can buy them, but does not buy unless conditions are met."

That difference is the core of this update.

## Additional Improvements

I also made additional improvements based on what was observed during the trading day.

First, I improved the sell logic for positions exceeding the holding period.

Previously, positions that exceeded the holding period were simply scheduled for next-day open selling. But if losses expand intraday, waiting until the next day can be unfavorable. So I added a branch: if a position has exceeded the holding period, is down by at least -1.5%, and remains weak after 14:30, it can be sold immediately on the same day.

Second, I changed the loss limit to a ratio-based rule.

The previous daily loss limit was fixed at ₩200,000. But a ₩200,000 loss in a ₩5M account and a ₩200,000 loss in a ₩10M account do not mean the same thing. So the loss limit now calculates based on 2% of total assets.

With this structure, the loss limit recalculates automatically as the seed grows from ₩5M to ₩10M or ₩20M.

## Current Judgment

As of the first trading day after the update, the auto-trading program worked in the planned direction.

The following items were confirmed:

- LIVE mode execution
- PID lock file operation
- Market state lookup and cache
- Trailing sell
- RS filter
- MA20 deviation blocking
- Reduced structural exclusion of high-priced stocks
- Cash-holding principle
- Ratio-based loss limit
- Holding-period sell branch

However, this does not mean profitability has been verified. This log records whether the updated logic worked as planned.

Profitability should be judged only after at least one week of live logs accumulates.

## Next Steps

The next steps are:

1. Confirm the result of the Shinhan Financial holding-period sell
2. Verify whether the early-sell branch for exceeded holding periods works in live conditions
3. Review the classification accuracy of BUY counts in scan_log.json
4. Review whether to keep the RS exemption policy for additional buys
5. Summarize the first week of operation under the ₩10M seed

The conclusion of this update is simple.

An auto-trading program does not improve just because more money is added.  
Even when capital increases, the system needs to judge by the same principles and refuse to buy when conditions are not met.

This upgrade moved the system one step in that direction.

---

→ Related insight: [From a System That Cannot Buy to a System That Chooses Not to Buy](/en/insight/insight-028/)
