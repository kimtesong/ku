// 主页面交互逻辑

// DOM元素
const scoreForm = document.getElementById('scoreForm');
const recommendBtn = document.getElementById('recommendBtn');

// 表单提交事件处理
scoreForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 显示加载状态
    recommendBtn.innerHTML = translations.loading[currentLanguage];
    recommendBtn.disabled = true;
    
    // 获取用户输入的成绩
    const topik = parseInt(document.getElementById('topik').value);
    const toefl = parseInt(document.getElementById('toefl').value);
    const gpa = parseFloat(document.getElementById('gpa').value);
    
    // 验证输入是否为数字
    if (isNaN(topik) || isNaN(toefl) || isNaN(gpa)) {
        alert(translations.validation[currentLanguage].mustBeNumber);
        recommendBtn.innerHTML = translations.index[currentLanguage].recommendBtn;
        recommendBtn.disabled = false;
        return;
    }
    
    // 验证输入范围
    if (topik < 0 || topik > 6) {
        alert(translations.validation[currentLanguage].topikRange);
        recommendBtn.innerHTML = translations.index[currentLanguage].recommendBtn;
        recommendBtn.disabled = false;
        return;
    }
    
    if (toefl < 0 || toefl > 120) {
        alert(translations.validation[currentLanguage].toeflRange);
        recommendBtn.innerHTML = translations.index[currentLanguage].recommendBtn;
        recommendBtn.disabled = false;
        return;
    }
    
    if (gpa < 0 || gpa > 4) {
        alert(translations.validation[currentLanguage].gpaRange);
        recommendBtn.innerHTML = translations.index[currentLanguage].recommendBtn;
        recommendBtn.disabled = false;
        return;
    }
    
    try {
        // 将成绩数据存储到localStorage
        localStorage.setItem('userScores', JSON.stringify({ topik, toefl, gpa }));
        console.log('成绩已保存到localStorage:', { topik, toefl, gpa });
        
        // 延迟一下再跳转，让用户看到加载状态
        setTimeout(() => {
            console.log('正在跳转到result.html');
            // 跳转到结果页面
            window.location.href = 'result.html';
        }, 1000);
    } catch (error) {
        console.error('处理数据时发生错误:', error);
        alert('数据处理失败，请重试');
        recommendBtn.innerHTML = '获取推荐结果';
        recommendBtn.disabled = false;
    }
});

// 页面加载完成后初始化语言和主题功能
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    setupLanguageToggle();
    initTheme();
    setupThemeToggle();
});