// 推荐算法模块

// 加载大学数据
function loadUniversities() {
    // 直接返回大学数据（在没有服务器的情况下使用）
    return Promise.resolve([
  {
    "id": 1,
    "name": "首尔国立大学",
    "koreanName": "서울대학교",
    "englishName": "Seoul National University",
    "rank": "1",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 6,
      "toefl": 110,
      "gpa": 3.8
    },
    "description": "韩国最高学府，位于首尔，是韩国最具声望的国立大学。",
    "koreanDescription": "한국의 최고 학府로 서울에 위치한 한국에서 가장 명성 있는 국립 대학교입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@snu.ac.kr",
      "phone": "+82-2-880-1234",
      "website": "https://www.snu.ac.kr"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 2,
    "name": "韩国科学技术院",
    "koreanName": "한국과학기술원",
    "englishName": "Korea Advanced Institute of Science and Technology",
    "rank": "2",
    "location": "大田广域市",
    "koreanLocation": "대전광역시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 5,
      "toefl": 100,
      "gpa": 3.7
    },
    "description": "韩国顶尖的理工类大学，以科学技术研究闻名。",
    "koreanDescription": "한국 최고 수준의 공학 및 과학 대학으로 과학 기술 연구로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@kaist.ac.kr",
      "phone": "+82-42-350-1234",
      "website": "https://www.kaist.edu"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（英语）",
          "推荐信（3封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明",
          "SAT/ACT成绩单（如有）"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（영어）",
          "추천서（3통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명",
          "SAT/ACT 성적표（있는 경우）"
        ]
      },
      "marchIntake": {
        "applicationStart": "8月15日",
        "applicationEnd": "11月15日",
        "resultAnnounce": "12月5日"
      },
      "septemberIntake": {
        "applicationStart": "2月15日",
        "applicationEnd": "5月15日",
        "resultAnnounce": "6月5日"
      }
    }
  },
  {
    "id": 3,
    "name": "延世大学",
    "koreanName": "연세대학교",
    "englishName": "Yonsei University",
    "rank": "3",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 5,
      "toefl": 88,
      "gpa": 3.7
    },
    "description": "韩国三所顶尖私立大学之一，拥有优秀的商学院和医学院。",
    "koreanDescription": "한국 3대 상위 사립 대학 중 하나로 우수한 경영대학과 의과대학을 보유합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@yonsei.ac.kr",
      "phone": "+82-2-2123-2114",
      "website": "https://www.yonsei.ac.kr"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明",
          "面试（部分专业）"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명",
          "면접（일부 전공）"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "12月1日",
        "resultAnnounce": "12月20日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "6月1日",
        "resultAnnounce": "6月20日"
      }
    }
  },
  {
    "id": 4,
    "name": "高丽大学",
    "koreanName": "고려대학교",
    "englishName": "Korea University",
    "rank": "4",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 5,
      "toefl": 87,
      "gpa": 3.7
    },
    "description": "韩国三所顶尖私立大学之一，以社会科学和人文科学闻名。",
    "koreanDescription": "한국 3대 상위 사립 대학 중 하나로 사회과학과 인문학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1504439468645-6450e84a71d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@korea.ac.kr",
      "phone": "+82-2-3290-2211",
      "website": "https://www.korea.ac.kr"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明",
          "面试（部分专业）"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명",
          "면접（일부 전공）"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月25日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月25日"
      }
    }
  },
  {
    "id": 5,
    "name": "成均馆大学",
    "koreanName": "성균관대학교",
    "englishName": "Sungkyunkwan University",
    "rank": "5",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 80,
      "gpa": 3.6
    },
    "description": "韩国历史最悠久的大学之一，拥有优秀的工科和文科专业。",
    "koreanDescription": "한국에서 가장 오래된 대학 중 하나로 우수한 공학과 인문학 전공을 보유합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1516211697505-6f10b3a38186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@skku.edu",
      "phone": "+82-2-760-0114",
      "website": "https://www.skku.edu/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明",
          "面试（部分专业）"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명",
          "면접（일부 전공）"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月20日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月20日"
      }
    }
  },
  {
    "id": 6,
    "name": "西江大学",
    "koreanName": "서강대학교",
    "englishName": "Sogang University",
    "rank": "6",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 79,
      "gpa": 3.5
    },
    "description": "以商学、经济学和国际研究闻名的私立大学。",
    "koreanDescription": "경영학, 경제학 및 국제 연구 분야로 유명한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@sogang.ac.kr",
      "phone": "+82-2-705-8114",
      "website": "https://www.sogang.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "12月1日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "6月1日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 7,
    "name": "汉阳大学",
    "koreanName": "한양대학교",
    "englishName": "Hanyang University",
    "rank": "7",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 78,
      "gpa": 3.6
    },
    "description": "以工科和设计专业闻名的私立大学。",
    "koreanDescription": "공학과 디자인 전공으로 유명한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@hanyang.ac.kr",
      "phone": "+82-2-2220-1014",
      "website": "https://www.hanyang.ac.kr/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 8,
    "name": "庆熙大学",
    "koreanName": "경희대학교",
    "englishName": "Kyung Hee University",
    "rank": "8",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 75,
      "gpa": 3.4
    },
    "description": "拥有优秀的国际学院和酒店管理专业的私立大学。",
    "koreanDescription": "우수한 국제 학원과 호텔 관리 전공을 보유한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@khu.ac.kr",
      "phone": "+82-2-961-0214",
      "website": "https://www.khu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "12月1日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "6月1日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 9,
    "name": "梨花女子大学",
    "koreanName": "이화여자대학교",
    "englishName": "Ewha Womans University",
    "rank": "9",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 70,
      "gpa": 3.6
    },
    "description": "韩国最著名的女子大学，以人文科学和社会科学闻名。",
    "koreanDescription": "한국에서 가장 유명한 여자 대학으로 인문과학과 사회과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1504704924782-8d2a2351c7a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@ewha.ac.kr",
      "phone": "+82-2-3277-2114",
      "website": "https://www.ewha.ac.kr/eng/main.jsp"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 10,
    "name": "中央大学",
    "koreanName": "중앙대학교",
    "englishName": "Chung-Ang University",
    "rank": "10",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 74,
      "gpa": 3.3
    },
    "description": "以戏剧、电影和传媒专业闻名的私立大学。",
    "koreanDescription": "연극, 영화 및 미디어 전공으로 유명한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@cau.ac.kr",
      "phone": "+82-2-820-5114",
      "website": "https://www.cau.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "12月1日",
        "resultAnnounce": "12月15日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "6月1日",
        "resultAnnounce": "6月15日"
      }
    }
  },
  {
    "id": 11,
    "name": "东国大学",
    "koreanName": "동국대학교",
    "englishName": "Dongguk University",
    "rank": "11",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 72,
      "gpa": 3.2
    },
    "description": "拥有优秀的艺术和人文学科的私立大学。",
    "koreanDescription": "우수한 예술과 인문학 분야를 보유한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@dongguk.edu",
      "phone": "+82-2-2260-3114",
      "website": "https://www.dongguk.edu/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 12,
    "name": "建国大学",
    "koreanName": "건국대학교",
    "englishName": "Konkuk University",
    "rank": "12",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 70,
      "gpa": 3.2
    },
    "description": "以农业、生命科学和经济学闻名的私立大学。",
    "koreanDescription": "농업, 생명과학 및 경제학 분야로 유명한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@konkuk.ac.kr",
      "phone": "+82-2-450-3114",
      "website": "https://www.konkuk.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 13,
    "name": "弘益大学",
    "koreanName": "홍익대학교",
    "englishName": "Hongik University",
    "rank": "13",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 4,
      "toefl": 70,
      "gpa": 3.1
    },
    "description": "韩国最著名的艺术设计大学，以美术和设计专业闻名。",
    "koreanDescription": "한국에서 가장 유명한 예술 디자인 대학으로 미술과 디자인 전공으로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@hongik.ac.kr",
      "phone": "+82-2-320-3114",
      "website": "https://www.hongik.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "作品集（艺术设计专业）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "작품집（예술 디자인 전공）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月20日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月20日"
      }
    }
  },
  {
    "id": 14,
    "name": "亚洲大学",
    "koreanName": "아주대학교",
    "englishName": "Asia University",
    "rank": "14",
    "location": "京畿道",
    "koreanLocation": "경기도",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 69,
      "gpa": 3.1
    },
    "description": "位于京畿道水原市，以商学和经济学闻名的私立大学。",
    "koreanDescription": "경기도 수원시에 위치한 경영학과 경제학 분야로 유명한 사립 대학입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@asia.ac.kr",
      "phone": "+82-31-339-1114",
      "website": "https://www.asia.edu/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 15,
    "name": "韩国外国语大学",
    "koreanName": "한국외국어대학교",
    "englishName": "Hankuk University of Foreign Studies",
    "rank": "15",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 4,
      "toefl": 80,
      "gpa": 3.4
    },
    "description": "韩国最著名的外国语大学，提供多种语言课程。",
    "koreanDescription": "한국에서 가장 유명한 외국어 대학으로 다양한 언어 과정을 제공합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@hufs.ac.kr",
      "phone": "+82-2-2173-2114",
      "website": "https://www.hufs.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 16,
    "name": "浦项科技大学",
    "koreanName": "포항공과대학교",
    "englishName": "Pohang University of Science and Technology",
    "rank": "5",
    "location": "庆尚北道浦项市",
    "koreanLocation": "경상북도 포항시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 5,
      "toefl": 90,
      "gpa": 3.7
    },
    "description": "韩国顶尖的科技大学，以工程和自然科学闻名。",
    "koreanDescription": "한국 최고 수준의 기술 대학으로 공학과 자연과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@postech.ac.kr",
      "phone": "+82-54-279-2114",
      "website": "https://www.postech.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（英语）",
          "推荐信（2封）",
          "SAT/ACT成绩单（如有）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（영어）",
          "추천서（2통）",
          "SAT/ACT 성적표（있는 경우）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月1日",
        "applicationEnd": "11月30日",
        "resultAnnounce": "12月20日"
      },
      "septemberIntake": {
        "applicationStart": "3月1日",
        "applicationEnd": "5月31日",
        "resultAnnounce": "6月20日"
      }
    }
  },
  {
    "id": 17,
    "name": "蔚山大学",
    "koreanName": "울산대학교",
    "englishName": "Ulsan National Institute of Science and Technology",
    "rank": "17",
    "location": "蔚山广域市",
    "koreanLocation": "울산광역시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 5,
      "toefl": 79,
      "gpa": 3.4
    },
    "description": "蔚山广域市的国立科技大学，与汽车产业紧密合作。",
    "koreanDescription": "울산광역시의 국립 과학 기술 대학으로 자동차 산업과 밀접한 협력 관계를 맺고 있습니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@unist.ac.kr",
      "phone": "+82-52-217-2114",
      "website": "https://www.unist.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 18,
    "name": "明知大学",
    "koreanName": "명지대학교",
    "englishName": "Myongji University",
    "rank": "18",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 73,
      "gpa": 3.2
    },
    "description": "位于首尔的私立大学，以商科和工科闻名。",
    "koreanDescription": "서울에 위치한 사립 대학으로 경영학과 공학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@myongji.ac.kr",
      "phone": "+82-2-300-3114",
      "website": "https://www.myongji.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 19,
    "name": "世宗大学",
    "koreanName": "세종대학교",
    "englishName": "Sejong University",
    "rank": "9",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 74,
      "gpa": 3.2
    },
    "description": "位于首尔的私立大学，以酒店管理和艺术专业闻名。",
    "koreanDescription": "서울에 위치한 사립 대학으로 호텔 관리와 예술 전공으로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@sejong.ac.kr",
      "phone": "+82-2-3408-3114",
      "website": "https://www.sejong.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 20,
    "name": "庆北国立大学",
    "koreanName": "경북국립대학교",
    "englishName": "Kyungpook National University",
    "rank": "20",
    "location": "庆尚北道大邱市",
    "koreanLocation": "경상북도 대구시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 72,
      "gpa": 3.3
    },
    "description": "庆尚北道的国立大学，是韩国历史悠久的综合性大学之一。",
    "koreanDescription": "경상북도의 국립 대학으로 한국에서 역사가 오래된 종합 대학 중 하나입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@knu.ac.kr",
      "phone": "+82-53-950-3114",
      "website": "https://www.knu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 21,
    "name": "忠南国立大学",
    "koreanName": "충남국립대학교",
    "englishName": "Chungnam National University",
    "rank": "21",
    "location": "忠清南道大田广域市",
    "koreanLocation": "충청남도 대전광역시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 71,
      "gpa": 3.3
    },
    "description": "忠清南道的国立大学，以农业和生命科学闻名。",
    "koreanDescription": "충청남도의 국립 대학으로 농업과 생명과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@cnu.ac.kr",
      "phone": "+82-42-821-3114",
      "website": "https://www.cnu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 22,
    "name": "全北国立大学",
    "koreanName": "전북국립대학교",
    "englishName": "Jeonbuk National University",
    "rank": "22",
    "location": "全罗北道全州市",
    "koreanLocation": "전라북도 전주시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 70,
      "gpa": 3.2
    },
    "description": "全罗北道的国立大学，以工科和医学闻名。",
    "koreanDescription": "전라북도의 국립 대학으로 공학과 의학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@jbnu.ac.kr",
      "phone": "+82-63-270-3114",
      "website": "https://www.jbnu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 23,
    "name": "全南国立大学",
    "koreanName": "전남국립대학교",
    "englishName": "Chonnam National University",
    "rank": "23",
    "location": "全罗南道光州市",
    "koreanLocation": "전라남도 광주시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 70,
      "gpa": 3.2
    },
    "description": "全罗南道的国立大学，以海洋科学和环境工程闻名。",
    "koreanDescription": "전라남도의 국립 대학으로 해양 과학과 환경 공학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@jnu.ac.kr",
      "phone": "+82-62-530-3114",
      "website": "https://www.jnu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 24,
    "name": "忠北国立大学",
    "koreanName": "충북국립대학교",
    "englishName": "Chungbuk National University",
    "rank": "24",
    "location": "忠清北道清州市",
    "koreanLocation": "충청북도 청주시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 69,
      "gpa": 3.1
    },
    "description": "忠清北道的国立大学，以工程和计算机科学闻名。",
    "koreanDescription": "충청북도의 국립 대학으로 공학과 컴퓨터 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@cbnu.ac.kr",
      "phone": "+82-43-261-3114",
      "website": "https://www.cbnu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 25,
    "name": "济州大学",
    "koreanName": "제주대학교",
    "englishName": "Jeju National University",
    "rank": "25",
    "location": "济州特别自治道济州市",
    "koreanLocation": "제주특별자치도 제주시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 68,
      "gpa": 3.1
    },
    "description": "济州岛的国立大学，以旅游管理和海洋科学闻名。",
    "koreanDescription": "제주도의 국립 대학으로 관광 관리와 해양 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@jejunu.ac.kr",
      "phone": "+82-64-754-3114",
      "website": "https://www.jejunu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 26,
    "name": "韩东国际大学",
    "koreanName": "한동국제대학교",
    "englishName": "Handong Global University",
    "rank": "26",
    "location": "庆尚北道浦项市",
    "koreanLocation": "경상북도 포항시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 50,
      "gpa": 3.2
    },
    "description": "浦项市的私立国际大学，强调全球化教育。",
    "koreanDescription": "포항시의 사립 국제 대학으로 글로벌 교육을 강조합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@handong.edu",
      "phone": "+82-54-260-3114",
      "website": "https://www.handong.edu/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 27,
    "name": "光云大学",
    "koreanName": "광운대학교",
    "englishName": "Kwangwoon University",
    "rank": "27",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 50,
      "gpa": 3.1
    },
    "description": "首尔的私立工科大学，以电子工程和计算机科学闻名。",
    "koreanDescription": "서울의 사립 공과 대학으로 전자 공학과 컴퓨터 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@kw.ac.kr",
      "phone": "+82-2-940-3114",
      "website": "https://www.kw.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 28,
    "name": "韩国天主教大学",
    "koreanName": "가톨릭대학교",
    "englishName": "Catholic University of Korea",
    "rank": "8",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 74,
      "gpa": 3.3
    },
    "description": "韩国天主教大学，以医学和人文科学闻名。",
    "koreanDescription": "한국 가톨릭 대학으로 의학과 인문 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@catholic.ac.kr",
      "phone": "+82-2-538-3114",
      "website": "https://www.catholic.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 29,
    "name": "崇实大学",
    "koreanName": "숭실대학교",
    "englishName": "Soongsil University",
    "rank": "29",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 70,
      "gpa": 3.1
    },
    "description": "首尔的私立大学，以工程和商业管理闻名。",
    "koreanDescription": "서울의 사립 대학으로 공학과 상업 관리 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@ssu.ac.kr",
      "phone": "+82-2-820-3114",
      "website": "https://www.ssu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 30,
    "name": "诚信女子大学",
    "koreanName": "성신여자대학교",
    "englishName": "Sungshin Women's University",
    "rank": "30",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 69,
      "gpa": 3.1
    },
    "description": "首尔的私立女子大学，以教育和艺术专业闻名。",
    "koreanDescription": "서울의 사립 여자 대학으로 교육과 예술 전공으로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@sungshin.ac.kr",
      "phone": "+82-2-920-3114",
      "website": "https://www.sungshin.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 31,
    "name": "梨花女子大学国际校区",
    "koreanName": "이화여자대학교 국제캠퍼스",
    "englishName": "Ewha Womans University International Campus",
    "rank": "31",
    "location": "京畿道龙仁市",
    "koreanLocation": "경기도 용인시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 76,
      "gpa": 3.4
    },
    "description": "梨花女子大学的国际校区，提供国际化的教育环境。",
    "koreanDescription": "이화여자대학교의 국제 캠퍼스로 국제화된 교육 환경을 제공합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@ewha.ac.kr",
      "phone": "+82-31-330-3114",
      "website": "https://www.ewha.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 32,
    "name": "嘉泉大学",
    "koreanName": "가천대학교",
    "englishName": "Gachon University",
    "rank": "32",
    "location": "京畿道城南市",
    "koreanLocation": "경기도 성남시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 1,
      "toefl": 71,
      "gpa": 3.2
    },
    "description": "京畿道的私立大学，以医学和生物科学闻名。",
    "koreanDescription": "경기도의 사립 대학으로 의학과 생물 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@gachon.ac.kr",
      "phone": "+82-31-750-3114",
      "website": "https://www.gachon.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 33,
    "name": "韩国航空大学",
    "koreanName": "한국항공대학교",
    "englishName": "Korea Aerospace University",
    "rank": "33",
    "location": "京畿道高阳市",
    "koreanLocation": "경기도 고양시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 1,
      "toefl": 72,
      "gpa": 3.2
    },
    "description": "韩国国立航空大学，培养航空航天领域专业人才。",
    "koreanDescription": "한국 국립 항공 대학으로 항공 우주 분야의 전문 인력을 양성합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@kau.ac.kr",
      "phone": "+82-31-670-3114",
      "website": "https://www.kau.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 34,
    "name": "釜庆国立大学",
    "koreanName": "부경대학교",
    "englishName": "Pukyong National University",
    "rank": "20",
    "location": "釜山广域市",
    "koreanLocation": "부산광역시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 69,
      "gpa": 3.1
    },
    "description": "釜山的国立大学，以海洋科学和工程闻名。",
    "koreanDescription": "부산의 국립 대학으로 해양 과학과 공학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@pknu.ac.kr",
      "phone": "+82-51-629-3114",
      "website": "https://www.pknu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 35,
    "name": "釜山大学",
    "koreanName": "부산대학교",
    "englishName": "Busan National University",
    "rank": "13",
    "location": "釜山广域市",
    "koreanLocation": "부산광역시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 71,
      "gpa": 3.2
    },
    "description": "釜山的国立综合大学，是韩国东南部的重要高等教育机构。",
    "koreanDescription": "부산의 국립 종합 대학으로 한국 동남부의 중요한 고등 교육 기관입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@pusan.ac.kr",
      "phone": "+82-51-510-3114",
      "website": "https://www.pusan.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 36,
    "name": "东亚大学",
    "koreanName": "동아대학교",
    "englishName": "Dong-A University",
    "rank": "36",
    "location": "釜山广域市",
    "koreanLocation": "부산광역시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 68,
      "gpa": 3.0
    },
    "description": "釜山的私立大学，以医学和工程闻名。",
    "koreanDescription": "부산의 사립 대학으로 의학과 공학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@donga.ac.kr",
      "phone": "+82-51-200-3114",
      "website": "https://www.donga.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 37,
    "name": "仁荷大学",
    "koreanName": "인하대학교",
    "englishName": "Inha University",
    "rank": "37",
    "location": "仁川广域市",
    "koreanLocation": "인천광역시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 70,
      "gpa": 3.1
    },
    "description": "仁川的私立大学，以工程和物流专业闻名。",
    "koreanDescription": "인천의 사립 대학으로 공학과 물류 전공으로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@inha.ac.kr",
      "phone": "+82-32-860-3114",
      "website": "https://www.inha.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
       "chinese": [
          "高中毕业证及成绩单（公证）",
          "TOPIK成绩单（或相关证明）",
          "TOEFL/IELTS成绩单",
          "个人陈述（韩语或英语）",
          "推荐信（2封）",
          "护照复印件",
          "照片（3.5cm×4.5cm）",
          "经济能力证明"
        ],
        "korean": [
          "고등학교 졸업증명서 및 성적표（공증）",
          "TOPIK 성적표（또는 관련 증명）",
          "TOEFL/IELTS 성적표",
          "자기소개서（한국어 또는 영어）",
          "추천서（2통）",
          "여권 복사본",
          "사진（3.5cm×4.5cm）",
          "경제력 증명"
        ]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 38,
    "name": "明知大学龙仁校区",
    "koreanName": "명지대학교 용인캠퍼스",
    "englishName": "Myongji University Yongin Campus",
    "rank": "38",
    "location": "京畿道龙仁市",
    "koreanLocation": "경기도 용인시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 71,
      "gpa": 3.1
    },
    "description": "明知大学的龙仁校区，提供多种学科专业。",
    "koreanDescription": "명지대학교의 용인 캠퍼스로 다양한 학과 전공을 제공합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@myongji.ac.kr",
      "phone": "+82-31-330-3114",
      "website": "https://www.myongji.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 39,
    "name": "韩国理工大学",
    "koreanName": "한국과학기술연구원",
    "englishName": "Korea Institute of Science and Technology",
    "rank": "39",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 4,
      "toefl": 85,
      "gpa": 3.6
    },
    "description": "韩国顶尖的科学技术研究机构，提供研究生教育。",
    "koreanDescription": "한국 최고 수준의 과학 기술 연구 기관으로 대학원 교육을 제공합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@kist.re.kr",
      "phone": "+82-2-958-3114",
      "website": "https://www.kist.re.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 40,
    "name": "国民大学",
    "koreanName": "국민대학교",
    "englishName": "Kookmin University",
    "rank": "14",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 72,
      "gpa": 3.2
    },
    "description": "首尔的私立大学，以设计和工程专业闻名。",
    "koreanDescription": "서울의 사립 대학으로 디자인과 공학 전공으로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@kookmin.ac.kr",
      "phone": "+82-2-910-3114",
      "website": "https://www.kookmin.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 41,
    "name": "檀国大学",
    "koreanName": "단국대학교",
    "englishName": "Dankook University",
    "rank": "18",
    "location": "京畿道龙仁市",
    "koreanLocation": "경기도 용인시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 69,
      "gpa": 3.1
    },
    "description": "京畿道的私立大学，以人文和社会科学闻名。",
    "koreanDescription": "경기도의 사립 대학으로 인문과 사회 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@dankook.ac.kr",
      "phone": "+82-31-8005-3114",
      "website": "https://www.dankook.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 42,
    "name": "昌原大学",
    "koreanName": "창원대학교",
    "englishName": "Changwon National University",
    "rank": "42",
    "location": "庆尚南道昌原市",
    "koreanLocation": "경상남도 창원시",
    "type": "公立",
    "koreanType": "국립",
    "requirements": {
      "topik": 3,
      "toefl": 68,
      "gpa": 3.0
    },
    "description": "庆尚南道的国立大学，以工程和自然科学闻名。",
    "koreanDescription": "경상남도의 국립 대학으로 공학과 자연 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1467011133845-1fc36b583e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@changwon.ac.kr",
      "phone": "+82-55-213-3114",
      "website": "https://www.changwon.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 43,
    "name": "顺天乡大学",
    "koreanName": "순천향대학교",
    "englishName": "Soonchunhyang University",
    "rank": "43",
    "location": "忠清南道牙山市",
    "koreanLocation": "충청남도 아산시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 70,
      "gpa": 3.1
    },
    "description": "忠清南道的私立大学，以医学和生命科学闻名。",
    "koreanDescription": "충청남도의 사립 대학으로 의학과 생명 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@sch.ac.kr",
      "phone": "+82-41-530-3114",
      "website": "https://www.sch.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 44,
    "name": "延世大学分校区",
    "koreanName": "연세대학교 미래캠퍼스",
    "englishName": "Yanse University",
    "rank": "14",
    "location": "江原道",
    "koreanLocation": "강원도",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 0,
      "gpa": 3.5
    },
    "description": "韩国最好的私立大学之一。",
    "koreanDescription": "한국의 제일 좋은 사립 대학 중 하나입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@yonsei.ac.kr",
      "phone": "+82-2-2123-2114",
      "website": "https://www.yonsei.ac.kr"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 45,
    "name": "同德女子大学",
    "koreanName": "동덕여자대학교",
    "englishName": "Dongduk Women's University",
    "rank": "45",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 68,
      "gpa": 3.0
    },
    "description": "首尔的私立女子大学，以教育和社会科学闻名。",
    "koreanDescription": "서울의 사립 여자 대학으로 교육과 사회 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1508002364570-1994e083c70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@dongduk.ac.kr",
      "phone": "+82-2-961-0214",
      "website": "https://www.dongduk.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 46,
    "name": "水原大学",
    "koreanName": "수원대학교",
    "englishName": "Sungkyunkwan University Suwon Campus",
    "rank": "46",
    "location": "京畿道水原市",
    "koreanLocation": "경기도 수원시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 3,
      "toefl": 70,
      "gpa": 3.1
    },
    "description": "京畿道水原市的私立大学，以工程和自然科学闻名。",
    "koreanDescription": "경기도 수원시의 사립 대학으로 공학과 자연 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@suwon.ac.kr",
      "phone": "+82-31-290-3114",
      "website": "https://www.suwon.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 47,
    "name": "平泽大学",
    "koreanName": "평택대학교",
    "englishName": "Pyeongtaek University",
    "rank": "47",
    "location": "京畿道平泽市",
    "koreanLocation": "경기도 평택시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 66,
      "gpa": 2.9
    },
    "description": "京畿道平泽市的私立大学，以应用科学和工程闻名。",
    "koreanDescription": "경기도 평택시의 사립 대학으로 응용 과학과 공학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@pknu.ac.kr",
      "phone": "+82-31-670-3114",
      "website": "https://www.pknu.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 48,
    "name": "首尔市立大学",
    "koreanName": "서울시립대학교",
    "englishName": "University of Seoul",
    "rank": "20",
    "location": "首尔特别市",
    "koreanLocation": "서울특별시",
    "type": "公立",
    "koreanType": "시립",
    "requirements": {
      "topik": 3,
      "toefl": 73,
      "gpa": 3.2
    },
    "description": "首尔特别市的公立大学，以城市规划和社会科学闻名。",
    "koreanDescription": "서울특별시의 공립 대학으로 도시 계획과 사회 과학 분야로 유명합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@uos.ac.kr",
      "phone": "+82-2-2123-2114",
      "website": "https://www.uos.ac.kr/eng/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 49,
    "name": "高丽大学分校区",
    "koreanName": "고려대학교 지방캠퍼스",
    "englishName": "Korea University",
    "rank": "19",
    "location": "世宗市",
    "koreanLocation": "세종시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 1,
      "toefl": 0,
      "gpa": 3.5
    },
    "description": "韩国最好的私立大学之一。",
    "koreanDescription": "한국의 제일 좋은 사립 대학 중 하나입니다.",
    "imageUrl": "https://images.unsplash.com/photo-1504439468645-6450e84a71d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@korea.ac.kr",
      "phone": "+82-2-3290-2211",
      "website": "https://www.korea.ac.kr"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  },
  {
    "id": 50,
    "name": "汉阳大学ERICA校区",
    "koreanName": "한양대학교 ERICA 캠퍼스",
    "englishName": "Hanyang University ERICA Campus",
    "rank": "20",
    "location": "京畿道安山市",
    "koreanLocation": "경기도 안산시",
    "type": "私立",
    "koreanType": "사립",
    "requirements": {
      "topik": 0,
      "toefl": 78,
      "gpa": 3.4
    },
    "description": "汉阳大学的ERICA校区，提供多种学科专业教育。",
    "koreanDescription": "한양대학교의 ERICA 캠퍼스로 다양한 학科 전공 교육을 제공합니다.",
    "imageUrl": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    "contact": {
      "email": "admission@hanyang.ac.kr",
      "phone": "+82-2-2220-1014",
      "website": "https://www.hanyang.ac.kr/"
    },
    "applicationInfo": {
      "materials": {
        "chinese": ["高中毕业证及成绩单（公证）", "TOPIK成绩单（或相关证明）", "护照复印件", "照片", "自我介绍书", "推荐信", "资金证明"],
        "korean": ["고등학교 졸업증명서 및 성적표（공증）", "TOPIK 성적표（또는 관련 증명）", "여권 복사본", "사진", "자기소개서", "추천서", "자금 증명서"]
      },
      "marchIntake": {
        "applicationStart": "9月15日",
        "applicationEnd": "12月15日",
        "resultAnnounce": "12月30日"
      },
      "septemberIntake": {
        "applicationStart": "3月15日",
        "applicationEnd": "6月15日",
        "resultAnnounce": "6月30日"
      }
    }
  }
]);
}

