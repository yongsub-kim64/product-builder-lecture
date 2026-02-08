/* ===== Quality Checks ===== */
/* Week 1: 페이지 품질 자동 검증 */

/**
 * 페이지 로드 후 자동으로 품질 검사를 수행합니다.
 * - 링크 유효성 검증
 * - 이미지 로딩 에러 처리
 * - 모바일 뷰포트 확인
 * - 성능 메트릭 수집
 */

(function() {
  'use strict';

  const CONFIG = {
    enableLinkCheck: true,
    enableImageCheck: true,
    enablePerformanceCheck: true,
    enableMobileCheck: true,
    logToConsole: true, // 개발 중에만 true, 프로덕션에서는 false
  };

  /**
   * 1. 내부 링크 유효성 검증
   */
  function checkInternalLinks() {
    if (!CONFIG.enableLinkCheck) return;

    const links = document.querySelectorAll('a[href^="/"]');
    let brokenCount = 0;

    links.forEach(link => {
      const href = link.getAttribute('href');

      // HEAD 요청으로 링크 확인 (비용 절감)
      fetch(href, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            brokenCount++;
            console.warn(`[Quality Check] Broken link detected: ${href}`);
            // 프로덕션에서는 서버로 리포팅
            if (!CONFIG.logToConsole) {
              reportIssue('broken_link', { url: href, element: link.outerHTML });
            }
          }
        })
        .catch(error => {
          console.warn(`[Quality Check] Failed to check link: ${href}`, error);
        });
    });

    if (CONFIG.logToConsole && brokenCount === 0) {
      console.log(`[Quality Check] ✓ All ${links.length} internal links are valid`);
    }
  }

  /**
   * 2. 이미지 로딩 에러 처리
   */
  function setupImageErrorHandling() {
    if (!CONFIG.enableImageCheck) return;

    const images = document.querySelectorAll('img');
    let errorCount = 0;

    images.forEach(img => {
      // 이미 로딩 실패한 이미지 확인
      if (!img.complete || img.naturalHeight === 0) {
        handleImageError(img);
        errorCount++;
      }

      // 앞으로 발생할 에러 처리
      img.addEventListener('error', function() {
        handleImageError(this);
        errorCount++;
      }, { once: true });

      // 성공적으로 로드된 이미지
      img.addEventListener('load', function() {
        this.classList.add('loaded');
      }, { once: true });
    });

    if (CONFIG.logToConsole) {
      console.log(`[Quality Check] Monitoring ${images.length} images`);
      if (errorCount > 0) {
        console.warn(`[Quality Check] ${errorCount} images failed to load`);
      }
    }
  }

  /**
   * 이미지 에러 핸들러
   */
  function handleImageError(img) {
    const src = img.src;
    console.warn(`[Quality Check] Image failed to load: ${src}`);

    // 대체 이미지 표시 (플레이스홀더)
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%236b7280" font-family="sans-serif" font-size="14" x="50%25" y="50%25" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';
    img.alt = '이미지를 불러올 수 없습니다';
    img.classList.add('image-error');

    // 서버로 리포팅 (프로덕션)
    if (!CONFIG.logToConsole) {
      reportIssue('image_error', { url: src, alt: img.alt });
    }
  }

  /**
   * 3. 모바일 뷰포트 확인 및 최적화 검증
   */
  function checkMobileViewport() {
    if (!CONFIG.enableMobileCheck) return;

    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 768,
      isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
      isDesktop: window.innerWidth >= 1024
    };

    if (viewport.isMobile) {
      document.body.classList.add('mobile-view');

      // 모바일 최적화 검증
      checkMobileOptimizations();
    } else if (viewport.isTablet) {
      document.body.classList.add('tablet-view');
    } else {
      document.body.classList.add('desktop-view');
    }

    if (CONFIG.logToConsole) {
      console.log('[Quality Check] Viewport:', viewport);
    }
  }

  /**
   * 모바일 최적화 검증
   */
  function checkMobileOptimizations() {
    const issues = [];

    // 터치 영역 크기 확인 (최소 44px)
    const buttons = document.querySelectorAll('button, a.btn, .nav-menu a');
    buttons.forEach(btn => {
      const rect = btn.getBoundingClientRect();
      if (rect.width < 44 || rect.height < 44) {
        issues.push({
          type: 'small_touch_target',
          element: btn.tagName + (btn.className ? '.' + btn.className : ''),
          size: `${rect.width}x${rect.height}`
        });
      }
    });

    // 텍스트 크기 확인 (최소 16px)
    const fontSize = parseFloat(window.getComputedStyle(document.body).fontSize);
    if (fontSize < 16) {
      issues.push({
        type: 'small_font_size',
        size: fontSize
      });
    }

    // 가로 스크롤 감지
    if (document.body.scrollWidth > window.innerWidth) {
      issues.push({
        type: 'horizontal_scroll',
        bodyWidth: document.body.scrollWidth,
        windowWidth: window.innerWidth
      });
    }

    if (issues.length > 0 && CONFIG.logToConsole) {
      console.warn('[Quality Check] Mobile optimization issues:', issues);
    } else if (CONFIG.logToConsole) {
      console.log('[Quality Check] ✓ Mobile optimizations passed');
    }

    return issues;
  }

  /**
   * 4. 성능 메트릭 수집
   */
  function collectPerformanceMetrics() {
    if (!CONFIG.enablePerformanceCheck) return;

    // Performance API 사용 가능 여부 확인
    if (!window.performance || !window.performance.getEntriesByType) {
      return;
    }

    // 페이지 로드 완료 대기
    window.addEventListener('load', function() {
      setTimeout(function() {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');

        const metrics = {
          // Core Web Vitals
          FCP: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
          LCP: getLargestContentfulPaint(),
          CLS: getCumulativeLayoutShift(),

          // 기타 메트릭
          domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
          loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
          totalLoadTime: navigation?.loadEventEnd - navigation?.fetchStart,
        };

        if (CONFIG.logToConsole) {
          console.log('[Quality Check] Performance Metrics:', metrics);

          // 성능 평가
          if (metrics.FCP > 2000) {
            console.warn('[Quality Check] ⚠️ FCP is slow (>2s):', metrics.FCP);
          }
          if (metrics.totalLoadTime > 3000) {
            console.warn('[Quality Check] ⚠️ Total load time is slow (>3s):', metrics.totalLoadTime);
          }
        }

        // 프로덕션에서는 서버로 전송
        if (!CONFIG.logToConsole) {
          reportMetrics(metrics);
        }
      }, 0);
    });
  }

  /**
   * LCP (Largest Contentful Paint) 측정
   */
  function getLargestContentfulPaint() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        return lastEntry.renderTime || lastEntry.loadTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      return null;
    }
  }

  /**
   * CLS (Cumulative Layout Shift) 측정
   */
  function getCumulativeLayoutShift() {
    let cls = 0;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      return null;
    }
    return cls;
  }

  /**
   * 이슈 리포팅 (프로덕션)
   */
  function reportIssue(type, data) {
    // 서버로 전송 (구현 필요)
    // fetch('/api/report-issue', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ type, data, timestamp: Date.now() })
    // });
  }

  /**
   * 메트릭 리포팅 (프로덕션)
   */
  function reportMetrics(metrics) {
    // Google Analytics 또는 자체 서버로 전송
    // gtag('event', 'performance_metrics', metrics);
  }

  /**
   * 초기화 및 실행
   */
  function init() {
    if (CONFIG.logToConsole) {
      console.log('[Quality Check] Starting quality checks...');
    }

    // DOM 로드 확인
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        checkMobileViewport();
        setupImageErrorHandling();
        // 링크 체크는 약간 지연 (페이지 로드 방해 방지)
        setTimeout(checkInternalLinks, 2000);
      });
    } else {
      checkMobileViewport();
      setupImageErrorHandling();
      setTimeout(checkInternalLinks, 2000);
    }

    // 성능 메트릭은 별도 실행
    collectPerformanceMetrics();

    // 윈도우 리사이즈 시 뷰포트 재확인
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobileViewport, 250);
    });
  }

  // 스크립트 실행
  init();

  // 전역 함수로 노출 (디버깅용)
  window.chulbujiQualityCheck = {
    checkLinks: checkInternalLinks,
    checkImages: setupImageErrorHandling,
    checkMobile: checkMobileOptimizations,
    config: CONFIG
  };
})();

/**
 * 사용법:
 *
 * 1. index.html 하단에 추가:
 *    <script defer src="/quality-checks.js"></script>
 *
 * 2. 개발 중: CONFIG.logToConsole = true
 *    프로덕션: CONFIG.logToConsole = false
 *
 * 3. 디버깅:
 *    콘솔에서 window.chulbujiQualityCheck.checkLinks() 실행
 */
