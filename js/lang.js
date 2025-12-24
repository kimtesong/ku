// 双语文本数据结构
const translations = {
    // 通用文本
    common: {
        chinese: {
            pageTitle: '韩国大学推荐系统',
            copyright: '© 2025 韩国大学推荐系统 | 数据仅供参考，请以各大学官方要求为准'
        },
        korean: {
            pageTitle: '한국 대학 추천 시스템',
            copyright: '© 2025 한국 대학 추천 시스템 | 데이터는 참고용이며 각 대학 공식 요구사항为准'
        }
    },
    
    // 主页面文本
    index: {
        chinese: {
                headerTitle: '韩国大学推荐系统',
                headerSubtitle: '根据您的韩语成绩、英语成绩和高中平均成绩，为您推荐最适合的韩国大学',
                inputSectionTitle: '请输入您的成绩信息',
                topikLabel: '韩语成绩（TOPIK等级）：',
                topikHint: 'TOPIK等级范围：0-6级（0表示没有成绩）',
                toeflLabel: '英语成绩（TOEFL分数）：',
                toeflHint: 'TOEFL分数范围：0-120分',
                gpaLabel: '高中平均成绩（GPA）：',
                gpaHint: 'GPA范围：0-4.0',
                recommendBtn: '获取推荐结果',
                languageToggleTitle: '切换韩语'
            },
            korean: {
                headerTitle: '한국 대학 추천 시스템',
                headerSubtitle: '한국어 성적, 영어 성적 및 고등학교 평균 성적을 바탕으로 가장 적합한 한국 대학을 추천합니다',
                inputSectionTitle: '성적 정보를 입력해 주세요',
                topikLabel: '한국어 성적（TOPIK 등급）：',
                topikHint: 'TOPIK 등급 범위：0-6급（0은 성적 없음을 의미）',
                toeflLabel: '영어 성적（TOEFL 점수）：',
                toeflHint: 'TOEFL 점수 범위：0-120점',
                gpaLabel: '고등학교 평균 성적（GPA）：',
                gpaHint: 'GPA 범위：0-4.0',
                recommendBtn: '추천 결과 받기',
                languageToggleTitle: '중국어로 전환'
            }
    },
    
    // 结果页面文本
    result: {
        chinese: {
            headerTitle: '韩国大学推荐结果',
            headerSubtitle: '根据您提供的成绩，为您推荐以下韩国大学',
            backBtn: '返回重新输入',
            resultSectionTitle: '推荐大学清单',
            noResults: '没有找到匹配的大学，请尝试调整您的成绩范围。',
            universityRank: '全国第',
            universityRankSuffix: '名',
            universityLocation: '📍 ',
            universityType: '🏛️ ',
            topikRequirement: '📚 TOPIK要求:',
            topikRequirementSuffix: '级',
            toeflRequirement: '📝 TOEFL要求:',
            toeflRequirementSuffix: '分',
            gpaRequirement: '🎓 GPA要求:',
            matchScoreLabel: '匹配度:',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            headerTitle: '한국 대학 추천 결과',
            headerSubtitle: '제공한 성적을 바탕으로 다음과 같은 한국 대학을 추천합니다',
            backBtn: '다시 입력하기',
            resultSectionTitle: '추천 대학 목록',
            noResults: '일치하는 대학을 찾을 수 없습니다. 성적 범위를 조정해 보세요.',
            universityRank: '전국 제',
            universityRankSuffix: '위',
            universityLocation: '📍 ',
            universityType: '🏛️ ',
            topikRequirement: '📚 TOPIK 요구사항:',
            topikRequirementSuffix: '급',
            toeflRequirement: '📝 TOEFL 요구사항:',
            toeflRequirementSuffix: '점',
            gpaRequirement: '🎓 GPA 요구사항:',
            matchScoreLabel: '일치도:',
            languageToggleTitle: '중국어로 전환'
        }
    },
    
    // 学校详情页面文本
    school: {
        chinese: {
            schoolPageTitle: '学校介绍',
            backToResults: '返回推荐结果',
            basicInfo: '基本信息',
            rank: '全国排名',
            location: '所在城市',
            type: '学校类型',
            requirements: '入学要求',
            admissionRequirements: '入学要求',
            topikRequirement: 'TOPIK要求',
            toeflRequirement: 'TOEFL要求',
            gpaRequirement: 'GPA要求',
            description: '学校介绍',
            contact: '联系方式',
            contactInformation: '联系信息',
            email: '电子邮箱',
            phone: '联系电话',
            website: '官方网站',
            applicationMaterials: '外国人申请材料',
            marchIntake: '3月入学',
            septemberIntake: '9月入学',
            applicationPeriod: '申请时间',
            resultAnnounce: '结果公布时间',
            backToList: '返回推荐列表',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            schoolPageTitle: '학교 소개',
            backToResults: '추천 결과로 돌아가기',
            basicInfo: '기본 정보',
            rank: '전국 순위',
            location: '위치',
            type: '학교 유형',
            requirements: '입학 요건',
            admissionRequirements: '입학 요건',
            topikRequirement: 'TOPIK 요구사항',
            toeflRequirement: 'TOEFL 요구사항',
            gpaRequirement: 'GPA 요구사항',
            description: '학교 소개',
            contact: '연락처',
            contactInformation: '연락 정보',
            email: '이메일',
            phone: '전화번호',
            website: '공식 웹사이트',
            applicationMaterials: '외국인 입학材料',
            marchIntake: '3월 입학',
            septemberIntake: '9월 입학',
            applicationPeriod: '접수 기간',
            resultAnnounce: '결과 발표 일자',
            backToList: '추천 목록으로 돌아가기',
            languageToggleTitle: '중국어로 전환'
        }
    },
    
    // 表单验证错误提示
    validation: {
        chinese: {
            required: '此项为必填',
            topikRange: 'TOPIK等级必须在0-6之间',
            toeflRange: 'TOEFL分数必须在0-120之间',
            gpaRange: 'GPA必须在0-4.0之间',
            mustBeNumber: '请输入有效的数字'
        },
        korean: {
            required: '이 항목은 필수입니다',
            topikRange: 'TOPIK 등급은 0-6 사이여야 합니다',
            toeflRange: 'TOEFL 점수는 0-120 사이여야 합니다',
            gpaRange: 'GPA는 0-4.0 사이여야 합니다',
            mustBeNumber: '유효한 숫자를 입력해 주세요'
        }
    },
    
    // 加载状态
    loading: {
        chinese: '正在计算推荐结果...',
        korean: '추천 결과를 계산 중입니다...'
    }
};

