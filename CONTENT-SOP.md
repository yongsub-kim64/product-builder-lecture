# chulbuji.com 콘텐츠 발행 SOP

> 최종 업데이트: 2026-04-11  
> 적용 범위: Log / Insight / Projects 연결 구조 전체  
> KO / EN 동시 적용

---

## 1. Frontmatter 템플릿

### Log (KO) — 프로젝트 무관 일반 기록

```yaml
---
title: "글 제목"
date: YYYY-MM-DD
excerpt: "한 줄 요약. 독자가 클릭할 이유가 담겨야 함. 1~2문장."
tags: ["태그1", "태그2"]
published: true
showInLog: true
---
```

### Log (KO) — 프로젝트 연결 기록

```yaml
---
title: "글 제목"
date: YYYY-MM-DD
excerpt: "한 줄 요약."
tags: ["태그1", "태그2"]
published: true
showInLog: true
project_tag: "자동매매"          # 허용값 목록에서만 선택 (아래 §3 참조)
project_link: "stock-auto-trade" # 허용값 목록에서만 선택 (아래 §3 참조)
version: "v1.1"                  # 선택. 시스템 버전이 있을 때만 입력
next_action: "다음 검증 항목"     # 선택. 실행 예정 사항 메모용
---
```

### Log (EN) — 프로젝트 무관 일반 기록

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
excerpt: "One-line summary. Should contain the reader's reason to click. 1–2 sentences."
tags: ["tag1", "tag2"]
published: true
showInLog: true
---
```

### Log (EN) — 프로젝트 연결 기록

```yaml
---
title: "Post Title"
date: YYYY-MM-DD
excerpt: "One-line summary."
tags: ["tag1", "tag2"]
published: true
showInLog: true
project_tag: "AutoTrading"       # Allowed values only (see §3)
project_link: "stock-auto-trade" # Allowed values only (see §3)
version: "v1.1"                  # Optional. Only when system version applies.
next_action: "Next validation item" # Optional. Memo for next steps.
---
```

---

### Insight (KO) — 프로젝트 무관 일반 인사이트

```yaml
---
title: "인사이트 제목"
date: YYYY-MM-DD
excerpt: "한 줄 요약. 배운 것 또는 관점의 변화가 드러나야 함."
tags: ["태그1", "태그2"]
published: true
---
```

### Insight (KO) — 프로젝트 연결 인사이트

```yaml
---
title: "인사이트 제목"
date: YYYY-MM-DD
excerpt: "한 줄 요약."
tags: ["태그1", "태그2"]
published: true
project_tag: "자동매매"          # 허용값 목록에서만 선택 (아래 §3 참조)
---
```

### Insight (EN) — 프로젝트 무관 일반 인사이트

```yaml
---
title: "Insight Title"
date: YYYY-MM-DD
excerpt: "One-line summary. Should reveal what was learned or how the perspective shifted."
tags: ["tag1", "tag2"]
published: true
---
```

### Insight (EN) — 프로젝트 연결 인사이트

```yaml
---
title: "Insight Title"
date: YYYY-MM-DD
excerpt: "One-line summary."
tags: ["tag1", "tag2"]
published: true
project_tag: "AutoTrading"       # Allowed values only (see §3)
---
```

> **Insight에는 `project_link`를 넣지 않는다.**  
> Insight는 프로젝트 상세 페이지에서 `project_tag`로 자동 연결된다.  
> `project_link`는 Log 전용 필드로, 명시적 프로젝트 이동 경로 제공 목적이다.

---

## 2. 필드 정의 및 규칙

| 필드 | 타입 | 필수 여부 | 설명 |
|---|---|---|---|
| `title` | string | 필수 | 화면에 표시되는 제목. 따옴표로 감싼다. |
| `date` | YYYY-MM-DD | 필수 | 글 작성(발행) 날짜. |
| `excerpt` | string | 필수 | 목록 화면 및 SEO에 사용되는 한 줄 요약. 1~2문장. |
| `tags` | string[] | 필수 | 최소 1개 이상. 주제어, 기술명, 프로젝트명 조합. |
| `published` | boolean | 필수 | `true`이면 공개. `false`이면 빌드에서 제외. |
| `showInLog` | boolean | Log 전용 | 기본값 `true`. `false`이면 Log 목록에서 숨김 (SEO 전용 글에 사용). |
| `project_tag` | string | 조건부 | 프로젝트 연결 시만 입력. 허용값만 사용 (§3 참조). |
| `project_link` | string | Log 조건부 | Log에서 프로젝트 상세로 연결 시 사용. 허용값만 사용 (§3 참조). |
| `version` | string | 선택 | 시스템/앱 버전이 있는 기록에만 사용. 예: `"v1.1"` |
| `next_action` | string | 선택 | 다음 실행 항목 메모. 운영 로그에만 사용. |

---

## 3. 프로젝트 연결 규칙 — 허용값 목록

> **핵심 규칙: 허용값 목록에 없는 project_tag는 임의로 생성하지 않는다.**  
> 새 프로젝트 추가 시 이 목록을 먼저 업데이트한다.

### 현재 허용된 project_tag 값

| 프로젝트 | KO `project_tag` | EN `project_tag` | `project_link` |
|---|---|---|---|
| AI 자동매매 실험 | `"자동매매"` | `"AutoTrading"` | `"stock-auto-trade"` |
| Chulbuji RunBuddy | `"RunBuddy"` | `"RunBuddy"` | `"runbuddy"` |

### 포함 기준 — 이 조건을 만족하면 project_tag를 넣는다

- 해당 프로젝트의 앱/시스템을 직접 개발하거나 설정한 기록
- 운영 중 발생한 버그, 이슈, 장애 대응 기록
- 시스템 구조나 전략을 변경한 기록
- 해당 프로젝트를 실행하면서 직접 배운 인사이트 (프로젝트 경험이 원인)
- 해당 프로젝트의 첫 실행, 검증, 마일스톤 기록

### 제외 기준 — 이 조건이면 project_tag를 넣지 않는다

- 범용 AI 협업 방법론에 관한 글 (특정 프로젝트 없이도 성립하는 내용)
- 사이트(chulbuji.com) 자체 개선 기록 (리브랜딩, 페이지 구조 변경 등)
- 해커톤, 음악 제작, 유튜브 채널 등 별도 크리에이티브 활동
- 로또/확률 관련 SEO 콘텐츠
- 여러 프로젝트에 걸쳐 있어 귀속이 불명확한 글

---

## 4. 판단이 애매한 글 처리 기준

### 유형 A — 크리에이티브 / 브랜드 확장형

> 예시: insight-007 "완벽한 프롬프트는 없다" (철부지러닝 뮤직비디오 제작기)

**판단 기준:**  
해당 글이 프로젝트 **앱/시스템의 직접 개발·운영 경험**에서 나온 것인가?

- YES → project_tag 추가
- NO (뮤직비디오, 콘텐츠 제작 등 별도 크리에이티브 활동) → project_tag 제외. tags에 프로젝트명이 있더라도 `project_tag`는 넣지 않는다.

**insight-007 적용 결론:** 제외. 뮤직비디오 제작 과정의 인사이트이며, RunBuddy 앱 개발/운영 기록이 아니다.

---

### 유형 B — 복합 주제 (여러 프로젝트에 걸침)

> 예시: "AI 협업으로 두 프로젝트를 동시에 진행한 날의 기록"

**판단 기준:**  
글의 주인공이 되는 프로젝트가 1개로 좁혀지는가?

- YES → 해당 project_tag 1개만 입력
- NO → project_tag 없이 발행. tags로만 분류.

> 현재 단계에서 `project_tag`는 1개만 허용한다. 복수 태그는 지원하지 않는다.

---

### 유형 C — 범용 방법론이지만 프로젝트 중에 발견

> 예시: "자동매매를 운영하다 발견한 AI 프롬프트 효율 기법"

**판단 기준:**  
이 글을 자동매매 프로젝트 페이지에서 방문자가 읽으면 프로젝트 이해에 도움이 되는가?

- YES (프로젝트 운영 중 발견한 내용이 핵심) → project_tag 추가
- NO (방법론 자체가 핵심이고 프로젝트는 배경에 불과) → project_tag 없이 발행

---

## 5. 발행 전 체크리스트

```
[ ] title 작성됨 (따옴표로 감쌈)
[ ] date 형식 정확 (YYYY-MM-DD)
[ ] excerpt 작성됨 (1~2문장, 클릭 이유가 담김)
[ ] tags 최소 1개 이상
[ ] published: true 확인
[ ] showInLog 값 의도에 맞게 설정 (Log 글에만 해당)
    - 일반 기록: true
    - SEO 전용 / 목록에 노출하지 않을 글: false
