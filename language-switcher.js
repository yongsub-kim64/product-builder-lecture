document.addEventListener('DOMContentLoaded', () => {
  const langToggles = document.querySelectorAll('.lang-toggle');

  // From the find command:
  // en/insight.html, en/log/001-rebrand-launch.html, en/about.html, en/projects.html, en/contact/index.html, en/tools/lotto/index.html, en/tools/index.html, en/terms/index.html, en/log.html, en/privacy/index.html, en/index.html, en/tools.html
  const existingEnPaths = [
    '/en/',
    '/en/insight',
    '/en/log/001-rebrand-launch',
    '/en/about',
    '/en/projects',
    '/en/contact/',
    '/en/tools/lotto/',
    '/en/tools/',
    '/en/terms/',
    '/en/log',
    '/en/privacy/',
    '/en/tools'
  ];

  langToggles.forEach(langToggle => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;

    let newPath;
    let newLang;
    let isEn = document.documentElement.lang === 'en';

    if (isEn) {
      // English to Korean
      newLang = '한국어';
      newPath = currentPath.replace('/en/', '/');
      if (newPath === '/en') newPath = '/';
      
      // KR fallback is always root
    } else {
      // Korean to English
      newLang = 'EN';
      if (currentPath === '/' || currentPath === '/index.html') {
        newPath = '/en/';
      } else {
        newPath = '/en' + currentPath.replace(/\/index\.html$/, '/');
      }

      // Check if the path exists in the list (with or without trailing slash)
      let pathExists = existingEnPaths.some(p => {
          const pClean = p.endsWith('/') ? p.slice(0, -1) : p;
          const newPathClean = newPath.endsWith('/') ? newPath.slice(0, -1) : newPath;
          return pClean === newPathClean;
      });

      if (!pathExists) {
        newPath = '/en/';
      }
    }

    langToggle.href = newPath + currentSearch + currentHash;
    langToggle.textContent = newLang;
  });
});
