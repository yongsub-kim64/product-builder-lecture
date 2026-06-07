---
title: "Shorts / Reels Generator — Local MVP Phase 1 Complete"
date: 2026-06-07
excerpt: "A record of building a local MVP with Claude Code that converts photos and short clips into 9:16 vertical MP4s. Covers the step-by-step feature expansion from v0.1.0 to v0.1.4, the Phase 1 completion criteria, and what was deferred to Phase 2."
tags: ["ShortsExperiment", "LocalMVP", "AICollaboration", "ClaudeCode", "VibeCoding", "FFmpeg"]
published: true
showInLog: true
project_tag: "Shorts Generation Experiment"
---

## Summary

Working with Claude Code, I built a local MVP that converts photos and short clips into 9:16 vertical MP4s. Features expanded incrementally from v0.1.0 through v0.1.4, and I judged the project complete at Phase 1. This is not a public service release — it runs locally — and the core of this record is not the app itself but the process of building an MVP with AI while the operator owns direction, validation, and completion decisions.

## Why It Started

Working on shorts and reels content, I needed a tool to quickly format photos or short clips into 9:16 vertical video. Using a public service raised data exposure concerns, and for repeated experiments a locally-run tool was a better fit.

Two reasons drove starting as a local MVP rather than a public service. First, I needed to validate whether the core features were actually useful by using them myself. Second, before thinking about deployment, I needed a clear judgment on how far to go in Phase 1.

## Role Separation

Roles were clearly divided throughout this project.

- **Operator**: Decided which features to prioritize, how to validate them, and what "done" means — confirmed the output behaved as intended
- **Claude Code**: Designed the technical structure and wrote the implementation

This doesn't mean the operator never touched the code. It means the operator owned direction and judgment; Claude Code owned implementation.

## Technical Structure

- **Frontend**: Next.js (UI controls and input)
- **Backend**: FastAPI (Python, video processing API)
- **Video processing**: FFmpeg (compositing, crop, captions, transitions)
- **Image processing**: Pillow (intro/outro card generation)
- **Execution**: Local dev servers (Next.js + FastAPI running in parallel)

## Phase-by-Phase Expansion: v0.1.0 to v0.1.4

**v0.1.0 — Core Structure**

Photo upload, 9:16 MP4 generation, basic UI wiring. The goal was to confirm that the single most important feature actually worked before adding anything else.

**v0.1.1 — BGM and Ken Burns**

Added BGM file upload and volume control. Added Ken Burns motion (slow zoom and pan) to give static photos a sense of movement.

**v0.1.2 — Transitions and Multi-Scene**

Added scene transition effects (fade, slide, cut, etc.). Implemented multi-scene composition — combining multiple scenes into one MP4.

**v0.1.3 — Intro/Outro and Captions**

Used Pillow to generate intro and outro cards. Added per-scene caption text with controls for color, position, and style.

**v0.1.4 — Workout Logging and Final Features**

Added workout record input (distance, time, pace, etc.). Added card preview and custom download filename support, completing Phase 1.

## Current Features

- Photo / video upload
- 9:16 vertical MP4 generation
- BGM upload, selection, and volume control
- Ken Burns motion
- Transition effects
- Intro / outro cards
- Per-scene captions
- Workout record input
- Text color, position, and style controls
- Card preview
- Custom download filename

## Documentation Completed

| Document | Contents |
|---|---|
| README.md | Project overview and how to run |
| CHANGELOG.md | Change history from v0.1.0 to v0.1.4 |
| docs/LOCAL_RUN.md | Local execution procedure |
| docs/FEATURES.md | Feature list and usage |
| docs/KNOWN_ISSUES.md | Known issues and priority |
| docs/ROADMAP.md | Phase 2 candidate features |

## Phase 1 Completion Criteria

Phase 1 was judged complete when three criteria were met.

1. The core goal — 9:16 vertical MP4 generation — actually works.
2. The minimum editing features needed for shorts production are in place.
3. Documentation is complete and the project can be reproduced locally.

This is not "finished product." It is "a defined point where the operator can make a judgment call and stop." Knowing when to stop is harder than adding features, and more important.

## Deferred to Phase 2

The following were classified as Phase 2 holdovers. They will be reviewed separately once Phase 1 features have been used enough to confirm real need.

- Drag-based scene editing
- AI-assisted automatic scene analysis
- OCR (automatic text recognition)
- Cloud deployment and user-saved sessions
- Multi-user support

## What This Log Means

This is not a "we built a shorts generator" announcement. It is an operating record: how AI collaboration was used to build a local MVP, and how the operator made direction, validation, and completion decisions throughout.

That record is what makes the next MVP cheaper. Knowing where to start and where to stop becomes a repeatable skill.

---

Related Insight: [When Building an MVP with AI, What the Operator Must Hold On To Is Judgment, Not Code](/en/insight/ai-mvp-operator-judgment-vibe-coding/)  
Related Guide: [Basic Procedure for Building a Local Service App MVP with Claude Code](/en/guides/claude-code-local-mvp-sop/)  
→ [June 2026 Operating Board](/en/board/2026-06/)
