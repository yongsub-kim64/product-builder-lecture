---
title: "Hackathon D-2: I Used to Guess. Today I Started Seeing 'Clicks'"
date: 2026-02-18
excerpt: "A solo maker who can't write a single line of code successfully tracked button clicks with GA4+GTM two days before the hackathon. Chulbuji designed what to measure, Meta-chulbuji implemented it. Now I don't guess — I prove."
tags: ["Hackathon", "GA4", "GTM", "Meta-chulbuji", "Data-Driven", "AI Freshman", "PlusHuman", "VanityMetric", "ClickTracking"]
published: true
---

### 3-Line Summary (TL;DR)

- **Problem:** I only watched visitor counts, with no idea whether anyone was actually clicking my demo button
- **Solution:** Chulbuji designed what to measure, Meta-chulbuji implemented it via GA4+GTM in 30 minutes
- **Result:** `demo_click: 1` appeared in GA4 real-time reports — one step from the world of guessing into the world of data

---

### 1. Who I Was Until This Morning

Honestly, until this morning, I was the kind of person who thought "as long as lots of people visited, I'm good."

I'd open the GA4 dashboard, see the numbers going up, feel satisfied, and think that was enough.

But as I was preparing for the hackathon, one scary question started gnawing at me.

**"Is anyone actually clicking the demo button?"**

I could tell people were visiting the page, but the button I considered most important — how many people actually clicked it — I had absolutely no idea. I was completely in the dark.

### 2. Problem: I Was Being Deceived by Pageviews

There's a saying that visitor counts are **Vanity Metrics**. They only tell you someone came, not what they actually did.

Hackathon D-2, I'm building a service that's about to face judgment. When a judge asks "Is there actually any interest in this service?" fumbling with "Well, we had quite a few visitors..." felt too weak.

I needed click counts. Real data.

### 3. Solution: Chulbuji Designed It, Meta-chulbuji Implemented It

I'm not a developer. I knew the name GTM (Google Tag Manager), but had no idea how it actually worked.

But I have Meta-chulbuji.

One thing to be clear about: this isn't a story of "AI did everything automatically." I first precisely designed **what I wanted to measure**. Which button, what to name the event, where to check it in GA4. I was the one who obsessively organized the requirements.

Meta-chulbuji converted that design into code and GTM triggers.

I copied and pasted. That was it. And that was enough.

**🙋 What Chulbuji Did**

"I want to send a demo_click event to GA4 when the demo button is clicked.
Organizing requirements: which button, event name, where to verify."

**🤖 What Meta-chulbuji Did**

Variable setup → Trigger creation → GA4 tag connection →
Preview mode testing → Publishing — designed the entire process step by step and provided the code.

**✋ What Chulbuji Did Again**

Copy. Paste. Save. Done.

30 minutes. That's all it took.

### 4. Proof: The Moment That Number '1' Appeared

I turned on GTM preview mode and clicked the button myself on my phone.

I opened the GA4 real-time report.

**demo_click — 1**

I can't explain why that single number felt so thrilling. It might seem trivial, but in that moment I felt like I'd crossed a bridge from the world of "gut feelings" into the world of "data."

Now I don't guess. If someone clicks the button, I see it.

### 5. Your One Click Makes a Better Service

Let me be honest about something.

I'm in the process of completing this service. And I believe the definition of "complete" lies not in my head, but in the reactions of people who actually use it.

Planting the `demo_click` event isn't just a technical experiment. It's the first sensor for confirming **"Does this service genuinely attract people's interest?"** — so I can understand where they stop, what's inconvenient, and improve accordingly.

Please try the demo through the profile link, and leave your thoughts in the comments.

- "I was confused about where the button was" is great,
- "I wish there was a feature like this" is great,
- Even just "This is interesting" is enough.

Your clicks accumulate as data in my GA4 dashboard, and your words get reflected in the next version of the service. Being able to keep growing this service after the hackathon ends — that's ultimately thanks to this kind of feedback.

Hackathon D-2. From gut feeling to data. And from data to a better service. Chulbuji keeps evolving.

---

**[Action Now]** Try the demo yourself 👉 **[Meta-chulbuji Whispering Insight Report](https://insight.chulbuji.com/)**

<a href="https://docs.google.com/forms/d/1PnLt0-pFSfDV25xmmHZB9N8cWOQRFOXZDWQmH6Xf0q0/viewform" target="_blank">Leave one-line feedback (20 seconds)</a>
