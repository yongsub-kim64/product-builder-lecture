---
title: "What I Didn't Know Until I Built an AI Trading System"
date: 2026-04-07
excerpt: "I didn't write a single line of code. But the skill I used most today wasn't coding. It was the ability to precisely instruct 'what to build.'"
tags: ["AutoTrading", "KIS API", "RuleEngine", "AICollaboration", "BuildingInPublic", "Chulbuji"]
published: true
project_tag: "AutoTrading"
---

Today I finally finished building an automated trading system. Tomorrow morning, it runs alone for the first time.

KIS Open API integration, a rule engine based on moving averages and RSI, a loss-limit safety guard, Telegram alerts, and a scheduler. I didn't write a single line of code myself. It was all done by AI.

But the skill I used most today wasn't coding.

It was the ability to precisely instruct: "build this."

---

At first, I wanted to hand the trading signal decisions over to AI too. The idea was: AI looks at the chart, says "buy now," and the system buys. But as I worked through the design, I realized that wasn't the right approach. Without fixed rules, AI gives a different answer every time. The more volatile the market, the more inconsistent it gets.

So I changed direction. The rule engine sits at the center. AI is just the assistant that turns those rules into code. The judgment belongs to rules defined in advance by a human.

That distinction turned out to be bigger than I expected.

---

And today, that judgment actually fired once.

KOSPI was below the 20-day moving average. The market regime filter automatically blocked any buy orders. It was a session still being rattled by US tariff shocks. The system avoided it on its own — not because I did anything, but because pre-built rules did their job.

Honestly, when I was building that part, I kept thinking, "will this actually work?" It did.

---

Tomorrow at 6 AM, the first automatic run begins.

I don't know if it'll go well. I don't know yet if the rules are right. For now, I'm just waiting.

Getting AI to write code was the easy part. Getting AI to build exactly the right thing required clear design upfront — and that was much harder and much more important. The clearer your rules, the more AI becomes a reliable execution tool. When rules are fuzzy, AI just becomes a fast improviser.

If I'd known this from the start, I would have spent a lot more time on the design phase.

---

For anyone who's built an automation system — what was the hardest part of designing the rules?

---

**What I built:** An automated trading system using rule-based engine + KIS Open API, with Telegram alerts and scheduler — zero lines of code written by hand.
**What broke:** My assumption that AI should make the trading decisions. Without fixed rules, AI gives a different answer every time the market shifts.
**What I learned:** The clearer your rules, the more useful AI becomes as an executor. Designing *what to build* precisely is harder — and more important — than building it.
