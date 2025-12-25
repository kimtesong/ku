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
            console.log('=== 开始调试：手动计算所有大学的匹配度 ===');
            const allUniversities = await loadUniversities();
            
            // 检查前5所大学的详细计算过程
            console.log('\n=== 前5所大学的详细计算过程 ===');
            allUniversities.slice(0, 5).forEach(university => {
                console.log(`\n大学: ${university.name}`);
                console.log(`要求: TOPIK ${university.requirements.topik}, TOEFL ${university.requirements.toefl}, GPA ${university.requirements.gpa}`);
                
                const { topik, toefl, gpa } = formattedUserScores;
                const { requirements } = university;
                let score = 0;
                
                // TOPIK 匹配度计算
                console.log('TOPIK计算:');
                if (topik >= requirements.topik) {
                    score += 40;
                    console.log(`  TOPIK达到要求，基础分40分，当前总分: ${score}`);
                    const topikExtra = topik - requirements.topik;
                    score += topikExtra * 5;
                    console.log(`  TOPIK额外加分: ${topikExtra * 5}，当前总分: ${score}`);
                } else {
                    const topikDeficit = requirements.topik - topik;
                    const topikScore = Math.max(0, 40 - topikDeficit * 10);
                    score += topikScore;
                    console.log(`  TOPIK未达到要求，减分后得分: ${topikScore}，当前总分: ${score}`);
                }
                
                // TOEFL 匹配度计算
                console.log('TOEFL计算:');
                if (toefl >= requirements.toefl) {
                    score += 30;
                    console.log(`  TOEFL达到要求，基础分30分，当前总分: ${score}`);
                    const toeflExtra = toefl - requirements.toefl;
                    score += toeflExtra * 0.3;
                    console.log(`  TOEFL额外加分: ${toeflExtra * 0.3}，当前总分: ${score}`);
                } else {
                    const toeflDeficit = requirements.toefl - toefl;
                    const toeflScore = Math.max(0, 30 - toeflDeficit * 0.5);
                    score += toeflScore;
                    console.log(`  TOEFL未达到要求，减分后得分: ${toeflScore}，当前总分: ${score}`);
                }
                
                // GPA 匹配度计算
                console.log('GPA计算:');
                if (gpa >= requirements.gpa) {
                    score += 30;
                    console.log(`  GPA达到要求，基础分30分，当前总分: ${score}`);
                    const gpaExtra = gpa - requirements.gpa;
                    score += gpaExtra * 30;
                    console.log(`  GPA额外加分: ${gpaExtra * 30}，当前总分: ${score}`);
                } else {
                    const gpaDeficit = requirements.gpa - gpa;
                    const gpaScore = Math.max(0, 30 - gpaDeficit * 40);
                    score += gpaScore;
                    console.log(`  GPA未达到要求，减分后得分: ${gpaScore}，当前总分: ${score}`);
                }
                
                const finalScore = Math.round(score);
                console.log(`最终匹配度: ${finalScore}%`);
            });
            
            // 计算所有大学的匹配度
            const universitiesWithScores = allUniversities.map(university => {
                const matchScore = calculateMatchScore(formattedUserScores, university);
                return { ...university, matchScore };
            });
            
            // 找出匹配度最高的大学
            const maxScoreUniversity = universitiesWithScores.reduce((max, current) => {
                return current.matchScore > max.matchScore ? current : max;
            });
            
            console.log('\n=== 所有大学的匹配度统计 ===');
            console.log('匹配度最高的大学:', maxScoreUniversity.name, '匹配度:', maxScoreUniversity.matchScore, '%');
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