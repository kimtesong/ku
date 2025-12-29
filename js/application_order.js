// 申请顺序页面交互逻辑

// DOM元素
const applicationOrderContent = document.getElementById('applicationOrderContent');
const backBtn = document.getElementById('backBtn');
const marchIntakeBtn = document.getElementById('marchIntakeBtn');
const septemberIntakeBtn = document.getElementById('septemberIntakeBtn');

// 当前选择的入学时间，默认为3月
let currentIntake = 'march';

// 页面加载时执行
window.addEventListener('DOMContentLoaded', async () => {
    // 初始化语言和主题功能
    initLanguage();
    setupLanguageToggle();
    initTheme();
    setupThemeToggle();
    
    // 从localStorage获取推荐结果
    const userScoresJson = localStorage.getItem('userScores');
    
    console.log('从localStorage获取的用户成绩:', userScoresJson);
    
    if (!userScoresJson) {
        // 如果没有成绩数据，跳回主页面
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const userScores = JSON.parse(userScoresJson);
        console.log('解析后的用户成绩:', userScores);
        
        // 转换用户成绩为正确的数据类型
        const formattedUserScores = {
            topik: parseInt(userScores.topik),
            toefl: parseInt(userScores.toefl),
            gpa: parseFloat(userScores.gpa)
        };
        
        // 使用推荐函数获取结果
        window.recommendedUniversities = await recommendUniversities(formattedUserScores);
        
        console.log('推荐结果:', window.recommendedUniversities);
        console.log('推荐结果数量:', window.recommendedUniversities.length);
        
        // 显示申请顺序
        displayApplicationOrder(window.recommendedUniversities);
    } catch (error) {
        console.error('处理申请顺序时发生错误:', error);
        applicationOrderContent.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>错误</h2>
                <p>加载申请顺序时发生错误，请稍后重试。</p>
            </div>
        `;
    }
});

// 显示申请顺序
function displayApplicationOrder(universities) {
    if (universities.length === 0) {
        applicationOrderContent.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <p>没有找到推荐的大学。</p>
            </div>
        `;
        return;
    }
    
    // 获取翻译文本
    const trans = translations.application_order[currentLanguage];
    
    // 按申请截止时间排序
    const sortedUniversities = sortByDeadline(universities);
    
    // 生成申请顺序HTML
    const applicationOrderHTML = sortedUniversities.map((university, index) => {
        // 根据当前语言选择对应的字段
        const name = currentLanguage === 'korean' ? university.koreanName : university.name;
        const location = currentLanguage === 'korean' ? university.koreanLocation : university.location;
        const type = currentLanguage === 'korean' ? university.koreanType : university.type;
        
        // 获取根据当前选择入学时间的申请截止时间
        const currentDeadline = getDeadlineByIntake(university, currentIntake);
        
        // 判断截止时间紧急程度
        const isUrgent = isDeadlineUrgent(currentDeadline);
        const deadlineClass = isUrgent ? 'deadline-urgent' : 'deadline-normal';
        const deadlineText = formatDeadline(currentDeadline, currentLanguage);
        
        return `
            <div class="application-item" onclick="window.location.href='school.html?id=${university.id}'" style="cursor: pointer;">
                <div class="application-item-header">
                    <div class="application-item-name">${index + 1}. ${name}</div>
                    <div class="application-item-rank">${trans.rankLabel} ${university.rank}</div>
                </div>
                <div class="application-item-details">
                    <div class="application-detail-item">
                        <span class="application-detail-label">${trans.deadlineLabel}:</span>
                        <span class="application-detail-value ${deadlineClass}">${deadlineText}</span>
                    </div>
                    <div class="application-detail-item">
                        <span class="application-detail-label">${trans.matchScoreLabel}:</span>
                        <span class="application-detail-value">${university.matchScore}%</span>
                    </div>
                    <div class="application-detail-item">
                        <span class="application-detail-label">${trans.locationLabel}:</span>
                        <span class="application-detail-value">${location}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    applicationOrderContent.innerHTML = applicationOrderHTML;
}



// 将中文日期格式转换为标准日期格式
function parseChineseDate(chineseDate) {
    // 中文日期格式：例如 "11月30日"
    const monthDayMatch = chineseDate.match(/(\d+)月(\d+)日/);
    if (!monthDayMatch) {
        // 如果无法解析，返回一个默认日期
        return new Date(new Date().getFullYear(), 11, 31); // 使用当前年份的12月31日作为默认值
    }
    
    const month = parseInt(monthDayMatch[1], 10);
    const day = parseInt(monthDayMatch[2], 10);
    
    // 验证月份和日期的有效性
    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return new Date(new Date().getFullYear(), 11, 31); // 使用默认日期
    }
    
    // 获取当前年份
    const currentYear = new Date().getFullYear();
    
    // 根据入学时间确定年份
    // 3月入学通常指的是次年的3月（例如2024年申请2025年3月入学）
    // 9月入学通常指的是当年的9月（例如2024年申请2024年9月入学）
    // 这里我们根据月份判断：如果月份大于等于8月，则使用当前年份；否则使用下一年
    let year = currentYear;
    if (month >= 8) {
        year = currentYear;
    } else {
        year = currentYear + 1;
    }
    
    try {
        // 创建日期对象并返回
        return new Date(year, month - 1, day);
    } catch (e) {
        // 如果创建日期对象时发生错误，返回默认值
        return new Date(currentYear, 11, 31);
    }
}

// 判断截止时间是否紧急（30天内）
function isDeadlineUrgent(deadline) {
    const today = new Date();
    // 现在deadline直接是Date对象，不需要再次转换
    const deadlineDate = deadline;
    const timeDiff = deadlineDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff <= 30;
}

// 格式化截止时间显示
function formatDeadline(deadline, language) {
    const deadlineDate = new Date(deadline);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    if (language === 'korean') {
        return deadlineDate.toLocaleDateString('ko-KR', options);
    } else {
        return deadlineDate.toLocaleDateString('zh-CN', options);
    }
}

// 返回按钮点击事件
backBtn.addEventListener('click', () => {
    // 跳回推荐结果页面
    window.location.href = 'result.html';
});

// 3月/9月入学切换按钮事件
marchIntakeBtn.addEventListener('click', () => {
    // 如果已经选中3月入学，则不做任何操作
    if (currentIntake === 'march') return;
    
    // 更新当前选择的入学时间
    currentIntake = 'march';
    
    // 更新按钮状态
    marchIntakeBtn.classList.add('active');
    septemberIntakeBtn.classList.remove('active');
    
    // 刷新申请顺序
    if (window.recommendedUniversities) {
        displayApplicationOrder(window.recommendedUniversities);
    }
});

septemberIntakeBtn.addEventListener('click', () => {
    // 如果已经选中9月入学，则不做任何操作
    if (currentIntake === 'september') return;
    
    // 更新当前选择的入学时间
    currentIntake = 'september';
    
    // 更新按钮状态
    septemberIntakeBtn.classList.add('active');
    marchIntakeBtn.classList.remove('active');
    
    // 刷新申请顺序
    if (window.recommendedUniversities) {
        displayApplicationOrder(window.recommendedUniversities);
    }
});

// 按申请截止时间排序（根据选择的入学时间）
function sortByDeadline(universities) {
    return universities.sort((a, b) => {
        // 根据当前选择的入学时间获取截止时间
        const deadlineA = getDeadlineByIntake(a, currentIntake);
        const deadlineB = getDeadlineByIntake(b, currentIntake);
        return deadlineA - deadlineB;
    });
}

// 根据入学时间获取截止时间
function getDeadlineByIntake(university, intake) {
    if (!university.applicationInfo) {
        // 如果没有申请信息，根据入学时间返回默认日期
        return intake === 'march' ? '2025-03-01' : '2025-09-01';
    }
    
    // 根据选择的入学时间获取相应的截止时间
    const deadline = intake === 'march' 
        ? university.applicationInfo.marchIntake?.applicationEnd 
        : university.applicationInfo.septemberIntake?.applicationEnd;
    
    // 如果该入学时间没有截止时间，返回默认日期
    if (!deadline) {
        return intake === 'march' ? '2025-03-01' : '2025-09-01';
    }
    
    // 解析中文日期格式并返回标准日期对象
    let deadlineDate = parseChineseDate(deadline);
    
    // 检查截止时间是否已过
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 设置时间为今天开始，确保日期比较准确
    
    // 如果截止时间已过，增加一年
    if (deadlineDate < today) {
        deadlineDate.setFullYear(deadlineDate.getFullYear() + 1);
    }
    
    return deadlineDate;
}