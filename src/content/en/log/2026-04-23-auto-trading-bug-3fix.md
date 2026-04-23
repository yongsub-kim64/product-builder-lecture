---
title: "Three Trading Bugs Found and Fixed in One Day"
date: 2026-04-23
excerpt: "Three bugs in the KIS live auto-trading system — wrong cash field reference, 18 duplicate sell orders for KT, misplaced code fix. All found and fixed the same day. You don't need to read code to debug. Read logs, describe what's off, let AI trace the cause."
tags: ["AutoTrading", "LiveAccount", "BugFix", "KIS API", "AICollaboration"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Confirm KT sell executes exactly once (2026-04-24 09:05)"
---

Date: 2026-04-23

Found three bugs in the KIS live auto-trading system today. Fixed all of them the same day, working with AI.

## Bug 1 — Wrong Cash Field

The system made zero purchases all day. The error was "exceeds orderable amount." The bank account had money in it.

I described the situation to AI. It found the problem: the balance field the system was reading wasn't the actual available cash for orders. Korean stocks settle T+2, so yesterday's purchases are on the books but unavailable for same-day orders. Fixed by switching to the KIS orderable-amount API endpoint directly.

| Item | Before | After |
|------|--------|-------|
| Reference field | Total balance | KIS orderable-amount (direct query) |
| Result | Included T+2 locked funds → error | Reflects actual available cash |

## Bug 2 — 18 Duplicate KT Sell Orders

Spotted 18 KT sell reservations stacked in the log. The monitoring job runs every 5 minutes; every time it detected a sell signal, it created a new reservation without checking if one already existed. No deduplication logic.

Manually deleted 17 of the 18 orders. Added duplicate-check logic to prevent recurrence.

## Bug 3 — Fix Applied to the Wrong File

Realized the Bug 1 and Bug 2 fixes had been applied to the wrong file. AI re-examined the code structure and found that the file actually executed during market hours was a different one. Re-applied both fixes to the correct file.

## To Verify Tomorrow

- KT sell executes exactly once at 09:05
- Orderable-amount field reflects correctly
- Duplicate prevention logic holds
