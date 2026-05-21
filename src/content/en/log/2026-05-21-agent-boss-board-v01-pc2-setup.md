---
title: "Building Agent Boss Board v0.1 and Setting Up the PC2 Operating Environment"
date: 2026-05-21
excerpt: "A record of building the first Agent Boss Board v0.1 prototype and setting up PC2 as a secondary development and operation environment for chulbuji.com."
tags: ["AgentBossBoard", "Operating Environment", "PC2", "AI Collaboration"]
published: true
showInLog: true
project_tag: "AIOperationStrategy"
---

## Background

PC1 stays as the primary operating machine, kept stable for automated trading.

PC2 was set up as a secondary development and operation environment — Codex, Claude Code, and VSCode as the main tools. With multiple AI agents and projects running in parallel, a central internal board to track the overall picture became necessary. Actual device names are not used in public posts; the machines are referred to as PC1 and PC2.

## Building Agent Boss Board v0.1

A new project was created using Vite + React + TypeScript.

Codex CLI was installed and the sandbox was configured. The structure was organized into six sections: Today View, Project Board, Agent Roster, Task Queue, Handoff Prompt Generator, and Asset Log.

After passing both lint and build checks, the work was committed and pushed to a GitHub Private Repository.

## Setting Up chulbuji.com on PC2

The chulbuji.com repository was cloned to PC2.

`npm.cmd install` was run to install packages, and `npm.cmd run build` was used to verify the Astro build. The result came back as 231 pages built / Complete.

During the npm install process, package-lock.json was modified as a side effect. Since this was not an intentional change, it was restored with `git restore package-lock.json`. The final git status was confirmed clean.

## Operating Standards

- Run `git pull origin main` before starting any work.
- Run `npm.cmd run build` after changes to verify the build.
- Review changes before running `git commit` / `git push`.
- Do not edit the same file on PC1 and PC2 at the same time.
- Keep the automated trading folder and the chulbuji.com folder separate.

## Next Steps

For Agent Boss Board v0.1.1: reviewing README cleanup, Korean UI localization, and adding a copy button to the Handoff Prompt Generator.

chulbuji.com Log updates will use Claude Code, but initially scoped only to adding Log files.
