---
title: "Firebase Studio 종료 대응 — 로컬 개발 환경 전환 기록"
date: 2026-04-27
excerpt: "Firebase Studio 서비스 종료 예정 소식을 확인하고, chulbuji.com 개발 환경을 LG그램 로컬 VS Code 중심으로 전환했다. 로컬 클론, 빌드 확인, Astro 5 content config 정리, main 브랜치 push까지 완료. 로컬 → GitHub → Cloudflare 자동 배포 흐름 확보."
tags: ["Firebase Studio", "로컬개발환경", "chulbuji.com", "CloudflarePages", "ClaudeCode", "운영환경정비"]
published: true
showInLog: true
project_tag: "chulbuji.com"
next_action: "새 Log·Insight 작성 시 로컬 VS Code에서 바로 수정 → 빌드 확인 → GitHub push 방식으로 운영"
---

날짜: 2026-04-27

Firebase Studio 서비스 종료 예정 소식을 확인했다.

## 전환 배경

기존에는 Firebase Studio에 접속할 때마다 브라우저를 열고, 개발 환경 로딩을 기다리고, 간헐적인 연결 끊김을 감수해야 했다. 웹 기반 개발 환경의 장점도 있었지만, 반복 작업이 늘어날수록 작업 시작까지의 마찰이 커졌다.

이번 기회에 chulbuji.com 개발 환경을 로컬 PC 중심으로 전환하기로 했다.

## 전환 작업

LG그램에 GitHub 레포지토리를 clone하고, 로컬에서 npm install과 npm run build를 실행해 프로젝트가 정상적으로 동작하는지 확인했다. 이후 Claude Code를 로컬 VS Code 환경에서 직접 실행해 Astro 5 기준에 맞게 content config 위치를 정리했다.

정리한 내용:

- `src/content/config.ts` → `src/content.config.ts` (Astro 5 규격 위치)
- 존재하지 않는 `ko/projects`, `en/projects` 컬렉션 참조 제거

수정한 내용은 main 브랜치에 commit/push했고, GitHub Actions와 연결된 Cloudflare 자동 배포 흐름까지 정상 작동하는 것을 확인했다.

## 결과

이번 전환으로 Firebase Studio에 접속하지 않아도 로컬 VS Code에서 바로 작업을 시작할 수 있게 되었다. 개발 환경의 시작 마찰이 줄었고, 앞으로 chulbuji.com의 기록, 인사이트, 프로젝트 업데이트는 이 로컬 환경을 기준으로 이어간다.

## 남길 점

이번 작업은 단순한 개발 환경 이전이 아니라, chulbuji.com 운영 방식을 한 단계 안정화한 전환점이다. 웹 기반 임시 작업 환경에서 벗어나, 로컬 개발 → GitHub push → Cloudflare 자동 배포라는 더 명확한 운영 흐름을 확보했다.

## 다음

앞으로는 새 Log나 Insight를 작성할 때 로컬 VS Code에서 바로 수정하고, Claude Code를 보조 개발 AI로 활용해 빌드 확인 후 GitHub에 반영하는 방식으로 운영한다.
