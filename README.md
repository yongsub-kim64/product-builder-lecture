# chulbuji.com

> AI와 함께 작동하는 인간, 철부지의 AI Product Builder 전환 기록

34년 반도체 공정 엔지니어가 AI Product Builder로 전환하는 과정을 공개적으로 기록하는 사이트입니다.
듀얼 브레인(철부지 + 메타철부지)과 멀티 전문가 AI 오케스트레이션으로 AX(AI Transformation)를 실행하고 결과를 축적합니다.

---

## 페이지 구조

| 페이지 | 경로 | 설명 |
|---|---|---|
| Home | `/` | 히어로 + 최근 Log 카드 3개 |
| Insight | `/insight` | 구조화된 아티클 목록 |
| Log | `/log` | 날것의 작업 기록 목록 |
| About | `/about` | 철부지 + 메타철부지 소개 |

영어 버전은 모든 경로 앞에 `/en` 접두어 (`/en/insight`, `/en/log` 등)

---

## 콘텐츠 파일 경로

### Insight (구조화된 아티클)

```
src/content/ko/insight/   # 한국어
src/content/en/insight/   # 영어
```

프론트매터 형식:

```markdown
---
title: "아티클 제목"
date: 2026-02-24
excerpt: "한 줄 설명 (카드에 표시)"
tags: ["Insight 001", "AX", "태그"]
published: true
---
```

### Log (날것의 작업 기록)

```
src/content/ko/log/   # 한국어
src/content/en/log/   # 영어
```

프론트매터 형식:

```markdown
---
title: "작업 제목"
date: 2026-02-24
excerpt: "한 줄 설명 (카드에 표시)"
tags: ["Log 001", "태그"]
published: true
showInLog: true
---
```

### 정적 페이지

```
src/content/ko/pages/   # about, contact, privacy, terms
src/content/en/pages/
```

---

## 작성 규칙

**Insight**
- 완결된 구조의 아티클 (5개 내외 섹션, 결론 포함)
- 파일명: `insight-NNN.md` (예: `insight-001.md`)
- excerpt는 카드 목록에 표시되므로 1~2문장으로 명확하게 작성

**Log**
- 날것의 작업 기록 (오늘 한 것 / 결정 사항 / 다음 작업)
- 파일명: `log-NNN.md` 또는 주제 기반 슬러그 (예: `log-001.md`, `ai-music-rocket-jump.md`)
- showInLog: false 설정 시 Log 목록에서 숨김 (홈 최근 기록에는 포함)

---

## 빠른 시작

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 실행 → http://localhost:4321
npm run build     # 프로덕션 빌드 → ./dist/
npm run preview   # 빌드 결과 로컬 확인
```

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | Astro 5.17.1 (Static SSG) |
| Content | Markdown + Content Collections |
| Styling | Scoped CSS (컴포넌트 단위) + Global CSS |
| i18n | 커스텀 구현 (`src/utils/i18n.ts`) |
| Sitemap | @astrojs/sitemap 3.7.0 (자동 생성) |
| TypeScript | 5.9.3 |

---

## 배포 환경

- **개발**: Firebase Studio
- **버전 관리**: GitHub (`main` 브랜치 push → 자동 배포)
- **호스팅**: Cloudflare Pages
- **도메인**: chulbuji.com
- **빌드 명령**: `npm run build` / 출력 디렉토리: `dist/`

GitHub `main` 브랜치에 push하면 GitHub Actions가 빌드 후 Cloudflare Pages에 자동 배포합니다.

---

## 프로젝트 구조

```
src/
├── content/
│   ├── config.ts           # 컬렉션 스키마 정의
│   ├── ko/
│   │   ├── insight/        # 한국어 Insight 아티클
│   │   ├── log/            # 한국어 Log 기록
│   │   ├── pages/          # 한국어 정적 페이지
│   │   └── projects/       # (예정)
│   └── en/
│       ├── insight/        # 영어 Insight 아티클
│       ├── log/            # 영어 Log 기록
│       ├── pages/          # 영어 정적 페이지
│       └── projects/       # (예정)
├── layouts/
│   ├── BaseLayout.astro    # 공통 head (meta/OG/Twitter/canonical)
│   ├── PostLayout.astro    # 개별 포스트 레이아웃
│   ├── PageLayout.astro    # 정적 페이지 레이아웃
│   └── Layout.astro
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── LogCard.astro       # Insight/Log 공용 카드 컴포넌트
│   ├── ProjectCard.astro
│   └── LanguageSwitcher.astro
├── pages/
│   ├── index.astro         # 홈 (KO)
│   ├── insight.astro       # Insight 목록 (KO)
│   ├── insight/[slug].astro
│   ├── log/
│   │   ├── index.astro     # Log 목록 (KO)
│   │   └── [slug].astro
│   ├── about.astro
│   └── en/                 # 영어 버전 (동일 구조)
├── styles/
│   └── global.css
└── utils/
    └── i18n.ts

public/                     # 정적 에셋 (favicon 등)
dist/                       # 빌드 출력 (git 제외)
```

---

## Known Issues

- `ko/projects` 컬렉션 미구축 (빌드 경고 발생, 기능 영향 없음)
