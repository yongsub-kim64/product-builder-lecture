---
title: "소상공인 AI 콘텐츠 비서 MVP — 개발환경부터 실서비스까지 하루 완료"
date: 2026-04-24
excerpt: "VS Code + Claude Code 설치, Next.js + TypeScript + Tailwind CSS 프로젝트 생성, GitHub + Cloudflare Pages 파이프라인, 8개 화면 구현, OpenAI GPT-4o API 연결, 실서비스 배포 — 하루 만에 완료. git push 후 23초면 올라간다."
tags: ["AI콘텐츠비서", "MVP", "ClaudeCode", "ClaudeDesign", "CloudflarePages", "실서비스", "소상공인"]
published: true
showInLog: true
project_tag: "AI콘텐츠비서"
version: "MVP"
project_link: "ai-content-assistant"
next_action: "실제 소상공인 5명에게 aicontent.chulbuji.com 링크 전달 → 사용 피드백 수집"
---

날짜: 2026-04-24

소상공인 AI 콘텐츠 비서 MVP를 하루 만에 실서비스 상태로 올렸다.

## 개발 환경 구성

오전에 VS Code와 Claude Code를 설치했다. 주식 자동매매 프로젝트와 충돌이 생길 수 있어 폴더를 완전히 분리했다. `C:\projects\ai-content-mvp` 로 격리.

Next.js 16 + TypeScript + Tailwind CSS로 프로젝트 생성, GitHub private repo에 첫 push까지 완료.

## 배포 파이프라인

Cloudflare Pages 자동 배포를 연결했다. git push 하나로 빌드와 배포가 돌아가는 파이프라인이 갖춰졌다. 정적 export 방식으로 배포 문제를 해결한 게 포인트였다.

aicontent.chulbuji.com 서브도메인은 Cloudflare DNS CNAME 설정으로 연결, SSL 자동 적용.

## 화면 구현 — Claude Design Handoff

Claude Design 프로토타입을 Claude Code에 Handoff하는 방식으로 진행했다. 온보딩, 입력, 로딩, 결과, 편집, 템플릿 포함 8개 화면이 자동으로 구현됐다.

## API 연결

OpenAI GPT-4o API는 Cloudflare Worker로 붙였다. 업종과 목적별 프롬프트를 구조화했다.

| 업종 | 목적 |
|------|------|
| 카페 / 미용실 / 공방 / 소매점 | 신상품 / 오픈 / 이벤트 / 재방문 |

SNS 문구, 블로그, 숏폼, 해시태그 생성 동작을 확인했다.

## 배포 자동화

GitHub Actions로 Pages와 Worker 동시 배포 파이프라인 완성. 수동 wrangler 명령 없이 git push 하나로 전부 올라간다.

## 오늘 수치

- 개발 소요 시간: 약 1일
- 구현 화면: 8개
- git push 후 배포까지: 23초
- 현재 인프라 비용: 0원

## 다음

실제 소상공인 5명 테스트. 쓰는 사람이 없는 기능은 완성이 아니다.
