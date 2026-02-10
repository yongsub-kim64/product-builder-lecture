document.addEventListener('DOMContentLoaded', () => {
  const langToggles = document.querySelectorAll('.lang-toggle');

  function getLocalizedUrl(currentUrlPath, targetLang) {
      const currentSearch = window.location.search;
      const currentHash = window.location.hash;

      let newPath = currentUrlPath;
      const isCurrentlyEnglish = document.documentElement.lang === 'en';

      // Helper to get a clean path for comparison (removes /index.html)
      const getComparisonPath = (path) => {
          let cleaned = path.replace(/\/index\.html$/, '');
          if (cleaned === '') return '/';
          return cleaned;
      };

      const currentComparisonPath = getComparisonPath(currentUrlPath);

      if (targetLang === 'en') {
          // Switching to English
          if (!isCurrentlyEnglish) {
              // Current language is NOT English, so we need to add '/en/' prefix
              if (currentComparisonPath === '/') {
                  newPath = '/en/';
              } else if (!currentComparisonPath.startsWith('/en/')) {
                  // Prefix with /en/
                  newPath = '/en' + currentUrlPath;
              }
              // If already starts with /en/, keep as is.
          }
      } else { // targetLang is non-English (e.g., 'ko')
          // Switching to non-English
          if (isCurrentlyEnglish) {
              // Current language IS English, so we need to remove '/en/' prefix
              if (currentComparisonPath === '/en/') {
                  newPath = '/';
              } else if (currentComparisonPath.startsWith('/en/')) {
                  // Remove /en/ prefix
                  newPath = currentUrlPath.substring(3);
                  if (newPath === '') { // Handles '/en' becoming '/'
                      newPath = '/';
                  }
              }
              // If doesn't start with /en/ and is English, keep as is (anomaly or non-localized)
          }
      }

      // --- Trailing slash consistency ---
      // For non-root paths: If original had a trailing slash, ensure newPath does. If original didn't, ensure newPath doesn't.
      const newPathIsRootVariant = (newPath === '/' || newPath === '/en/');
      const currentPathIsRootVariant = (currentUrlPath === '/' || currentUrlPath === '/en/' || currentUrlPath === '/index.html' || currentUrlPath === '/en/index.html');

      if (!newPathIsRootVariant && !currentPathIsRootVariant) {
          if (currentUrlPath.endsWith('/') && !newPath.endsWith('/')) {
              newPath += '/';
          } else if (!currentUrlPath.endsWith('/') && newPath.endsWith('/')) {
              newPath = newPath.slice(0, -1);
          }
      }
      // Ensure root paths are canonical
      if (newPath === '/index.html') newPath = '/';
      if (newPath === '/en/index.html') newPath = '/en/';
      
      // Add back search and hash
      return newPath + currentSearch + currentHash;
  }

  langToggles.forEach(langToggle => {
    const currentPath = window.location.pathname;
    const isEn = document.documentElement.lang === 'en';

    let newLangText;
    let targetLangCode;

    if (isEn) {
      // Currently English, link should switch to Korean
      newLangText = '한국어';
      targetLangCode = 'ko';
    } else {
      // Currently non-English, link should switch to English
      newLangText = 'EN';
      targetLangCode = 'en';
    }

    langToggle.href = getLocalizedUrl(currentPath, targetLangCode);
    langToggle.textContent = newLangText;
  });
});
