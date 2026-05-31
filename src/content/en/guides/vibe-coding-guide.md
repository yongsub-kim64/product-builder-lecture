---
title: "Vibe Coding Guide: How to Build Apps with AI Without Deep Coding Skills"
description: "You don't need deep coding knowledge to build an MVP with AI. This guide covers planning documents, role separation, and validation criteria using ChatGPT, Claude Code, and Codex."
pubDate: 2026-05-31
tags: ["vibe coding", "AI coding", "Claude Code", "Codex", "MVP", "AI product development"]
type: guide
lang: en
published: true
---

"Vibe coding" is a term you're hearing more and more lately. It can give the impression that simply typing what you want into a prompt window will magically produce a working app.

But once you actually try to build a product, you quickly realize that "one button is all it takes" is not the reality. True vibe coding is less about coding skill itself and more about how you communicate with AI and divide responsibilities between human and machine.

Not having deep coding knowledge is fine. If you can clearly document the purpose, roles, scope, and validation criteria of the service you want to build, you can develop a real MVP — a minimum viable product — alongside AI. This guide walks through exactly how to get started.

## Step 1: Don't Ask for Code First — Start with Documents

The most common mistake is opening an AI chat window and immediately asking "build me an app like this." Without enough context, the AI generates code blindly, and the output is fragile.

Before writing a single line of code, the human needs to establish the standards first. The recommended approach is to write documents like Plan, Design, and AGENTS.md before anything else.

- Plan: A planning document that defines what you're building, why you're building it, and what the core features are
- Design: A design document that lays out screen structure, data flow, and user experience
- AGENTS.md: A role definition document that tells AI agents the context and rules they should follow while working

These documents act as a harness — they give the AI a clear purpose and boundaries for its work.

{/* TODO internal link: InsightReport MVP planning record */}

## Step 2: Assign Each AI Tool a Distinct Role

Rather than delegating everything to a single AI, separating roles based on each tool's strengths produces more reliable results.

At chulbuji.com, the role breakdown looks like this:

- ChatGPT / Meta Chulbuji: Thinking partner for aligning overall direction, structuring documents, and overseeing the project as a whole
- Claude Code: Core builder responsible for actual implementation, structural changes, and code writing
- Codex: Supporting reviewer for code inspection, small modifications, and limited execution checks
- Gemini: Google ecosystem specialist covering Search Console, Blogger, AdSense, and SEO

The key question is not "which AI is best?" — it is establishing clear criteria for which tasks go to which AI.

Related Insight: [Divergence Happens in a New Window, Convergence Happens at HQ](/en/insight/ai-role-separation-diverge-and-converge/)

## Step 3: Real Products Built with AI

By combining document-driven planning with AI role separation, it was possible to build real services even without deep development knowledge.

### Commit Hero

Commit Hero is a web app that generates an RPG-style developer card based on a GitHub user's activity data. The planning documents and design direction were defined first, then the MVP was built and deployed alongside AI.

Related Log: [Commit Hero Deployed — First AI Product Build Loop Closed](/en/log/2026-05-25-commit-hero-deploy-ai-product-build-loop/)

### AI Content Assistant

The AI Content Assistant is a service for small business owners: upload a photo of a product or service with a brief description, and it generates a promotional content draft. The target user was defined first, then input and output were clearly specified before any feature was built.

Related Log: [AI Content Assistant for Small Businesses — From Idea to Screen to MVP Scope](/en/log/2026-04-22-ai-content-assistant-prototype/)

## The Harness Perspective: Turning Validation and Records into Assets

When collaborating with AI to produce results, the most important mindset is the harness perspective. Rather than telling AI to "figure it out," you must clearly define purpose, roles, scope, and validation criteria.

Keep checking these questions continuously:

- Purpose: Why is this feature needed?
- Role: Is the AI acting as a planner, a developer, or a reviewer right now?
- Scope: How far will this session's changes go?
- Validation: What will you use to judge whether the output is correct?
- Record: Have you preserved successes and failures as assets for the next project?

Even when things fail, capturing the lessons as Log entries, Insights, or SOPs gives you a foundation for the next execution.

Related Insight: [The Core of Vibe Coding Was the Harness, Not the Code](/en/insight/vibe-coding-harness-design/)

## A Checklist for First-Timers

If you're about to take your first steps into vibe coding, check these three things before opening a coding window:

- Have you written down the single core feature of the service you want to build in one sentence?
- Before asking AI, have you defined what the desired output looks like and how you'll verify it?
- When the code gets stuck, are you prepared to cross-check with a different AI tool?

You don't need to build a perfect product from the start. What matters is completing one cycle: pick a small feature, document it, build it with AI, and record the result.

## What to Read Next

Vibe coding is not a one-time magic trick. It is a process of running small experiments, recording the trials and errors, and turning those records into the standard for the next execution.

chulbuji.com holds an accumulating archive of Logs and Insights from building products and structuring operating systems alongside AI. This guide is the first entry point into those records.

{/* TODO internal link: related Log/Insight collection */}

Related Insight: [What I Learned from Codex Practice — Workflow Design Matters More Than Commands](/en/insight/codex-workflow-design-over-prompting/)
