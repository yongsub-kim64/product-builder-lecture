# chulbuji.com 콘텐츠 발행 SOP

> 최종 업데이트: 2026-05-28
> 적용 범위: Log / Insight / Projects 연결 구조 전체  
> KO / EN 동시 적용

---

## 0. Log / Insight / Project 발행 하네스

이 섹션은 Claude 글쓰기 전문 AI가 제공하는 초안을 Codex 또는 Claude Code가 안전하게 발행 파일로 옮길 때 적용한다. SEO 브리프, 제목 후보, 메타 설명, slug 후보, 본문 초안, 발행 전 품질 체크가 함께 제공되는 경우를 기본 입력 형식으로 본다.

### 0.1 기본 원칙

- Claude 글쓰기 AI 초안의 SEO 브리프, 제목 후보, slug 후보, 품질 체크는 작업용 메타 정보로 취급한다.
- 실제 공개 본문에는 본문 초안 중심으로 반영한다.
- SEO 브리프나 발행 전 품질 체크 문구를 공개 본문에 그대로 넣지 않는다.
- 글을 새로 창작하지 않고 제공된 원고의 경험, 사건, 판단, 결론을 유지한다.
- 문체 보정은 기존 chulbuji.com 톤에 맞추는 최소 수정으로 제한한다.
- 투자, 수익, 건강, 법률 등 민감 주제는 단정형 표현을 줄이고 개인 실험 기록 또는 검토 기록으로 정리한다.
- 민감정보, API key, token, secret, 계정정보, 실계좌 식별 정보는 공개 문서에 포함하지 않는다.
- 기존 라우팅, 레이아웃, 컴포넌트, 콘텐츠 구조를 임의로 변경하지 않는다.
- 기존 콘텐츠 파일은 요청 범위에 포함된 경우에만 수정한다.

### 0.2 입력 메타 정보 처리 규칙

| 입력 항목 | 처리 방식 |
|---|---|
| SEO 브리프 | 검색 의도, 키워드, 내부 링크 후보 판단에만 사용. 공개 본문에 원문 그대로 삽입하지 않는다. |
| 제목 후보 | 기존 제목 톤, 검색 의도, 과장 위험을 비교해 1개를 `title`로 선택한다. |
| 메타 설명 | 현재 content schema에서는 `description` 대신 `excerpt`에 반영한다. Project 페이지는 레이아웃의 `description` 속성에 맞춘다. |
| slug 후보 | Log는 파일명에 반영한다. Insight는 기존 순번 체계(`insight-NNN.md`)를 우선한다. Project는 기존 프로젝트 slug를 우선한다. |
| 본문 초안 | 공개 본문의 주재료로 사용한다. 구조화, 용어 설명, 위험 표현 완화만 최소 수행한다. |
| 발행 전 품질 체크 | 내부 검토 체크리스트로만 사용한다. 공개 본문에 넣지 않는다. |

### 0.3 Frontmatter 및 파일 경로 반영

- `title`, `date`, `excerpt`, `tags`, `published`, `showInLog`, `project_tag`, `project_link`는 이 문서의 §1~§3 규칙을 따른다.
- 사용자가 `description`을 제공하면 Markdown content에서는 `excerpt`로 변환한다.
- 사용자가 `slug`를 제공하면 Log 파일명 후보로 검토하되, 기존 파일명 규칙과 충돌하면 기존 규칙을 우선한다.
- Insight는 다음 번호를 확인한 뒤 KO/EN 모두 같은 번호를 사용한다.
- Project는 새 페이지를 만들기 전에 기존 `src/pages/projects/[project]/` 및 `src/pages/en/projects/[project]/` 구조를 먼저 확인한다.
- 목록 페이지나 index 반영이 필요한 구조인지 확인하고, 기존 방식에 맞는 최소 변경만 한다.

### 0.4 콘텐츠 유형별 공개 본문 기준

#### Log

Log는 사건과 운영 판단이 드러나는 기록이어야 한다.

- 문제 상황 또는 관찰 계기
- 확인 과정과 사용한 근거
- 판단 기준
- 실행 조치 또는 보류한 조치
- 배운 점과 다음 확인 항목

단순 작업 이력, 커맨드 실행 내역, 얇은 진행 보고만 있는 글은 바로 업로드하지 않고 보강 필요로 판단한다.

#### Insight

Insight는 사건에서 뽑아낸 운영 원칙과 판단 기준이 중심이어야 한다.

- 특정 사건 또는 실험에서 출발한다.
- 그 사건이 드러낸 반복 가능한 판단 기준을 설명한다.
- 과장된 성공담보다 실패, 편향, 보류, 검증 구조를 우선한다.
- 독자가 다음 의사결정에 적용할 수 있는 관점이 있어야 한다.

단순 감상문이거나 Log와 차이가 거의 없으면 보강 필요로 판단한다.

#### Project

Project는 프로젝트 허브 또는 타임라인의 상태 업데이트로 반영한다.

- 프로젝트 목적
- 현재 상태
- 검증된 것
- 아직 미검증인 영역
- 다음 단계

이미 프로젝트 페이지가 있으면 새 페이지를 만들지 않고 기존 허브, 타임라인, 대표 글 링크 구조에 맞춰 갱신한다. 새 프로젝트 생성은 §8 조건을 만족할 때만 검토한다.

### 0.5 SEO 반영 기준

- 검색 의도는 제목, excerpt, 본문 첫 부분의 맥락 정리에 반영한다.
- 메인 키워드와 보조 키워드는 자연스럽게 반영한다.
- 키워드 반복을 위해 부자연스러운 문장을 만들지 않는다.
- 내부 링크 후보는 실제 관련성이 있는 Log, Insight, Project 페이지에만 연결한다.
- 투자·수익·자동매매 관련 글은 "추천", "보장", "확정", "따라 하면 된다"처럼 오해될 표현을 피한다.

### 0.6 발행 전 품질 게이트

아래 중 하나라도 만족하지 못하면 커밋하지 말고 보강 필요 항목을 보고한다.

```
[ ] 공개 본문과 작업용 SEO 메타 정보가 분리되어 있음
[ ] title / excerpt / tags / date가 기존 frontmatter 구조에 맞음
[ ] Log / Insight / Project 유형별 필수 내용이 드러남
[ ] 얇은 작업 이력 수준이 아니라 독립적으로 읽을 수 있는 기록임
[ ] 검색 의도, 메인 키워드, 보조 키워드, 내부 링크 후보가 자연스럽게 반영됨
[ ] SEO 브리프나 품질 체크 문구가 본문에 그대로 노출되지 않음
[ ] 민감정보, API key, token, secret, 계정정보가 포함되지 않음
[ ] 투자 권유, 수익 보장, 특정 조건 추천처럼 보이는 표현이 완화됨
[ ] 기존 라우팅, 레이아웃, 컴포넌트, 콘텐츠 구조를 변경하지 않음
[ ] npm run build 결과를 확인함
```

### 0.7 후속 개선 후보

이번 하네스는 문서 규칙만 정의한다. 자동 검사 스크립트는 만들지 않는다. 향후 필요하면 다음 항목을 별도 작업으로 검토한다.

- frontmatter 필수 필드 검사 스크립트
- Log / Insight KO-EN 쌍 누락 검사
- 금지 표현 및 민감정보 패턴 검사
- 내부 링크 dead link 검사
- 다음 Insight 번호 자동 제안

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