[ ] 프로젝트 관련 글인지 판단 (§3 기준 적용)
    - 해당하면: project_tag 입력 (허용값 목록에서 선택)
    - Log이면: project_link도 함께 입력
    - 해당하지 않으면: 두 필드 모두 생략
[ ] KO 파일 경로 확인: src/content/ko/log/ 또는 src/content/ko/insight/
[ ] EN 파일 경로 확인: src/content/en/log/ 또는 src/content/en/insight/
[ ] KO/EN 두 파일 모두 작성됨
[ ] 파일명 규칙 확인 (아래 §6 참조)
```

---

## 6. 파일명 규칙

### Log

```
날짜 포함 운영 기록:  YYYY-MM-DD-[프로젝트-키워드].md
                     예: 2026-04-10-auto-trading-11-fixes.md

마일스톤 기록:        [프로젝트명]-[이벤트].md
                     예: stock-auto-trade-mvp-complete.md

일반 기록:            [주제-키워드].md
                     예: prompt-efficiency-lesson.md
```

### Insight

```
순번 기반:            insight-NNN.md
                     예: insight-012.md
```

> Insight는 번호 순번 체계를 유지한다. 다음 발행은 `insight-012.md` (KO), `insight-012.md` (EN).

### 공통 규칙

- 소문자, 하이픈(-) 구분자 사용
- 한글 파일명 사용 금지 (URL 인코딩 문제)
- 공백 사용 금지
- 최대 50자 이내 권장

---

## 7. 발행 SOP — 단계별 운영 절차

### Step 1. 글 작성

- KO 본문 먼저 작성
- 파일명 결정 (§6 기준)
- `src/content/ko/log/` 또는 `src/content/ko/insight/`에 저장

### Step 2. 분류 판단

아래 질문에 순서대로 답한다:

```
Q1. 이 글은 특정 프로젝트의 직접 개발/운영/이슈/학습 기록인가?
    YES → Q2로 이동
    NO  → project_tag 없이 발행. Step 3으로 이동.

