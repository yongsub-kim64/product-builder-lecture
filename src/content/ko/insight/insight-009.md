---
title: "AI 자동매매를 만들면서 몰랐던 것"
date: 2026-04-07
excerpt: "코드는 한 줄도 안 짰다. 그런데 오늘 가장 많이 쓴 건 코딩 실력이 아니었다. '무엇을 만들어라'를 정확하게 지시하는 능력이었다."
tags: ["자동매매", "KIS API", "규칙엔진", "AI협업", "BuildingInPublic", "철부지"]
published: true
---

오늘 드디어 자동매매 시스템을 완성했다. 내일 아침 처음으로 혼자 돌아간다.

한국투자증권 API 연동, 이동평균·RSI 기반 규칙 엔진, 손실한도 안전장치, 텔레그램 알림, 스케줄러까지. 코드는 한 줄도 직접 짜지 않았다. 전부 AI한테 시켰다.

근데 오늘 가장 많이 쓴 건 코딩 실력이 아니었다.

"무엇을 만들어라"를 정확하게 지시하는 능력이었다.

---

처음엔 AI한테 매매 신호 판단까지 맡기려 했다. AI가 차트를 보고 "지금 사라" 하면 사는 구조. 근데 설계하다 보니까 그게 아니라는 걸 알았다. 규칙이 없으면 AI는 매번 다른 말을 한다. 시장이 흔들릴수록 더.

그래서 방향을 바꿨다. 규칙 엔진이 중심이고, AI는 그 규칙을 코드로 구현하는 보조 역할. 판단은 사람이 미리 만든 규칙이 한다.

이게 생각보다 큰 차이였다.

---

그리고 오늘 그 판단이 실제로 한 번 작동했다.

KOSPI가 20일선 아래에 있었고, 시장 레짐 필터가 자동으로 매수를 막았다. 미국 관세 충격이 이어지는 장세였다. 시스템이 스스로 피했다. 내가 뭔가를 한 게 아니라, 미리 만든 규칙이 알아서 움직인 거다.

솔직히 이 부분은 만들 때 "이게 진짜 되겠어?" 싶었다. 근데 됐다.

---

내일 아침 6시, 첫 자동 실행이 시작된다.

잘 될지 모르겠다. 규칙이 맞는지도 아직 모른다. 지금은 그냥 기다리는 중이다.

AI한테 코드를 시키는 것보다, AI한테 정확히 무엇을 만들지 설계하는 쪽이 훨씬 어렵고 훨씬 중요했다. 규칙이 명확할수록 AI는 실행 도구가 된다. 규칙이 흐릿하면 AI는 그냥 빠른 즉흥 연주자가 된다.

이걸 처음부터 알았다면 설계 단계에서 훨씬 더 시간을 썼을 것 같다.

---

자동화 시스템 만들어보신 분, 규칙 설계에서 가장 막혔던 게 뭐였어요?

---

*EN Summary*

**What I built:** An automated trading system using rule-based engine + KIS Open API, with Telegram alerts and scheduler — zero lines of code written by hand.
**What broke:** My assumption that AI should make the trading decisions. Without fixed rules, AI gives a different answer every time the market shifts.
**What I learned:** The clearer your rules, the more useful AI becomes as an executor. Designing *what to build* precisely is harder — and more important — than building it.
