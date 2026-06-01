---
title: "Commit Hero Deployed — First AI Product Build Loop Closed"
date: 2026-05-25
excerpt: "Took the Codex Master Class learnings into an actual project. Ran the full Deep Interview → Plan → Design → Do → GitHub → Cloudflare sequence and registered Commit Hero as Codex experiment 001 in the chulbuji.com Vibe Coding Lab."
tags: ["CommitHero", "Codex", "vibecoding", "AIProductBuild", "CloudflarePages"]
published: true
showInLog: true
---

Today I took the Codex Master Class learnings into an actual project. I built and deployed Commit Hero — a web app that generates an RPG-style developer card from a GitHub username.

## Deep Interview and Upfront Design

This time I didn't start with implementation. I ran five Deep Interview sessions with Codex first. Service purpose, card structure, data criteria, UX flow, and design direction — each was narrowed down in sequence. Then came the Plan document, the Design document, and AGENTS.md.

## Implementation and Deployment

Built on Vite + React + TypeScript. Confirmed everything working locally, then committed to GitHub.

```
commit: da5ca67
feat: implement GitHub RPG developer card MVP
```

Created the GitHub repository with the GitHub CLI and pushed. Connected to Cloudflare Pages and deployed. Verified card generation and image download on the live URL.

Demo: [https://codex-commits-hero.pages.dev](https://codex-commits-hero.pages.dev)

## Turning It Into a chulbuji.com Asset

Finally, added the Vibe Coding Lab page to chulbuji.com Projects and registered Commit Hero as Codex experiment 001.

Today's loop: Deep Interview → Plan → Design → Do → GitHub → Cloudflare → chulbuji.com asset

---

**What I built:** GitHub RPG developer card web app and the chulbuji.com Vibe Coding Lab structure  
**What broke:** The code itself held up fine, but deployment pipeline judgment calls appeared — local Git vs. remote repository differences, gh CLI authentication, and handling private repository links.  
**What I learned:** Skipping Deep Interview and going straight to implementation blurs the scope.  
**Next:** Improve mobile layout, stats 0 value display, and copy polish — then prepare Codex experiment 002.