Q2. 허용값 목록(§3)에서 해당하는 project_tag가 있는가?
    YES → 해당 project_tag 입력. Log이면 project_link도 입력.
    NO  → 이 SOP 업데이트 후 발행. (새 프로젝트 추가 시)

Q3. 크리에이티브 / 브랜드 확장형 글인가? (§4 유형 A)
    YES → project_tag 제외. tags에만 프로젝트명 포함.
    NO  → project_tag 포함.
```

### Step 3. Frontmatter 작성

- 해당 템플릿(§1) 적용
- 허용값 목록(§3)에서만 project_tag 선택
- 발행 전 체크리스트(§5) 확인

### Step 4. EN 번역 및 파일 생성

- EN 본문 작성 (또는 번역)
- 동일 파일명으로 `src/content/en/log/` 또는 `src/content/en/insight/`에 저장
- frontmatter의 `project_tag`는 EN 허용값으로 교체 (예: `"자동매매"` → `"AutoTrading"`)
- 나머지 구조 필드(`project_link`, `version`, `next_action`)는 동일 값 사용

### Step 5. 빌드 검증

```bash
npm run build
```

- 에러 없이 완료되면 발행 가능
- 프로젝트 상세 페이지에서 연관 글이 자동 노출되는지 확인
  - `/projects/stock-auto-trade/` → 관련 기록/인사이트 섹션
  - `/projects/runbuddy/` → 관련 기록/인사이트 섹션

### Step 6. 발행

- git add → commit → push → 배포

---

## 8. 새 프로젝트 추가 시 처리 절차

새 프로젝트(예: "chulbuji.com 사이트 자체")를 추가할 때:

1. `src/pages/projects/`에 신규 폴더 및 `index.astro` 생성
2. `src/pages/en/projects/`에 EN 버전 동일 생성
3. 이 파일(CONTENT-SOP.md) §3 허용값 목록 업데이트
4. 기존 글 중 해당 프로젝트로 귀속할 글 있으면 backfill

---

## 9. 허용값 목록 업데이트 기준

허용값 추가 조건:
- 프로젝트 상세 페이지(`/projects/[slug]/`)가 먼저 존재해야 한다
- 발행된 또는 발행 예정인 관련 글이 2개 이상이어야 한다

허용값 삭제 조건:
- 프로젝트가 완전히 종료되어 페이지를 닫을 때
- 관련 글을 모두 다른 project_tag로 이관할 때

---

## 부록 — 현재 콘텐츠 분류 현황 (2026-04-11 기준)

### 자동매매 / AutoTrading 연결 글

| 타입 | 파일 | 날짜 |
|---|---|---|
| Log | `stock-auto-trade-mvp-complete.md` | 2026-04-07 |
| Log | `2026-04-08-auto-trading-v1.1.md` | 2026-04-08 |
| Log | `2026-04-09-auto-trading-module-cache.md` | 2026-04-09 |
| Log | `2026-04-10-auto-trading-11-fixes.md` | 2026-04-10 |
| Insight | `insight-009.md` | 2026-04-07 |
| Insight | `insight-010.md` | 2026-04-09 |
| Insight | `insight-011.md` | 2026-04-10 |

### RunBuddy 연결 글

| 타입 | 파일 | 날짜 |
|---|---|---|
| Log | `runbuddy-coaching-mvp-first-field-test.md` | 2026-03-24 |
| Insight | `insight-005.md` | 2026-03-09 |
| Insight | `insight-006.md` | 2026-03-22 |

### 판단 보류

| 파일 | 이유 |
|---|---|
| `insight-007.md` (KO/EN) | RunBuddy 뮤직비디오 제작기 — 앱 개발 기록 아님. 현재 project_tag 없음. 연결 원하면 별도 결정 필요. |
