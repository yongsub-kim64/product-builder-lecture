const i18n = {
    translations: {},
    currentLang: 'ko',

    async setLanguage(lang) {
        if (!this.translations[lang]) {
            try {
                const response = await fetch(`locales/${lang}.json`);
                if (!response.ok) {
                    console.error(`Could not load translation file for ${lang}`);
                    this.translations[lang] = {}; // Avoid trying to load again
                    return;
                }
                this.translations[lang] = await response.json();
            } catch (error) {
                console.error(`Error fetching translation file for ${lang}:`, error);
                return;
            }
        }
        
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
        document.documentElement.lang = lang;
        this.translatePage();
    },

    translatePage() {
        const translationData = this.translations[this.currentLang];
        if (!translationData) {
            console.error("Translations not loaded for", this.currentLang);
            return;
        }

        document.querySelectorAll('[data-i18n-key]').forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            if (translationData[key]) {
                // Check if element should use innerHTML (for elements that contain HTML markup)
                const useHtml = element.hasAttribute('data-i18n-html') ||
                                element.tagName === 'P' ||
                                element.tagName === 'LI' ||
                                element.classList.contains('faq-answer');

                if (useHtml) {
                    element.innerHTML = translationData[key];
                } else {
                    // Handle elements that have other child elements (like labels for select)
                    const textNode = Array.from(element.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
                    if (textNode) {
                        textNode.textContent = translationData[key];
                    } else {
                        element.textContent = translationData[key];
                    }
                }
            }
        });

        if (translationData.pageTitle) {
            document.title = translationData.pageTitle;
        }
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && translationData.metaDescription) {
            metaDescription.setAttribute('content', translationData.metaDescription);
        }
    },

    getInitialLanguage() {
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && ['en', 'ko', 'zh'].includes(savedLang)) {
            return savedLang;
        }
        const browserLang = navigator.language.split('-')[0];
        if (['en', 'ko', 'zh'].includes(browserLang)) {
            return browserLang;
        }
        return 'en'; // Default to English
    },

    init() {
        const langSelect = document.getElementById('lang-toggle');
        const initialLang = this.getInitialLanguage();

        if (langSelect) {
            langSelect.value = initialLang;
            langSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value);
            });
        }
        
        // Load initial language and translate
        this.setLanguage(initialLang);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
});