// 计算匹配度分数
function calculateMatchScore(userScores, university) {
    const { topik, toefl, gpa } = userScores;
    const { requirements } = university;
    let score = 0;
    
    // TOPIK 匹配度计算
    if (topik >= requirements.topik) {
        score += 40;
        // 超过要求的部分额外加分
        const topikExtra = topik - requirements.topik;
        score += topikExtra * 5;
    } else {
        // 未达到要求的部分减分
        const topikDeficit = requirements.topik - topik;
        score += Math.max(0, 40 - topikDeficit * 10);
    }
    
    // TOEFL 匹配度计算
    if (toefl >= requirements.toefl) {
        score += 30;
        // 超过要求的部分额外加分
        const toeflExtra = toefl - requirements.toefl;
        score += toeflExtra * 0.3;
    } else {
        // 未达到要求的部分减分
        const toeflDeficit = requirements.toefl - toefl;
        score += Math.max(0, 30 - toeflDeficit * 0.5);
    }
    
    // GPA 匹配度计算
    if (gpa >= requirements.gpa) {
        score += 30;
        // 超过要求的部分额外加分
        const gpaExtra = gpa - requirements.gpa;
        score += gpaExtra * 30;
    } else {
        // 未达到要求的部分减分
        const gpaDeficit = requirements.gpa - gpa;
        score += Math.max(0, 30 - gpaDeficit * 40);
    }
    
    return Math.round(score);
}

// 推荐大学
async function recommendUniversities(userScores) {
    const universities = await loadUniversities();
    
    // 计算每个大学的匹配度
    const universitiesWithScores = universities.map(university => ({
        ...university,
        matchScore: calculateMatchScore(userScores, university)
    }));
    
    // 根据匹配度排序，返回前10名
    return universitiesWithScores
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 10);
}

// 暴露模块接口
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { recommendUniversities, calculateMatchScore };
}