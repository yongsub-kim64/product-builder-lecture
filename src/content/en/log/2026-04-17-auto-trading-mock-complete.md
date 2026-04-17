---
title: "Auto-Trading: 1-Week Paper Trade Complete — Switching to Live"
date: 2026-04-17
excerpt: "7-day paper trading run (Apr 11–17) wrapped up. All core functions validated: regime filter, trailing stop, 5-slot management. 4 bugs found and fixed same-day. Final portfolio: ₩10,058,486. Weekly P&L: +₩45,060 (+0.58%). Live trading starts Monday 08:50."
tags: ["AutoTrading", "KIS API", "PaperTrading", "LiveSwitch", "RegimeFilter", "TrailingStop", "5SlotManagement"]
published: true
showInLog: true
project_tag: "AutoTrading"
version: "Live"
project_link: "stock-auto-trade"
next_action: "Live account trading starts 2026-04-21 (Mon) at 08:50"
---

Date: 2026-04-11 – 2026-04-17

Seven days. April 11 to 17. The KIS OpenAPI-based auto-trading system ran on paper the whole time.

## Day 1 — Regime Filter Worked

On the first day, KOSPI was in a downtrend. The regime filter activated. Zero buy signals. Full cash hold. The system doing nothing was the correct behavior.

## First Buy and First Trailing Stop

Kakao was the first buy. Today (04.17), the trailing stop triggered for the first time.

- Peak price: ₩50,900
- Auto-exit: ₩49,850
- Return: +3.01%, realized P&L: +₩30,060

The same-day re-entry block also worked correctly. In the afternoon, Celltrion entered and the 5-slot filled back up.

## 4 Bugs Fixed

Found and fixed 4 bugs during the week — all corrected same-day.

| Bug | Fix |
|-----|-----|
| Buy amount counted as a loss | P&L only accumulated on sell |
| Daily loss limit hard-coded | Unified to config.MAX_DAILY_LOSS |
| Paper trading cash balance stuck | Added: total_eval – holdings_eval calculation |
| Live account number format error | Removed dashes, digits-only format |

## Validated Functions

- Regime filter — KOSPI MA20 downtrend block working correctly
- Trailing stop — Activated at +4% / auto-sell at –2% from peak (confirmed on Kakao)
- 5-slot management — Empty slot auto-refilled after sell
- Same-day re-entry block — Cooldown working after trigger
- Live account API connection — Token issuance / balance query / TR_ID branching confirmed

## Not Yet Validated

Stop loss (–3%) live trigger — to be confirmed during live account operation

## Weekly Summary

- Start: ₩10,000,000 → Final: ₩10,058,486
- Weekly realized P&L: +₩45,060 (+0.58%)
- Trades: 5 buys / 1 sell

## What's Next

Live account trading starts 2026-04-21 (Mon) at 08:50.
