const generateBtn = document.getElementById('generate');
const regenerateBtn = document.getElementById('regenerate');
const regenerateNotice = document.getElementById('regenerate-notice');
const resultDiv = document.getElementById('result');
const modeSelect = document.getElementById('mode-select');
const introTextP = document.querySelector('.intro-text p');

const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];

// Generates a set of unique random numbers
function generateUniqueNumbers(count, max, min = 1) {
    const numbers = new Set();
    while (numbers.size < count) {
        numbers.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

// Generates the final, valid lotto number sets based on the selected mode
function generateFinalLottoSets(mode) {
    const sets = [];
    const config = getModeConfig(mode); // Get config for generation
    for (let i = 0; i < 5; i++) {
        const mainBalls = generateUniqueNumbers(config.mainCount, config.mainMax, config.mainMin);
        let specialBall = null;
        if (config.specialCount > 0) {
            specialBall = generateUniqueNumbers(config.specialCount, config.specialMax, config.specialMin)[0];
        }
        sets.push({ main: mainBalls, special: specialBall });
    }
    return sets;
}

// Displays the final sets on the screen based on the selected mode
function displayFinalSets(sets, mode) {
    resultDiv.innerHTML = '';
    sets.forEach((set, i) => {
        const setContainer = document.createElement('div');
        setContainer.classList.add('lotto-set', colors[i % colors.length]);

        set.main.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            numberDiv.textContent = number;
            setContainer.appendChild(numberDiv);
        });

        if (set.special !== null) { // Check if special ball exists
            const separator = document.createElement('span');
            separator.classList.add('lotto-set-separator');
            separator.textContent = '+';
            setContainer.appendChild(separator);

            const specialBallDiv = document.createElement('div');
            specialBallDiv.classList.add('lotto-number', 'blue-ball'); // Reusing blue-ball for all special balls
            specialBallDiv.textContent = set.special;
            setContainer.appendChild(specialBallDiv);
        }
        resultDiv.appendChild(setContainer);
    });
}

function getCurrentMode() {
    return modeSelect ? modeSelect.value : 'korea';
}

function updateIntroText(mode) {
    if (introTextP && window.i18n && window.i18n.translations[window.i18n.currentLang]) {
        let key = 'introText';
        if (mode === 'china') key = 'introTextChina';
        else if (mode === 'powerball') key = 'introTextPowerball';
        else if (mode === 'lottomax') key = 'introTextLottoMax';
        
        const translation = window.i18n.translations[window.i18n.currentLang][key];
        if (translation) {
            introTextP.textContent = translation;
        }
        
        // Keep the key in sync for language changes
        introTextP.setAttribute('data-i18n-key', key);
    }
}

function getModeConfig(mode) {
    switch (mode) {
        case 'china':
            return { mainCount: 6, mainMin: 1, mainMax: 33, specialCount: 1, specialMin: 1, specialMax: 16, specialBallColorClass: 'red-ball', mainBallName: 'red balls', specialBallName: 'blue ball' };
        case 'powerball':
            return { mainCount: 5, mainMin: 1, mainMax: 69, specialCount: 1, specialMin: 1, specialMax: 26, specialBallColorClass: 'red-ball', mainBallName: 'white balls', specialBallName: 'Powerball' };
        case 'lottomax':
            return { mainCount: 7, mainMin: 1, mainMax: 50, specialCount: 0, specialMin: 0, specialMax: 0, mainBallName: 'numbers' };
        case 'korea':
        default:
            return { mainCount: 6, mainMin: 1, mainMax: 45, specialCount: 0, specialMin: 0, specialMax: 0, mainBallName: 'numbers' };
    }
}

