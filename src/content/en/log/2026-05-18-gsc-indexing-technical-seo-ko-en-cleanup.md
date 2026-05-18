---
title: "Technical SEO and KO/EN Cleanup in Response to GSC Indexing Holdback"
date: 2026-05-18
excerpt: "Four fixes in response to GSC 'Crawled - currently not indexed': hreflang restoration, noindex sitemap exclusion, trailing slash normalization, and KO/EN content alignment."
tags: ["site-ops", "GSC", "technical-SEO", "hreflang", "sitemap", "KO/EN-parity"]
published: true
showInLog: true
project_tag: "chulbuji-rebrand"
---

GSC sent a "Crawled - currently not indexed" signal.

Before writing more content, I decided to audit the site structure first. The right order was to understand how search engines were reading chulbuji.com before adding anything on top.

Four things were fixed.

First, hreflang slug mapping was restored. When KO and EN pages don't point to each other precisely, search engines leave both in an ambiguous state.

Second, noindex pages were excluded from the sitemap. Listing a page in the sitemap while telling crawlers not to index it sends conflicting signals.

Third, trailing slashes on LogCard internal links were normalized. `/log/post` and `/log/post/` now resolve consistently to the same canonical URL.

Fourth, KO/EN content mismatches were corrected.

The build passed clean at 225 pages. Deployment completed across 6 commits.

Stopping here. The `_redirects` cleanup stays untouched. I'll watch how GSC responds to these changes over the next 3–7 days before deciding on a second pass. Stack too many changes at once and there's no way to know what actually moved the needle.

This work wasn't about adding content — it was about making sure the content that already exists gets read correctly.

Next action: check GSC indexing status in 3–7 days. If there's no improvement, review `_redirects` cleanup as a second-pass candidate.
