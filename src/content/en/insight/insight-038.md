---
title: "An Auto-Trading Operator Doesn't Need to Know All the Code — They Need to Build Verifiable Questions with AI"
date: 2026-06-02
excerpt: "The partial take-profit bug wasn't found by a code expert. It was found by an operator who noticed something wrong in the live logs — and then narrowed it down working with an AI. In auto-trading, AI collaboration isn't about delegation. It's about building a verification loop the operator can actually judge."
tags: ["auto-trading", "AI-collaboration", "operator-perspective", "operational-principles", "stock-auto-trade"]
published: true
project_tag: "자동매매"
---

## Summary

The partial take-profit issue wasn't discovered by someone reading every line of code. The operator noticed that partial take-profit wasn't firing even when the return exceeded the threshold — and then worked with an AI to trace the execution path and narrow down the cause. The problem was found not by understanding the full codebase, but by asking the right questions and verifying them systematically.

## The Anomaly Came First

The config was set. The logic was implemented. But in the live logs, PARTIAL_SELL never appeared even when the return should have triggered it. The numbers looked correct. The settings were on.

Rather than reading through all the code, the approach was to ask the AI to trace the execution path — not looking at the logic itself, but at whether the logic was receiving the right inputs.

## The Problem Wasn't Inside the Logic

Following the execution path with the AI revealed that `rule_engine` was fine. The issue was upstream. In the intraday 5-minute sell loop in `scheduler.py`, the call to `check_sell_signal` wasn't passing actual position size (`total_qty`) or the `partial_sold` state. With `total_qty=0`, the PARTIAL_SELL branch was structurally unreachable — regardless of how correct the logic inside was.

Once that was confirmed, the fix was clear: connect the actual state to the call, not change the logic.

An important point here: the AI didn't produce a ready-made answer. The operator framed the question — "why isn't this executing?" — and then the AI traced the path and tested hypotheses. The direction came from the operator. The tracing came from the AI.

## Redefining What "Done" Means

Saving a code change doesn't apply it to a running process. The Python process was already executing. To make the fix take effect, it had to be restarted.

And even after restart, "done" wasn't declared until the actual loop confirmed it:

- Did PARTIAL_SELL fire?
- Was `partial_sold=True` written to order_log?
- Did the next loop re-read that flag and skip a second trigger?
- Did the remaining position continue under trailing stop management?

The fix is done when the next loop confirms the intended state is saved and re-read — not when the file is saved.

## The Operator's Role in AI Collaboration

From this experience, three things became clear about what the operator's role actually is.

1. Notice anomalies in logs and results.
2. Turn anomalies into specific, verifiable questions.
3. Judge whether the AI's findings match the operational intent.

AI is good at tracing paths — reading code, finding patterns, testing hypotheses quickly. But deciding which path to trace first, and whether the result matches what the operation is trying to do, is the operator's job.

AI collaboration in auto-trading isn't about handing off analysis. It's about building a verification loop the operator can actually run and judge.

---

Related Log: [Auto-Trading Partial Sell Live Verification — Confirming State Carries Across Loop Boundaries](/en/log/2026-06-02-auto-trading-partial-sell-live-verification/)  
Related Log: [Why Partial Take-Profit Wasn't Executing — Scheduler Path and Log Security](/en/log/2026-06-01-auto-trading-partial-sell-scheduler-fix/)
