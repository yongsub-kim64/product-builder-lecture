---
title: "AI Content Assistant MVP — From Dev Setup to Live Service in One Day"
date: 2026-04-24
excerpt: "VS Code + Claude Code install, Next.js + TypeScript + Tailwind CSS project, GitHub + Cloudflare Pages pipeline, 8 screens implemented, OpenAI GPT-4o API connected, live service deployed — all in one day. 23 seconds from git push to production."
tags: ["AIContentAssistant", "MVP", "ClaudeCode", "ClaudeDesign", "CloudflarePages", "LiveService", "SmallBusiness"]
published: true
showInLog: true
project_tag: "AIContentAssistant"
version: "MVP"
project_link: "ai-content-assistant"
next_action: "Send aicontent.chulbuji.com link to 5 real small business owners → collect usage feedback"
---

Date: 2026-04-24

The AI Content Assistant MVP for small business owners is live. Built in one day.

## Dev Environment

Set up VS Code and Claude Code in the morning. Kept the project completely separate from the stock auto-trading project to avoid conflicts. Isolated to `C:\projects\ai-content-mvp`.

Created the project with Next.js 16 + TypeScript + Tailwind CSS. First push to a GitHub private repo done.

## Deployment Pipeline

Connected Cloudflare Pages for auto-deployment. One git push triggers the full build and deploy pipeline. The key was solving the deployment issue with static export mode.

Connected the `aicontent.chulbuji.com` subdomain via Cloudflare DNS CNAME. SSL applied automatically.

## Screen Implementation — Claude Design Handoff

Used Claude Design Handoff to pass the prototype directly into Claude Code. 8 screens were implemented automatically: onboarding, input, loading, results, editing, and templates.

## API Integration

Connected OpenAI GPT-4o API via a Cloudflare Worker. Structured prompts by business type and content goal.

| Business Type | Content Goal |
|---------------|--------------|
| Café / Hair Salon / Craft Studio / Retail | New product / Grand opening / Event / Return visit |

Confirmed working generation of: SNS copy, blog posts, short-form scripts, hashtags.

## Deployment Automation

GitHub Actions pipeline deploys both Pages and Worker simultaneously. No manual wrangler commands — one git push handles everything.

## Today's Numbers

- Total dev time: approx. 1 day
- Screens implemented: 8
- Time from git push to live: 23 seconds
- Current infrastructure cost: ₩0

## Next

Real-user test with 5 small business owners. A feature no one uses isn't finished.
