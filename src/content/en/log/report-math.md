---
title: "Mathematics Report: Probability Structure of Lotto 6/45 Through Combinatorics"
date: 2026-01-23
excerpt: "Combination formula C(45,6) = 8,145,060. In-depth analysis of the mathematical calculation process and meaning of lottery 1st prize winning probability."
tags: ["lottery", "mathematics", "combinatorics", "probability"]
published: true
showInLog: false
---

Many people know that the lottery 1st prize winning probability is 1 in 8,145,060. But have you ever wondered how this number is calculated and what its mathematical background is?

## Combinatorics Basics: nCr

Lotto 6/45 is a game of selecting 6 out of 45 balls regardless of order. Expressing this mathematically:

**C(45, 6) = 45! / (6! × 39!)**

Where:
- n! (factorial) is the value of multiplying all natural numbers from 1 to n.
- 45! = 45 × 44 × 43 × ... × 2 × 1

## Step-by-Step Calculation

Actually calculating it:

```
C(45,6) = 45! / (6! × 39!)
        = (45 × 44 × 43 × 42 × 41 × 40) / (6 × 5 × 4 × 3 × 2 × 1)
        = 5,864,443,200 / 720
        = 8,145,060
```

In other words, the number of cases of selecting 6 out of 45 numbers is **8,145,060 cases**.

## Meaning of Probability

What does this number mean?

- If you purchase 1 ticket per week, it would take an average of **about 156,000 years** to win 1st prize.
- Even purchasing 100 tickets per week would require **about 1,560 years**.
- This is a probability more than 8 times lower than the probability of being struck by lightning (about 1 in 1 million).

## What Are the Probabilities for 2nd and 3rd Prizes?

- **2nd Prize** (5 numbers + bonus number): C(6,5) × C(1,1) × C(38,0) / C(45,6) = 6 / 8,145,060 = about 1 in 1.35 million
- **3rd Prize** (5 numbers): C(6,5) × C(39,1) / C(45,6) = 234 / 8,145,060 = about 1 in 34,000

## Conclusion: Mathematics Doesn't Lie

From a combinatorial perspective, lottery is thoroughly a game of probability. No matter which numbers you select, no matter which strategy you use, the mathematical probability of winning 1st prize doesn't change.

This is precisely why lottery should be enjoyed as 'entertainment,' not 'investment.'
