---
title: "Instead of Writing Code, I'm Designing an Auto-Trading System with AI"
date: 2026-05-01
excerpt: "One thing that's become clear from building and running an auto-trading system: my job isn't writing code — it's asking the right questions, evaluating expert AI analysis as operational direction, and issuing execution instructions to Claude Code. In vibe coding, the human's role is to set the judgment criteria and keep the AIs on course."
tags: ["AutoTrading", "VibeCoding", "AICollaboration", "SystemDesign", "v2.0", "stock-auto-trade"]
published: true
project_tag: "AutoTrading"
---

One thing has become clear from building and running an auto-trading system.

I'm not fixing the code line by line like a professional developer. Instead, I identify problems, organize the direction, hand the analysis to an expert AI, and instruct Claude Code to make the actual changes. This is what's known as vibe coding.

## The Questions Were the Work

At first, this approach made me nervous. Is it okay to run an auto-trading system when I don't fully understand the code?

But once I started, I realized that writing all the code myself wasn't actually my job. What mattered more was asking the right questions.

Why did a BUY signal fire but no order was placed?
How should a ₩5M account handle stocks priced above ₩1M?
Is it right to design a system that needs code rewrites whenever the seed capital grows?
Should the system buy the same way in bull and bear markets?
What breaks when DRY RUN mode and LIVE mode get confused?

When I ask these questions, the expert AI structures the problem. I evaluate the options and set the direction. Then I give Claude Code the execution instruction.

## How This Played Out in v2.0

The v2.0 upgrade followed exactly this process.

Paper trading showed BUY signals firing but no orders being placed. Working with the expert AI to trace the cause, I found the available-cash field wasn't returning valid values — so the system was treating filled conditions as insufficient cash.

I also identified a structural limit: with a ₩1M per-position budget, any stock priced above ₩1M gets auto-excluded. High-priced stocks with strong RS signals simply never get through.

I didn't solve this by just saying "allow buying high-priced stocks." High-priced stocks are an opportunity, but they also create concentration risk. The solution was to allow exceptions up to a defined percentage of total assets — balancing opportunity against concentration.

The other major change is moving from fixed-amount budgets to ratio-based allocation. 20% per position at ₩5M; same ratio at ₩10M. The structure holds as the seed grows — no code rewrites needed.

## The Human's Role in Vibe Coding

What I've learned from this process: in vibe coding, the human's job isn't to type the code. It's to set the judgment criteria and keep the AIs from drifting off course.

Auto-trading isn't just code. It's an operating system. Inside it are buy conditions, sell conditions, capital allocation, risk management, error handling, and a logging structure.

I'm building that system bit by bit, with the help of expert AIs.

What matters isn't the ability to write code directly. It's the ability to describe the problem clearly, ask the right questions of an expert AI, and evaluate the output from an operational perspective.

---

→ Related log: [Auto-Trading v2.0 Upgrade Direction](/en/log/2026-05-01-auto-trading-v2-upgrade-plan/)
→ Project hub: [AI Auto-Trading Experiment](/en/projects/stock-auto-trade/)
