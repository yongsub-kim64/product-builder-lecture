---
title: "Agent Boss Board v0.1 구축 및 PC2 운영환경 세팅"
date: 2026-05-21
excerpt: "Agent Boss Board v0.1을 처음 구축하고, PC2에 철부지닷컴 운영을 위한 기본 개발환경을 세팅한 기록."
tags: ["AgentBossBoard", "운영환경", "PC2", "AI협업"]
published: true
showInLog: true
project_tag: "AI운영전략"
---

## 작업 배경

PC1은 자동매매 운영 안정성을 위해 기존 운영용으로 유지한다.

PC2를 Codex, Claude Code, VSCode 기반의 보조 개발·운영 장비로 새로 세팅했다. 여러 AI 에이전트와 프로젝트를 동시에 관리하다 보니, 현황을 한눈에 파악할 수 있는 내부 운영 보드가 필요했다. 실제 장비명은 공개 글에 남기지 않고 PC1 / PC2로 구분한다.

## Agent Boss Board v0.1 구축

Vite + React + TypeScript 기반으로 별도 프로젝트를 생성했다.

Codex CLI를 설치하고 샌드박스를 설정했다. 구조는 Today View, Project Board, Agent Roster, Task Queue, Handoff Prompt Generator, Asset Log 여섯 개 섹션으로 잡았다.

lint와 build 검증을 모두 통과한 뒤, Git commit을 완료하고 GitHub Private Repository에 push했다.

## PC2의 chulbuji.com 운영환경 세팅

PC2에 chulbuji.com 저장소를 clone했다.

`npm.cmd install`을 실행해 패키지를 설치하고, `npm.cmd run build`로 Astro 빌드를 확인했다. 빌드 결과는 231 pages built / Complete 상태였다.

npm install 과정에서 package-lock.json 부수 변경이 발생했다. 의도한 변경이 아니므로 `git restore package-lock.json`으로 복구했다. 최종적으로 git status clean 상태를 확인했다.

## 운영 기준

- 작업 시작 전 `git pull origin main`을 실행한다.
- 작업 후 `npm.cmd run build`로 빌드를 확인한다.
- 변경 사항을 확인한 뒤 `git commit` / `git push`를 진행한다.
- PC1과 PC2에서 같은 파일을 동시에 수정하지 않는다.
- 자동매매 폴더와 chulbuji.com 폴더는 분리해서 운영한다.

## 다음 단계

Agent Boss Board v0.1.1에서 README 정리, UI 한국어화, Handoff Prompt 복사 버튼 추가를 검토한다.

chulbuji.com Log 업데이트는 Claude Code를 활용하되, 처음에는 Log 파일 추가처럼 제한된 범위에서만 사용한다.
