const glow = document.querySelector('.cursor-glow');
const dot = document.querySelector('.cursor-dot');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let curX = mouseX;
let curY = mouseY;
const speed = 0.08;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

function animate() {
    curX += (mouseX - curX) * speed;
    curY += (mouseY - curY) * speed;
    glow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
}
animate();

document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
    dot.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    glow.style.opacity = '0.8';
    dot.style.opacity = '1';
});

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('stats-container')) {
                    const bars = entry.target.querySelectorAll('.stat-bar-fill');
                    bars.forEach(bar => {
                        bar.style.width = bar.getAttribute('data-width');
                    });
                }
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-text, .reveal-card, .reveal-img, .reveal-item, .stats-container');
    revealElements.forEach(el => observer.observe(el));
});

const translations = {
    heroDesc: {
        ko: "생물학적 영감과 캐릭터의 세계관이 만나는 디지털 아카이브.<br>생물학적 영감과 캐릭터의 진화 과정을 탐구합니다.",
        en: "A digital archive where biological inspiration meets character lore.<br>Exploring biological inspiration and the evolutionary process of the character."
    },
    dataOverlay: {
        ko: "상태: 활동 중<br>분류: 딕티오스텔리움 (점균류)",
        en: "STATUS: ACTIVE<br>CLASS: D. discoideum"
    },
    profileDesc: {
        ko: "이 캐릭터는 자연계의 유기적인 곡선과 독창적인 민트초록 퍼스널 컬러를 기반으로 디자인되었습니다.<br>현미경으로 관찰하듯, 자세히 들여다볼수록 더 많은 곰팡이를 발견할 수 있습니다.",
        en: "This character is designed based on organic curves found in nature and a unique mint-green personal color. As if observing through a microscope, the closer you look, the more molds you can discover."
    },
    stats1Desc: {
        ko: "모든 것의 시작. 생물학에 처음 관심을 가지게 된 시점입니다.",
        en: "The start of everything. The point where the interest in biology first emerged."
    },
    stats2Desc: {
        ko: "생명의 신비를 탐구하며 지식을 쌓아가는 과정입니다. 끊임없는 실험과 관찰이 이루어졌습니다.",
        en: "The process of accumulating knowledge while exploring the mysteries of life. Constant experiments and observations were conducted."
    },
    stats3Desc: {
        ko: "지금 이 순간, 캐릭터는 최신의 기술과 디자인을 접목하여 완성되었습니다.",
        en: "At this very moment, the character has been completed by grafting the latest technology and design."
    },
    skillCardDesc: {
        ko: "대상의 주요 관심사와 특징입니다.",
        en: "Subject's primary interests and characteristics."
    },
    skillCard1: {
        ko: "생명의 구조와 원리를 탐구합니다.",
        en: "Biomimicry<br>Implementing designs and functions inspired by nature."
    },
    skillCard2: {
        ko: "상상 속의 생명체를 시각화합니다.",
        en: "Adaptability<br>The ability to respond flexibly to environmental changes."
    },
    skillCard3: {
        ko: "끊임없이 멈추지 않고 성장합니다.",
        en: "Evolutionary Design<br>A design approach that reflects the evolutionary process of organisms."
    },
    skillCard4: {
        ko: "새로운 시도를 두려워하지 않습니다.",
        en: "Biomaterials<br>Design utilizing materials inspired by biology."
    },
    gallerySub: {
        ko: "수집된 시각 데이터",
        en: "Captured visual data."
    },
    snsSub: {
        ko: "직접 연결 수립",
        en: "Establish direct connection."
    },
    snsCard1: {
        ko: "콘텐츠 시청",
        en: "Watch Content"
    },
    snsCard2: {
        ko: "최신 생각들",
        en: "Latest Thoughts"
    },
    snsCard3: {
        ko: "다이렉트 메시지",
        en: "Direct Message"
    },
    snsCard4: {
        ko: "테트리오 플레이어",
        en: "tetrio player"
    },
    footerSub: {
        ko: "방문해 주셔서 감사합니다.",
        en: "Thank you for visiting."
    }


}

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    let currentLang = 'ko';

    const userLang = navigator.language || navigator.userLanguage;
    if (!userLang.includes('ko')) {
        currentLang = 'en';
    }

    updateContent(currentLang);

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ko' ? 'en' : 'ko';
        updateContent(currentLang);
    });

    function updateContent(lang) {
        const elements = document.querySelectorAll('[data-translate]');

        elements.forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[key] && translations[key][lang]) {
                el.innerHTML = translations[key][lang];
            }
        });

        langBtn.textContent = lang === 'ko'
            ? "[ SWITCH LANGUAGE : EN ]"
            : "[ SWITCH LANGUAGE : KR ]";

        document.body.style.wordBreak = lang === 'ko' ? 'keep-all' : 'normal';
    }
});