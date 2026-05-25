---
title: "The Core of Vibe Coding Was the Harness, Not the Code"
date: 2026-05-25
excerpt: "Before building Commit Hero, I designed the judgment structure first. Running Deep Interviews to set direction, then defining scope through Plan, Design, and AGENTS.md before implementation — the experience confirmed that the human role in vibe coding is harness design, not coding."
tags: ["vibecoding", "harnessdesign", "Codex", "AIProductBuild", "DeepInterview"]
published: true
---

## The Decision Not to Issue an Implementation Prompt

Before building Commit Hero today, I made one decision first.

I decided not to give an implementation instruction right away.

The idea was there. A web app that turns a GitHub username into an RPG-style developer card. It felt concrete enough. But I didn't hand it directly to Codex.

Instead, I asked questions first.

Is this service meant to be an accurate evaluation tool, or a fun interpretation? What features are truly required for the MVP? What tone should the card have?

Three questions set the direction. Five rounds of interviews later, the idea had narrowed into a product shape. Then came the Plan document, then the Design document, then AGENTS.md — which told Codex: "this is how you work in this project."

## Separating the Human and AI Roles

After that, Codex handled the implementation. I didn't write implementation code by hand. Instead I kept making judgment calls: direction, scope, quality standards, verification. Opening the browser, entering a username, checking that the card generated correctly, confirming image download worked — that was the human role.

The role split comes down to this.

The human sets direction, narrows scope, defines quality standards, evaluates results, and decides what comes next. The AI asks questions, organizes, plans, implements, and reports.

When that distinction breaks down, the AI loses direction quickly. If I had started with "build me a GitHub RPG card app," something would have come out — but without direction. When the human doesn't define scope first, the AI fills it in with whatever seems most plausible.

## Ending as an Asset, Not Just a URL

The result didn't end at a deployment URL. It was committed to GitHub, deployed on Cloudflare, and connected to the chulbuji.com Vibe Coding Lab as Codex experiment 001. The app built today became an operational asset, not just a practice run.

What was built today was not simply one web app. It was the day I confirmed what needs to be decided before handing work to AI.

The core of vibe coding was not code generation — it was harness design. The person who builds the harness first can go further with AI.

---

**What I built:** A structured AI Product Build loop — Deep Interview → Plan → Design → Do → Deploy → Asset  
**What broke:** The assumption that vibe coding means "just describe and let AI handle it."  
**What I learned:** The real skill isn't coding. It's designing the harness that keeps AI from losing direction.

**Reader question:** Before handing implementation to AI, how far do you narrow the scope first?

Related Log: [Commit Hero Deployed — First AI Product Build Loop Closed](/en/log/2026-05-25-commit-hero-deploy-ai-product-build-loop/)
