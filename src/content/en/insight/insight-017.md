---
title: "Read the Logs Before You Read the Code"
date: 2026-04-23
excerpt: "You don't need to read code to find bugs. Today I fixed three auto-trading bugs in one day — by reading logs, describing what was off, and letting AI trace the cause."
tags: ["AutoTrading", "AICollaboration", "Debugging", "Insight"]
published: true
project_tag: "AutoTrading"
---

I can't read code.

And today I found and fixed three bugs in my auto-trading system within a single day.

I want to write down how that was possible.

---

## Visible Money and Usable Money Are Different Things

The error message said "exceeds orderable amount." The bank account had money. I didn't understand.

I described the situation to AI as-is. It found the problem: the balance field the system was reading wasn't actually available for orders. Korean stocks settle T+2 — yesterday's purchases appear on the books, but can't be used for today's orders. The system wasn't making that distinction.

Once I understood the cause, the fix was simple: use the orderable-amount field that KIS returns directly.

I didn't know the code. But I could ask "there's money in the account — why can't it buy anything?" That question was where finding the bug started.

---

## The Bug Is Always in the Actual Execution Path

I saw 18 KT sell reservations stacked in the log. I asked AI why.

The monitoring job runs every 5 minutes. Every time it saw a sell signal, it created a new reservation — no deduplication check.

Then I found out later that the fixes for Bug 1 and 2 hadn't been applied to the right place. AI re-examined the code structure and told me the file actually executed during market hours was a different one. The file we'd patched wasn't the one running.

The bug lives in the actual execution path — not the file you happen to be looking at. Confirming that is half of debugging.

---

## Read the Logs Before You Read the Code

What I did today, in order:

1. Spotted something wrong in the logs
2. Described the situation to AI
3. Understood the cause AI found
4. Made a judgment call on the fix

AI interpreted the code. I made the decisions.

You don't need to read code to read logs. If a number in the log looks wrong, that's already enough to work with. Bring that signal to AI.

Trying to read the code first is where things stall. Read the logs first. Find what looks off. Put it into words. That's the right order.

---

**What I built:** Fixed three trading bugs in one day — wrong balance reference, duplicate sell scheduling, and misplaced code fix.

**What broke:** The system read the wrong cash field and stacked 18 sell orders for one stock.

**What I learned:** I don't read code. I read logs, describe what's off, and let AI trace the cause.
