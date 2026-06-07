---
title: "When Building an MVP with AI, What the Operator Must Hold On To Is Judgment, Not Code"
date: 2026-06-07
excerpt: "Lessons from building the Shorts / Reels Generator local MVP with Claude Code. Covers why operators must own purpose, validation, and completion criteria rather than focusing on the code itself."
tags: ["AICollaboration", "VibeCoding", "LocalMVP", "OperatorJudgment", "ClaudeCode"]
published: true
---

## Vibe Coding Is Not About Handing Everything to AI

When building the Shorts / Reels Generator, I handed implementation to Claude Code. But handing over implementation is not the same as handing over everything.

AI is strong at "how." But "what to build and why," and "how far to go and where to stop" — these require the operator's judgment. Without that judgment, AI will keep proposing features or suggest expanding things that are already sufficient.

## Claude Code Owned Implementation; the Operator Owned Direction, Validation, and Judgment

Roles separated cleanly throughout this build.

Claude Code connected Next.js, FastAPI, FFmpeg, and Pillow, and wrote the implementation. The operator decided which features mattered and in what order, verified that things actually worked as intended, and decided when to move to the next step.

When this separation works well, execution is fast. The operator sets direction and validates; AI handles the implementation within that direction. When the boundary blurs — for example, when the operator accepts AI suggestions without verification — the result isn't an MVP. It's a feature-bloated, unfinished product.

## The Most Important Thing in an MVP Is Not Feature Count — It's the Completion Criteria

Looking back at this MVP, the most important decision was not adding a feature. It was declaring "Phase 1 ends here."

Without completion criteria, an MVP never ends. There are always more features to add, more things to refine. In this build, three criteria were defined: does the core feature actually work, are the minimum editing tools in place, is it reproducible via documentation? When all three were met, Phase 1 was called complete.

## Knowing When to Stop Is Harder Than Adding Features

Drag editing, AI scene analysis, OCR, deployment — all of these felt like "would be nice to have." All were deferred to Phase 2.

The stopping decision is harder. Adding a feature means asking AI. But deciding "is there enough reason to add this feature now" is the operator's call. The ability to stop is the core skill of MVP development.

## The Ability to Describe Errors Is the Core Bottleneck of AI Collaboration

Errors happen. AI resolves them quickly — but how quickly depends on how clearly the operator describes the problem.

"It doesn't work" is information AI can't use. "When I tested this feature, with this input, this error message appeared" is what enables a precise response. Describing errors clearly is the real bottleneck in AI-collaborative development.

## Documentation Is Not a Development Record — It Is an Operating Asset for the Next Task

README, CHANGELOG, LOCAL_RUN, FEATURES, KNOWN_ISSUES, ROADMAP were all written. These are not records for their own sake.

Without LOCAL_RUN, the next time the same environment needs to be set up, you start from scratch. Without KNOWN_ISSUES, you rediscover problems you already knew about. Without ROADMAP, Phase 2 begins by relying on memory instead of a defined starting point.

Documentation is not cleanup after development. It is preparation that makes the next task possible.

## Criteria for Applying This Experience to Other MVPs

Distilled from this build:

1. Define completion criteria before you start. Without criteria, there is no end.
2. Separate roles. Operator handles judgment; AI handles implementation.
3. Start with the minimum feature. Don't try to build everything complete from the first step.
4. Describe errors specifically. Not "it doesn't work" — "what I did, how I did it, and what error appeared."
5. Know when to stop. Closing Phase 1 as complete may matter more than adding one more feature.
6. Documentation is part of Phase 1, not an afterthought.

---

Related Log: [Shorts / Reels Generator — Local MVP Phase 1 Complete](/en/log/2026-06-07-shorts-reels-generator-local-mvp-phase-1/)  
Related Guide: [Basic Procedure for Building a Local Service App MVP with Claude Code](/en/guides/claude-code-local-mvp-sop/)
