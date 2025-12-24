// 结果页面交互逻辑

// DOM元素
const recommendationResults = document.getElementById('recommendationResults');
const noResults = document.getElementById('noResults');
const backBtn = document.getElementById('backBtn');

// 页面加载时执行
window.addEventListener('DOMContentLoaded', async () => {
    // 初始化语言和主题功能
    initLanguage();
    setupLanguageToggle();
    initTheme();
    setupThemeToggle();
    
    // 从localStorage获取用户成绩
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
        
        // 验证用户成绩的数据类型
        console.log('用户成绩数据类型:');
        console.log('- topik:', userScores.topik, typeof userScores.topik);
        console.log('- toefl:', userScores.toefl, typeof userScores.toefl);
        console.log('- gpa:', userScores.gpa, typeof userScores.gpa);
        
        // 转换用户成绩为正确的数据类型
        const formattedUserScores = {
            topik: parseInt(userScores.topik),
            toefl: parseInt(userScores.toefl),
            gpa: parseFloat(userScores.gpa)
        };
        
        console.log('转换后用户成绩:', formattedUserScores);
        console.log('转换后数据类型:');
        console.log('- topik:', formattedUserScores.topik, typeof formattedUserScores.topik);
        console.log('- toefl:', formattedUserScores.toefl, typeof formattedUserScores.toefl);
        console.log('- gpa:', formattedUserScores.gpa, typeof formattedUserScores.gpa);
        
        // 获取推荐结果并保存为全局变量
        console.log('开始获取推荐结果...');
        console.log('用户成绩:', formattedUserScores);
        
        // 使用推荐函数获取结果
        window.recommendedUniversities = await recommendUniversities(formattedUserScores);
        
        console.log('推荐结果:', window.recommendedUniversities);
        console.log('推荐结果数量:', window.recommendedUniversities.length);
        
        // 如果推荐结果为空，手动计算所有大学的匹配度以便调试
        if (window.recommendedUniversities.length === 0) {
            const allUniversities = await loadUniversities();
            const universitiesWithScores = allUniversities.map(university => {
                const matchScore = calculateMatchScore(formattedUserScores, university);
                return { ...university, matchScore };
            });
            console.log('所有大学的匹配度:', universitiesWithScores.map(uni => `${uni.name}: ${uni.matchScore}`));
        }
        
        // 检查推荐结果是否为空
        if (window.recommendedUniversities.length === 0) {
            console.warn('推荐结果为空');
        }
        
        // 显示推荐结果
        displayResults(window.recommendedUniversities);
    } catch (error) {
        console.error('处理推荐结果时发生错误:', error);
        console.error('错误堆栈:', error.stack);
        noResults.style.display = 'block';
    }
});

// 显示推荐结果
function displayResults(universities) {
    if (universities.length === 0) {
        noResults.style.display = 'block';
        recommendationResults.innerHTML = '';
    } else {
        noResults.style.display = 'none';
        
        // 获取翻译文本
        const trans = translations.result[currentLanguage];
        
        // 生成大学卡片
        const universityCards = universities.map(university => {
            // 根据当前语言选择对应的字段
            const name = currentLanguage === 'korean' ? university.koreanName : university.name;
            const location = currentLanguage === 'korean' ? university.koreanLocation : university.location;
            const type = currentLanguage === 'korean' ? university.koreanType : university.type;
            const description = currentLanguage === 'korean' ? university.koreanDescription : university.description;
            
            return `
                <div class="university-card" onclick="window.location.href='school.html?id=${university.id}'" style="cursor: pointer;">
                    <div class="university-header">
                        <div>
                            <span class="university-name">${name}</span>
                            <span class="university-english-name">(${university.englishName})</span>
                        </div>
                        <span class="university-rank">${trans.universityRank}${university.rank}${trans.universityRankSuffix}</span>
                    </div>
                    <div class="university-info">
                        <span>${trans.universityLocation}${location}</span>
                        <span>${trans.universityType}${type}</span>
                        <span>${trans.topikRequirement} ${university.requirements.topik}${trans.topikRequirementSuffix}</span>
                        <span>${trans.toeflRequirement} ${university.requirements.toefl}${trans.toeflRequirementSuffix}</span>
                        <span>${trans.gpaRequirement} ${university.requirements.gpa}</span>
                    </div>
                    <div class="university-description">${description}</div>
                    <div class="match-score">
                        <span class="score-label">${trans.matchScoreLabel}</span>
                        <span class="score-value">${university.matchScore}%</span>
                    </div>
                </div>
            `;
        }).join('');
        
        recommendationResults.innerHTML = universityCards;
    }
}

// 返回按钮点击事件
backBtn.addEventListener('click', () => {
    // 清除localStorage中的成绩数据
    localStorage.removeItem('userScores');
    // 跳回主页面
    window.location.href = 'index.html';
});