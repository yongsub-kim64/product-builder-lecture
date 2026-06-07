---
title: "What Matters in Auto-Trading Is Execution Path, Not Just Logic"
date: 2026-06-01
excerpt: "Partial take-profit logic was implemented and the config was enabled. It never ran because the intraday sell loop wasn't passing the actual position size or partial_sold state. In automated trading, 'the logic exists' and 'the logic actually runs' are two completely different things."
tags: ["auto-trading", "execution-path", "operational-principles", "stock-auto-trade"]
published: true
project_tag: "자동매매"
---

## Summary

Partial take-profit was configured and the `rule_engine` logic was implemented. But in the intraday 5-minute sell loop, `check_sell_signal` was called without passing `total_qty` (actual position size) or `partial_sold` state. With `total_qty` defaulting to 0, the PARTIAL_SELL branch could never be entered — by structure, not by logic. The problem was a wiring error in the execution path, not a bug in the strategy.

## Why I Checked rule_engine First

Trading strategy is concentrated in `rule_engine`. Sell conditions, priority order, quantity calculation — most of the logic lives there. So when something doesn't execute, the natural first move is to inspect rule_engine.

But in this case, rule_engine was fine. The problem was in the code calling it. If the scheduler doesn't pass the required values, rule_engine can't make the right decision regardless of how correct its logic is.

Rule from this experience: **when a feature doesn't execute, check the call path and passed arguments before checking the logic.**

## It Has to Be Seen as a State Flow

The sell loop isn't a simple conditional — it's a state flow. Every step has to connect.

```
Live account balance → fetch total_qty
order_log.json → read partial_sold
check_sell_signal(total_qty, partial_sold) called
PARTIAL_SELL returned → calculate qty → execute sell
Write partial_sold=True
Next loop → read partial_sold=True → prevent re-trigger
Remaining shares → continue trailing stop management
```

If any one of these links breaks, the strategy's intention and the actual execution diverge. Partial take-profit didn't fire because the very first link — fetching `total_qty` from the account and passing it as an argument — wasn't connected.

## Log Security Is Also an Execution Path Problem

The same day, while reviewing logs, I found that Telegram bot tokens were being exposed in log output. `httpx` logs HTTP request URLs at INFO level, and those URLs contain the token. Account identifiers were also appearing in log output in plain text.

This is an execution path problem too. System design isn't just about what gets processed — it's also about where and how the results of processing are recorded. An operation that functions correctly but leaves sensitive output in unexpected places is an incomplete implementation.

## Operational Verification Checklist

After adding or modifying any auto-trading feature, verify in this order:

1. Is the config flag enabled?
2. Is the rule_engine logic implemented?
3. Is it called from the actual execution loop (scheduler)?
4. Are required state values passed as arguments?
5. Is the execution result saved to order_log?
6. Is the saved state re-read on the next loop?
7. Are there no sensitive values left in logs?

Logic without a connected execution path is the same as no logic. In auto-trading operations, the core of debugging is **execution path and state continuity** — not the condition expression.

---

Related Log: [Why the Auto-Trader's Partial Take-Profit Never Fired — Scheduler Execution Path Over Logic](/en/log/2026-06-01-auto-trading-partial-sell-scheduler-fix/)
