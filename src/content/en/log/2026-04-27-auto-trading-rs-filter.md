---
title: "KOSPI Hit a Record High — But My Portfolio Was Down"
date: 2026-04-27
excerpt: "KOSPI hit an intraday record. 4 of my 5 positions were in the red. The system was filling MAX_HOLD=5 slots in order of qualification, not strength. Added an RS filter and removed forced slot-filling. Running BUY_DRY_RUN=True for 2–3 trading days."
tags: ["AutoTrading", "RSFilter", "RelativeStrength", "KOSPI200", "StockSelection", "BuyDryRun"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "v1.5"
project_link: "stock-auto-trade"
next_action: "Check DRY_RUN logs over 2–3 trading days. Verify whether RS-filtered candidates outperform the full candidate pool and KOSPI200 ETF on average."
---

Date: 2026-04-27

4 out of 5 positions were down. On the day KOSPI hit an intraday all-time high.

## Root Cause

Only Samsung Electronics moved +3% with the market. The rest drifted independently. The cause was clear: the system was running in a mode that filled MAX_HOLD=5 slots. It picked stocks in qualification order, not strength order. The result was a portfolio full of stocks that pass absolute conditions — MA20, RSI — but move independently from the broader market.

## What Changed Today

**One: Added an RS (Relative Strength) filter.**
Using the KOSPI200 ETF's 20-day return as the benchmark, any stock with excess return below -3% is disqualified. Remaining candidates are sorted by excess return and bought strongest-first.

**Two: Removed forced slot-filling.**
If only 2 strong candidates qualify, buy 2. Leave the rest in cash.

## Validation Approach

Not applied to the live account yet. Running BUY_DRY_RUN=True for 2–3 trading days first. Sell logic stays on live execution while buy decisions run in simulation mode only.

## Changes Made

- Files modified: config.py / rule_engine.py / main.py
- Functions added: get_market_rs() / calc_rs_score() / _run_buy_cycle() / _save_dry_run_tracking()
