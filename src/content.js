export const resumePdf = 'resume-wang-yuhan.pdf';

export const routes = ['/', '/resume', '/projects', '/about', '/contact'];

export const content = {
  zh: {
    meta: {
      languageLabel: '中文',
      alternateLanguage: 'EN',
      nav: [
        { path: '/', label: '首页' },
        { path: '/resume', label: '简历' },
        { path: '/projects', label: '项目' },
        { path: '/about', label: '关于' },
        { path: '/contact', label: '联系' },
      ],
      actions: {
        download: '下载 PDF 简历',
        email: '发送邮件',
        phone: '拨打电话',
        viewResume: '查看完整简历',
        viewProjects: '查看项目经历',
      },
      labels: {
        highlights: '核心亮点',
        education: '教育背景',
        internship: '实习经历',
        socialPractice: '社会实践',
        socialWork: '社工经历',
        other: '其他信息',
        selectedProjects: '代表项目',
        contact: '联系方式',
        course: '主修课程',
        skills: '能力标签',
        resumePreview: '简历预览',
      },
    },
    profile: {
      name: '王煜涵',
      title: '清华大学经济与金融本科生',
      tagline: '关注证券研究、投资银行、产业分析与财务尽调。',
      school: '清华大学经济管理学院',
      major: '经济与金融',
      grade: '大三',
      phone: '18834916540',
      email: 'yuhan-wa23@mails.tsinghua.edu.cn',
      location: '北京，中国',
      intro:
        '清华大学经济管理学院经济与金融专业本科生，GPA 3.7，年级排名 56/127。拥有证券资管、投资银行、政府咨询与调研项目经历，能够围绕行业趋势、财务质量、政策影响与竞争格局进行系统分析。',
      chips: ['证券研究', '投资银行', '财务分析', '产业研究', '中英双语'],
      highlights: [
        '在国泰海通证券资产管理部跟踪 A 股与银行间债市联动规律，构建消费与制造板块估值更新框架。',
        '参与新能源自动化装备企业 IPO 项目，分析三年财务报表并撰写 10+ 页财务分析报告。',
        '整理上市公司公告、政策文件及调研纪要 80 余份，独立负责近 200 份供应商与客户函证。',
        '参与多项清华大学调研类基金项目，累计分析 201 份学生问卷和 22 份辅导员问卷。',
      ],
    },
    education: {
      institution: '清华大学，经济管理学院',
      major: '经济与金融',
      period: '2023.6-2027.6',
      details: ['GPA：3.7', '年级排名：56/127'],
      courses: ['公共财政学 A-', '中级宏观经济学 A-', '概率论与数理统计 A-', '中级财务会计 A-'],
    },
    experiences: [
      {
        group: 'internship',
        organization: '国泰海通证券股份有限公司',
        role: '资产管理部实习生',
        period: '2026.1-2026.3',
        bullets: [
          '跟踪 A 股与银行间债市联动规律，基于股债跷跷板效应判断 1 月债市调整逻辑。独立跟踪消费与制造两大板块估值体系，构建涵盖营收增速、毛利率、PE/PB 等核心指标的周度更新框架。在跟踪过程中发现某白酒龙头估值连续走低与行业基本面稳定形成背离，主动下钻至渠道库存数据，判断核心驱动因素为终端去库存预期升温而非基本面恶化，该观点被纳入团队周度市场回顾。',
          '针对制造业板块，提出“新旧动能结构性分化”的分析框架：高端装备如工业机器人、半导体设备等，在政策催化下逆势扩产，而传统汽车及部分新能源制造环节产量同比收缩，两者估值走势显著分化。基于此框架撰写板块观点，为团队配置建议提供研究支撑。',
          '整理上市公司公告、政策文件及调研纪要 80 余份，按“政策影响-业绩拐点-竞争格局”三维度提炼关键信息，提升团队研究效率。',
        ],
      },
      {
        group: 'internship',
        organization: '国新证券股份有限公司',
        role: '投资银行部门实习生',
        period: '2025.6-2025.8',
        bullets: [
          '深度参与某新能源自动化装备企业 IPO 项目，结合 2025 年上半年工业自动化行业需求回暖及锂电池扩产重启背景，分析近三年财报，识别出公司营收逆势增长、增速高于行业平均、应收账款周转率优于行业平均等优势。',
          '通过对标的公司财务报表的系统分析，发现公司综合毛利率偏低（产品结构偏向标准品）、存货周转率较低（主动备货所致）等潜在风险，参与撰写 10+ 页财务分析报告，为后续项目组尽调提供指引。',
          '独立负责近 200 份供应商与客户函证的征发、核对与归档，运用 DeepSeek AI 工具排查信息偏差近 20 处。针对某主要供应商回函差异，主动追溯合同及入库单，确认为时间性差异，为审计尽调提供关键作证。',
        ],
      },
      {
        group: 'socialPractice',
        organization: '朔州市怀仁市教育局',
        role: '咨询实习岗位',
        period: '2024.7-2024.8',
        bullets: [
          '负责接待并帮助进行“助学贷款”业务的办理，累计工作时长逾 120 小时，与超过 20 名学生及家长进行沟通交流，帮助其完成“助学贷款”业务的办理，并负责后续的线上咨询服务，解决部分家长对助学贷款的金额、偿债方式等问题的困惑。',
        ],
      },
      {
        group: 'socialPractice',
        organization: '“兴华同行”社会实践活动',
        role: '核心成员',
        period: '2024.6-2024.7',
        bullets: [
          '参观庄浪当地马铃薯培育基地并分析行业发展态势，从目前庄浪县发展优势、产业布局与已取得的成果出发，分析其发展的精深加工占比偏低等现存挑战与推动产业链向高端延伸的未来发展方向，总结庄浪马铃薯产业的发展情况，撰写相关调研报告 10 页+。',
          '在与庄浪当地校方共同组织的学习经验分享会上负责化学学科的学习经验分享和后续的答疑解惑，与近百名同学交流并加以辅导。',
        ],
      },
      {
        group: 'socialWork',
        organization: '清华大学 2024-2025 学年春季学期调研类基金专项评选铜奖',
        role: '核心成员',
        period: '2025.3-2025.6',
        bullets: [
          '参与收集 72 份校内学生问卷，通过多角度对比分析当下清华大学经管学院同学的心理健康与社会支持来源的影响，探究了当下同学们所需要的社会支持来源的多样性与学校所给予的社会支持的不足之处，参与撰写调研报告 15 页+。',
          '组织负责优秀辅导员深度访谈项目，涵盖提纲撰写、人员协调以及访谈执行全流程；通过引导式访谈深入挖掘其关于网络思政的一手经验和见解，累计投入 40+ 小时。',
        ],
      },
      {
        group: 'socialWork',
        organization: '清华大学 2024-2025 学年秋季学期调研类基金专项评选铜奖',
        role: '核心成员',
        period: '2024.9-2025.1',
        bullets: [
          '分析 201 份学生问卷和 22 份优秀辅导员问卷，通过学生和辅导员两个角度对比分析学校“双肩挑”辅导员思政工作成效，探究了当下清华校内辅导员的工作与同学需求存在的错配情况，并参与撰写调研报告 20 页+。',
        ],
      },
    ],
    projects: [
      {
        title: 'A 股与银行间债市联动研究',
        period: '2026.1-2026.3',
        tags: ['资产管理', '股债跷跷板', '估值框架'],
        summary:
          '基于股债跷跷板效应判断 1 月债市调整逻辑，建立消费与制造板块周度估值跟踪框架，并将白酒龙头估值下行原因追溯至渠道库存与终端去库存预期。',
      },
      {
        title: '制造业新旧动能结构性分化分析',
        period: '2026.1-2026.3',
        tags: ['制造业', '政策催化', '配置建议'],
        summary:
          '提出高端装备扩产与传统汽车、部分新能源制造环节收缩并存的分析框架，撰写板块观点，为团队配置建议提供研究支撑。',
      },
      {
        title: '新能源自动化装备企业 IPO 财务分析',
        period: '2025.6-2025.8',
        tags: ['投资银行', 'IPO', '财务尽调'],
        summary:
          '分析标的公司三年财报，识别营收增长、应收账款周转优势与毛利率、存货周转等潜在风险，参与撰写 10+ 页财务分析报告。',
      },
      {
        title: '清华大学经管学院心理健康与社会支持调研',
        period: '2025.3-2025.6',
        tags: ['问卷分析', '访谈', '调研报告'],
        summary:
          '参与收集 72 份学生问卷，组织优秀辅导员深度访谈，研究学生社会支持来源与学校支持不足，参与撰写 15+ 页调研报告。',
      },
      {
        title: '庄浪马铃薯产业社会实践调研',
        period: '2024.6-2024.7',
        tags: ['产业调研', '乡村发展', '报告写作'],
        summary:
          '参观当地马铃薯培育基地，分析产业布局、现存挑战与产业链高端延伸方向，撰写 10+ 页调研报告。',
      },
    ],
    skills: [
      { title: '金融研究', items: ['股票与债券市场联动', '行业估值框架', '政策影响分析', '竞争格局梳理'] },
      { title: '财务与投行', items: ['财务报表分析', 'IPO 项目支持', '函证核对归档', '尽调材料整理'] },
      { title: '调研与沟通', items: ['问卷分析', '深度访谈', '报告写作', '跨对象沟通'] },
      { title: '语言能力', items: ['英语六级', '雅思 6.5', '可用作学习、工作语言'] },
    ],
    other: {
      language: '英语：英语六级，雅思 6.5，可用作学习、工作语言',
      hobbies: '兴趣爱好：斯诺克、书法（清华大学书法协会成员）',
    },
  },
  en: {
    meta: {
      languageLabel: 'English',
      alternateLanguage: '中文',
      nav: [
        { path: '/', label: 'Home' },
        { path: '/resume', label: 'Resume' },
        { path: '/projects', label: 'Projects' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' },
      ],
      actions: {
        download: 'Download PDF Resume',
        email: 'Email Me',
        phone: 'Call',
        viewResume: 'View Full Resume',
        viewProjects: 'View Projects',
      },
      labels: {
        highlights: 'Highlights',
        education: 'Education',
        internship: 'Internship',
        socialPractice: 'Social Practice',
        socialWork: 'Social Work',
        other: 'Other Information',
        selectedProjects: 'Selected Projects',
        contact: 'Contact',
        course: 'Main Courses',
        skills: 'Skills',
        resumePreview: 'Resume Preview',
      },
    },
    profile: {
      name: 'Yuhan Wang',
      title: 'Economics and Finance Undergraduate at Tsinghua University',
      tagline: 'Focused on securities research, investment banking, industry analysis and financial due diligence.',
      school: 'School of Economics and Management, Tsinghua University',
      major: 'Economics and Finance',
      grade: 'Junior',
      phone: '18834916540',
      email: 'yuhan-wa23@mails.tsinghua.edu.cn',
      location: 'Beijing, China',
      intro:
        'I am an Economics and Finance undergraduate at Tsinghua SEM with a GPA of 3.7 and a rank of 56/127. My experience spans asset management research, investment banking, government consulting and research projects, with a focus on industry trends, financial quality, policy impact and competitive landscapes.',
      chips: ['Securities Research', 'Investment Banking', 'Financial Analysis', 'Industry Research', 'Bilingual'],
      highlights: [
        'Tracked A-share and interbank bond market dynamics at Guotai Haitong Securities and built a weekly valuation framework for consumer and manufacturing sectors.',
        'Participated in an IPO project for a new energy automation equipment firm, analyzing three years of financial statements and contributing to a 10+ page financial analysis report.',
        'Organized 80+ corporate announcements, policy documents and research notes, and independently handled nearly 200 supplier/customer confirmation letters.',
        'Contributed to Tsinghua research fund projects, analyzing 201 student questionnaires and 22 outstanding counselor questionnaires.',
      ],
    },
    education: {
      institution: 'School of Economics & Management, Tsinghua University',
      major: 'Economics and Finance',
      period: '2023.6-2027.6',
      details: ['GPA: 3.7', 'Rank: 56/127'],
      courses: ['Intermediate Macroeconomics A-', 'Probability Theory and Mathematical Statistics A-'],
    },
    experiences: [
      {
        group: 'internship',
        organization: 'Guotai Haitong Securities Co., Ltd.',
        role: 'Asset Management Department, Intern',
        period: '2026.1-2026.3',
        bullets: [
          'Tracked A-share and interbank bond markets, identifying the stock-bond seesaw effect behind the bond market correction. Maintained a weekly framework for consumer and manufacturing sector valuations covering revenue, gross margin, PE/PB. Found a leading liquor firm’s valuation fell amid stable industry fundamentals, driven by channel destocking expectations; the insight was included in the team’s weekly market review.',
          'Developed a “structural divergence between old and new growth drivers” analytical framework for the manufacturing sector: high-end equipment such as industrial robotics and semiconductor equipment expanded against the trend under policy tailwinds, while traditional auto and select new energy segments contracted YoY, with valuations diverging accordingly. Authored sector commentary based on this framework to support the team’s allocation recommendations.',
          'Organized 80+ corporate announcements, policy documents and research notes; distilled key information along three dimensions - policy impact, earnings inflection points and competitive landscape shifts - and improved the team’s research retrieval efficiency.',
        ],
      },
      {
        group: 'internship',
        organization: 'Guoxin Securities Co., Ltd.',
        role: 'Investment Banking Department, Intern',
        period: '2025.6-2025.8',
        bullets: [
          'Participated deeply in an IPO project for a new energy automation equipment firm. Amid recovering industrial automation demand and renewed lithium battery capacity expansion in H1 2025, I analyzed three years of financial reports and identified the company’s strengths: above-industry revenue growth and better accounts receivable turnover.',
          'Systematically analyzed the target company’s financials and identified potential risks, including low gross margin due to standard product mix and slow inventory turnover from proactive stockpiling. Contributed to a 10+ page financial analysis report, providing guidance for the project team’s due diligence.',
          'Independently handled the issuance, verification and filing of nearly 200 supplier/customer confirmation letters, and used DeepSeek AI to identify nearly 20 information discrepancies. For a major supplier’s inconsistent reply, I traced related contracts and receipts, confirmed it as a timing difference, and provided key evidence for audit due diligence.',
        ],
      },
      {
        group: 'socialPractice',
        organization: 'Huairen Municipal Bureau of Education, Shuozhou City',
        role: 'Consulting Intern',
        period: '2024.7-2024.8',
        bullets: [
          'Assisted with student loan applications. Communicated with 20+ students and parents to support their application processes, and provided online consulting services to address doubts about loan amounts and repayment methods.',
        ],
      },
      {
        group: 'socialPractice',
        organization: '“Xinghua Tongxing” Social Practice Activity',
        role: 'Core Member',
        period: '2024.6-2024.7',
        bullets: [
          'Visited local potato cultivation bases and analyzed industry development trends. Based on the current local development status, identified challenges and future development directions, and drafted a 10+ page research report.',
          'Delivered chemistry learning experience sharing and provided follow-up Q&A services at the learning seminar co-organized with local schools, communicating with and tutoring nearly 100 students.',
        ],
      },
      {
        group: 'socialWork',
        organization: 'Tsinghua University Research Fund Special Selection, Spring Semester 2024-2025, Bronze Award',
        role: 'Core Member',
        period: '2025.3-2025.6',
        bullets: [
          'Collected 72 student questionnaires and conducted multi-dimensional comparative analysis on mental health and social support sources of students from Tsinghua SEM. Explored the diversity of students’ needed social support and deficiencies in school-provided support, and co-drafted a 15+ page research report.',
        ],
      },
      {
        group: 'socialWork',
        organization: 'Tsinghua University Research Fund Special Selection, Autumn Semester 2024-2025, Bronze Award',
        role: 'Core Member',
        period: '2024.9-2025.1',
        bullets: [
          'Analyzed 201 student questionnaires and 22 outstanding counselor questionnaires. Conducted comparative analysis on the effectiveness of the “double-role” counselor ideological and political work, explored the mismatch between counselors’ work and students’ needs, and co-drafted a 20+ page research report.',
        ],
      },
    ],
    projects: [
      {
        title: 'A-share and Interbank Bond Market Linkage Research',
        period: '2026.1-2026.3',
        tags: ['Asset Management', 'Stock-Bond Seesaw', 'Valuation Framework'],
        summary:
          'Identified the stock-bond seesaw effect behind the January bond market correction, built a weekly valuation framework for consumer and manufacturing sectors, and traced the valuation decline of a leading liquor firm to channel inventory and destocking expectations.',
      },
      {
        title: 'Structural Divergence in Manufacturing Growth Drivers',
        period: '2026.1-2026.3',
        tags: ['Manufacturing', 'Policy Tailwinds', 'Allocation Support'],
        summary:
          'Developed an analytical framework comparing high-end equipment expansion with contraction in traditional auto and selected new energy manufacturing, then authored sector commentary for allocation recommendations.',
      },
      {
        title: 'IPO Financial Analysis for a New Energy Automation Equipment Firm',
        period: '2025.6-2025.8',
        tags: ['Investment Banking', 'IPO', 'Financial Due Diligence'],
        summary:
          'Analyzed three years of financial statements, identified revenue growth and accounts receivable turnover advantages as well as potential gross margin and inventory turnover risks, and contributed to a 10+ page financial analysis report.',
      },
      {
        title: 'Mental Health and Social Support Research at Tsinghua SEM',
        period: '2025.3-2025.6',
        tags: ['Questionnaire Analysis', 'Interview', 'Research Report'],
        summary:
          'Collected 72 student questionnaires, organized in-depth counselor interviews, and studied students’ social support needs and gaps in school-provided support.',
      },
      {
        title: 'Zhuanglang Potato Industry Social Practice Research',
        period: '2024.6-2024.7',
        tags: ['Industry Research', 'Rural Development', 'Report Writing'],
        summary:
          'Visited local potato cultivation bases, analyzed industrial layout and challenges, and drafted a 10+ page report on future high-end value chain development.',
      },
    ],
    skills: [
      { title: 'Financial Research', items: ['Equity and bond market linkage', 'Industry valuation frameworks', 'Policy impact analysis', 'Competitive landscape analysis'] },
      { title: 'Finance and IB', items: ['Financial statement analysis', 'IPO project support', 'Confirmation letter verification', 'Due diligence materials'] },
      { title: 'Research and Communication', items: ['Questionnaire analysis', 'In-depth interviews', 'Report writing', 'Stakeholder communication'] },
      { title: 'Language Skills', items: ['CET-6', 'IELTS 6.5', 'Can use English as a working and learning language'] },
    ],
    other: {
      language: 'Language Skills: English, IELTS 6.5, CET-6',
      hobbies: 'Hobbies: Snooker, Calligraphy (Member of Tsinghua University Calligraphy Association)',
    },
  },
};
