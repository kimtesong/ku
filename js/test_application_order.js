// 申请顺序页面功能测试脚本

// 测试数据
const testUniversities = [
    {
        id: 1,
        name: "首尔国立大学",
        koreanName: "서울대학교",
        rank: 1,
        matchScore: 95,
        applicationInfo: {
            marchIntake: {
                applicationEnd: "11月30日"
            },
            septemberIntake: {
                applicationEnd: "5月31日"
            }
        }
    },
    {
        id: 2,
        name: "高丽大学",
        koreanName: "고려대학교",
        rank: 2,
        matchScore: 90,
        applicationInfo: {
            marchIntake: {
                applicationEnd: "11月15日"
            },
            septemberIntake: {
                applicationEnd: "5月15日"
            }
        }
    },
    {
        id: 3,
        name: "成均馆大学",
        koreanName: "성균관대학교",
        rank: 3,
        matchScore: 85,
        applicationInfo: {
            marchIntake: {
                applicationEnd: "12月1日"
            },
            septemberIntake: {
                applicationEnd: "6月1日"
            }
        }
    },
    {
        id: 4,
        name: "延世大学",
        koreanName: "연세대학교",
        rank: 4,
        matchScore: 80,
        applicationInfo: {
            marchIntake: {
                applicationEnd: "12月15日"
            },
            septemberIntake: {
                applicationEnd: "6月15日"
            }
        }
    },
    {
        id: 5,
        name: "汉阳大学",
        koreanName: "한양대학교",
        rank: 5,
        matchScore: 75,
        applicationInfo: {
            marchIntake: {
                applicationEnd: "11月30日"
            },
            septemberIntake: {
                applicationEnd: "5月31日"
            }
        }
    }
];

// 模拟语言切换功能
let currentLanguage = 'chinese';

// 模拟获取翻译文本的函数
function getTranslation(key) {
    const translations = {
        chinese: {
            applicationOrderTitle: '申请顺序',
            applicationOrderSubtitle: '根据申请截止时间排序的推荐大学',
            applicationOrderSectionTitle: '申请截止时间排序',
            backToResults: '返回推荐结果',
            deadlineLabel: '申请截止时间',
            matchScoreLabel: '匹配度',
            rankLabel: '排名',
            locationLabel: '所在地'
        },
        korean: {
            applicationOrderTitle: '신청 순서',
            applicationOrderSubtitle: '신청 마감 시간별로 정렬된 추천 대학',
            applicationOrderSectionTitle: '신청 마감 시간별 정렬',
            backToResults: '추천 결과로 돌아가기',
            deadlineLabel: '신청 마감 시간',
            matchScoreLabel: '일치도',
            rankLabel: '순위',
            locationLabel: '위치'
        }
    };
    
    return translations[currentLanguage][key] || key;
}

// 按申请截止时间排序
function sortByDeadline(universities) {
    return universities.sort((a, b) => {
        const deadlineA = getEarliestDeadline(a);
        const deadlineB = getEarliestDeadline(b);
        return new Date(deadlineA) - new Date(deadlineB);
    });
}

// 获取最早的申请截止时间
function getEarliestDeadline(university) {
    if (!university.applicationInfo) {
        return '2025-03-01'; // 默认日期
    }
    
    const marchDeadline = university.applicationInfo.marchIntake?.applicationEnd;
    const septemberDeadline = university.applicationInfo.septemberIntake?.applicationEnd;
    
    // 处理中文日期格式并转换为标准日期格式进行比较
    const marchDateObj = marchDeadline ? parseChineseDate(marchDeadline) : null;
    const septemberDateObj = septemberDeadline ? parseChineseDate(septemberDeadline) : null;
    
    if (marchDateObj && septemberDateObj) {
        return marchDateObj < septemberDateObj ? marchDeadline : septemberDeadline;
    } else if (marchDeadline) {
        return marchDeadline;
    } else if (septemberDeadline) {
        return septemberDeadline;
    } else {
        return '2025-03-01'; // 默认日期
    }
}

