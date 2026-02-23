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

    1: {
        ko: "수배 중: 살아있으나 필시 혼란스러워 보임",
        en: "WANTED: ALIVE AND PROBABLY CONFUSED"
    },

    2: {
        ko: `전술적 양자<br><span class="keyword">비둘기</span> 승천`,
        en: `Tactical Quantum<br><span class="keyword">Pigeon</span> Ascension.`
    },

    3: {
        ko: "비둘기에게 말을 걸었다가 무시당한 경험을 바탕으로 제작되었습니다.<br>현재 식빵에 버터를 공격적으로 바르는 무술을 연구 중입니다.",
        en: "Founded on the profound personal defeat of trying to converse with a pigeon and receiving zero response.<br>Currently researching the martial art of aggressively applying butter to bread."
    },

    4: {
        ko: "스크롤하여 자폭하기",
        en: "SCROLL TO SELF_DESTRUCT"
    },

    5: {
        ko: "// 전술적 슬리퍼 // 머스터드로 양치하기 // 내 왼쪽 양말 어디갔어 // 양자 전자레인지 역학 // 전술적 슬리퍼 // 머스터드로 양치하기 // 내 왼쪽 양말 어디갔어 // 양자 전자레인지 역학",
        en: "// TACTICAL SLIPPERS // BRUSHING TEETH WITH MUSTARD // WHERE IS MY LEFT SOCK // QUANTUM MICROWAVE DYNAMICS // TACTICAL SLIPPERS // BRUSHING TEETH WITH MUSTARD // WHERE IS MY LEFT SOCK // QUANTUM MICROWAVE DYNAMICS"
    },

    6: {
        ko: "위험할 정도로 카페인에 절여짐<br>클래스: 중장갑형 미루기 장인",
        en: "STATUS: DANGEROUSLY CAFFEINATED<br>CLASS: HEAVY-DUTY PROCRASTINATOR"
    },

    7: {
        ko: "정신과 감정 평가서",
        en: "Psychiatric Evaluation Report"
    },

    8: {
        ko: "이 유기체는 비 오는 날 우산을 격렬하게 거부하는 독특한 진화 트리를 탔습니다. 자세히 들여다보면, 왼쪽 눈썹 결은 고장 난 와이파이 공유기의 신호창과 완벽히 일치하는 미친 디테일을 숨기고 있습니다.",
        en: "This organism has developed a unique evolutionary trait to violently repel umbrellas on a rainy day. If you look closely, the grain of their left eyebrow perfectly aligns with the WiFi signal bars of a broken router."
    },

    9: {
        ko: "레고 지뢰 내성",
        en: "Tolerance to Stepping on Legos"
    },

    10: {
        ko: "USB를 한 번에 올바르게 꽂기 능력",
        en: "Ability to Plug USB Correctly on 1st Try"
    },

    11: {
        ko: "반려식물과의 공격적인 토론 능력",
        en: "Aggressive Conversing with Houseplants"
    },

    12: {
        ko: "혈중 마요네즈 농도",
        en: "Blood-Mayonnaise Concentration"
    },

    13: {
        ko: "근거 없는 자신감의 연대기",
        en: "Chronicle of Unjustified Overconfidence"
    },

    14: {
        ko: "숟가락 휨의 재앙",
        en: "The Great Spoon Bending"
    },

    15: {
        ko: "유치원 때 플라스틱 포크로 콘크리트 벽을 부수며, 사회의 절대적 위협으로 화려하게 데뷔한 시점입니다.",
        en: "The exact moment I destroyed a concrete wall with a plastic fork at kindergarten, marking my debut as an absolute menace to society."
    },

    16: {
        ko: "비둘기 텔레파시 규약",
        en: "Pigeon Telepathy Protocol"
    },

    17: {
        ko: "공원의 비둘기 떼와 눈싸움에서 승리하여, 전 세계 빵 부스러기 서열 체계에서 절대적 우위를 확립한 시기입니다.",
        en: "Won a staring contest against a flock of pigeons in the park, establishing absolute dominance over the global breadcrumb hierarchy."
    },

    18: {
        ko: "얼티메이트 케첩 매트릭스",
        en: "Ultimate Ketchup Matrix"
    },

    19: {
        ko: "흰 셔츠를 입고도 단 한 방울의 케첩조차 튀기지 않는, 고대의 15연발 숟가락 스윙 콤보 기술을 완벽하게 마스터했습니다.",
        en: "Perfectly mastered the ancient 15-combo spoon swing technique while wearing a white shirt without a single drop of ketchup spilling."
    },

    20: {
        ko: "증후군 및 이상현상",
        en: "Symptoms & Anomalies"
    },

    21: {
        ko: "즉각적인 심리 상담이 요구되는 증상들.",
        en: "Symptoms requiring immediate psychological counseling."
    },

    22: {
        ko: "전술적 간식 섭취 전문가",
        en: "Tactical Snacking"
    },

    23: {
        ko: "적막이 흐르는 회의 시간에도 입안에서 감자칩을 소리 없이 녹여 먹는 암살자적 구강 구조를 소유함.",
        en: "Silently dissolving potato chips in the mouth during a quiet meeting like an absolute assassin."
    },

    24: {
        ko: "크록스와 양말의 미학",
        en: "Crocs with Socks Aesthetics"
    },

    25: {
        ko: "적들에게 심리적 우위를 확립하기 위해 한겨울용 두꺼운 양말에 샛노란 크록스를 매치함.",
        en: "Wearing bright yellow crocs with thick winter socks to establish psychological dominance over enemies."
    },

    26: {
        ko: "나무 조각 검술 마스터",
        en: "Wooden Sword Mastery"
    },

    27: {
        ko: "10년 전에 산 싸구려 기념품 목검으로 여름철 모기 척살률 100%를 달성함.",
        en: "Achieved a 100% mosquito eradication rate using a cheap souvenir wooden sword bought 10 years ago."
    },

    28: {
        ko: "추상적 미루기의 대가",
        en: "Abstract Procrastination"
    },

    29: {
        ko: "내일로 숨쉬기를 미루어 전 지구적 산소 소비량을 줄이는 친환경적 태만을 실천함.",
        en: "Postponing the act of breathing until tomorrow to save global oxygen supply. Eco-friendly laziness."
    },

    30: {
        ko: "풍기문란 증빙 자료",
        en: "Evidence of Public Disturbance"
    },

    31: {
        ko: "통제 불능 활동의 시각적 증명 자료",
        en: "Visual proof of unhinged activities."
    },

    32: {
        ko: "악마 소환진",
        en: "Summon the Demon"
    },

    33: {
        ko: "속히 인근 요양원에 전화를 걸어주십시오.",
        en: "Please call the local asylum."
    },

    34: {
        ko: "양파 썰면서 오열하는 영상 시청",
        en: "Watch me cry while cutting onions."
    },

    35: {
        ko: "카페인 중독자의 헛소리 모음",
        en: "Ramblings of a caffeinated madman."
    },

    36: {
        ko: "낯선 이들에게 피자 사달라고 구걸하기",
        en: "Begging strangers for free pizza."
    },

    37: {
        ko: "전 지구적 키보드 샷건/파괴 유발하기",
        en: "Inducing global keyboard smashing."
    },

    38: {
        ko: "대피 프로토콜 가동됨.",
        en: "Evacuation Protocol Initiated."
    },

    39: {
        ko: "비둘기 마피아가 당신을 찾기 전에 당장 도망치십시오.",
        en: "Run before the Pigeon Mafia finds you."
    },

    40: {
        ko: "영규1110'에 의해 제작됨 (고소하지 말아주세요)",
        en: "Developed by Yeonggyu1110 (Please don't sue me, my lawyers are just two pigeons)"
    }

};

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