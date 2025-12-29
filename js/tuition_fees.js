// 学费信息页面交互逻辑

// DOM元素
const tuitionResults = document.getElementById('tuitionResults');
const noTuitionData = document.getElementById('noTuitionData');
const backBtn = document.getElementById('backBtn');

// 页面加载时执行
window.addEventListener('DOMContentLoaded', async () => {
    // 初始化语言和主题功能
    initLanguage();
    setupLanguageToggle();
    initTheme();
    setupThemeToggle();
    
    // 从localStorage获取推荐结果
    const recommendedUniversitiesJson = localStorage.getItem('recommendedUniversities');
    
    if (!recommendedUniversitiesJson) {
        // 如果没有推荐结果，跳回主页面
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const recommendedUniversities = JSON.parse(recommendedUniversitiesJson);
        
        if (recommendedUniversities.length === 0) {
            noTuitionData.style.display = 'block';
        } else {
            // 显示学费信息
            displayTuitionResults(recommendedUniversities);
        }
        
        // 添加返回按钮事件监听器
        backBtn.addEventListener('click', () => {
            window.location.href = 'result.html';
        });
        
    } catch (error) {
        console.error('处理学费信息时发生错误:', error);
        noTuitionData.style.display = 'block';
    }
});

// 显示学费信息
function displayTuitionResults(universities) {
    if (universities.length === 0) {
        noTuitionData.style.display = 'block';
        tuitionResults.innerHTML = '';
    } else {
        noTuitionData.style.display = 'none';
        
        // 获取翻译文本
        const trans = translations.tuition_fees[currentLanguage];
        
        // 生成学费卡片
        const tuitionCards = universities.map(university => {
            // 根据当前语言选择对应的字段
            const name = currentLanguage === 'korean' ? university.koreanName : university.name;
            const location = currentLanguage === 'korean' ? university.koreanLocation : university.location;
            const type = currentLanguage === 'korean' ? university.koreanType : university.type;
            
            // 生成学费数据（示例数据）
            const tuitionData = generateTuitionData(university);
            
            return `
                <div class="tuition-card">
                    <div class="tuition-header">
                        <div class="tuition-university-info">
                            <h3 class="tuition-university-name">${name}</h3>
                            <p class="tuition-university-english-name">(${university.englishName})</p>
                        </div>
                        <div class="tuition-meta-info">
                            <span class="university-rank">${trans.universityRank}${university.rank}${trans.universityRankSuffix}</span>
                            <span class="university-location">${trans.universityLocation}${location}</span>
                            <span class="match-score">${trans.matchScoreLabel}${university.matchScore}%</span>
                        </div>
                    </div>
                    
                    <div class="tuition-categories">
                        <div class="tuition-category">
                            <div class="category-header">
                                <h4>${trans.liberalArtsTitle}</h4>
                                <div class="tuition-prices">
                                    <span class="tuition-amount-krw">${tuitionData.liberalArts}万韩元</span>
                                    <span class="tuition-amount-cny">≈${(tuitionData.liberalArts / 200).toFixed(1)}万人民币</span>
                                </div>
                            </div>
                            <p class="tuition-description">${trans.liberalArtsDesc}</p>
                        </div>
                        
                        <div class="tuition-category">
                            <div class="category-header">
                                <h4>${trans.scienceEngineeringTitle}</h4>
                                <div class="tuition-prices">
                                    <span class="tuition-amount-krw">${tuitionData.scienceEngineering}万韩元</span>
                                    <span class="tuition-amount-cny">≈${(tuitionData.scienceEngineering / 200).toFixed(1)}万人民币</span>
                                </div>
                            </div>
                            <p class="tuition-description">${trans.scienceEngineeringDesc}</p>
                        </div>
                        
                        <div class="tuition-category">
                            <div class="category-header">
                                <h4>${trans.artsTitle}</h4>
                                <div class="tuition-prices">
                                    <span class="tuition-amount-krw">${tuitionData.arts}万韩元</span>
                                    <span class="tuition-amount-cny">≈${(tuitionData.arts / 200).toFixed(1)}万人民币</span>
                                </div>
                            </div>
                            <p class="tuition-description">${trans.artsDesc}</p>
                        </div>
                    </div>
                    
                    <div class="tuition-footer">
                        <p class="tuition-note">${trans.tuitionNote}</p>
                        <button class="view-details-btn" onclick="window.location.href='school.html?id=${university.id}'">
                            ${trans.viewDetailsBtn}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        tuitionResults.innerHTML = tuitionCards;
    }
}

// 生成学费数据（根据大学排名生成示例数据）
function generateTuitionData(university) {
    const rank = parseInt(university.rank);
    
    // 根据排名计算学费范围
    let liberalArts, scienceEngineering, arts;
    
    if (rank <= 10) {
        // 顶级大学
        liberalArts = Math.floor(Math.random() * 500000) + 4000000; // 400-450만원
        scienceEngineering = Math.floor(Math.random() * 1000000) + 5000000; // 500-600만원
        arts = Math.floor(Math.random() * 1500000) + 6000000; // 600-750만원
    } else if (rank <= 30) {
        // 优秀大学
        liberalArts = Math.floor(Math.random() * 300000) + 3000000; // 300-330만원
        scienceEngineering = Math.floor(Math.random() * 700000) + 3800000; // 380-450만원
        arts = Math.floor(Math.random() * 1000000) + 4500000; // 450-550만원
    } else {
        // 普通大学
        liberalArts = Math.floor(Math.random() * 200000) + 2500000; // 250-270만원
        scienceEngineering = Math.floor(Math.random() * 500000) + 3000000; // 300-350만원
        arts = Math.floor(Math.random() * 800000) + 3500000; // 350-430만원
    }
    
    // 转换为万元格式
    return {
        liberalArts: (liberalArts / 10000).toFixed(0),
        scienceEngineering: (scienceEngineering / 10000).toFixed(0),
        arts: (arts / 10000).toFixed(0)
    };
}

// 返回按钮点击事件
backBtn.addEventListener('click', () => {
    window.location.href = 'result.html';
});