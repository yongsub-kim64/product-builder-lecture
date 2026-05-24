---
title: "What I Learned from Codex Practice — Workflow Design Matters More Than Commands"
date: 2026-05-25
excerpt: "Running Codex vibe coding practice revealed that AI coding agents move autonomously through the entire task when given a broad goal. The real capability in AI development is not prompt writing — it is designing the sequence of work, the permissions granted, and the stop conditions."
tags: ["Codex", "vibecoding", "AIagent", "WorkflowDesign", "OperationsStructure"]
published: true
---

## Summary

The core of AI coding is not fast code generation — it is the human designing where the AI works, how far it goes, and where it stops.

## The AI Moves Too Fast and Too Far

The first thing I confirmed from Codex practice was that AI coding is faster than expected.

A static web app, a landing page, a meeting notes MVP, an ERP leave management feature — all generated faster than anticipated. But as the practice continued, a more important problem came into view: the AI moves too fast and does too much.

The intended flow in the $pdca practice was:

- Write Plan
- Write Design
- Reflect DESIGN.md
- Write AGENTS.md
- Do implementation
- Check verification
- Act improvement

In practice, one broad instruction ran the entire flow automatically. The output looked like a success, but the intermediate judgment steps were skipped entirely.

## Give the AI Not Just a Goal — Also a Stop Condition

That experience surfaces one clear lesson: give the AI not just a goal, but also a stop condition.

- "Only perform this stage"
- "Do not proceed to the next step"
- "Create the design document and stop"
- "Begin implementation only after approval"

Without these instructions, the AI does more work with good intentions.

## Figma MCP vs. DESIGN.md — Choosing the Right Tool

The Figma MCP practice produced a similar lesson. Generating design files directly through the integration was impressive, but the free plan hit its call limit quickly. Even a powerful tool has to be evaluated against cost, limits, and repeatability before it can be used in production.

The DESIGN.md approach was far more practical. Design standards could be reflected in code without any external calls, and it held up under repeated revision.

The difference between the two:

- Figma MCP: strong for generating visual design drafts
- DESIGN.md: strong for code-based UI refinement and repeated iteration

In the current operating environment, DESIGN.md is the more production-ready approach.

## Operating Principles for Using Codex

Based on this practice, I have set operating principles for how to use Codex going forward.

- New practice sessions always start in a separate folder.
- Plan and Design are confirmed before implementation begins.
- DESIGN.md and AGENTS.md are written first.
- The Do stage only begins after approval.
- Act decisions are made after reviewing Check results.
- Plugins and MCP are verified as experimental tools before relying on them.
- Full access is not granted to actual production projects from the start.

## The Core Insight

AI development capability is not just the ability to write good prompts. It is the operational ability to design the sequence in which AI works and the permissions it is given.

Codex is powerful. And precisely because it is powerful, the human needs to be a more deliberate operator.

---

Related Log: [Codex Vibe Coding Practice — Starting to See How Plugins and Skills Work](/en/log/2026-05-25-codex-vibecoding-plugin-skills-practice/)
