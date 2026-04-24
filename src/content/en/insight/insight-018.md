---
title: "The Stronger the Filter, the More Good Stocks It Blocks"
date: 2026-04-24
excerpt: "What I built: Regime scoring system (5 conditions) + cash ratio logic tied to total assets. What broke: Wrong balance field caused all orders to fail; duplicate sell orders stacked 18 times. What I learned: The filter that blocks overbought stocks also blocks large-caps in recovery."
tags: ["AutoTrading", "AICollaboration", "StrategyDesign", "Insight", "RegimeDetection"]
published: true
project_tag: "AutoTrading"
---

This morning, buy signals fired and every order failed.

The log said "exceeds orderable amount." The balance screen showed ₩620,000. KIS said ₩0.

The cause was T+2 settlement. When you buy stock, the cash is locked for two days. During that window, KIS returns 0 for the orderable amount field. The system was reading a different field — the previous day's settlement amount. Visible money and usable money were different things.

---

## Check the Execution Path Before You Fix the Code

In the morning I also found 18 KT sell reservations stacked in the log. Fixed main.py first — the problem didn't go away.

Traced the actual execution path with AI. There was a separate function in scheduler.py running independently every 5 minutes during market hours. The file I fixed wasn't the file that was actually running.

The bug lives in the actual execution path, not the file you're looking at. Confirmed that twice today.

---

## The Stronger the Filter, the More Good Stocks It Blocks

In the afternoon, a more fundamental problem emerged.

KOSPI was rising. Held positions kept falling. Samsung Electronics and SK Hynix were getting blocked on every scan. The reason: a 7% MA20 deviation cap.

It was designed to filter overbought stocks. But in a recovery, large-caps routinely trade 13–14% above their MA20. That's not overbought — that's normal. The filter was treating it the same way.

A protective mechanism was blocking the good stocks.

---

## When Regime Flips Daily, Strategy Flips Daily

There was also no buffer between buy and sell conditions. A position bought just above MA20 would immediately trigger a sell signal on any dip. KT was exactly this case.

The deeper problem was regime detection itself. Using a single prior-day KOSPI close to classify bull vs. neutral is too unstable. When regime flips daily, strategy flips daily.

Redesigned to a 5-condition scoring system. Regime only transitions after 2 consecutive days with the same signal. Added cash reserve ratios tied to total assets: bull 20%, neutral 35%, bear 60%.

---

Today I found a strategy gap while fixing bugs.

Bugs look like code problems. But underneath, they're often API misunderstandings or wrong assumptions about how markets work. These things don't surface until you're in live trading.

**What I built:** Regime scoring system (5 conditions) + cash ratio logic tied to total assets.

**What broke:** Wrong balance field caused all orders to fail; duplicate sell orders stacked 18 times in one day.

**What I learned:** The filter that blocks overbought stocks also blocks large-caps in recovery — field and threshold design matters in live trading.

**Next Monday:** Check how the new regime detection performs in the pre-market cycle.
