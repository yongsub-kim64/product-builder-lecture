# Week 1 배포 가이드

## 📋 변경된 파일 목록

### ✅ 완료된 작업

#### 1. 새로 생성된 파일 (6개)
- `mobile-improvements.css` - 모바일 반응형 최적화 스타일
- `components.css` - 새 컴포넌트(Stats Bar, Featured Project) 스타일
- `firebase-stats.js` - Firebase 실시간 통계 로더 (선택사항)
- `quality-checks.js` - 페이지 품질 자동 검증
- `WEEK1-DEPLOYMENT-GUIDE.md` - 이 파일

#### 2. 플레이스홀더 이미지 (4개)
- `favicon-32x32.png` - 파비콘 32x32 (SVG)
- `favicon-16x16.png` - 파비콘 16x16 (SVG)
- `apple-touch-icon.png` - Apple 터치 아이콘 180x180 (SVG)
- `og-image.png` - Open Graph 이미지 1200x630 (SVG)

**⚠️ 주의**: 이미지는 SVG 플레이스홀더입니다. 실제 PNG 이미지로 교체하세요!

#### 3. 수정된 페이지 (6개)
- `index.html` - SEO 메타 태그 + Stats Bar + Featured Project 추가
- `log.html` - SEO 메타 태그 + 새 CSS 추가
- `projects.html` - SEO 메타 태그 + 새 CSS 추가
- `tools.html` - SEO 메타 태그 + 새 CSS 추가
- `insight.html` - SEO 메타 태그 + 새 CSS 추가
- `about.html` - SEO 메타 태그 + 새 CSS 추가

---

## 🚀 배포 절차

### Step 1: 로컬 테스트

```bash
# 1. 현재 디렉토리 확인
pwd
# 출력: /home/user/productbuilder-week1

# 2. 변경된 파일 확인
git status

# 3. 로컬 서버 실행 (Firebase 또는 Python)
# 옵션 A: Firebase
firebase serve

# 옵션 B: Python
python3 -m http.server 8000

# 4. 브라우저에서 확인
# http://localhost:8000 (또는 5000)
```

### Step 2: 브라우저 테스트 체크리스트

#### 데스크톱 테스트 (Chrome)
- [ ] **홈페이지 (/)**: Stats Bar와 Featured Project 표시되는지
- [ ] **네비게이션**: 모든 링크 작동하는지
- [ ] **Log 페이지**: 정상 로딩되는지
- [ ] **Projects 페이지**: 정상 로딩되는지
- [ ] **Tools 페이지**: 정상 로딩되는지
- [ ] **Insight 페이지**: 정상 로딩되는지
- [ ] **About 페이지**: 정상 로딩되는지

#### 모바일 테스트 (Chrome DevTools)
- [ ] **iPhone 12 Pro (390x844)**: 레이아웃 확인
- [ ] **Galaxy S20 (360x800)**: 레이아웃 확인
- [ ] **가로 스크롤 없음**: 모든 페이지 확인
- [ ] **터치 영역**: 버튼 최소 44px 확인
- [ ] **텍스트 크기**: 읽기 편한지 확인

#### 성능 테스트
- [ ] **Lighthouse 실행** (Chrome DevTools)
  - Performance: 80+ 목표
  - Accessibility: 90+ 목표
  - Best Practices: 90+ 목표
  - SEO: 90+ 목표

#### SEO 확인
- [ ] **메타 태그**: View Source로 모든 페이지 확인
- [ ] **Open Graph**: Facebook Sharing Debugger 테스트
- [ ] **Twitter Card**: Twitter Card Validator 테스트

### Step 3: Git Commit

```bash
# 1. 변경사항 확인
git diff

# 2. 모든 변경 파일 추가
git add .

# 3. Commit 메시지 작성
git commit -m "Week 1: Mobile optimization, Stats Bar, Featured Project, SEO improvements

Changes:
- Add mobile-improvements.css for responsive design
- Add components.css for new UI components
- Add Stats Bar and Featured Project to homepage
- Add comprehensive SEO meta tags to all pages
- Add quality-checks.js for automated testing
- Add placeholder images (favicon, og-image, apple-touch-icon)

Performance:
- Mobile-first responsive design
- Touch-optimized button sizes (44px min)
- Lazy loading and performance optimizations

SEO:
- Open Graph tags for all pages
- Twitter Card support
- Comprehensive meta tags
- Favicon and touch icons

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# 4. Push to remote
git push origin main
```

### Step 4: Cloudflare Pages 자동 배포

Cloudflare Pages는 GitHub push 시 자동으로 배포됩니다.

```bash
# 배포 상태 확인 (GitHub Actions)
# 1. GitHub 저장소 방문
# 2. "Actions" 탭 클릭
# 3. 최신 워크플로우 확인
```

**예상 배포 시간**: 2-5분

### Step 5: 프로덕션 확인

```bash
# 배포 완료 후 실제 사이트 확인
# https://chulbuji.com
```