// 语言切换函数
let currentLanguage = 'chinese';

// 初始化语言设置
function initLanguage() {
    // 从localStorage获取保存的语言偏好
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateLanguage();
}

// 更新页面语言
function updateLanguage() {
    // 获取当前页面类型
    let pageType;
    if (window.location.pathname.includes('result.html')) {
        pageType = 'result';
    } else if (window.location.pathname.includes('school.html')) {
        pageType = 'school';
    } else {
        pageType = 'index';
    }
    
    // 更新页面标题
    if (pageType === 'school') {
        document.title = translations.school[currentLanguage].schoolPageTitle;
    } else {
        document.title = translations.common[currentLanguage].pageTitle;
    }
    
    // 更新所有带有data-translate属性的元素
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, pageType);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 更新带有data-translate-title属性的元素的title
    const titleElements = document.querySelectorAll('[data-translate-title]');
    titleElements.forEach(element => {
        const key = element.getAttribute('data-translate-title');
        const translation = getTranslation(key, pageType);
        if (translation) {
            element.title = translation;
        }
    });
    
    // 更新语言切换按钮状态
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.classList.toggle('active', currentLanguage === 'korean');
        // 根据当前语言更新按钮内容：韩语时显示CH，汉语时显示KR
        languageToggle.textContent = currentLanguage === 'korean' ? 'CH' : 'KR';
    }
    
    // 保存语言偏好
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// 获取翻译文本
function getTranslation(key, pageType) {
    // 尝试从页面特定翻译中获取
    if (translations[pageType] && translations[pageType][currentLanguage][key]) {
        return translations[pageType][currentLanguage][key];
    }
    
    // 尝试从通用翻译中获取
    if (translations.common && translations.common[currentLanguage][key]) {
        return translations.common[currentLanguage][key];
    }
    
    // 尝试从验证翻译中获取
    if (translations.validation && translations.validation[currentLanguage][key]) {
        return translations.validation[currentLanguage][key];
    }
    
    // 尝试从加载状态翻译中获取
    if (translations.loading && translations.loading[currentLanguage][key]) {
        return translations.loading[currentLanguage][key];
    }
    
    return null;
}

// 切换语言
function toggleLanguage() {
    currentLanguage = currentLanguage === 'chinese' ? 'korean' : 'chinese';
    updateLanguage();
    
    // 在结果页时，重新调用displayResults刷新内容
    if (window.location.pathname.includes('result.html') && typeof window.recommendedUniversities !== 'undefined' && typeof displayResults === 'function') {
        displayResults(window.recommendedUniversities);
    }
}

// 为语言切换按钮添加事件监听器
function setupLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }
}

// 主题切换功能
let currentTheme = 'blue';

// 初始化主题设置
function initTheme() {
    // 从localStorage获取保存的主题偏好
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        currentTheme = savedTheme;
    }
    // 应用主题
    applyTheme(currentTheme);
}

// 应用主题
function applyTheme(theme) {
    // 移除所有主题类
    document.body.classList.remove('theme-red', 'theme-orange', 'theme-yellow', 'theme-green', 'theme-blue', 'theme-purple');
    // 添加当前主题类
    document.body.classList.add(`theme-${theme}`);
    
    // 更新主题切换按钮的激活状态
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.theme === theme);
    });
    
    // 保存主题偏好
    localStorage.setItem('preferredTheme', theme);
    currentTheme = theme;
}

// 切换主题
function switchTheme(theme) {
    applyTheme(theme);
}

// 为主题切换按钮添加事件监听器
function setupThemeToggle() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchTheme(btn.dataset.theme);
        });
    });
}

// 导出函数供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, initLanguage, toggleLanguage, updateLanguage, initTheme, setupThemeToggle };
}