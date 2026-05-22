---
title: "The RS Filter Problem Wasn't the Formula — It Was a Skewed Benchmark"
date: 2026-05-22
excerpt: "I suspected the KOSPI200 ETF benchmark was distorting the RS filter due to mega-cap skew. Switching to a universe-weighted benchmark made things worse — the market-cap weighted universe RS came out even higher than the ETF. The problem isn't which benchmark you use; it's that all common benchmarks carry the same skew."
tags: ["auto-trading", "RS-filter", "regime", "stock-auto-trade"]
published: true
project_tag: "자동매매"
---

## Summary

I suspected that using the KOSPI200 ETF as the RS benchmark was unfairly filtering out stocks because of mega-cap concentration. Recalculating with a universe-weighted benchmark produced the opposite of what I expected: market-cap weighted universe RS came out higher than the ETF. The problem isn't the ETF — it's a skew that exists in every commonly used benchmark.

## I Thought the ETF Was the Problem

The auto-trading system measures a stock's relative strength by comparing its RS against the KOSPI200 ETF. The suspicion: the ETF is heavily weighted toward Samsung Electronics, SK Hynix, and similar mega-caps, so comparing individual stocks against it might knock out perfectly good candidates unfairly.

The natural fix seemed to be switching to the universe of 40 stocks instead. Intuitively, that should give a fairer comparison.

## The Data Reversed the Intuition

Market-cap weighted universe RS came out at +36.57% — higher than the ETF at +27.34%. The universe itself is concentrated in a few mega-caps just as much as the ETF.

## Switching the Benchmark Doesn't Fix the Skew

This is the key insight. The problem isn't "we used the ETF." If a benchmark is skewed toward large caps, the RS filter will be distorted regardless of whether you use the ETF or the universe. A biased benchmark produces a biased filter.

That's why changing the benchmark right now is risky. Simple average lowers the bar and floods the filter with candidates. Market-cap weighted makes the filter even stricter. Candidate pool weighted hollows out the filter's purpose. Every alternative trades one distortion for another.

## Build the Verification Tool First

Rather than fixing the benchmark, I built a tool to test whether the current filter is making good decisions. The plan: track every stock rejected by the RS filter and record its D+1, D+3, and D+5 performance.

Was the filter blocking missed gains? Or was it preventing chases into overextended stocks? That question needs data, not intuition.

Next observation: once data accumulates, the first validation metric will be whether D+5 average returns for RS-rejected stocks run higher or lower than held positions.

## What Matters in Auto-Trading

The goal isn't to buy more. It's to have a structure where every buy decision — and every non-buy decision — can be verified with data. Today added one more layer to that structure.

---

Related Log: [The Day the Auto-Trader Bought Nothing — Tracing the Reason for Zero Orders](/en/log/2026-05-22-auto-trading-zero-buy-rs-filter-tracking/)
