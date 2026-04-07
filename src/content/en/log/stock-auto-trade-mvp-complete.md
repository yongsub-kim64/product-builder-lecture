---
title: "Auto-Trading MVP Complete — Rule Engine, Regime Filter & Telegram Alerts"
date: 2026-04-07
excerpt: "KIS API integration, rule engine, loss-limit safety guard, Telegram alerts, and scheduler all done. First automated run starts tomorrow."
tags: ["AutoTrading", "KIS API", "RuleEngine", "AICollaboration", "BuildingInPublic", "StockTrading"]
published: true
showInLog: true
---

Date: 2026-04-07

## What I Did Today
- Completed KIS Open API integration
- Built rule engine: moving averages, RSI, market regime filter
- Implemented loss-limit and emergency stop safety guard
- Connected Telegram alerts
- Linked scheduler
- First automated run ready for tomorrow

## Decisions Made
- The rule engine — not AI — is responsible for all trading decisions
- AI plays a supporting role: checking signals, explaining output, handling exceptions
- If market regime is unfavorable, buy orders are automatically blocked

## What I Confirmed Today
- With KOSPI below the 20-day moving average, the market regime filter fired correctly
- The buy-block logic activated automatically and prevented entry
- In a volatile market, pre-built rules stopped the wobble before human judgment could

## Next Up
- Check first automated run results tomorrow
- Review actual order / block / alert logs
- Refine Telegram alert copy and exception handling flow
- Connect first run results to an Insight post
