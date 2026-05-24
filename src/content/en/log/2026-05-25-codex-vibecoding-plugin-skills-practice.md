---
title: "Codex Vibe Coding Practice — Starting to See How Plugins and Skills Work"
date: 2026-05-25
excerpt: "Followed Builder Josh's YouTube course to run hands-on Codex practice covering plugins, skills, DESIGN.md-based UI work, and the $pdca flow. Key takeaway: AI agents move autonomously through the entire task, so the human needs to design clear stop conditions at each stage."
tags: ["Codex", "vibecoding", "DESIGN.md", "PDCA", "AIagent", "plugins"]
published: true
showInLog: true
---

I worked through Builder Josh's recorded YouTube course to try out OpenAI Codex hands-on.

The core of the course was not "how to build an app with Codex." It was a process of experiencing how to integrate an AI coding agent into an actual working flow — from installing the Codex app, connecting plugins and skills, to using external tools like Figma and bkit together.

## What I Actually Did

- Installed Codex app and imported Claude Code workflow
- Installed bkit-codex and connected the Figma plugin
- Ran /figma-use practice → landing page improvements based on DESIGN.md
- Ran Vibe-ERP leave management feature practice using $pdca
- Ran real-time meeting notes app practice using /goal

## Figma Integration vs. DESIGN.md Approach

Figma integration was impressive, but on the Starter plan I hit the MCP tool call limit quickly. Using it for connection validation and initial drafts is realistic; repeated iteration is not.

The DESIGN.md approach was far more stable. I could reflect design standards directly in code without any external calls. The output was a static landing page built on a white canvas card structure.

## The Key Lesson from $pdca Practice

The biggest learning came out of the $pdca flow. When I gave a broad instruction like "let's build the app," Codex handled everything from Plan through Report in one pass. AI coding agents move autonomously to the end further than expected. The human has to clearly hold the stage-gate approvals.

This was the day I started to understand in my body what /plugin, $skills, /figma-use, $pdca, and /goal each do. I can't say I'm fluent yet, but the outline of the concepts is now visible.

---

**What I built:** Static landing page based on DESIGN.md / Meeting notes MVP / ERP leave management feature draft  
**What broke:** Broad $pdca instruction with no stage separation → AI processed the entire flow at once  
**What I learned:** Vibe coding is not about delegating to AI — it is about the human designing the scope, permissions, and stop conditions.
