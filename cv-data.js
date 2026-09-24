/**
 * ==============================================================================
 * CV DATA - SINGLE SOURCE OF TRUTH (KHO DỮ LIỆU CV GỐC DUY NHẤT)
 * ==============================================================================
 * Dữ liệu được trích xuất và chuẩn hóa theo đúng Form Harvard Tiếng Việt (harvard-vi.html).
 * Mọi form CV (Harvard Tiếng Việt, Harvard Tiếng Anh, Modern Visual, Web Portfolio)
 * đều tự động truy xuất dữ liệu từ file này để hiển thị.
 * 
 * Khi cần thay đổi thông tin (kinh nghiệm, kỹ năng, dự án, thông tin liên hệ...),
 * BẠN CHỈ CẦN SỬA DUY NHẤT Ở FILE NÀY!
 * ==============================================================================
 */

const DEFAULT_CV_DATA = {
    version: "2026-09-25-v7",
    personal: {
        name: {
            vi: "NGUYỄN TÙNG LÂM",
            en: "NGUYEN TUNG LAM"
        },
        title: {
            vi: "Kỹ Sư Phần Mềm Full-stack | AI Agent Engineer",
            en: "Full-stack Software Engineer | AI Agent Engineer"
        },
        location: {
            vi: "Hà Nội, Việt Nam",
            en: "Hanoi, Vietnam"
        },
        phone: "0985 469 702",
        phoneFormatted: "(+84) 985-469-702",
        email: "tunglam07678@gmail.com",
        linkedin: "https://linkedin.com/in/nguyen-lam-9a1568375",
        linkedinDisplay: "linkedin.com/in/nguyen-lam-9a1568375",
        github: "https://github.com/tunglamhe180046",
        githubDisplay: "github.com/tunglamhe180046",
        avatar: "anh.jpg"
    },

    summary: {
        vi: "Kỹ sư phần mềm Full-stack & AI Agent Engineer với nền tảng kỹ thuật chuyên sâu về Python, LLM, RAG và hệ thống AI Đa phương thức (Multimodal AI). Làm chủ kiến trúc <strong>AI Agent & Workflow chuyên sâu</strong>: thiết kế hệ thống quản lý bộ nhớ (Short-term / Long-term Memory), cơ chế điều phối và quản lý kỹ năng (Skill Management & Waterfall Skills), tích hợp thị giác máy tính cho phép AI phân tích và đọc hiểu hình ảnh/tài liệu phức tạp. Có kinh nghiệm thực chiến phát triển giải pháp chuyển đổi số doanh nghiệp, xây dựng hệ sinh thái MCP thao tác trực tiếp tài liệu Office, phối hợp đa mô hình (Claude, Gemini) và tối ưu hóa đến 80% thời gian xử lý với độ bảo mật cao.",
        en: "Full-stack Software Engineer & AI Agent Engineer with deep expertise in Python, LLMs, RAG (Retrieval-Augmented Generation), and Multimodal AI systems. Specialized in <strong>Advanced AI Agent Architectures & Workflows</strong>: designing cognitive memory management systems (short-term & long-term episodic/semantic memory), robust skill management and orchestration (tiered Waterfall Skills), and multimodal vision pipelines allowing AI to parse and reason over complex images and technical documents. Proven track record in enterprise digital transformation, custom MCP tooling for in-place Office file manipulation, and cutting workflow latency by ~80% while ensuring strict enterprise data security."
    },

    education: [
        {
            school: {
                vi: "ĐẠI HỌC FPT",
                en: "FPT UNIVERSITY"
            },
            location: {
                vi: "Hà Nội, Việt Nam",
                en: "Hanoi, Vietnam"
            },
            degree: {
                vi: "Cử nhân Kỹ thuật Phần mềm (Bằng Khá - Tốt nghiệp 12/2025)",
                en: "Bachelor of Software Engineering (Good Classification)"
            },
            period: {
                vi: "10/2022 – 12/2025",
                en: "Oct 2022 – Dec 2025"
            }
        }
    ],

    experience: [
        {
            id: "minh-bach",
            company: {
                vi: "CÔNG TY CỔ PHẦN MINH BẠCH",
                en: "MINH BACH JSC"
            },
            location: {
                vi: "Hà Nội, Việt Nam",
                en: "Hanoi, Vietnam"
            },
            role: {
                vi: "AI Agent Engineer (Chuyển đổi số doanh nghiệp)",
                en: "AI Agent Engineer (Enterprise Digital Transformation)"
            },
            period: {
                vi: "08/2026 – Hiện tại",
                en: "Aug 2026 – Present"
            },
            highlights: {
                vi: [
                    "Phụ trách chuyên sâu chuyển đổi số doanh nghiệp: Tích hợp các LLM hàng đầu (Claude, Gemini) và kỹ thuật RAG vào chuỗi nghiệp vụ phân tích, thẩm định hồ sơ, lập tờ trình giải trình và dịch thuật tài liệu nghiệp vụ đa ngữ.",
                    "Ứng dụng Multimodal AI (Vision): Thiết kế pipeline thị giác máy tính cho phép AI trực tiếp đọc, trích xuất và phân tích dữ liệu chuyên sâu từ hình ảnh hồ sơ, sơ đồ thiết kế, bảng biểu và hóa đơn chứng từ phức tạp; đối chiếu chéo tự động với cơ sở dữ liệu văn bản.",
                    "Xây dựng hệ sinh thái Model Context Protocol (MCP) và tooling bằng Python & Node.js, cho phép AI Agent đọc sâu và thao tác chỉnh sửa trực tiếp (in-place modification) trên tài liệu phức tạp (Word .docx, Excel .xlsx, PowerPoint .pptx) mà vẫn bảo toàn 100% định dạng, bảng biểu và dữ liệu gốc.",
                    "Thiết kế hệ thống Quản lý Skill (Skill Management & Waterfall Skills Architecture) và Quản lý Bộ nhớ Agent (Short-term, Long-term & Semantic Memory): cấu trúc modular phân tầng với chỉ mục ban đầu siêu nhẹ, bóc tách tác vụ theo chiều sâu, lưu vết ngữ cảnh đa phiên; giúp tối ưu đến 80% thời gian xử lý và gia tăng hơn 70% chất lượng kết quả công việc.",
                    "Tự động hóa gần như toàn bộ quy trình xử lý và thẩm định hồ sơ; nâng cao tiêu chuẩn an toàn bảo mật dữ liệu, kiểm soát triệt để sai lệch chính tả, ngữ nghĩa và tính nhất quán logic nghiệp vụ.",
                    "Phát triển Full-stack hệ thống Multi-Agent chuyên biệt cho bộ phận Marketing: tự động hóa chuỗi phối hợp giữa Marketer Agent (thu thập insight/trend), Content Creator Agent (chiến lược & kịch bản video) và Editor Agent; chuẩn hóa System Architecture với phân quyền RBAC và bảo mật cao."
                ],
                en: [
                    "Led enterprise digital transformation initiatives: Integrated advanced LLMs (Claude, Gemini) and RAG pipelines into core business workflows for automated dossier evaluation, explanatory reporting, and multilingual documentation translation.",
                    "Engineered Multimodal Vision AI pipelines: Enabled AI agents to parse, analyze, and extract structured data from document scans, technical diagrams, spreadsheets, and complex invoices, cross-referencing visual inputs with enterprise knowledge bases.",
                    "Built custom Model Context Protocol (MCP) servers and tooling in Python & Node.js, empowering AI agents to parse and perform in-place edits on complex Office files (.docx, .xlsx, .pptx) with 100% layout and data integrity preservation.",
                    "Architected advanced Skill Management (Waterfall Skills Architecture) and Agent Memory Management (Short-term, Long-term & Semantic Memory): lightweight modular indexing, dynamic deep-task routing, and persistent memory across sessions, slashing latency by ~80% and boosting quality by >70%.",
                    "Automated the end-to-end enterprise dossier evaluation pipeline with robust data security boundaries and rigorous automated checks for syntax, terminology, and business logic consistency.",
                    "Developed a full-stack Multi-Agent collaboration platform for Marketing teams, orchestrating Marketer, Content Creator, and Editor agents with clean system architecture, granular RBAC, and layered security."
                ]
            }
        },
        {
            id: "kaopiz",
            company: {
                vi: "KAOPIZ SOFTWARE",
                en: "KAOPIZ SOFTWARE"
            },
            location: {
                vi: "Hà Nội, Việt Nam",
                en: "Hanoi, Vietnam"
            },
            role: {
                vi: "AI-assisted App Developer Intern",
                en: "AI-assisted App Developer Intern"
            },
            period: {
                vi: "01/2026 – 08/2026",
                en: "Jan 2026 – Aug 2026"
            },
            highlights: {
                vi: [
                    "Được đào tạo bài bản và ứng dụng thực tế bảo mật AI, thiết kế AI workflow, tối ưu context/token và kết hợp đa model AI trong phát triển phần mềm.",
                    "Xây dựng và kiểm thử các workflow tích hợp AI hỗ trợ phân tích yêu cầu, chia nhỏ task, phát triển UI/Code và review tài liệu kỹ thuật, giúp giảm bớt ~30% thời gian xử lý các nhóm công việc chính.",
                    "Nghiên cứu kết nối dự án Unity với AI agent, hỗ trợ AI hiểu project context để tối ưu quá trình phát triển UI, màn hình tương tác và sửa lỗi logic.",
                    "Xử lý và hiển thị nội dung đa ngôn ngữ cho ứng dụng trên 18 ngôn ngữ quốc tế.",
                    "Viết các kịch bản Automation Test cho Unit Test, Flow Test và UI Test đảm bảo chất lượng phần mềm.",
                    "Thành thạo sử dụng Git, Bitbucket và Jira trong quy trình làm việc thực tế của doanh nghiệp."
                ],
                en: [
                    "Designed and implemented production AI workflows supporting requirements decomposition, UI/code generation, technical document auditing, and output verification, reducing task processing time by ~30%.",
                    "Built AI context integration pipelines for legacy Unity applications, allowing developer agents to accurately index project state, debug screen logic, and implement frontend interactions.",
                    "Engineered multi-language content localization rendering pipelines supporting 18 international languages.",
                    "Wrote automated unit tests, UI component tests, and application flow tests to enforce reliability across release cycles.",
                    "Leveraged Jira, Git, and Bitbucket in an Agile team setting while maintaining strict AI security and data privacy standards."
                ]
            }
        },
        {
            id: "nic",
            company: {
                vi: "NIC GLOBAL COMPANY",
                en: "NIC GLOBAL COMPANY"
            },
            location: {
                vi: "Hà Nội, Việt Nam",
                en: "Hanoi, Vietnam"
            },
            role: {
                vi: ".NET Intern",
                en: ".NET Software Intern"
            },
            period: {
                vi: "08/2025 – 12/2025",
                en: "Aug 2025 – Dec 2025"
            },
            highlights: {
                vi: [
                    "Làm việc trong môi trường C# / .NET, trực tiếp tiếp cận quy trình xử lý yêu cầu và phát triển tính năng cho ứng dụng nội bộ.",
                    "Đọc hiểu và phân tích tài liệu kỹ thuật về Flutter, API Server, Redis caching, database trigger, hook subscription và các luồng import/execute dữ liệu.",
                    "Ứng dụng AI vào việc đọc hiểu tài liệu phức tạp, truy vết luồng code và rút ngắn thời gian làm quen với công nghệ mới."
                ],
                en: [
                    "Developed internal application components using C# and .NET, participating in technical requirement analysis and business logic implementation.",
                    "Analyzed architecture specifications covering Flutter, API services, Redis caching, database triggers, hook subscriptions, and import/execute data pipelines.",
                    "Utilized AI tools to decompose complex system documentation, trace codebase execution paths, and accelerate technology stack onboarding."
                ]
            }
        },
        {
            id: "fpt-japan",
            company: {
                vi: "FPT SOFTWARE NHẬT BẢN",
                en: "FPT SOFTWARE JAPAN"
            },
            location: {
                vi: "Tokyo, Nhật Bản",
                en: "Tokyo / Japan"
            },
            role: {
                vi: "Thực tập sinh Phát triển Phần mềm",
                en: "Software Engineering Intern"
            },
            period: {
                vi: "09/2024 – 12/2024",
                en: "Sep 2024 – Dec 2024"
            },
            highlights: {
                vi: [
                    "Thực tập 3 tháng trực tiếp tại Nhật Bản, sinh hoạt và phối hợp công việc cùng các kỹ sư bản xứ.",
                    "Tham gia hoạt động phát triển phần mềm (Low-code & Coding) và các hội thảo định hướng phát triển kỹ sư tại Nhật."
                ],
                en: [
                    "Completed a 3-month on-site internship in Japan, collaborating with Japanese engineering teams on low-code and standard software development workflows.",
                    "Participated in technical workshops on Japanese corporate engineering standards and Bridge Software Engineer (BRSE) practices."
                ]
            }
        }
    ],

    projects: [
        {
            id: "hero-lab",
            name: {
                vi: "Hero Lab — Trình Tạo Ảnh Siêu Anh Hùng Điện Ảnh AI Full-Stack",
                en: "Hero Lab — Full-Stack Cinematic AI Portrait Generator"
            },
            period: "2026",
            tech: "Next.js 16, React 19, TypeScript, Cloudflare Workers AI (FLUX.2 Klein), Google Gemini API, Sharp",
            github: "https://github.com/tunglamhe180046/superhero-generator",
            githubDisplay: "github.com/tunglamhe180046/superhero-generator",
            highlights: {
                vi: [
                    "Xây dựng ứng dụng full-stack chuyển đổi ảnh chân dung thành nhân vật điện ảnh AI mà vẫn giữ nguyên đặc điểm khuôn mặt gốc.",
                    "Phát triển cơ chế tự sửa lỗi Prompt (Self-healing): khi model ảnh từ chối do chính sách an toàn, hệ thống tự động gọi Gemini API phân tích nguyên nhân, viết lại prompt an toàn hơn và gửi lại request thành công.",
                    "Tối ưu Backend Route Handlers, ghép tên nhân vật bằng Sharp & SVG, ghi log hệ thống chi tiết và xử lý linh hoạt các trường hợp lỗi mạng / timeout."
                ],
                en: [
                    "Architected full-stack web application transforming user portraits into cinematic superhero visuals while retaining original facial fidelity.",
                    "Implemented self-healing prompt pipeline: when Cloudflare Workers AI flag prompts for safety policies, Google Gemini API automatically analyzes errors, rewrites safer prompts, and completes execution seamlessly.",
                    "Built backend Route Handlers with Sharp SVG image compositing, structured logging, and robust handling for payload limits and provider timeouts."
                ]
            }
        },
        {
            id: "word-tools",
            name: {
                vi: "Word Tools — Hạ Tầng Phẫu Thuật Tài Liệu Word (.docx) Tại Chỗ Cho AI Agent",
                en: "Word Tools — Surgical In-Place DOCX Manipulation Engine for AI Agents"
            },
            period: "2026",
            tech: "Python, OpenXML, lxml (XPath / C14N), python-docx, TypeScript, Node.js, PyMuPDF, Pytest",
            github: "https://github.com/tunglamhe180046/word-tools",
            githubDisplay: "github.com/tunglamhe180046/word-tools",
            highlights: {
                vi: [
                    "Xây dựng engine phẫu thuật tài liệu Word (.docx) tại chỗ (Profile 1 - Surgical In-Place) cho AI Agent: trực tiếp sửa ô bảng, đoạn văn và kiểu dáng mà không cần sinh lại file từ đầu, bảo toàn nguyên vẹn 100% định dạng OpenXML phức tạp và nội dung người dùng sửa tay.",
                    "Thiết kế cơ chế khóa lạc quan (Optimistic Lock) & Lưới an toàn chống mất dữ liệu (Anti-Drift Guardrail): kiểm tra mã băm document_revision và context_sha256, tự động dừng an toàn (fail-closed) khi phát hiện xung đột sửa đổi ngoài Word.",
                    "Cung cấp CLI chuẩn hóa với đầu ra JSON có cấu trúc (inspect, patch-cell, patch-text, set-geometry, stamp-ops, backups/restore) và Client Adapter bất đồng bộ cho TypeScript / Node.js; tích hợp 123 bài kiểm thử tự động với pytest."
                ],
                en: [
                    "Engineered an in-place DOCX surgical modification engine (Profile 1 - Surgical In-Place) for AI Agents: performs direct updates on table cells, paragraphs, and styles without regenerating entire files, preserving 100% of complex OpenXML formats and human manual edits.",
                    "Designed optimistic locking and anti-drift guardrails: validates cryptographic document_revision and context_sha256 hashes, failing closed safely upon detecting out-of-band manual edits in Microsoft Word.",
                    "Provided a production CLI with structured JSON outputs (inspect, patch-cell, patch-text, set-geometry, stamp-ops, backups/restore) alongside an async TypeScript/Node.js client adapter; backed by 123 automated pytest test suites."
                ]
            }
        },
        {
            id: "google-maps-radar",
            name: {
                vi: "Google Maps Radar — Hệ Thống Tình Báo Không Gian Đa Phương Thức & Multi-Agent",
                en: "Google Maps Radar — Multimodal Spatial Profiling & Multi-Agent Intelligence System"
            },
            period: "2026",
            tech: "Python, Multimodal Vision LLMs, Adaptive Quadtree Grid, SQLite, Token Bucket Rate Limiter, Pytest",
            github: "https://github.com/tunglamhe180046/google-maps-radar",
            githubDisplay: "github.com/tunglamhe180046/google-maps-radar",
            highlights: {
                vi: [
                    "Phát triển pipeline quét không gian thông minh ứng dụng thuật toán lưới thích ứng Quadtree: tự động phân mảnh bán kính quét theo mật độ quán, khắc phục giới hạn hiển thị của Google Maps kết hợp cơ chế Token Bucket Rate Limiter chống khóa IP.",
                    "Tích hợp Multimodal Spatial Profiling: ứng dụng Vision LLM phân tích hình ảnh và đánh giá văn bản đa phương thức để gắn nhãn cảm quan không gian (Quiet Focus, Cozy Creative...), tự động tính toán chi phí trước và cache SQLite nội bộ.",
                    "Xây dựng tính năng Building Tenant Radar tự động lập danh bạ doanh nghiệp/tổ chức thuê địa điểm theo tòa nhà (trích xuất tầng, lĩnh vực, website, email HR) và hệ thống bộ nhớ phiên làm việc cô lập (Session Isolation) theo kiến trúc SSOT."
                ],
                en: [
                    "Architected an intelligent spatial scanning pipeline leveraging Adaptive Quadtree Grid algorithms to dynamically subdivide scan radiuses by density, bypassing Google Maps RPC limits with Token Bucket Rate Limiting and exponential backoff.",
                    "Integrated Multimodal Spatial Profiling: deployed Vision LLMs to analyze interior photos and text reviews to label workspace vibes (Quiet Focus, Cozy Creative), featuring dry-run cost estimation and SQLite caching.",
                    "Built a Building Tenant Radar to automatically map corporate tenants per high-rise building (extracting floors, tech domains, websites, HR emails) alongside a session-isolated SSOT memory architecture."
                ]
            }
        },
        {
            id: "job-scan",
            name: {
                vi: "Job Scan — Bộ Công Cụ Thu Thập & Đối Chiếu Việc Làm Tự Động",
                en: "Job Scan — Job Discovery & Automated Application Toolkit"
            },
            period: "2026",
            tech: "Python, Playwright, Pandas, Rich CLI",
            github: "https://github.com/tunglamhe180046/job-scan",
            githubDisplay: "github.com/tunglamhe180046/job-scan",
            highlights: {
                vi: [
                    "Phát triển công cụ tự động thu thập tin tuyển dụng từ ITviec & TopCV, tìm website doanh nghiệp và xuất báo cáo Excel/CSV.",
                    "Tích hợp trợ lý ứng tuyển bán tự động: tự tạo Cover Letter theo từng vị trí và điền form dưới sự xác nhận của người dùng."
                ],
                en: [
                    "Created an automated scraping and matching toolkit collecting company listings from ITviec and TopCV, mapping official career portals, and exporting structured Excel/CSV reports.",
                    "Integrated semi-automated application assistant generating tailored cover letters per role and managing submission workflows under candidate review."
                ]
            }
        }
    ],

    skills: [
        {
            category: {
                vi: "Ngôn ngữ & Framework",
                en: "Languages & Frameworks"
            },
            content: {
                vi: "Python (chuyên sâu AI/Agent), Node.js, Java (Spring Boot), C# (.NET), ReactJS, HTML5/CSS3, Android Java, Unity, SQL.",
                en: "Python (Advanced AI/Agent), Node.js, Java (Spring Boot), C# (.NET), ReactJS, HTML5/CSS3, Android Java, Unity, SQL."
            },
            tags: ["Python", "Node.js", "Java", "Spring Boot", "C#", ".NET", "ReactJS", "HTML5/CSS3", "Android Java", "Unity", "SQL"]
        },
        {
            category: {
                vi: "Cơ sở dữ liệu & Công cụ",
                en: "Databases & Tools"
            },
            content: {
                vi: "Vector DB (FAISS, Chroma / RAG indexing), MySQL, SQL Server, SQLite, Redis (cơ bản), Git, Bitbucket, Jira, Playwright, MCP (Model Context Protocol).",
                en: "Vector DB (FAISS, Chroma / RAG indexing), MySQL, SQL Server, SQLite, Redis (basic), Git, Bitbucket, Jira, Playwright, MCP (Model Context Protocol)."
            },
            tags: ["Vector DB", "RAG", "MySQL", "SQL Server", "SQLite", "Redis", "Git", "Bitbucket", "Jira", "Playwright", "MCP"]
        },
        {
            category: {
                vi: "AI Chuyên sâu & Agentic Systems",
                en: "Advanced AI & Agentic Systems"
            },
            content: {
                vi: "LLM, RAG (Retrieval-Augmented Generation), Multimodal AI (Thị giác máy tính, đọc & phân tích hình ảnh/tài liệu phức tạp), Quản lý Memory Agent (Short-term/Long-term/Semantic Memory), Quản lý & Điều phối Skill (Waterfall Skills Architecture), Hệ thống Multi-Agent, MCP Servers & Tooling, Prompt/Context Engineering, Bảo mật AI & RBAC.",
                en: "LLMs, RAG (Retrieval-Augmented Generation), Multimodal AI (Vision & Complex Image Parsing), Agent Memory Management (Short-term/Long-term/Semantic Memory), Skill Management & Orchestration (Waterfall Skills), Multi-Agent Systems, MCP Servers & Tooling, Prompt/Context Engineering, AI Security & RBAC."
            },
            tags: ["RAG", "LLM", "Multimodal AI", "Computer Vision", "Memory Management", "Skill Management", "Waterfall Skills", "Multi-Agent", "MCP", "Prompt Engineering", "RBAC"]
        }
    ],

    languagesAndCertifications: {
        languages: {
            label: {
                vi: "Ngoại ngữ",
                en: "Languages"
            },
            vi: "Tiếng Anh (IELTS 6.5 - 2022) | Tiếng Nhật (JLPT N4 - 2025, 3 tháng thực tập trực tiếp tại Nhật Bản).",
            en: "English (IELTS 6.5 - 2022) | Japanese (JLPT N4 - 2025, 3 months Japan internship experience)."
        },
        certifications: {
            label: {
                vi: "Chứng chỉ",
                en: "Certifications"
            },
            vi: "Google AI Essentials Certificate (2025) | AI Passport (Kaopiz Software, Pass 2 lần - 04/2026) | Chứng chỉ An Toàn Thông Tin (Kaopiz Software, Điểm tối đa - 04/2026).",
            en: "Google AI Essentials Certificate (2025) | AI Passport (Kaopiz Software, 2x pass - Apr 2026) | Information Security Certificate (Kaopiz Software, perfect score - Apr 2026)."
        },
        activities: {
            label: {
                vi: "Hoạt động",
                en: "Activities"
            },
            vi: "CLB Muay Thái (10/2022 – 08/2024) | Tình nguyện viên Hội thảo BRSE Kỹ sư Cầu nối (08/2024).",
            en: "Muay Thai Club (Oct 2022 – Aug 2024) | BRSE Conference Event Volunteer (Aug 2024)."
        }
    }
};