// Unified function to generate numbers with animation
function generateAndAnimate() {
    const mode = getCurrentMode();
    const config = getModeConfig(mode);
    
    // Update UI state
    generateBtn.style.display = 'none';
    regenerateBtn.style.display = 'inline-block';
    regenerateNotice.style.display = 'block';
    regenerateBtn.disabled = true;
    resultDiv.innerHTML = ''; // Clear previous results

    // Create placeholder structure
    for (let i = 0; i < 5; i++) {
        const setContainer = document.createElement('div');
        setContainer.classList.add('lotto-set', colors[i % colors.length]);
        for (let j = 0; j < config.mainCount; j++) { // Main balls
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            setContainer.appendChild(numberDiv);
        }
        if (config.specialCount > 0) { // Special ball
            const separator = document.createElement('span');
            separator.classList.add('lotto-set-separator');
            separator.textContent = '+';
            setContainer.appendChild(separator);

            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number', 'blue-ball-placeholder'); // Placeholder for special ball
            setContainer.appendChild(numberDiv);
        }
        resultDiv.appendChild(setContainer);
    }

    // Start the spinning animation
    const animationDuration = 2000;
    const updateInterval = 80;

    const spinAnimation = setInterval(() => {
        resultDiv.querySelectorAll('.lotto-set').forEach(setContainer => {
            const mainBallDivs = Array.from(setContainer.querySelectorAll('.lotto-number:not(.blue-ball-placeholder)'));
            const specialBallDiv = setContainer.querySelector('.blue-ball-placeholder');

            mainBallDivs.forEach(div => {
                div.textContent = Math.floor(Math.random() * (config.mainMax - config.mainMin + 1)) + config.mainMin;
            });
            if (specialBallDiv) {
                specialBallDiv.textContent = Math.floor(Math.random() * (config.specialMax - config.specialMin + 1)) + config.specialMin;
            }
        });
    }, updateInterval);

    // Stop the animation and display final numbers
    setTimeout(() => {
        clearInterval(spinAnimation);
        const finalSets = generateFinalLottoSets(mode);
        displayFinalSets(finalSets, mode);
        regenerateBtn.disabled = false;
    }, animationDuration);
}

// Event Listeners
generateBtn.addEventListener('click', generateAndAnimate);
regenerateBtn.addEventListener('click', generateAndAnimate);

function resetUI() {
    generateBtn.style.display = 'inline-block';
    regenerateBtn.style.display = 'none';
    regenerateNotice.style.display = 'none';
    resultDiv.innerHTML = '';
}

if (modeSelect) {
    modeSelect.addEventListener('change', () => {
        const mode = getCurrentMode();
        updateIntroText(mode);
        resetUI();
    });
}

const langSelect = document.getElementById('lang-select');
if (langSelect) {
    langSelect.addEventListener('change', () => {
        // The i18n.js script will handle the language change.
        // We just need to reset the UI state.
        resetUI();
    });
}

// Initial call for strategy guide rules if page is loaded directly
document.addEventListener('DOMContentLoaded', () => {
    // Only run updateIntroText on DOMContentLoaded.
    // Generation will only be called on button click.
    const mode = getCurrentMode();
    updateIntroText(mode);

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Mobile bottom bar auto-hide on scroll
    const sidebar = document.querySelector('.sidebar');
    const contentArea = document.querySelector('.content-area');
    let lastScrollTop = 0;
    let scrollThreshold = 50;

    if (sidebar && contentArea && window.innerWidth <= 768) {
        contentArea.addEventListener('scroll', () => {
            const scrollTop = contentArea.scrollTop;
            if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    // Scrolling down - hide sidebar
                    sidebar.classList.add('hidden');
                } else {
                    // Scrolling up - show sidebar
                    sidebar.classList.remove('hidden');
                }
                lastScrollTop = scrollTop;
            }
        });
    }

    // Also listen to window scroll for mobile
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 768 && sidebar) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (Math.abs(scrollTop - lastScrollTop) > scrollThreshold) {
                if (scrollTop > lastScrollTop && scrollTop > 100) {
                    sidebar.classList.add('hidden');
                } else {
                    sidebar.classList.remove('hidden');
                }
                lastScrollTop = scrollTop;
            }
        }
    }, { passive: true });
});