---
title: "Auto-Trading v2.0 Upgrade Direction"
date: 2026-05-01
excerpt: "Defined the v2.0 upgrade direction for a more production-ready system. Seven improvement areas: zero-order bug after BUY signal, available-cash API errors, high-priced stock handling, ratio-based capital allocation, market-strength-based entry count, DRY RUN vs LIVE mode clarity, and API retry/fallback. Built through vibe coding: expert AI for analysis, Claude Code for implementation."
tags: ["AutoTrading", "v2.0", "Upgrade", "VibeCoding", "CapitalAllocation", "stock-auto-trade"]
published: true
showInLog: true
project_tag: "AutoTrading"
project_link: "stock-auto-trade"
---

Defined the v2.0 upgrade direction for the auto-trading system — moving toward a structure better suited for live account operation. Rather than modifying the code directly, this work follows a vibe coding approach: an expert AI analyzes the problems and defines the direction; Claude Code handles the actual implementation.

---

## Why the Upgrade

The current system runs on KIS OpenAPI and manages up to 5 positions with a ₩5M seed. Three structural problems emerged during live trading preparation.

**Problem 1: BUY signals fired but zero orders placed**
In the paper trading API, the available cash field wasn't returning a valid value, causing the system to treat filled buy conditions as insufficient cash.

**Problem 2: High-priced stocks excluded from a ₩5M account**
With a ₩1M per-position budget, any stock priced above ₩1M is automatically excluded. Losing strong RS candidates purely because of price is a structural limitation worth addressing.

**Problem 3: Code rewrite needed when seed capital grows**
Fixed-amount budgets mean the code must be manually updated whenever the account grows — say, from ₩5M to ₩10M.

## v2.0 Core Improvements

1. Fix the zero-order bug after BUY signals
2. Add fallback logic for available-cash API errors
3. Switch to ratio-based capital allocation (same structure for ₩5M and ₩10M)
4. Allow high-priced stock exceptions with account concentration limits
5. Adjust max new-position count based on market strength
6. Clearly separate DRY RUN vs LIVE mode in Telegram alerts
7. Strengthen API error retry and fallback structure

## Core Design Decisions

**Ratio-based allocation**: 20% per position at ₩5M; same ratio applies at ₩10M. The structure holds regardless of seed size — no code rewrites needed.

**High-priced stock exceptions**: Don't auto-exclude stocks above ₩1M, but cap how much concentration they can represent in the account. Opportunity and concentration risk are evaluated together.

**Market-strength-based entry count**: In bull markets, widen the entry window. In bear markets, reduce or pause new entries. The RS filter already screens individual stocks; this adds a second layer that adjusts total new entries based on overall market strength.

## Collaboration Structure

This project follows a clear division of roles:

- **Operator**: identifies problems, sets direction, makes final decisions
- **Expert AI**: analyzes problems, proposes improvements, reviews risks
- **Claude Code**: modifies code, applies changes, confirms results

## Current Status

The v2.0 direction is fully defined. Expert AI review is complete, and Claude Code instruction specs are being finalized. Next step: implement the changes and validate with a full DRY RUN for at least one trading day.

After validation, the changes will be applied to the live account. After approximately two weeks of live data, commission and tax accounting, high-priced stock performance, and market-strength filter calibration will be reviewed.

---

This is a personal automated trading system operations log. Not investment advice.
