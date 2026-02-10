/* ===== Firebase Stats Loader ===== */
/* Week 1: 실시간 통계 로드 (선택사항) */

/**
 * Firebase에서 실시간 통계를 불러와 홈페이지 Stats Bar를 업데이트합니다.
 * Firebase 설정이 완료되면 활성화하세요.
 */

(function() {
  'use strict';

  // Firebase 설정 (환경에 맞게 수정 필요)
  const FIREBASE_CONFIG = {
    apiKey: "YOUR_API_KEY", // Firebase Console에서 가져오기
    projectId: "chulbuji-com",
    // 추가 설정...
  };

  // Stats 기본값 (Firebase 로드 실패 시 사용)
  const DEFAULT_STATS = {
    products_live: 1,
    products_building: 0,
    ideas: 5,
    lotto_users: 150,
    lotto_rating: 4.5
  };

  /**
   * Stats 로드 및 DOM 업데이트
   */
  async function loadStats() {
    try {
      // Firebase 사용 가능 여부 확인
      if (typeof firebase === 'undefined') {
        console.log('Firebase not loaded, using default values');
        updateStatsDOM(DEFAULT_STATS);
        return;
      }

      // Firebase Firestore에서 stats 문서 가져오기
      const db = firebase.firestore();
      const statsDoc = await db.collection('site_config').doc('stats').get();

      if (statsDoc.exists) {
        const stats = statsDoc.data();
        updateStatsDOM(stats);
        console.log('Stats loaded from Firebase:', stats);
      } else {
        console.log('Stats document not found, using defaults');
        updateStatsDOM(DEFAULT_STATS);
      }
    } catch (error) {
      console.log('Failed to load stats:', error.message);
      updateStatsDOM(DEFAULT_STATS);
    }
  }

  /**
   * DOM에 통계 값 업데이트
   */
  function updateStatsDOM(stats) {
    // Stats Bar 업데이트
    const productsLive = document.getElementById('products-live');
    const productsBuilding = document.getElementById('products-building');
    const ideasCount = document.getElementById('ideas-count');

    if (productsLive) {
      animateNumber(productsLive, stats.products_live || DEFAULT_STATS.products_live);
    }
    if (productsBuilding) {
      animateNumber(productsBuilding, stats.products_building || DEFAULT_STATS.products_building);
    }
    if (ideasCount) {
      animateNumber(ideasCount, stats.ideas || DEFAULT_STATS.ideas);
    }

    // Featured Project 통계 업데이트
    const lottoUsers = document.getElementById('lotto-users');
    const lottoRating = document.getElementById('lotto-rating');

    if (lottoUsers && stats.lotto_users) {
      lottoUsers.textContent = formatNumber(stats.lotto_users) + '+';
    }
    if (lottoRating && stats.lotto_rating) {
      lottoRating.textContent = stats.lotto_rating.toFixed(1);
    }
  }

  /**
   * 숫자 애니메이션 효과
   */
  function animateNumber(element, targetValue) {
    const startValue = 0;
    const duration = 1000; // 1초
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out 효과
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * easeProgress);

      element.textContent = currentValue;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = targetValue; // 최종값 보장
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * 숫자 포맷팅 (1000 → 1,000)
   */
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /**
   * 여정 일수 계산 (시작일부터 오늘까지)
   */
  function calculateJourneyDays() {
    const startDate = new Date('2026-01-15'); // 프로젝트 시작일
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const dayElement = document.querySelector('.stat-value:last-child');
    if (dayElement && dayElement.textContent.startsWith('Day')) {
      dayElement.textContent = `Day ${diffDays}`;
    }
  }

  /**
   * 초기화 및 실행
   */
  function init() {
    // DOM 로드 확인
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        loadStats();
        calculateJourneyDays();
      });
    } else {
      loadStats();
      calculateJourneyDays();
    }
  }

  // 스크립트 실행
  init();

  // 전역 함수로 노출 (디버깅용)
  window.chulbujiStats = {
    reload: loadStats,
    update: updateStatsDOM
  };
})();

/**
 * 사용법:
 *
 * 1. Firebase 프로젝트 설정 후 FIREBASE_CONFIG 업데이트
 * 2. Firestore에 다음 구조로 데이터 생성:
 *
 *    Collection: site_config
 *    Document: stats
 *    Fields:
 *      - products_live: number
 *      - products_building: number
 *      - ideas: number
 *      - lotto_users: number
 *      - lotto_rating: number
 *
 * 3. index.html에 Firebase SDK 추가:
 *    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"></script>
 *    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"></script>
 *
 * 4. 이 스크립트를 로드:
 *    <script src="/firebase-stats.js"></script>
 *
 * 디버깅:
 *    콘솔에서 window.chulbujiStats.reload() 실행
 */
