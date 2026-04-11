---
title: "KIS Auto-Trading — Two Hours, 11 Items Fixed"
date: 2026-04-10
excerpt: "Yesterday evening, two hours. Fixed a cash balance field bug, added retry logic, duplicate prevention, improved RSI, and introduced a trailing stop. A confirmation that systems can change this much without writing the code yourself."
tags: ["AutoTrading", "KIS API", "Python", "RSI", "TrailingStop", "MA20", "Stability", "StrategyImprovement"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "v1.1"
project_link: "stock-auto-trade"
next_action: "First paper trading live verification / observe unexpected issues"
---

Date: 2026-04-10

It was yesterday evening. In just under two hours, 11 items across the KIS Open API-based auto-trading system were overhauled.

What I did was not write code. It was identifying what was wrong and deciding which direction to take. The actual analysis and fixes were handled by Meta-Chulbuji and a specialized dev AI. It finished faster than expected.

## What We Touched

**Stability first.**

I confirmed the cash balance field was referencing the wrong value. I flagged the problem; AI found the cause and replaced it. Retry logic was added to a structure that previously just halted on API call failures. Duplicate buy prevention and duplicate process startup protection were properly implemented this time. The hold_days calculation bug and the IS_PAPER safety guard were also addressed—results that came from working through each issue one by one.

**Strategy refinements.**

Switched RSI to the Wilder method and adjusted the range to 40–65. Added a 5% cap on MA20 deviation, expanded the investment allocation to 20% with a ceiling of 1,000,000 KRW. Introduced a trailing stop for the first time. I set the direction; AI did the implementation.

**Operations structure clarified.**

Going forward, roles are explicitly divided. Direction-setting and situation assessment with Meta-Chulbuji; actual code work with a specialized dev AI. Yesterday evening was the first live run of that structure. A direct confirmation that a system can change this much in two hours—without writing any code yourself.

## What's Next

Today, we run the first live verification against paper trading real orders.

Patching 11 items doesn't mean it's done. When the market opens, at least one unexpected thing will surface. Today is about going to look for it.
