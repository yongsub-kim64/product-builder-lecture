---
title: "The Day the System Said 'No'"
date: 2026-04-22
excerpt: "Whether the system worked correctly became a more important measure than whether I made money. Live day 3 — what -₩61,800 confirmed."
tags: ["AutoTrading", "StopLoss", "MA60", "SystemDesign", "Insight"]
published: true
project_tag: "AutoTrading"
---

Live day 3. I closed at -₩61,800.

At first glance, that looks like a bad day. But I didn't feel heavy about it. Somewhere in the afternoon I noticed I was measuring the day by a different standard.

---

## A Stop-Loss Is Execution, Not Judgment

KB Financial at 09:05. Kakao at 10:32. Two stop-losses, both executed by the rule. No deliberation. Not "should I sell now?" but "the threshold was reached, so I sell." This was the moment I had been most worried about before going live — and when it actually happened, I felt calmer than I expected.

---

## When the System Says 'No'

What I was actually watching was the MA60 filter. NAVER, Kia, and Hyundai Motor were blocked from entry. The rule says: don't enter downtrend stocks. The system applied that judgment — not me. It was the first time I saw the API replacement from yesterday confirmed in live conditions.

Two stop-losses executed. Three stocks blocked from entry. I think the three blocks mattered more. The system declined opportunities to buy.

---

## What's Still Incomplete

The budget safety margin isn't fully working yet. It applied correctly at 13:00. It failed again at 14:00. There are scenarios where a 5% buffer isn't enough. I'll fix it tomorrow.

---

## What Makes a Good Day

I defined this standard when designing the system: a good day isn't one where you profit — it's one where the system moves as designed. By that measure, today was a decent day.

-₩61,800 confirmed a few things. A stop-loss is execution, not judgment. A day when the system says "no" is still a day the system is working.

Among positions held at close, Kia (+0.25%) is the only one in the green. Shinhan Group (–1.28%) could reach the stop-loss line tomorrow. That call, too, belongs to the system.

---

**Next action:** Review budget safety margin improvement options (raise the margin or track intraday spend explicitly).

**Reader question:** Running an automated system — have you started watching a metric that matters more to you than profit?
