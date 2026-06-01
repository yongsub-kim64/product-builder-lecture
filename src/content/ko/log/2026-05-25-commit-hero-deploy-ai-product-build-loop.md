---
title: "Commit Hero 배포 완료 — AI Product Build 첫 루프를 닫았다"
date: 2026-05-25
excerpt: "Codex Master Class 학습 내용을 실제 프로젝트로 옮겼다. Deep Interview → Plan → Design → Do → GitHub → Cloudflare 전 과정을 완주하고, chulbuji.com 바이브코딩 실험실에 Codex 001 사례로 등록했다."
tags: ["CommitHero", "Codex", "바이브코딩", "AI프로덕트빌드", "CloudflarePages"]
published: true
showInLog: true
---

오늘은 Codex Master Class에서 배운 내용을 실제 프로젝트로 옮겼다. GitHub username을 입력하면 RPG 스타일 개발자 카드를 생성하는 웹앱, Commit Hero를 만들고 배포했다.

## Deep Interview와 사전 설계

이번에는 바로 구현부터 시작하지 않았다. Codex와 함께 Deep Interview 5회를 먼저 진행했다. 서비스 목적, 카드 구성 항목, 데이터 기준, UX 흐름, 디자인 방향을 순서대로 좁혀나갔다. 그 다음 Plan 문서, Design 문서, AGENTS.md를 만들었다.

## 구현과 배포

구현은 Vite + React + TypeScript 기반으로 진행했다. 로컬에서 정상 작동을 확인한 뒤 GitHub에 커밋했다.

```
commit: da5ca67
feat: implement GitHub RPG developer card MVP
```

이후 GitHub CLI로 GitHub 저장소를 생성하고 push했다. Cloudflare Pages에 연결해 배포했고, 배포 URL에서 카드 생성과 이미지 다운로드까지 확인했다.

Demo: [https://codex-commits-hero.pages.dev](https://codex-commits-hero.pages.dev)

## chulbuji.com 자산화

마지막으로 chulbuji.com Projects에 바이브코딩 실험실 페이지를 만들고, Commit Hero를 Codex 001 사례로 등록했다.

오늘의 루프: Deep Interview → Plan → Design → Do → GitHub → Cloudflare → chulbuji.com 자산화

---

**What I built:** GitHub RPG 개발자 카드 웹앱과 chulbuji.com 바이브코딩 실험실 구조  
**What broke:** 코드 기능은 크게 깨지지 않았지만, 로컬 Git과 GitHub 원격 저장소의 차이, gh CLI 인증, private 저장소 링크 처리 같은 배포 파이프라인 판단 지점이 있었다.  
**What I learned:** Deep Interview 없이 바로 구현에 들어가면 범위가 흐려진다.  
**다음:** 모바일 레이아웃, stats 0 값 표현, 문구 polish를 개선하고 Codex 002 사례를 준비한다.
