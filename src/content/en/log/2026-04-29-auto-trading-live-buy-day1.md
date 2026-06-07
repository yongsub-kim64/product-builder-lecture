---
title: "First Live Buy Day After the Upgrade — The System Sold and Bought on Its Own"
date: 2026-04-29
excerpt: "Live account day 10. First real buy day after RS filter + trailing stop upgrade. Morning: 2 auto-sells (Samsung +0.84%, NAVER +2.31% / realized P&L +₩31,004). Afternoon: 3 new buys (SK Telecom + KB Financial, 12 shares total). 2 bugs fixed same day. Close: total ₩4,942,207 / cumulative P&L -₩39,796."
tags: ["auto-trading", "trailing-stop", "live-account", "STEP14"]
published: true
showInLog: true
project_tag: "자동매매"
project_link: "stock-auto-trade"
---

Live account day 10. The first day with real buys since the RS filter and trailing stop upgrade. No manual intervention today.

Shortly after open, Samsung Electronics and NAVER both hit their trailing stops and were auto-sold. Samsung +0.84% (+₩11,004), NAVER +2.31% (+₩20,000). Daily realized P&L: +₩31,004.

The 10:00 scan ran in BUY_DRY_RUN mode first — logic verification before going live. LG Chem and LG Electronics came up as candidates. Logs checked out normal. Switched to live buy mode at 10:27.

From the afternoon, the system ran on its own. 13:00: SK Telecom 10 shares, KB Financial 1 share. 14:00: SK Telecom 2 more shares. Total 12 shares at an average of ₩95,383.

Two bugs caught and fixed on the spot. RS disqualification log confusion → added [additional-buy-RS-exempt] tag. Web export key error → renamed "result" to "regime".

---

Today's numbers

- Total valuation: ₩4,942,207
- Daily realized P&L: +₩31,004
- Cumulative P&L: -₩39,796
- Holdings: 3 stocks (2 empty slots)

Trade log

- 09:04 Samsung Electronics (005930) trailing stop auto-sell (+0.84%)
- 09:04 NAVER (035420) trailing stop auto-sell (+2.31%)
- 10:00 BUY_DRY_RUN scan — LG Chem / LG Electronics as candidates, verified normal
- 10:27 BUY_DRY_RUN=False (switched to live buy mode)
- 13:00 SK Telecom (017670) 10 shares @ ₩95,300
- 13:00 KB Financial (105560) 1 share @ ₩160,000
- 14:00 SK Telecom (017670) 2 additional shares @ ₩95,600

---

Today's observation

The RS filter and trailing stop upgrade ran together through a full buy cycle for the first time. Sells fired as designed; buys only went through for stocks that passed the RS threshold. Out of 20 universe stocks, the afternoon scan ended with just SK Telecom and KB Financial filling orders.

Two slots remain empty. The system held cash when no strong candidates appeared — the structure worked as intended.

The observation from today is written up separately.
→ [What a +0.84% Trailing-Stop Exit Taught Me About Rule-Based Automation](/en/insight/insight-022/)

Next: 10:00 scan tomorrow for additional buy attempts. BULL regime (4/5) maintained.

This record is not investment advice. It's an operations log documenting what happens when building and running an auto-trading system alongside AI.

---
> ※ This content is a personal experiment record, not investment advice.  
> All investment decisions and their consequences are the responsibility of the individual.
