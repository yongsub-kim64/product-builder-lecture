---
title: "When Should a Trailing Stop Be Activated in an Automated Trading System?"
date: 2026-04-28
excerpt: "A fixed take-profit rule and a trailing stop work against each other — one should be removed. This is an operational review of the structural conflict found during live account operation and the three-tier zone redesign that replaced it."
tags: ["auto-trading", "trailing-stop", "system-design", "stock-auto-trade"]
published: true
project_tag: "auto-trading"
---

This article is not investment advice. It is an operational review of how fixed take-profit rules and trailing-stop logic can conflict inside an automated trading system.

A trailing stop is designed to maximize gain by holding a position while it rises and selling automatically when it drops a set percentage from the peak. The theory is straightforward. The challenge is in how you design that structure.

A few days into live account operation, a structural problem appeared.

---

The problem with the original design

The initial setup was:

- Activate trailing stop when profit reaches +4%
- If +6% is reached before activation, execute a fixed take-profit sell

This design had two conflicts.

First, the +4% activation threshold was too tight. During one session, a stock rose to +3.71% intraday and then pulled back — the trailing stop never activated at all. There was no opportunity to hold the stock through its upward move.

Second, the fixed take-profit at +6% undermined the entire purpose of the trailing stop. A trailing stop is supposed to follow the trend to its end. Cutting it off at +6% means a stock that keeps rising gets closed out early. The two rules contradict each other.

---

The redesign — a three-tier zone structure

The fixed take-profit condition was removed. The activation threshold was lowered from +4% to +3%. In place of the single trigger, a three-tier structure was introduced that adjusts protection strength based on accumulated profit.

| Zone | Range | Sell condition |
|---|---|---|
| A | +3% to +6% | Sell if price drops -2.0% from peak |
| B | +6% to +10% | Sell if price drops -1.5% from peak |
| C | +10% or more | Sell if price drops -1.5% from peak |

Zone A gives more room (-2%) for one reason: to prevent short-term volatility from triggering a premature exit before the position has built up enough profit. Zones B and C tighten the stop (-1.5%) because enough profit has already accumulated to justify closer protection.

---

Limitations and the review plan

Lowering the activation threshold to +3% means that a Zone A exit could realize only about +0.94% in actual profit. Compared to the stop-loss floor of -3%, that is not an ideal risk-reward ratio.

Removing the fixed take-profit creates the possibility that positions running through larger upward moves will return more. But that cannot be confirmed at this stage. This redesign is a hypothesis formed during live operation. The plan is to review whether the zone thresholds were appropriate after accumulating one month of data.

A separate partial-exit logic for positions rising beyond +10% is being considered for a later design iteration.

---

What this means for operating an automation system

All eight test scenarios passed before this went live: stop-loss, no-activation, Zone A/B/C hold and sell cases all behaved as designed.

The key takeaway is not the specific thresholds — those will be revised after more data. The takeaway is the structural principle: when two rules work against each other, removing one is better than tuning both. A trailing stop and a fixed take-profit cannot coexist without undermining each other.

On the day this was deployed, the trailing stop fired for the first time in a live trade. It triggered exactly as designed.

→ Related operations log: [2026-04-28 Operations Log](/en/log/2026-04-28-auto-trading-trailing-stop/)
→ Project history: [stock-auto-trade project](/en/projects/stock-auto-trade/)

---

> ※ This content is a personal experiment record, not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
