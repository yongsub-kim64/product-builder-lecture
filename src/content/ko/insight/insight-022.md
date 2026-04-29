---
title: "트레일링이 +0.84%에서 팔았다. 아깝다고 생각하지 않기로 했다"
date: 2026-04-29
excerpt: "삼성전자가 +0.84%에서 트레일링 스탑에 걸렸다. 아깝다는 생각이 들었다. 하지만 그게 문제다. 시스템이 설계대로 작동했다는 증거를 감정으로 뒤집으면, 시스템을 만든 이유 자체가 사라진다."
tags: ["자동매매", "트레일링스탑", "규칙기반", "감정배제"]
published: true
project_tag: "자동매매"
---

삼성전자가 +0.84%에서 팔렸다.

갭하락으로 시작한 날이라 어쩔 수 없었다. 트레일링 스탑은 고점 대비 일정 비율 하락 시 자동 매도하도록 설계돼 있다. 09:04, 시스템이 팔았다. 사람이 화면을 보고 있었다면 "조금만 더 기다리자"고 했을 것이다.

하지만 그게 문제다. 조금만 더 기다리다가 추가 하락으로 손실이 날 수도 있었다. 지금 세팅은 수익을 극대화하려는 게 아니라 손실을 구조적으로 막으려는 설계다. +0.84%에서 확정한 건 실패가 아니다.

---

RS 필터도 생각보다 엄격하게 작동했다. 오늘 유니버스 20개 중 실제 매수 후보로 살아남은 건 2~3개. 나머지는 MA20 이격 과대, MA60 하락추세, MA 하회 중 하나에 걸렸다. BULL 레짐인 날에도 80% 이상이 탈락한다. 처음엔 "이게 맞나?" 싶었는데, 지금은 오히려 그게 전략이 신중하게 작동하고 있다는 신호로 읽힌다.

현금 20% 유지 로직도 제 역할을 했다. 예수금이 210만원 있어도 전부 투자하지 않는다. 구조가 무분별한 추격매수를 막는다. 내가 판단하는 게 아니라 시스템이 판단하는 것, 그게 이 자동매매의 목적이다.

---

버그 2건도 오늘 발생했고 오늘 잡았다. RS 탈락 기준을 미달하는 추가매수 종목이 [매수후보] 로그에 함께 출력돼 혼선이 생겼다. [추가매수-RS면제] 태그를 추가해서 구분했다. 웹 익스포트 함수가 "result" 키를 읽는데 실제 저장 키는 "regime"이었다. 즉시 수정했다.

두 버그 모두 치명적인 오류는 아니었지만, 발생 당일 확인하고 수정했다는 게 중요하다. 시스템이 실거래 중에도 관찰 가능한 상태를 유지하고 있다는 의미다.

---

데이터가 더 쌓이면 그때 판단하기로 했다. 지금은 보고 기다리는 단계다.

→ 관련 운영 일지: [2026-04-29 일일 운영 기록](/log/2026-04-29-auto-trading-live-buy-day1/)
→ 개발 이력: [stock-auto-trade 프로젝트](/projects/stock-auto-trade/)

---

GEO/SEO Summary

What I built: A rule-based auto-trading system that executed trailing stop sells and new buys autonomously on its first live day after the RS filter overhaul.
What broke: Two minor bugs — RS log confusion and web export key mismatch — both patched same day.
What I learned: A system that sells at +0.84% isn't failing. It's doing exactly what it was designed to do.