// Helper methods to get, save, and reset CV data
const rootScope = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this);

rootScope.CVDataService = {
    STORAGE_KEY: "nguyen_tung_lam_cv_data_v7",

    get: function() {
        try {
            const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem(this.STORAGE_KEY) : null;
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && parsed.version === DEFAULT_CV_DATA.version && Array.isArray(parsed.projects) && parsed.projects.length >= DEFAULT_CV_DATA.projects.length) {
                    return Object.assign(JSON.parse(JSON.stringify(DEFAULT_CV_DATA)), parsed);
                } else if (typeof localStorage !== 'undefined') {
                    localStorage.removeItem(this.STORAGE_KEY);
                }
            }
        } catch (e) {
            console.warn("Could not load from localStorage, using default CV data:", e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
    },

    save: function(data) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data, null, 2));
                return true;
            }
        } catch (e) {
            console.error("Error saving CV data to localStorage:", e);
        }
        return false;
    },

    reset: function() {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(this.STORAGE_KEY);
            }
        } catch (e) {}
        return JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
    },

    exportAsJS: function(data) {
        return `/**
 * ==============================================================================
 * CV DATA - SINGLE SOURCE OF TRUTH (KHO DỮ LIỆU CV GỐC DUY NHẤT)
 * ==============================================================================
 */

const DEFAULT_CV_DATA = ${JSON.stringify(data, null, 4)};

const rootScope = typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this);

rootScope.CVDataService = {
    STORAGE_KEY: "nguyen_tung_lam_cv_data_v7",

    get: function() {
        try {
            const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem(this.STORAGE_KEY) : null;
            if (saved) {
                const parsed = JSON.parse(saved);
                return Object.assign(JSON.parse(JSON.stringify(DEFAULT_CV_DATA)), parsed);
            }
        } catch (e) {
            console.warn("Could not load from localStorage, using default CV data:", e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
    },

    save: function(data) {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data, null, 2));
                return true;
            }
        } catch (e) {
            console.error("Error saving CV data to localStorage:", e);
        }
        return false;
    },

    reset: function() {
        try {
            if (typeof localStorage !== 'undefined') {
                localStorage.removeItem(this.STORAGE_KEY);
            }
        } catch (e) {}
        return JSON.parse(JSON.stringify(DEFAULT_CV_DATA));
    }
};

rootScope.CV_DATA = rootScope.CVDataService.get();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DEFAULT_CV_DATA, CVDataService: rootScope.CVDataService, CV_DATA: rootScope.CV_DATA };
}
`;
    }
};

rootScope.CV_DATA = rootScope.CVDataService.get();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DEFAULT_CV_DATA, CVDataService: rootScope.CVDataService, CV_DATA: rootScope.CV_DATA };
}
