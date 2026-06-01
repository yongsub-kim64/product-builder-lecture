---
title: "Codex 바이브코딩 실습 — 플러그인과 스킬 개념이 보이기 시작했다"
date: 2026-05-25
excerpt: "Builder Josh 유튜브 강좌를 따라 Codex 실습을 진행하면서 플러그인·스킬·DESIGN.md 방식·$pdca 흐름을 직접 체험했다. AI 에이전트는 생각보다 훨씬 자율적으로 끝까지 가기 때문에, 단계별 멈춤 조건을 사람이 명확히 설계해야 한다는 것을 배웠다."
tags: ["Codex", "바이브코딩", "DESIGN.md", "PDCA", "AI에이전트", "플러그인"]
published: true
showInLog: true
---

Builder Josh 유튜브 강좌 녹화본을 보면서 OpenAI Codex 사용법을 직접 따라 해봤다.

강의의 핵심은 "Codex로 앱을 만드는 방법"이 아니었다. Codex 앱 설치부터 플러그인·스킬 연결, Figma와 bkit 같은 외부 도구를 함께 쓰는 방법까지 — AI 코딩 에이전트를 실제 작업 흐름 안에 어떻게 넣을 수 있는지를 체험하는 과정이었다.

## 오늘 실제로 해본 것들

- Codex 앱 설치 및 Claude Code 작업 흐름 가져오기
- bkit-codex 설치 및 Figma 플러그인 연결
- /figma-use 실습 → DESIGN.md 기반 랜딩페이지 개선
- $pdca 기반 Vibe-ERP 휴가관리 기능 실습
- /goal 기반 실시간 회의록 앱 실습

## Figma 연동 vs DESIGN.md 방식

Figma 연동은 인상적이었지만, Starter 플랜에서는 MCP tool call 한도에 금방 걸렸다. 반복 수정보다는 연결 검증과 초안 생성용으로 쓰는 게 현실적이다.

DESIGN.md 방식은 훨씬 안정적이었다. 외부 호출 없이도 디자인 기준을 코드에 그대로 반영할 수 있었다. 결과물은 흰색 캔버스 기반의 카드 구조 정적 랜딩페이지.

## $pdca 실습에서 얻은 핵심 교훈

가장 크게 배운 건 $pdca 흐름에서 나왔다. "앱 만들자"는 식으로 넓게 지시하니 Codex가 Plan부터 Report까지 한 번에 다 처리해버렸다. AI 코딩 에이전트는 생각보다 훨씬 자율적으로 끝까지 간다. 단계별 승인 게이트를 사람이 명확히 잡아야 한다.

/plugin, $skills, /figma-use, $pdca, /goal이 각각 어떤 역할을 하는지 몸으로 이해하기 시작한 하루였다. 아직 익숙하다고 말하기는 어렵지만, 개념의 윤곽은 잡혔다.

---

**What I built:** DESIGN.md 기반 정적 랜딩페이지 / 회의록 MVP / ERP 휴가관리 기능 초안  
**What broke:** $pdca 단계 분리 없이 넓게 지시 → AI가 전 단계를 한 번에 처리  
**What I learned:** 바이브코딩은 AI에게 맡기는 것이 아니라, 작업 범위·권한·중지 조건을 사람이 설계하는 것이다
