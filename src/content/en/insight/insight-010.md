---
title: "I Fixed the Code. Why Didn't the System Change?"
date: 2026-04-09
excerpt: "Editing the code and having those edits actually take effect are two different things. What I learned from running an automated trading system wasn't strategy — it was operations discipline."
tags: ["AutoTrading", "Operations", "Insight", "Python", "Scheduler", "SystemsThinking", "PaperTrading", "DevLog"]
published: true
project_tag: "AutoTrading"
---

Today was one of the most disorienting moments I've had while building this automated trading system.

I'd clearly updated the code. Saved the file. But the system was still behaving exactly the way it had the day before. Every pre-market cycle fired off "market regime unfavorable" and skipped all buys wholesale. At first I assumed the strategy conditions were too strict. The actual cause was somewhere else entirely.

A Python scheduler is a long-running process. Once it starts, it loads the code into memory and keeps using it. No matter how many times I edit the file, if I don't restart the running process, it keeps executing the pre-fix code. I hadn't fixed the code. I'd only fixed the file.

---

After going through this, the way I look at automated trading shifted a bit. It doesn't feel like a code project anymore — it feels like an operations system. When you're building, you think about "how do I make this." When you're running it, "how do I keep this working" comes up far more often. Editing and saving is one thing. Having those changes actually reflected in a live system is another.

---

Something else crystallized today. You can't treat a test environment the same as production. The paper trading API only provides 30 days of data. So indicators like MA60 that require 60 days simply can't be computed. If you leave that unaddressed, you end up validating nothing in paper mode. The fix wasn't to loosen the strategy — it was to separate out the environmental constraint explicitly. I added fallback rules that only apply in paper trading mode, and left the live strategy untouched.

---

In the end, the biggest thing I took away today wasn't a line of code — it was one operations habit: after modifying code, always restart the process and confirm with your own eyes that the change took effect. That sounds obvious, but without it, even the best strategy keeps running on yesterday's state.

The bigger a system gets, the more likely it is that good operations discipline matters more than good strategy. Today was the day I learned that in practice.