// 将中文日期格式转换为标准日期格式
function parseChineseDate(chineseDate) {
    // 中文日期格式：例如 "11月30日"
    const monthDayMatch = chineseDate.match(/(\d+)月(\d+)日/);
    if (!monthDayMatch) {
        return null;
    }
    
    const month = parseInt(monthDayMatch[1], 10);
    const day = parseInt(monthDayMatch[2], 10);
    
    // 获取当前年份
    const currentYear = new Date().getFullYear();
    
    // 如果当前月份已过或接近截止月份，使用当前年份
    // 否则使用下一年（适用于9月入学申请）
    let year = currentYear;
    if (month < new Date().getMonth() + 1) {
        year = currentYear + 1;
    }
    
    // 创建日期对象并返回
    return new Date(year, month - 1, day);
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

// 生成申请顺序HTML
function generateApplicationOrderHTML(universities) {
    if (universities.length === 0) {
        return `
            <div style="text-align: center; padding: 50px;">
                <p>没有找到推荐的大学。</p>
            </div>
        `;
    }
    
    // 获取翻译文本
    const trans = {
        deadlineLabel: getTranslation('deadlineLabel'),
        matchScoreLabel: getTranslation('matchScoreLabel'),
        rankLabel: getTranslation('rankLabel'),
        locationLabel: getTranslation('locationLabel')
    };
    
    // 按申请截止时间排序
    const sortedUniversities = sortByDeadline(universities);
    
    // 生成申请顺序HTML
    const applicationOrderHTML = sortedUniversities.map((university, index) => {
        // 获取最早的申请截止时间
        const earliestDeadline = getEarliestDeadline(university);
        
        return `
            <div class="application-item">
                <div class="application-item-header">
                    <div class="application-item-name">${index + 1}. ${university.name}</div>
                    <div class="application-item-rank">${trans.rankLabel} ${university.rank}</div>
                </div>
                <div class="application-item-details">
                    <div class="application-detail-item">
                        <span class="application-detail-label">${trans.deadlineLabel}:</span>
                        <span class="application-detail-value">${earliestDeadline}</span>
                    </div>
                    <div class="application-detail-item">
                        <span class="application-detail-label">${trans.matchScoreLabel}:</span>
                        <span class="application-detail-value">${university.matchScore}%</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    return applicationOrderHTML;
}

// 运行测试
function runTests() {
    console.log('=== 开始申请顺序页面功能测试 ===');
    
    // 测试日期解析功能
    console.log('\n1. 测试日期解析功能:');
    const testDates = ['11月30日', '12月15日', '5月31日'];
    testDates.forEach(date => {
        const parsedDate = parseChineseDate(date);
        console.log(`  ${date} -> ${parsedDate}`);
    });
    
    // 测试排序功能
    console.log('\n2. 测试排序功能:');
    console.log('原始顺序 (按匹配度):');
    testUniversities.forEach(uni => {
        console.log(`  ${uni.name} - 匹配度: ${uni.matchScore}%, 最早截止时间: ${getEarliestDeadline(uni)}`);
    });
    
    const sortedByDeadline = sortByDeadline(testUniversities);
    console.log('\n按申请截止时间排序后:');
    sortedByDeadline.forEach((uni, index) => {
        console.log(`  ${index + 1}. ${uni.name} - 匹配度: ${uni.matchScore}%, 最早截止时间: ${getEarliestDeadline(uni)}`);
    });
    
    // 测试HTML生成功能
    console.log('\n3. 测试HTML生成功能:');
    const html = generateApplicationOrderHTML(testUniversities);
    console.log('生成的HTML:');
    console.log(html);
    
    console.log('\n=== 测试完成 ===');
    
    return {
        sortedUniversities: sortedByDeadline,
        html: html
    };
}

// 在控制台中运行测试
const testResults = runTests();

// 导出函数和结果
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        sortByDeadline, 
        getEarliestDeadline, 
        parseChineseDate, 
        formatDeadline, 
        generateApplicationOrderHTML, 
        testResults 
    };
}