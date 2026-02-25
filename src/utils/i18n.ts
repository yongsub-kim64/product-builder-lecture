export const languages = {
  ko: '한국어',
  en: 'English',
};

export const defaultLang = 'ko';

export type Lang = keyof typeof languages;

export const ui = {
  ko: {
    'nav.home': '홈',
    'nav.playground': 'Playground',
    'nav.insight': '인사이트',
    'nav.log': '기록',
    'nav.projects': '프로젝트',
    'nav.tools': '도구',
    'nav.about': '소개',
    'nav.contact': '연락하기',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관',
    'footer.contact': '연락하기',
    'log.readMore': '더 읽기',
    'log.allPosts': '모든 기록 보기',
    'log.latestPosts': '최근 기록',
    'projects.allProjects': '모든 프로젝트',
    'site.description': 'AI와 함께 흐릿한 생각을 선명하게 만듭니다',
  },
  en: {
    'nav.home': 'Home',
    'nav.playground': 'Playground',
    'nav.insight': 'Insight',
    'nav.log': 'Log',
    'nav.projects': 'Projects',
    'nav.tools': 'Tools',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'log.readMore': 'Read More',
    'log.allPosts': 'All Posts',
    'log.latestPosts': 'Latest Posts',
    'projects.allProjects': 'All Projects',
    'site.description': 'Transforming vague thoughts into clear structures with AI',
  },
} as const;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// 언어 전환 URL 생성
export function getLocalizedUrl(url: string, targetLang: Lang): string {
  const currentLang = url.startsWith('/en/') || url.startsWith('/en') ? 'en' : 'ko';
  
  if (currentLang === targetLang) return url;
  
  if (targetLang === 'ko') {
    // Remove /en prefix
    return url.replace(/^\/en/, '') || '/';
  } else {
    // Add /en prefix
    if (url === '/') return '/en';
    return `/en${url}`;
  }
}

// Get base path for current language
export function getBasePath(lang: Lang): string {
  return lang === 'en' ? '/en' : '';
}
