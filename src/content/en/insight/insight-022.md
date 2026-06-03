---
title: "What a +0.84% Trailing-Stop Exit Taught Me About Rule-Based Automation"
date: 2026-04-29
excerpt: "The trailing stop sold at +0.84%. For a moment, it felt like a waste. But that reaction is the problem — if emotional regret can override evidence that a system worked as designed, the reason for building the system in the first place disappears."
tags: ["auto-trading", "trailing-stop", "rule-based", "automation"]
published: true
project_tag: "auto-trading"
---

This is not a recommendation to buy, sell, or use any particular trading strategy. It is a reflection on why emotional regret can be dangerous when operating a rule-based automation system.

The trailing stop sold at +0.84%.

It was a gap-down open. The trailing stop is designed to sell automatically when price drops a set percentage from the peak. At 09:04, the system sold. If a person had been watching the screen, they would have said: "wait just a little longer."

But that instinct is the problem. Waiting longer could just as easily have led to further decline and a loss. The current setup is not designed to maximize profit — it is designed to structurally prevent loss. Locking in +0.84% is not a failure.

---

The RS filter turned out to be stricter than expected. Out of 20 stocks in the universe, only 2 or 3 qualified as actual buy candidates. The rest were filtered out by one of three conditions: MA20 gap too wide, MA60 in a downtrend, or price below MA. Even on a BULL regime day, more than 80% of the universe gets eliminated. At first the question was "is this right?" — now it reads as a signal that the strategy is being cautious in the way it was designed to be.

The 20% cash-reserve logic also did its job. Even with ₩2.1 million in available cash, the system did not deploy it all. The structure prevents indiscriminate momentum chasing. The system makes the judgment — not the operator. That is the point of this automation.

---

Two bugs appeared and were caught the same day. An RS-disqualified stock was appearing in the buy-candidate log alongside eligible stocks, creating confusion — fixed by adding an [additional-buy-RS-exempt] tag to separate the categories. A web export function was reading the key "result" while the actual stored key was "regime" — renamed immediately.

Neither bug was critical, but catching and fixing both on the day they appeared matters. It means the system remains observable even while running live trades.

---

More data needs to accumulate before drawing conclusions. The current phase is: watch and wait.

What this exit confirmed is simpler than the numbers: when a system sells at +0.84% because that is what it was designed to do, and the operator's first reaction is "what a waste" — that reaction is the real risk. A rule-based system that gets overridden on emotional grounds stops being rule-based.

→ Related operations log: [2026-04-29 Operations Log](/en/log/2026-04-29-auto-trading-live-buy-day1/)
→ Project history: [stock-auto-trade project](/en/projects/stock-auto-trade/)

---

> ※ This content is a personal experiment record, not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
