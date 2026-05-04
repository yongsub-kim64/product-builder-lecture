---
title: "From a System That Cannot Buy to a System That Chooses Not to Buy"
date: 2026-05-04
excerpt: "An operating insight from improving the auto-trading program from a ₩5M seed structure to a ₩10M expandable structure."
tags: ["AutoTrading", "SeedExpansion", "RiskManagement", "OperatingInsight", "stock-auto-trade"]
published: true
project_tag: "AutoTrading"
---

## Summary

What matters in an auto-trading program is not simply catching more buy signals.

The key insight from operating the first trading day after the weekend upgrade was this: "cannot buy" and "chooses not to buy" are different.

Under the ₩5M seed structure, high-priced blue-chip stocks could be structurally excluded because of the one-share price. But under the ₩10M seed structure, the same stocks can be evaluated inside the portfolio.

Even then, the system should not buy if the conditions are not met.

The purpose of this update was not to buy more aggressively. It was to build a structure that keeps judging by the same principles even as the seed grows.

## Cannot Buy vs. Chooses Not to Buy

The first issue that surfaced while operating the auto-trading program was high-priced blue-chip stocks.

With a ₩5M seed, the per-position budget is about ₩1M. In that structure, any stock priced above ₩1M per share is structurally difficult to buy.

Even if a stock like SK Hynix shows strong momentum, the program cannot buy a single share if the share price itself is too high. That is not a strategic decision. It is a capital-structure limitation.

At first, it looked as if simply raising the high-priced stock allowance would solve the issue.

But if a ₩5M account buys one share of a ₩1.3M stock, one position exceeds 25% of the account. If the stock is ₩2M, 40% of the account is tied to one position.

Raising the limit in a bull market widens the opportunity, but it also increases loss concentration.

So the direction of this improvement was not to allow high-priced stock exceptions.

The structure was changed so that as total assets grow, the per-position budget and maximum buyable amount are recalculated automatically.

In other words, the rule was not changed for a specific stock. The system was changed so the same principle continues to work as seed size changes.

## What the Seed Increase Means

Adding ₩5M this time was not simply a decision to bet bigger.

Under the previous ₩5M structure, there was a distortion: good stocks could be excluded purely because of price. Under the ₩10M structure, high-priced blue-chip stocks can be evaluated normally inside the portfolio.

But the buy conditions were not relaxed.

The RS condition, MA20 deviation condition, stop-loss condition, and holding-period condition were kept unchanged. No specific-stock exception was created.

That matters.

If buy criteria loosen just because more money is added, the auto-trading program becomes dangerous. But if the system keeps judging by the same criteria even as capital grows, it becomes scalable.

On the first trading day after this update, no new buy occurred. BUY signals existed, but no stock passed the RS criteria. SK Hynix was structurally improved from a price-condition perspective, but it was blocked by the MA20 deviation condition.

That result was not a failure.

It was evidence that the program worked as planned.

Under the ₩5M structure, the system could not buy high-priced stocks.  
Under the ₩10M structure, it could buy them, but chose not to because the conditions were not met.

That difference is the core of this improvement.

## Holding Cash Is Also a Strategy

When operating auto-trading, zero buys can feel uncomfortable.

But a good system is not a system that always buys. It is a system that does not buy when conditions are not met.

On this trading day, there were new buy candidates, but they did not pass the RS criteria. The program did not force buys just to fill empty slots.

This is an important operating principle.

Holding cash is not a failure.  
When conditions are not met, holding cash is also a strategy.

This principle becomes more important as the seed grows. In a small account, one mistake may be limited. As the seed grows, the same mistake becomes larger in absolute amount.

For an auto-trading program to scale, the loss structure must be controlled before the profit opportunity is expanded.

## The Loss Limit Also Needs to Be Ratio-Based

In this improvement, the loss limit was also changed from a fixed amount to a total-asset ratio.

Previously, the daily loss limit was fixed at ₩200,000. But ₩200,000 is 4% of a ₩5M account and 2% of a ₩10M account.

The same amount carries different risk meaning depending on seed size.

So the loss limit was changed to 2% of total assets. This keeps the risk standard consistent even as the seed grows.

What matters in an auto-trading program is not fixing the number. It is fixing the principle.

## Holding-Period Exits Also Needed Review

Previously, positions that exceeded the holding period were set to sell at the next day's open.

But in real operation, losses can keep expanding intraday. In that case, waiting until the next day can make the loss larger.

So an intraday early-sell branch was added for positions exceeding the holding period.

If the position is profitable, keep the trailing logic.  
If the loss is -1.5% or worse and weakness continues after 14:30, sell immediately on the same day.  
Otherwise, keep the existing next-day open sell.

This logic still needs enough live validation. But it matters because the exit structure now considers loss flow, not only the calendar date.

## What This Improvement Taught Me

The insight from this update is clear.

First, in auto-trading, "cannot buy" and "chooses not to buy" are different.

Second, increasing seed capital can be a way to reduce structural distortion, not just a way to increase aggression.

Third, if rules are changed for a specific stock, the system becomes weaker.

Fourth, holding cash when conditions are not met is a normal strategy.

Fifth, as the seed grows, decisions should be based on ratios rather than fixed amounts.

Sixth, role separation also matters when using development tools like Claude Code or Codex. Structural changes and implementation should be handled by development AI, while document uploads and format alignment can be handled efficiently by a constrained role such as Codex.

## Conclusion

This work is not the first operation record of the auto-trading program.

It is a record of checking the first trading day after improving the issues found over the weekend and applying the updated program.

The most important change confirmed in this check is this:

Previously, there was a structure where good stocks could not be bought because of price.  
Now the system is moving toward a structure where it can buy them, but chooses not to when conditions are not met.

The level of an auto-trading program is not determined by the number of buys.

Can it stop when conditions are not met?  
Can it judge by the same principles even as the seed grows?  
Can it control the loss structure before chasing profit?

This update was one structural improvement in that direction.

---

→ Related operations log: [Korean Stock Auto-Trading Program — First Trading Day After the Weekend Upgrade](/en/log/2026-05-04-auto-trading-weekend-upgrade-first-trading-day/)
→ Project hub: [AI Auto-Trading Experiment](/en/projects/stock-auto-trade/)
