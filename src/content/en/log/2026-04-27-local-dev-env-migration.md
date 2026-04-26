---
title: "Firebase Studio Shutdown — Migrating to Local Dev Environment"
date: 2026-04-27
excerpt: "Confirmed Firebase Studio end-of-service. Migrated the chulbuji.com development environment to local VS Code on an LG Gram. Cloned the repo, confirmed the build, cleaned up the Astro 5 content config, and pushed to main. Local → GitHub → Cloudflare auto-deploy pipeline secured."
tags: ["FirebaseStudio", "LocalDevEnvironment", "chulbuji.com", "CloudflarePages", "ClaudeCode", "DevOps"]
published: true
showInLog: true
project_tag: "chulbuji.com"
next_action: "For future Log/Insight updates: edit locally in VS Code → confirm build → push to GitHub"
---

Date: 2026-04-27

Confirmed that Firebase Studio is scheduled to shut down.

## Why the Switch

Every Firebase Studio session required opening a browser, waiting for the environment to load, and dealing with occasional connection drops. The web-based environment had its benefits, but the friction of starting each work session kept growing.

This was the right moment to shift the chulbuji.com development environment to a local machine.

## What Was Done

Cloned the GitHub repository onto the LG Gram, ran `npm install` and `npm run build` locally to confirm the project was working. Then ran Claude Code directly inside local VS Code to clean up the content config for Astro 5 compliance.

Changes made:

- `src/content/config.ts` → `src/content.config.ts` (Astro 5 spec location)
- Removed references to `ko/projects` and `en/projects` collections that had no matching directories

Committed and pushed to the main branch. Confirmed the full GitHub Actions → Cloudflare auto-deploy pipeline is working.

## Result

No more opening Firebase Studio. Work starts immediately in local VS Code. The startup friction is gone, and all future chulbuji.com logs, insights, and project updates will be managed from this local environment.

## Key Takeaway

This wasn't just a dev environment migration — it was a stabilization of how chulbuji.com is operated. Moving away from a temporary web-based environment and establishing a clean, repeatable flow: local development → GitHub push → Cloudflare auto-deploy.

## Next

For all future Log and Insight entries: edit directly in local VS Code, use Claude Code as an AI development assistant, confirm the build locally, then push to GitHub.
