---
title: "AI Content Assistant for Small Businesses — From Idea to Screen to MVP Scope"
date: 2026-04-22
excerpt: "An idea sketched into a business plan application became a mobile interactive prototype in a single day using Claude Design. v1 feedback led to v2, and it was only after seeing the screens that the MVP scope and dev environment direction became clear."
tags: ["AIContentAssistant", "Prototype", "ClaudeDesign", "SmallBusiness", "MVP"]
published: true
showInLog: true
project_tag: "AIContentAssistant"
version: "Prototype"
project_link: "ai-content-assistant"
next_action: "Finalize first implementation order from MVP scope doc — goal is to get just the input → generation → result display flow working first"
---

Date: 2026-04-22

## The Day I Moved an Idea onto a Screen

There was an idea sitting in a business plan application. An AI tool for small business owners: upload a photo and a short note, and get a blog post, SNS copy, a short-form video script, and hashtags automatically. The idea was organized while filling out the application (Q1–Q3), but whether it would actually work was something only building it could answer.

Today I moved it onto a screen.

## First Time Using Claude Design

I used Claude Design as the prototyping tool for the first time. I wrote a prompt based on the idea from the application and generated a mobile web hi-fi interactive prototype. The entire flow came out in one pass — onboarding, dashboard, input screen, generating state, results screen, editing, templates, and save confirmation.

It felt like a working service flow. Tabs responded. Screens transitioned. Things that aren't visible at the idea stage — where users might pause, what order they'd move through — started to show up.

## What Changed in v2

After seeing v1, a few things felt off. The onboarding flow was too long. The distinction between photo and memo input on the input screen was unclear. The results screen tried to show too much at once.

In v2, I shortened the onboarding and simplified the input structure. I separated the results and editing screens, and reorganized the template selection screen. The flow became noticeably clearer.

## The MVP Scope Only Became Visible After Seeing the Prototype

Once the screens existed, the next question followed naturally: which of these actually needs to be built? Today I wrote up the MVP implementation scope separately.

The development environment direction also became clear. VS Code + GitHub + Cloudflare Workers over Firebase Studio — the structure needs backend flexibility and deployment control.

## Where Things Stand After Today

Idea → screens → MVP scope all happened in one day. Validation hasn't happened yet. Whether real small business owners can use these screens, whether the output is actually useful for real marketing — that comes in the next step.

The prototype exists. Next is getting one flow working at a time.

---

**Status:** Prototype v2 complete / MVP scope defined / Preparing for real-user validation
