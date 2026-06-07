---
title: "Basic Procedure for Building a Local Service App MVP with Claude Code"
description: "A reusable procedure for building a local service app MVP with Claude Code. Covers purpose definition, server startup, feature testing, error handling, documentation, and Phase 1 completion criteria."
pubDate: 2026-06-07
tags: ["VibeCoding", "ClaudeCode", "LocalMVP", "SOP", "AICollaboration"]
type: guide
lang: en
published: true
---

This guide is a reusable procedure for building a local service app MVP with Claude Code. It is structured as an SOP (Standard Operating Procedure) — a step-by-step operational flow.

It is based on the workflow validated during the Shorts / Reels Generator local MVP build (v0.1.0 through v0.1.4).

## When to Use This Procedure

- When you want to build a locally-running app without deep coding knowledge
- When you want to collaborate with Claude Code on an MVP while the operator leads direction and judgment
- When you want to create a repeatable development flow and recover it as an operating asset

## 01 — Separate the Operator's Role from Claude Code's

Before starting, make roles explicit.

| Role | Owner |
|---|---|
| Define purpose, set priorities | Operator |
| Set completion criteria | Operator |
| Feature validation (confirming it works as intended) | Operator |
| Code structure design, implementation | Claude Code |
| Error diagnosis and fixes | Claude Code |
| Documentation drafts | Claude Code (confirmed by operator) |

When roles blur, features accumulate without validation, or development continues without a completion target.

## 02 — Define Purpose and Completion Criteria First

Before requesting any code, decide:

- **Purpose**: Why are you building this MVP? What problem does it solve?
- **Core features**: What must work for Phase 1 to be complete?
- **Completion criteria**: What conditions define Phase 1 as done?
- **Phase 2 candidates**: What features are not needed now but worth revisiting later?

Without completion criteria, an MVP never ends.

## 03 — Decide on the Technical Structure

Decide on the tech stack before implementation begins. When the operator gives Claude Code a direction rather than a blank canvas, major structural rewrites later become less likely.

Typical local service app structure:

| Layer | Example options |
|---|---|
| Frontend | Next.js, React |
| Backend | FastAPI (Python), Express (Node.js) |
| Processing engine | FFmpeg (video), Pillow (image), other libraries |
| Execution | Local dev servers (frontend + backend running in parallel) |

## 04 — Implement the Minimum Feature First

The first implementation request should contain only the single most essential feature.

Example: "Upload a photo and generate a 9:16 vertical MP4."

Once that works, move to the next feature. Requesting everything at once causes errors to stack up and makes debugging much harder.

## 05 — Confirm Frontend and Backend Servers Start

Before testing any feature, confirm that both servers actually start.

1. Start the backend server (e.g., `uvicorn main:app --reload`)
2. Start the frontend server (e.g., `npm run dev`)
3. Confirm browser access
4. Confirm basic operations (file upload, download, etc.) work

Trying to test features when a server won't start creates unnecessary confusion.

## 06 — Feature Testing Sequence

When testing a feature, follow this order.

1. Confirm the feature works with normal input
2. Confirm error handling with edge-case input (empty file, oversized file, unsupported format)
3. Confirm combined use (e.g., BGM + transitions + captions all applied at once) works correctly
4. Directly play or view the output file (e.g., the MP4) to confirm it is usable

Testing means using it yourself. Code running without errors does not mean the feature behaves as intended.

## 07 — When an Error Occurs: What to Check

When an error appears, check in this order.

1. Browser console error messages
2. Backend server terminal error logs
3. Copy the exact error text and pass it to Claude Code

## 08 — How to Describe Errors to Claude Code

Passing only "it doesn't work" or "there's an error" makes it hard for Claude Code to diagnose the problem.

Use this format:

```
[What feature you were testing]
[What input you used]
[The full error message — copied exactly]
[What result you expected]
```

The more precisely the error is described, the faster the resolution.

## 09 — Documentation: Include It as Part of Phase 1

Documentation is not something added after development ends — it is part of Phase 1.

| Document | Purpose |
|---|---|
| README.md | Project overview and how to run |
| CHANGELOG.md | Version-by-version change history |
| docs/LOCAL_RUN.md | Local execution procedure |
| docs/FEATURES.md | Feature list and usage |
| docs/KNOWN_ISSUES.md | Known issues and priority |
| docs/ROADMAP.md | Phase 2 candidate features |

Without documentation, reproducing the same environment or starting Phase 2 means figuring everything out from scratch.

## 10 — Distinguish Phase 1 Complete from Phase 2 Deferred

Define what Phase 1 complete means, and declare it done when those criteria are met.

**Example completion criteria:**
- The core feature actually works
- Minimum editing tools are in place
- The project is reproducible via documentation

**Phase 2 deferral criteria:**
- The core purpose is achievable without this feature right now
- Implementation complexity outweighs current validation value
- The feature requires deployment or multi-user support

Trying to include every "would be nice to have" feature in Phase 1 means the MVP never completes.

## 11 — Check for Sensitive Information Before Any Sharing

Local development can produce builds that contain sensitive information in the code.

Before sharing or publishing, verify:

- API keys, passwords, and tokens are not hardcoded in source files
- Local file paths and usernames are not present in documentation
- Internal brand names and account information are not exposed

Move sensitive values to environment variables (.env) and add them to .gitignore.

---

Related Log: [Shorts / Reels Generator — Local MVP Phase 1 Complete](/en/log/2026-06-07-shorts-reels-generator-local-mvp-phase-1/)  
Related Insight: [When Building an MVP with AI, What the Operator Must Hold On To Is Judgment, Not Code](/en/insight/ai-mvp-operator-judgment-vibe-coding/)
