// 学校介绍页面交互逻辑

// DOM元素
const schoolContent = document.getElementById('schoolContent');
const backBtn = document.getElementById('backBtn');

// 页面加载时执行
window.addEventListener('DOMContentLoaded', async () => {
    // 初始化语言和主题功能
    initLanguage();
    setupLanguageToggle();
    initTheme();
    setupThemeToggle();
    
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const universityId = parseInt(urlParams.get('id'));
    
    if (isNaN(universityId)) {
        // 如果没有有效的学校ID，显示错误信息并提供返回按钮
        schoolContent.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>错误</h2>
                <p>未找到指定的学校信息。</p>
            </div>
        `;
        return;
    }
    
    try {
        // 加载所有大学数据
        const universities = await loadUniversities();
        
        // 根据ID查找对应的大学
        const selectedUniversity = universities.find(university => university.id === universityId);
        
        if (!selectedUniversity) {
            // 如果找不到对应的学校，显示错误信息
            schoolContent.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2>错误</h2>
                    <p>未找到ID为 ${universityId} 的学校信息。</p>
                </div>
            `;
            return;
        }
        
        // 显示学校信息
        displaySchoolInfo(selectedUniversity);
        
        // 重写语言切换时的回调函数，确保学校信息也能实时更新
        const originalSetupLanguageToggle = setupLanguageToggle;
        setupLanguageToggle = () => {
            originalSetupLanguageToggle();
            
            // 监听语言切换事件
            document.getElementById('languageToggle').addEventListener('click', () => {
                displaySchoolInfo(selectedUniversity);
            });
        };
        
    } catch (error) {
        console.error('加载学校信息时发生错误:', error);
        schoolContent.innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h2>错误</h2>
                <p>加载学校信息时发生错误，请稍后重试。</p>
            </div>
        `;
    }
});

// 显示学校信息
function displaySchoolInfo(university) {
    // 根据当前语言选择对应的字段
    const name = currentLanguage === 'korean' ? university.koreanName : university.name;
    const location = currentLanguage === 'korean' ? university.koreanLocation : university.location;
    const type = currentLanguage === 'korean' ? university.koreanType : university.type;
    const description = currentLanguage === 'korean' ? university.koreanDescription : university.description;
    
    // 获取翻译文本
    const trans = translations.school[currentLanguage];
    
    // 生成学校信息HTML
    const schoolHTML = `
        <div class="school-header">
            <span class="school-name">${name}</span>
            <span class="school-english-name">${university.englishName}</span>
            ${university.imageUrl ? `<img class="school-image" src="${university.imageUrl}" alt="${name}">` : ''}
        </div>
        
        <div class="school-info-section">
            <h3>${trans.basicInfo}</h3>
            <div class="school-details">
                <table>
                    <tr>
                        <th>${trans.rank}</th>
                        <td>${university.rank}</td>
                    </tr>
                    <tr>
                        <th>${trans.location}</th>
                        <td>${location}</td>
                    </tr>
                    <tr>
                        <th>${trans.type}</th>
                        <td>${type}</td>
                    </tr>
                </table>
            </div>
        </div>
        
        <div class="school-info-section">
            <h3>${trans.requirements}</h3>
            <div class="school-details">
                <table>
                    <tr>
                        <th>TOPIK${currentLanguage === 'korean' ? ' 요구사항' : '要求'}</th>
                        <td>${university.requirements.topik} ${currentLanguage === 'korean' ? '급' : '级'}</td>
                    </tr>
                    <tr>
                        <th>TOEFL${currentLanguage === 'korean' ? ' 요구사항' : '要求'}</th>
                        <td>${university.requirements.toefl} ${currentLanguage === 'korean' ? '점' : '分'}</td>
                    </tr>
                    <tr>
                        <th>GPA${currentLanguage === 'korean' ? ' 요구사항' : '要求'}</th>
                        <td>${university.requirements.gpa}</td>
                    </tr>
                </table>
            </div>
        </div>
        
        ${university.description || university.koreanDescription ? `
        <div class="school-info-section">
            <h3>${trans.description}</h3>
            <div class="school-description">${description}</div>
        </div>
        ` : ''}
        
        ${university.contact ? `
        <div class="school-info-section">
            <h3>${trans.contact}</h3>
            <div class="school-contact">
                ${university.contact.email ? `<p><strong>${trans.email}:</strong> ${university.contact.email}</p>` : ''}
                ${university.contact.phone ? `<p><strong>${trans.phone}:</strong> ${university.contact.phone}</p>` : ''}
                ${university.contact.website ? `<p><strong>${trans.website}:</strong> <a href="${university.contact.website}" target="_blank">${university.contact.website}</a></p>` : ''}
            </div>
        </div>
        ` : ''}
        
        ${university.applicationInfo ? `
        <div class="school-info-section">
            <h3>${trans.applicationMaterials}</h3>
            <div class="school-application-materials">
                <ul>
                    ${currentLanguage === 'korean' ? 
                        university.applicationInfo.materials.korean.map(m => `<li>${m}</li>`).join('') : 
                        university.applicationInfo.materials.chinese.map(m => `<li>${m}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="school-info-section">
            <h3>${trans.marchIntake}</h3>
            <div class="school-application-timeline">
                <p><strong>${trans.applicationPeriod}:</strong> ${university.applicationInfo.marchIntake.applicationStart} - ${university.applicationInfo.marchIntake.applicationEnd}</p>
                <p><strong>${trans.resultAnnounce}:</strong> ${university.applicationInfo.marchIntake.resultAnnounce}</p>
            </div>
        </div>
        
        <div class="school-info-section">
            <h3>${trans.septemberIntake}</h3>
            <div class="school-application-timeline">
                <p><strong>${trans.applicationPeriod}:</strong> ${university.applicationInfo.septemberIntake.applicationStart} - ${university.applicationInfo.septemberIntake.applicationEnd}</p>
                <p><strong>${trans.resultAnnounce}:</strong> ${university.applicationInfo.septemberIntake.resultAnnounce}</p>
            </div>
        </div>
        ` : ''}
    `;
    
    schoolContent.innerHTML = schoolHTML;
}

// 返回按钮点击事件
backBtn.addEventListener('click', () => {
    // 返回推荐结果页面
    window.location.href = 'result.html';
});