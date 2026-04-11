---
title: "RunBuddy Coaching MVP First Field Test — Start Button, GPS Judgment & Coaching Interval Fixes"
date: 2026-03-24
excerpt: "After implementing the coaching-focused MVP, I ran a 500m indoor test. Identified three issues: unresponsive start button, mismatched voice coaching due to missing GPS data, and a coaching interval mismatch with the test distance. Each root cause was isolated and fixed. The patched build gets validated in an outdoor run tomorrow."
tags: ["RunBuddy", "RunningAppDev", "MVPValidation", "GPSPace", "VoiceCoaching", "AICollabDev"]
published: true
project_tag: "RunBuddy"
project_link: "runbuddy"
---

Today I ran the first field test of RunBuddy's coaching-focused MVP.
This MVP takes a target pace and heart rate per segment as input,
then delivers real-time judgments and voice coaching based on live data.
After completing the implementation, I ran a 500m indoor test
and identified two core issues.

**Issue 1 — Unresponsive Start Button**

Pressing the start button appeared to do nothing.
The root cause wasn't a code bug — it was layout.
The error message was at the top of the screen while the start button was at the bottom,
so when the user tapped the button, the actual error message
was never in view. The feature wasn't frozen;
the error was just invisible.

Fixed by moving the error message directly above the start button.

**Issue 2 — Voice Coaching Mismatched with Actual Data**

"Good pace" kept playing even while running fast.
Three overlapping causes were behind this.

In the indoor environment, no GPS pace samples were captured,
leaving avgPace at 0. The existing logic treated this value
as PACE_OK (on target), meaning the system would always say
"Good pace" whenever GPS was absent.

The pace input labels read "Lower / Upper bound," which could easily
cause users to enter values in the wrong order.
In everyday running terms "lower bound" feels like the slower end,
but in the code it means the faster end (smaller number).
A reversed entry would flip the entire judgment.

Finally, with the coaching interval set to 1 km,
a 500m test would produce zero coaching triggers by design.

**Fixes Applied**

When GPS-based pace is missing or an outlier,
the state is now set to PACE_UNSET instead of PACE_OK.
In low-signal conditions, the system stays silent or announces
a signal-loss notice rather than a false "Good pace."
Values below 2:00/km and above 20:00/km are also filtered out
as GPS noise so judgments stay stable.

Pace input labels were changed to "Faster pace / Slower pace"
with clarifying hint text to prevent confusion.
The coaching interval description was updated from "on warning only"
to "fires only on overload or fatigue warning" for clarity.

**What I Confirmed Today**

Diagnosing and validating behavior in real usage context
matters far more than the implementation itself.
In particular, when I instructed the development AI to diagnose only — read-only, no edits —
it isolated each root cause precisely without making arbitrary changes.
The indoor test was useful for checking button flow and coaching UX,
but it became clear that GPS-based judgment validation
needs to move to an outdoor run.

**Next Steps**

Validate today's fixes in an outdoor run tomorrow.
If it passes, the next improvement will split coaching into two tracks:
one that fires instantly when a target is missed,
and one that delivers interval summaries every 500m or 1km.
