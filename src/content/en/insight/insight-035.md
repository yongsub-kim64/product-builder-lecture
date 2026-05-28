---
title: "Why a Good-Looking Backtest Is Not Enough Reason to Change Strategy"
date: 2026-05-28
excerpt: "A strong-looking backtest is not enough reason to change an auto-trading strategy. The first question is not whether the number is attractive, but whether the number was produced under assumptions that match live trading."
tags: ["auto-trading", "backtest", "operations-experiment", "stock-auto-trade"]
published: true
project_tag: "자동매매"
---

## Summary

A strong-looking backtest is not enough reason to change an auto-trading strategy. The first question is not whether the number is attractive, but whether the number was produced under assumptions that match live trading.

When an auto-trading system loses money, the natural urge is to change the conditions.

Maybe the RS rule is too loose. Maybe the MA20 deviation ceiling should be higher. Those are reasonable questions. But this review reminded me that answering them too quickly is dangerous.

The first backtest looked healthy. Five-year returns and risk-reward figures were not bad. On the surface, the strategy looked fine.

Then I inspected the code. The backtest was deciding signals with the close price on day T, then also using that same close as the execution price. That was look-ahead bias. Look-ahead bias means a backtest uses information that would not have been available at the actual trading moment, which can make performance look better than it really is.

The live auto-trader scans during the session at 10:00, 13:00, and 14:00, then decides based on the conditions and price available at that moment. If the backtest behaves as if it already knows the closing price of that day, it gives itself information the live system never had.

After removing that issue, performance came down and risk increased. That result was more valuable. A realistic baseline is more useful than an inflated return.

The second issue was survivor bias. If today's 40-stock universe is applied backward across five years, future survivors and winners are treated as if they were already known. That is information the system would not have had at the time.

At that point, I redefined what the backtest was for.

A backtest is not a tool for predicting future returns. It is a tool for comparing condition A and condition B under the same assumptions.

Using that frame, I compared the RS criteria and MA20 deviation ceilings. old-15 is the stricter RS rule, while loosen-30 is the more relaxed RS rule introduced for recent market conditions. old-15 looked stable in the backtest. But against 30 live trades, old-15 may have blocked more than half of the entries.

In the recent market, loosen-30 may have been creating actual opportunities. The 12% MA20 deviation ceiling also looked better in some metrics, but it increased exposure to more volatile names and showed periods where losses worsened. So I could not responsibly conclude that one candidate was clearly better.

The conclusion was simple. I cannot change it yet.

Instead, I built a structure for observation. Each buy signal now records RS, MA20 deviation, and whether candidate rules would have passed. Actual orders remain unchanged, while shadow_report compares candidate rules against live trades side by side. A shadow_report is an observation record that compares what would have happened under candidate rules without changing real execution.

I will review again after two weeks of data.

What matters in auto-trading is not fast modification. It is having a structure that tells you whether modification is justified.

Changing a strategy is easy. If you cannot explain why it improved or worsened afterward, it is not an improvement.

Today I did not change the strategy. I built the eyes needed to know when a strategy change is warranted.

## Work Log

| Item | Note |
|---|---|
| What I built | Backtest bias removal and shadow_report comparison structure |
| What broke | The initial backtest had look-ahead bias |
| What I learned | Before trusting a good backtest result, verify whether the result itself is trustworthy |

---

Related Log: [I Did Not Fix the Auto-Trader Right Away. I Added Instrumentation Before Trusting the Backtest](/en/log/2026-05-28-auto-trading-backtest-shadow-report/)
