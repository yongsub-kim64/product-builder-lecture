---
title: "Website Restructuring — Shifting to a Record-Asset Architecture"
date: 2026-04-11
excerpt: "Two months after the rebrand, records started piling up and the structure needed to follow. A log of the transition from intro site to long-term asset architecture."
tags: ["SiteOps", "IA", "StructureDesign", "CONTENT-SOP"]
project_tag: "chulbuji-rebrand"
published: true
---

This is a follow-up to the [chulbuji.com Rebrand Launch (2026-02-07)](/en/log/001-rebrand-launch).

---

Two months have passed since the rebrand announcement.

Records have been accumulating — auto-trading logs, RunBuddy experiment notes, insight posts. As the records grew, the limits of the original structure became visible. The menu order didn't match the intent. There was no way to browse logs and insights in one place. Project pages were disconnected from their related records.

The declaration was made, but the structure hadn't caught up.

Today, I fixed that.

## What Changed

**GNB reordered — Home / Log / Insight / Projects / About**

The previous menu led with Playground and Tools. Visitors arrived to see experiment utilities first. The priority was wrong — this site is about records. Reordered to show Log → Insight → Projects first.

**Footer rebuilt — About / Contact / Archive / Privacy / Terms / GitHub**

Building the trust structure of the site. GitHub link added so anyone can follow the work externally.

**/archive/ page created**

With Log and Insight separated, it was hard to see the full flow of records. The new /archive/ page merges both types chronologically, with type filters (All / Log / Insight).

**Projects auto-linked — via project_tag**

Project pages previously required manual link management. As records grew, gaps were inevitable. Added `project_tag` to each Log/Insight file; project detail pages now filter and display related entries automatically. Publish a record and it shows up on the project page.

**Playground/Tools noindexed**

The lottery generator and mini-games don't need search exposure. Added noindex — still accessible within the site.

**CONTENT-SOP.md written**

Restructuring the site without documenting operating standards means it falls apart again quickly. Frontmatter templates for Log/Insight/Projects, project_tag linking criteria, and a pre-publish checklist are all documented. All future publishing follows this standard.

## What This Means

The rebrand goal was a space for records. That original structure was a starting frame.

Two months in, with records piling up, the structure needs to hold them. Records connecting to each other, organized by project, navigable as long-term assets.

Today's restructuring is the shift from a simple intro site to a record-asset architecture.

## What's Next

All future Log/Insight/Projects content will be published following CONTENT-SOP.md. The structure is in place — now it gets filled.

---

← [Back to Rebrand Launch log](/en/log/001-rebrand-launch)