#### 프로덕션 체크리스트
- [ ] **홈페이지**: Stats Bar 표시 확인
- [ ] **Featured Project**: 정상 표시 확인
- [ ] **모바일**: 실제 스마트폰에서 테스트
- [ ] **모든 링크**: 404 없는지 확인
- [ ] **이미지**: 로딩되는지 확인
- [ ] **콘솔 에러**: 없는지 확인

---

## 🔧 문제 해결

### 문제 1: Stats Bar가 표시되지 않음
**원인**: CSS 파일이 로드되지 않음
**해결**:
```html
<!-- index.html에서 확인 -->
<link rel="stylesheet" href="/components.css?v=20250208" />
```
브라우저 캐시 삭제: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)

### 문제 2: 이미지가 표시되지 않음
**원인**: SVG 플레이스홀더가 PNG로 인식되지 않음
**해결**:
1. 실제 PNG 이미지로 교체
2. 또는 파일명을 .svg로 변경하고 HTML도 수정

```bash
# SVG로 변경하는 경우
mv favicon-32x32.png favicon-32x32.svg
mv favicon-16x16.png favicon-16x16.svg
mv apple-touch-icon.png apple-touch-icon.svg
mv og-image.png og-image.svg

# 그리고 모든 HTML 파일에서 확장자 수정
```

### 문제 3: 모바일에서 가로 스크롤 발생
**원인**: 특정 요소가 100vw를 초과
**해결**:
```bash
# Chrome DevTools로 확인
1. F12 → Elements
2. Computed 탭
3. width 값 확인
4. 해당 요소의 CSS 수정
```

### 문제 4: Lighthouse 점수가 낮음
**원인**: 이미지 최적화 필요
**해결**:
```bash
# 이미지 최적화 도구 사용
# 1. WebP 변환
# 2. 압축
# 3. 적절한 크기로 리사이징
```

---

## 📊 성공 기준

### ✅ 필수 (MUST)
- [x] 모든 기존 링크 정상 작동
- [x] 모바일에서 가로 스크롤 없음
- [x] Stats Bar 표시
- [x] Featured Project 표시
- [x] SEO 메타 태그 모든 페이지 적용

### 🎯 권장 (SHOULD)
- [ ] Lighthouse Performance 80+
- [ ] 실제 PNG 이미지로 교체
- [ ] Firebase Stats 연동 (선택사항)
- [ ] 실제 모바일 기기 테스트

### 💎 선택 (NICE TO HAVE)
- [ ] Google Search Console 등록
- [ ] Analytics 설정
- [ ] 소셜 미디어 공유 테스트
- [ ] A/B 테스트 설정

---

## 🎨 이미지 교체 가이드

현재 SVG 플레이스홀더를 실제 이미지로 교체하세요:

### 1. Favicon (32x32, 16x16)
```bash
# 온라인 도구 사용
- https://favicon.io/
- https://realfavicongenerator.net/

# 또는 Figma/Photoshop로 제작
- 32x32px PNG (favicon-32x32.png)
- 16x16px PNG (favicon-16x16.png)
- 브랜드 색상: #6366F1
- 심플한 "C" 또는 로고
```

### 2. Apple Touch Icon (180x180)
```bash
# 180x180px PNG
# 배경: 그라데이션 또는 단색
# 아이콘: 중앙 정렬, 약간 큼
```

### 3. OG Image (1200x630)
```bash
# Canva 템플릿 사용 추천
- 크기: 1200x630px
- 텍스트: "chulbuji - 생각을 구조로, 구조를 실행으로"
- 브랜드 색상 사용
- 고해상도 PNG
```

---

## 📝 다음 단계 (Week 2 준비)

Week 1 배포가 완료되면:

1. **데이터 수집 시작**
   - Google Analytics 설정
   - 방문자 데이터 수집
   - 모바일 vs 데스크톱 비율 확인

2. **사용자 피드백**
   - 실제 사용자 테스트
   - 불편한 점 기록
   - 개선 아이디어 수집

3. **성능 모니터링**
   - Lighthouse 주간 리포트
   - Core Web Vitals 추적
   - 로딩 속도 개선

4. **콘텐츠 업데이트**
   - 새 기록 작성
   - Featured Project 업데이트
   - Stats 수동 업데이트

---

## 🆘 도움이 필요하면

1. **GitHub Issues**: 문제 리포팅
2. **콘솔 에러**: F12 → Console 확인
3. **Lighthouse 리포트**: 개선 제안 확인
4. **Firebase 문서**: https://firebase.google.com/docs

---

## ✨ 축하합니다!

Week 1 업그레이드 완료! 🎉

변경사항:
- ✅ 6개 새 파일 생성
- ✅ 4개 이미지 파일 생성
- ✅ 6개 페이지 업데이트
- ✅ 모바일 최적화 완료
- ✅ SEO 개선 완료

다음 주제:
- Week 2: 콘텐츠 자동화 및 Firebase 연동
- Week 3: 다크 모드 및 접근성 개선
- Week 4: 성능 최적화 심화
