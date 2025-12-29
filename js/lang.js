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
                applicationOrderBtn: '查看申请顺序',
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
                applicationOrderBtn: '신청 순서 보기',
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
            applicationOrderBtn: '查看申请顺序',
            whitelistBtn: '确认教育部韩国院校白名单',
            tuitionFeesBtn: '查看学费',
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
            applicationOrderBtn: '신청 순서 보기',
            whitelistBtn: '교육부 한국 대학 화이트리스트 확인',
            tuitionFeesBtn: '등록금 보기',
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
            agentApplication: '委托办理入学申请',
            agentApplicationDesc: '点击这里，委托我们为您办理入学申请！',
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
            agentApplication: '입학 신청 위탁',
            agentApplicationDesc: '여기를 클릭하여 입학 신청을 위탁하세요！',
            languageToggleTitle: '중국어로 전환'
        }
    },
    
    // 申请顺序页面文本
    application_order: {
        chinese: {
            applicationOrderTitle: '申请顺序',
            applicationOrderSubtitle: '根据申请截止时间排序的推荐大学',
            applicationOrderSectionTitle: '申请截止时间排序',
            backToResults: '返回推荐结果',
            deadlineLabel: '申请截止时间',
            matchScoreLabel: '匹配度',
            rankLabel: '排名',
            locationLabel: '所在地',
            applicationOrderTooltip: '按申请截止时间排序，最先截止的大学排在前面',
            marchIntakeLabel: '3月入学',
            septemberIntakeLabel: '9月入学',
            intakeToggleTip: '点击切换查看不同入学时间的申请截止时间',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            applicationOrderTitle: '신청 순서',
            applicationOrderSubtitle: '신청 마감 시간별로 정렬된 추천 대학',
            applicationOrderSectionTitle: '신청 마감 시간별 정렬',
            backToResults: '추천 결과로 돌아가기',
            deadlineLabel: '신청 마감 시간',
            matchScoreLabel: '일치도',
            rankLabel: '순위',
            locationLabel: '위치',
            applicationOrderTooltip: '신청 마감 시간별로 정렬, 먼저 마감하는 대학이 앞에 있음',
            marchIntakeLabel: '3월 입학',
            septemberIntakeLabel: '9월 입학',
            intakeToggleTip: '다른 입학 시간의 신청 마감 시간을 확인하려면 클릭하세요',
            languageToggleTitle: '중국어로 전환'
        }
    },
    
    // 委托办理入学申请页面文本
    agent: {
        chinese: {
            agentPageTitle: '委托办理入学申请',
            agentPageSubtitle: '我们专业为您提供韩国大学入学申请服务',
            contactInfo: '联系方式',
            wechatInfo: '微信咨询',
            wechatDesc: '扫描二维码添加微信，了解更多入学申请信息',
            backToSchool: '返回学校介绍',
            koreanTrainingBtn: '韩语培训',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            agentPageTitle: '입학 신청 위탁',
            agentPageSubtitle: '저희는 전문적으로 한국 대학 입학 신청 서비스를 제공합니다',
            contactInfo: '연락처',
            wechatInfo: '위챗 상담',
            wechatDesc: 'QR 코드를 스캔하여 위챗을 추가하고, 입학 신청 정보를 더 알아보세요',
            backToSchool: '학교 소개로 돌아가기',
            koreanTrainingBtn: '한국어 교육',
            languageToggleTitle: '중국어로 전환'
        }
    },
    
    // 韩语培训页面文本
    koreanTraining: {
        chinese: {
            trainingPageTitle: '韩语培训',
            trainingPageSubtitle: '提高韩语水平，申请更好的韩国大学',
            contactInfo: '联系方式',
            trainingTypesTitle: '韩语培训类别',
            onlineTrainingTitle: '网上1对1培训',
            onlineTrainingDesc: '一对一在线韩语培训课程，灵活安排时间，针对性提高韩语水平。',
            offlineTrainingTitle: '线下培训',
            offlineTrainingDesc: '面对面韩语培训课程，与老师和其他同学互动交流，学习效果更佳。',
            offlineLocationsTitle: '线下培训地址',
            location1Name: '北京外国语大学',
            location1Desc: '北京市海淀区西三环北路19号',
            location2Name: '中国传媒大学',
            location2Desc: '北京市朝阳区定福庄东街1号',
            location3Name: '华东师范大学',
            location3Desc: '上海市普陀区中山北路3663号',
            advertisementTitle: '专业韩语培训',
            advertisementText: '确保增加韩语水平，能够申请到更好的大学',
            backToAgent: '返回委托办理',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            trainingPageTitle: '한국어 교육',
            trainingPageSubtitle: '한국어 실력을 향상시켜 더 나은 한국 대학에 입학하세요',
            contactInfo: '연락처',
            trainingTypesTitle: '한국어 교육 유형',
            onlineTrainingTitle: '온라인 1:1 교육',
            onlineTrainingDesc: '개인 맞춤형 온라인 한국어 교육 과정에서 시간을 유연하게 조정하고 한국어 실력을 집중적으로 향상시킬 수 있습니다.',
            offlineTrainingTitle: '오프라인 교육',
            offlineTrainingDesc: '교사 및 다른 학생들과 대면하여 대화하는 오프라인 한국어 교육 과정으로 학습 효과가 더 좋습니다.',
            offlineLocationsTitle: '오프라인 교육 주소',
            location1Name: '베이징외국어대학교',
            location1Desc: '베이징시하이디엔구 시산환북로 19호',
            location2Name: '중국언론대학교',
            location2Desc: '베이징시차오양구딩푸좡동제1호',
            location3Name: '동화사범대학교',
            location3Desc: '상하이시푸터우구중산베이루 3663호',
            advertisementTitle: '전문 한국어 교육',
            advertisementText: '한국어 실력을 확실히 향상시켜 더 나은 대학에 입학할 수 있습니다',
            backToAgent: '위탁 신청으로 돌아가기',
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
    
    // 学费页面文本
    tuition_fees: {
        chinese: {
            pageTitle: '学费信息',
            headerTitle: '推荐大学学费详情',
            headerSubtitle: '根据您的成绩推荐大学的学费信息',
            backToResults: '返回推荐结果',
            tuitionSectionTitle: '推荐大学学费详情',
            noTuitionData: '暂无学费信息，请返回推荐结果页面。',
            universityRank: '全国第',
            universityRankSuffix: '名',
            universityLocation: '📍 ',
            matchScoreLabel: '匹配度:',
            liberalArtsTitle: '文科',
            liberalArtsDesc: '文科类专业学费',
            scienceEngineeringTitle: '理工科',
            scienceEngineeringDesc: '理工科类专业学费',
            artsTitle: '艺术类',
            artsDesc: '艺术类专业学费',
            tuitionNote: '注：学费信息仅供参考，具体费用请以各大学官方公布为准',
            viewDetailsBtn: '查看学校详情',
            languageToggleTitle: '切换韩语'
        },
        korean: {
            pageTitle: '등록금 정보',
            headerTitle: '추천 대학 등록금 상세 정보',
            headerSubtitle: '성적을 바탕으로 추천한 대학의 등록금 정보',
            backToResults: '추천 결과로 돌아가기',
            tuitionSectionTitle: '추천 대학 등록금 상세 정보',
            noTuitionData: '등록금 정보가 없습니다. 추천 결과 페이지로 돌아가주세요.',
            universityRank: '전국 제',
            universityRankSuffix: '위',
            universityLocation: '📍 ',
            matchScoreLabel: '일치도:',
            liberalArtsTitle: '문과',
            liberalArtsDesc: '문과 계열 등록금',
            scienceEngineeringTitle: '이과',
            scienceEngineeringDesc: '이과 계열 등록금',
            artsTitle: '예술계',
            artsDesc: '예술계열 등록금',
            tuitionNote: '주：등록금 정보는 참고용이며, 구체적인 비용은 각 대학 공식 발표를 기준으로 하세요',
            viewDetailsBtn: '학교 상세 보기',
            languageToggleTitle: '중국어로 전환'
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
    } else if (window.location.pathname.includes('application_order.html')) {
        pageType = 'application_order';
    } else if (window.location.pathname.includes('agent_application.html')) {
        pageType = 'agent';
    } else if (window.location.pathname.includes('korean_training.html')) {
        pageType = 'koreanTraining';
    } else if (window.location.pathname.includes('tuition_fees.html')) {
        pageType = 'tuition_fees';
    } else {
        pageType = 'index';
    }
    
    // 更新页面标题
    if (pageType === 'school') {
        document.title = translations.school[currentLanguage].schoolPageTitle;
    } else if (pageType === 'application_order') {
        document.title = translations.application_order[currentLanguage].applicationOrderTitle;
    } else if (pageType === 'agent') {
        document.title = translations.agent[currentLanguage].agentPageTitle;
    } else if (pageType === 'koreanTraining') {
        document.title = translations.koreanTraining[currentLanguage].trainingPageTitle;
    } else if (pageType === 'tuition_fees') {
        document.title = translations.tuition_fees[currentLanguage].pageTitle;
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
    
    // 在学校页面时，重新调用displaySchoolInfo刷新内容
    if (window.location.pathname.includes('school.html') && typeof window.currentUniversity !== 'undefined' && typeof displaySchoolInfo === 'function') {
        displaySchoolInfo(window.currentUniversity);
    }
    
    // 在申请顺序页面时，重新调用displayApplicationOrder刷新内容
    if (window.location.pathname.includes('application_order.html') && typeof window.recommendedUniversities !== 'undefined' && typeof displayApplicationOrder === 'function') {
        displayApplicationOrder(window.recommendedUniversities);
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