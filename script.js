// ===== i18n Translations =====
const i18n = {
    en: {
        title: "Hanyi Zhang | Machine Learning & Full-Stack Developer",
        nav: {
            about: "About", skills: "Skills", projects: "Projects",
            experience: "Experience", education: "Education", contact: "Contact"
        },
        hero: {
            greeting: "Hello, I'm",
            title: "Machine Learning Engineer & Full-Stack Developer",
            desc: "MSc Computer Science at University of Glasgow. Specializing in LLM fine-tuning, knowledge distillation, RAG systems, and web development. Passionate about making AI systems efficient and production-ready.",
            viewProjects: "View Projects",
            contactMe: "Contact Me"
        },
        about: {
            title: "About Me",
            p1: "I'm a machine learning engineer with expertise in deep learning, natural language processing, and full-stack web development. Currently completing my MSc in Computer Science at the University of Glasgow, with a bachelor's in Space Information & Digital Technology from Jilin University.",
            p2: "My research on knowledge distillation for search reranking eliminates the high latency of chain-of-thought generation while maintaining near-baseline accuracy. I've also built RAG systems that reduced LLM hallucination rates from 36% to below 6% in e-commerce scenarios.",
            statResearch: "Research Projects",
            statIntern: "Internships",
            statPatent: "Patents"
        },
        skills: {
            title: "Technical Skills",
            llm: "LLM & Deep Learning",
            optimization: "Model Optimization",
            data: "Data & RAG",
            programming: "Programming & Web",
            languages: "Languages",
            native: "Mandarin: Native"
        },
        projects: {
            title: "Featured Projects",
            sourceCode: "Source Code",
            p1: {
                badge: "Research · 2025",
                title: "Knowledge Distillation for Efficient Search Reranking",
                desc: "Addressed high inference latency of LLMs in search reranking caused by chain-of-thought (CoT) generation. Proposed a chainless knowledge distillation strategy using the teacher model's final judgment labels instead of full reasoning chains to train student models. The student model internalizes reasoning capability through one forward pass, significantly reducing latency and memory. Maintains near-baseline performance on benchmarks like BRIGHT and NevIR."
            },
            p2: {
                badge: "RAG System · 2025",
                title: "RAG-based E-Commerce Intelligent Product Consultation",
                desc: "Built a retrieval-augmented generation system to reduce LLM hallucination rate (36%→<6%) in e-commerce product consultations. Used LangChain for semantic chunking of product manuals, after-sales rules, and size parameters. Vectorized text via Sentence-BERT, built FAISS vector database for Top-K similarity retrieval. Optimized prompt assembly logic for context length and information density. Achieved 48% accuracy improvement with hot-updatable product documents — no model retraining needed."
            },
            p3: {
                title: "Social Media Copywriter — Multi-Platform AI Content Generator",
                desc: "AI-powered copywriting tool supporting 7 Chinese social media platforms (WeChat Official, Xiaohongshu, Douyin, Weibo, Bilibili, Zhihu, Toutiao), 8 content types, and 7 writing styles. Built with a FastAPI backend featuring a 4-layer prompt assembly engine, and a responsive vanilla JS SPA frontend with dual-panel layout. Integrates with DeepSeek API via Anthropic-compatible endpoint for authentic Chinese content generation, with fine-grained controls for tone (5 levels), length (5 levels), emoji density (3 levels), and 1–5 parallel variants per generation."
            },
            p4: {
                title: "E-Vehicle Share System",
                desc: "Full-stack Django web application for electric vehicle sharing management. Features user authentication, vehicle inventory CRUD, department and employee administration, and responsive UI with Bootstrap 5. Includes booking simulation and payment flow."
            }
        },
        experience: {
            title: "Work Experience",
            job1: {
                title: "Product Operations Intern",
                org: "iQIYI (Beijing) · 2024.05 – 2024.08",
                d1: "Assisted in building and maintaining internal platforms: AI editing platform, internal requirement management platform, and short-video promotion monitoring platform",
                d2: "Collected and prioritized cross-department requirements; performed data analysis and statistics to support platform optimization decisions",
                d3: "Conducted data screening and analysis using SQL, Excel, and internal tools",
                d4: "Managed external platform data integration (e.g., Xiaohongshu): evaluated third-party API data, account metrics, and crawler-based data acquisition for optimal strategies"
            },
            job2: {
                title: "Engineer Assistant",
                org: "Haite Photoelectric Co., Ltd. · 2023.01 – 2023.03 & 2023.07 – 2023.09",
                d1: "Learned semiconductor laser chip fabrication processes: photolithography, cleaving, and coating",
                d2: "Participated in semiconductor laser Bar cavity facet mirror inspection",
                d3: "Co-invented 2 utility model patents: \"Cavity Facet Inspection Fixing Device for Semiconductor Laser Bar\" and \"Cavity Facet Inspection Clamp for Semiconductor Laser Bar Strip\"",
                d4: "Patents granted by China National Intellectual Property Administration (Nov 2023)"
            }
        },
        education: {
            title: "Education",
            msc: {
                title: "MSc Computer Science and Technology",
                courses: "Core Courses: Python, Java, Data Science, Machine Learning, Deep Learning, Big Data, Network Science, Text Data Processing, Mobile HCI"
            },
            be: {
                title: "B.Eng. Space Information and Digital Technology",
                org: "Jilin University · College of Communication Engineering",
                courses: "Core Courses: Communication Principles, Digital Circuits, Electromagnetic Fields & Waves, Algorithms & Data Structures, Stochastic Signal Analysis, Digital Communication Principles, MCU & Embedded Systems, Python Programming, Databases"
            }
        },
        contact: {
            title: "Get in Touch",
            desc: "I'm always open to discussing new opportunities, research collaborations, or chatting about AI and machine learning.",
            email: "Email",
            phone: "Phone"
        },
        footer: "© 2026 Hanyi Zhang. Built with clean HTML & CSS."
    },

    zh: {
        title: "张涵一 | 机器学习 & 全栈开发工程师",
        nav: {
            about: "关于", skills: "技能", projects: "项目",
            experience: "经历", education: "教育", contact: "联系"
        },
        hero: {
            greeting: "你好，我是",
            title: "机器学习工程师 & 全栈开发者",
            desc: "格拉斯哥大学计算机科学硕士。专注于大模型微调、知识蒸馏、RAG 系统和 Web 开发。致力于让 AI 系统高效且可落地。",
            viewProjects: "查看项目",
            contactMe: "联系我"
        },
        about: {
            title: "关于我",
            p1: "我是一名机器学习工程师，深耕深度学习、自然语言处理和全栈 Web 开发。目前在格拉斯哥大学攻读计算机科学硕士学位，本科毕业于吉林大学空间信息与数字技术专业。",
            p2: "在搜索重排序的知识蒸馏研究中，我提出了一种无链式推理的蒸馏策略，消除了思维链生成的高延迟，同时保持了接近基线的准确率。我还构建了 RAG 系统，在电商场景中将大模型幻觉率从 36% 降至 6% 以下。",
            statResearch: "研究项目",
            statIntern: "实习经历",
            statPatent: "专利"
        },
        skills: {
            title: "技术技能",
            llm: "大模型 & 深度学习",
            optimization: "模型优化",
            data: "数据 & RAG",
            programming: "编程 & Web",
            languages: "语言能力",
            native: "普通话：母语"
        },
        projects: {
            title: "精选项目",
            sourceCode: "源代码",
            p1: {
                badge: "研究 · 2025",
                title: "基于知识蒸馏的高效搜索重排序",
                desc: "针对搜索重排序中思维链生成导致的高推理延迟问题，提出了一种无链式知识蒸馏策略——利用教师模型的最终判断标签而非完整推理链来训练学生模型。学生模型通过一次前向传播即可内化推理能力，显著降低延迟和内存开销，在 BRIGHT 和 NevIR 等基准测试上保持接近基线的性能。"
            },
            p2: {
                badge: "RAG 系统 · 2025",
                title: "基于 RAG 的电商智能产品咨询系统",
                desc: "构建检索增强生成系统，将电商产品咨询中大模型幻觉率从 36% 降至 6% 以下。使用 LangChain 对产品手册、售后规则和尺码参数进行语义分块，通过 Sentence-BERT 向量化文本，构建 FAISS 向量数据库进行 Top-K 相似度检索，优化了上下文长度和信息密度的提示词组装逻辑。准确率提升 48%，产品文档可热更新，无需重新训练模型。"
            },
            p3: {
                title: "自媒体文案生成工具 — 多平台 AI 内容生成器",
                desc: "AI 驱动的文案生成工具，支持 7 个中文社交媒体平台（微信公众号、小红书、抖音、微博、B站、知乎、今日头条）、8 种内容类型和 7 种写作风格。采用 FastAPI 后端搭载 4 层提示词组装引擎，前端为原生 JS SPA 双栏布局。通过 Anthropic 兼容端点接入 DeepSeek API 实现地道的中文内容生成，支持语气（5 级）、篇幅（5 级）、Emoji 密度（3 档）的精细调控，每次可并行生成 1–5 个版本。"
            },
            p4: {
                title: "电动汽车共享系统",
                desc: "基于 Django 的全栈电动汽车共享管理 Web 应用。包含用户认证、车辆库存增删改查、部门和员工管理功能，使用 Bootstrap 5 构建响应式界面，集成预订模拟和支付流程。"
            }
        },
        experience: {
            title: "工作经历",
            job1: {
                title: "产品运营实习生",
                org: "爱奇艺（北京）· 2024.05 – 2024.08",
                d1: "协助搭建和维护内部平台：AI 剪辑平台、内部需求管理平台、短视频宣发监控平台",
                d2: "收集并排序跨部门需求，进行数据分析和统计，支持平台优化决策",
                d3: "使用 SQL、Excel 和内部工具进行数据筛选与分析",
                d4: "管理外部平台数据接入（如小红书）：评估第三方 API 数据、账号指标和爬虫数据采集策略"
            },
            job2: {
                title: "工程师助理",
                org: "海特光电有限责任公司 · 2023.01 – 2023.03 & 2023.07 – 2023.09",
                d1: "学习半导体激光芯片制造工艺：光刻、解理和镀膜",
                d2: "参与半导体激光 Bar 条腔面镜检",
                d3: "共同发明 2 项实用新型专利：《一种半导体激光 Bar 条腔面镜检固定装置》和《一种半导体激光 Bar 条腔面镜检夹具》",
                d4: "专利已获国家知识产权局授权（2023 年 11 月）"
            }
        },
        education: {
            title: "教育背景",
            msc: {
                title: "计算机科学与技术 硕士",
                courses: "主修课程：Python、Java、数据科学、机器学习、深度学习、大数据、网络科学、文本数据处理、移动人机交互"
            },
            be: {
                title: "空间信息与数字技术 工学学士",
                org: "吉林大学 · 通信工程学院",
                courses: "主修课程：通信原理、数字电路、电磁场与电磁波、算法与数据结构、随机信号分析、数字通信原理、单片机与嵌入式系统、Python 程序设计、数据库"
            }
        },
        contact: {
            title: "联系我",
            desc: "欢迎随时交流——无论是新的机会、研究合作，还是聊聊 AI 和机器学习。",
            email: "邮箱",
            phone: "电话"
        },
        footer: "© 2026 张涵一. 使用纯 HTML & CSS 构建。"
    }
};

// ===== Resolve nested key (e.g., "nav.about") =====
function t(key, lang) {
    const parts = key.split('.');
    let val = i18n[lang];
    for (const p of parts) {
        if (val == null) return key;
        val = val[p];
    }
    return val ?? key;
}

// ===== Apply language to all data-i18n elements =====
function applyLang(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = t(key, lang);
        if (text) el.textContent = text;
    });
    document.title = t('title', lang);

    // Update toggle button text
    const toggle = document.getElementById('langToggle');
    if (toggle) toggle.textContent = lang === 'zh' ? 'EN' : '中';

    // Re-attach scroll observer for newly translated elements
    initScrollObserver();
}

// ===== Toggle language =====
function toggleLang() {
    const current = localStorage.getItem('lang') || 'en';
    const next = current === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', next);
    applyLang(next);
}

// ===== Mobile nav toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
}

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) navMenu.classList.remove('active');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
    }
});

// ===== Scroll observer for fade-in animations =====
function initScrollObserver() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-category, .contact-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Smooth scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    applyLang(savedLang);

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLang);
    }

    initScrollObserver();
});
