---
title: "Tao Te Ching Learning AI v0.1.5 — From NotebookLM Study to Limited Beta Preparation"
date: 2026-06-09
excerpt: "Started studying the Tao Te Ching with NotebookLM, then built a Q&A-based local web learning tool with Claude Code. An operational record of systematizing a personal learning project from local MVP through limited beta preparation at v0.1.5."
tags: ["TaoTeChing", "LearningAI", "NotebookLM", "ClaudeCode", "LocalMVP", "LimitedBeta", "AICollaboration"]
published: true
showInLog: true
project_tag: "Tao Te Ching Learning AI"
---

## Summary

I started by uploading Tao Te Ching study materials to NotebookLM. Reading and summarizing documents alone wasn't enough to verify actual comprehension, so I built a Q&A-based local web learning tool in collaboration with Claude Code. From v0.1 through v0.1.5, the project expanded to include multi-user separation, privacy notice, record deletion, account deletion flow, original text reference panel, and a character dictionary covering chapters 1–10. The current state is **not a public service** — it is in the pre-public, owner validation and limited-beta rehearsal preparation stage.

The core of this record is not Tao Te Ching interpretation. It is the operational process of systematizing a personal learning project through AI collaboration from local MVP to limited beta readiness.

## Background: Why Build a Tao Te Ching Learning Tool

The Tao Te Ching is not easy to approach casually. Classical Chinese source text, multiple translations, scholarly annotations, and modern commentaries all coexist without a clear starting point. NotebookLM became the first step — uploading the source text, translations, and lecture materials to use as an AI-assisted study hub.

Reading AI-generated summaries felt sufficient at first. But over time, one gap became clear: there was no way to confirm whether I actually understood the material or just found it convincing. Comprehension and the ability to express something in your own words are different things.

That gap drove a pivot — from "a tool for reading documents" to "a tool for answering questions and checking understanding."

## From NotebookLM to a Local MVP

NotebookLM continued as the material management and AI query layer. It handled source text search and summary requests throughout the project.

What NotebookLM alone couldn't provide:

- A way to write and track my own answers
- Structured progress tracking by chapter and topic
- A shareable structure for use with family or close acquaintances later

Those gaps prompted building a local web learning tool.

## Role Separation

Roles were clearly defined from the start.

- **Operator**: Set learning purpose, user flow, validation criteria, scope of access, and operational risk. Decided what to build, for whom, and how far to open it.
- **Claude Code**: Designed the technical architecture, wrote all implementation, resolved environment issues, and expanded features.
- **NotebookLM**: Served as the source text, annotation, and commentary reference layer throughout.
- **Meta-Chulbuji**: Handled direction alignment and asset-documentation judgment.

The operator did not write the code. The operator defined the purpose and decision criteria; Claude Code handled implementation.

## Technical Stack

- **Frontend**: React + Vite
- **Backend**: FastAPI (Python)
- **Database**: SQLite
- **Auth**: JWT + PIN-based user separation
- **Runtime**: Local development server (frontend + backend running in parallel)

No public deployment server. The application runs locally only.

## v0.1 to v0.1.5: Step-by-Step Expansion

**v0.1 — Basic Q&A Structure**

Chapters 1–5. A minimal structure presenting per-chapter questions and accepting typed answers. Single-user, local record storage.

**v0.1.1 — Learning History and Progress Tracking**

Added answer record storage and per-chapter progress display. Previous answers became reviewable.

**v0.1.2 — Chapters 1–10 Expansion + Original Text Reference Panel**

Extended study scope to chapters 1–10. Added a side panel showing classical Chinese characters and translation while answering questions — intended for self-checking against the source while responding.

**v0.1.3 — Character Dictionary Expansion**

Added brief dictionary entries for key classical Chinese terms in chapters 1–10. These entries are explicitly labeled as **beginner-level learning aids, not academically verified interpretations**. The following items are marked as requiring further review rather than stated definitively:

- Chapter 2: 有無相生 (yǒu wú xiāng shēng) and 無為 (wúwéi) — personal study understanding; interpretations vary among scholars
- Chapter 5: 芻狗 (chú gǒu) and 橐籥 (tuó yuè) — descriptions kept minimal to reduce potential misreading
- Chapter 8: 上善若水 (shàng shàn ruò shuǐ) — working understanding compiled by the operator, pending review
- Chapter 10: 玄德 (xuán dé), 抱一 (bào yī), 玄覽 (xuán lǎn) — limited to beginner-level explanations, not stated as definitive

**v0.1.4 — Multi-User Separation and Beta Access Code**

Moved from single-user to multi-user architecture. Added a beta access code entry step for participant verification. Each user's learning records are stored separately.

**v0.1.5 — Full Limited Beta Preparation Layer**

Added the following:

- PIN-based access restriction (including fix for browser autofill override issue)
- Privacy notice screen
- Record deletion (users can delete their own learning history)
- Account deletion / withdrawal flow
- Improved JWT-based session management

## Runtime Issues Resolved

**Port conflict**: A prior backend process left behind from a previous session caused port collision at startup. Port status check and process termination were added to the startup routine.

**Registration form input bug**: Under certain conditions, form input values were being reset during the user registration flow. Fixed by correcting the form state management logic.

**PIN autofill issue**: The browser's autocomplete feature was populating the PIN field with previously saved values. Resolved by setting the appropriate `autocomplete` attribute.

## Why It Isn't Public

Tao Te Ching Learning AI v0.1.5 has not yet gone through the following stages:

1. **Owner validation**: The operator has not yet used the tool through a full study session to verify the intended learning flow.
2. **Limited beta rehearsal**: The full cycle of external access setup and user flow has not been run end-to-end.
3. **Interpretation review**: The beginner-level character dictionary entries need additional review to confirm they don't create misunderstanding.

Releasing publicly without completing these steps is not appropriate.

## Why This Counts as a June Systematization Case

This was not simply "building another app."

It started from a personal learning purpose, used NotebookLM to organize materials, built a local MVP, expanded it incrementally, and carried it through to limited beta preparation. Throughout, the operator owned judgment, Claude Code owned implementation, and NotebookLM provided the reference layer.

Setting a harness, separating roles, validating incrementally, and recording results as operational assets — this is a concrete example of the June operating theme: systematization, harness-based operation, and AI collaboration.

---

Related Guide: [Building a Local Service MVP with Claude Code — Basic Procedure](/en/guides/claude-code-local-mvp-sop/)  
Related Guide: [Vibe Coding Primer: How to Build Apps with AI Without Deep Coding Knowledge](/en/guides/vibe-coding-guide/)  
→ [June 2026 Operations Board](/en/board/2026-06/)
