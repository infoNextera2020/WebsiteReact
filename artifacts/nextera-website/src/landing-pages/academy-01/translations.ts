export type Language = 'en' | 'ar';

export const translations = {
  en: {
    nav: {
      pedagogy: 'Pedagogy',
      journey: 'Journey',
      skilltree: 'Journey',
      admissions: 'Admissions',
      piscine: 'Piscine',
      partners: 'Partners',
      apply: 'Apply now',
    },
    hero: {
      eyebrow: '01 Talent × NextEra Education Egypt',
      title: 'Launch your tech career in two years.',
      titleHighlight: 'career',
      lede: 'A demanding, project-based software engineering program for people ready to change their trajectory. Powered by 01 Talent across 30 countries. Delivered exclusively in Egypt.',
      startApp: 'Start your application',
      exploreTree: 'Explore the Journey',
      tags: ['Zero teachers', 'Zero classes', '100% code', 'No CV required'],
      profile: {
        label: 'STUDENT PROFILE',
        cohort: 'COHORT 04',
        name: 'Piscine Candidate',
        role: 'Level 01 · Core Program'
      }
    },

    pbl: {
      kicker: 'The Advantage',
      title: 'Why Project-Based Learning?',
      intro: 'Traditional lectures result in a 10% retention rate. Building working software in teams increases retention to 90%, while perfectly simulating the real-world engineering environment.',
      pros: [
        { title: 'Retention & Mastery', desc: 'Learning by doing cements knowledge deeper than any lecture.', value: 90 },
        { title: 'Industry Readiness', desc: 'You build actual apps, deploy servers, and manage databases.', value: 95 },
        { title: 'Soft Skills & Teamwork', desc: 'Conflict resolution and agile collaboration are built-in.', value: 85 },
        { title: 'Portfolio Creation', desc: 'Graduate with 65+ real projects, not just a paper certificate.', value: 100 }
      ]
    },
    pedagogy: {
      kicker: 'The pedagogy',
      title: 'Learn by building. No professors, just pure code.',
      intro: 'Traditional education relies on listening. We rely on building. Our methodology is designed to simulate a real-world tech environment.',
      cards: [
        { title: 'Peer-to-Peer Learning', text: "No professors holding your hand. Learn by collaborating, reviewing your peers' code, and solving complex problems as a team." },
        { title: 'The 2-Year Cohort Program', text: 'Navigate your education like an RPG. Gain XP, level up your profile, and unlock advanced technology branches as you prove your skills.' },
        { title: 'Project-Based Mastery', text: 'No theoretical exams or multiple-choice tests. Progress is measured by the working software, scripts, and architecture you build 65+ applications across 12+ domains.' },
        { title: 'Peer Evaluation', text: 'If there are no teachers, who grades your work? Your peers do. Every line of code must be understood, justified, and defensible.' },
      ]
    },
    pyramid: {
      kicker: 'How you learn',
      title: 'Why Peer-to-Peer works.',
      intro: 'Traditional universities rely on lectures and reading, which yield the lowest knowledge retention rates. We focus entirely on the base of the learning pyramid: practicing by doing and teaching others.',
      tiers: [
        { label: 'Lecture', percent: '5%', type: 'passive' },
        { label: 'Reading', percent: '10%', type: 'passive' },
        { label: 'Audio-Visual', percent: '20%', type: 'passive' },
        { label: 'Demonstration', percent: '30%', type: 'passive' },
        { label: 'Discussion', percent: '50%', type: 'active' },
        { label: 'Practice by Doing', percent: '75%', type: 'nextera' },
        { label: 'Teach Others (Peer-to-Peer)', percent: '90%', type: 'nextera-core' }
      ]
    },
    evaluation: {
      kicker: 'How every project is graded',
      title: 'Build. Defend. Master.',
      quote: '“If you can\'t explain it, you haven\'t mastered it.”',
      steps: [
        { num: '01', title: 'Build', text: 'You write the code and build the architecture to solve the project brief. No tutorials, no hand-holding.' },
        { num: '02', title: 'Defend', text: 'You are randomly assigned to present your project to 3 - 5 peers. Explain and justify every single line of code.' },
        { num: '03', title: 'Pass or fail', text: "If you can't explain it, you haven't mastered it. Passing requires convincing your peers that your architecture is bulletproof." }
      ]
    },
    journey: {
      kicker: 'The 2-year cohort',
      title: 'From system fundamentals to specialised mastery.',
      intro: 'Twenty-four months of deliberate progression. Start by writing Go against a merciless Unix shell, and finish by shipping production-grade systems in the specialization you chose.',
    },
    timeline: [
      { months: 'MONTHS 0–6', title: 'Imperative foundations', desc: 'You start by writing Go against a strict Unix shell, establishing a deep understanding of memory allocation, control flow, and algorithmic complexity.', bullets: ['Go, memory management and manual data structures', 'Unix, the shell, git and a strict code standard', 'Algorithmic problem solving and complexity reasoning'] },
      { months: 'MONTHS 6–12', title: 'Object-oriented & architecture', desc: 'Once you can build anything from nothing, you learn to build things other people can extend. Object-oriented design, higher-level languages and your first real team projects introduce planning, interfaces and the cost of bad structure.', bullets: ['OOP, design patterns and clean interface design', 'Databases, APIs and full-stack team projects', 'Agile collaboration, code review culture and testing'] },
      { months: 'MONTHS 12–18', title: 'Systems & open source', desc: 'The problems stop having tidy edges. You handle concurrency, distributed systems and performance, and you ship contributions into codebases you did not write.', bullets: ['Advanced system design, concurrency and scalability', 'Open-source contribution in unfamiliar codebases', 'DevOps, observability and cross-disciplinary product work'] },
      { months: 'MONTHS 18–24', title: 'Specialisation & capstone', desc: 'You commit to a track and go deep, finishing with a capstone built to production standards and defended in front of peers and industry reviewers.', bullets: ['7+ specialization tracks: Cybersecurity, Mobile & Gaming, AI/Data, Web3 and more', 'Capstone project shipped, documented and defended', 'Employment readiness: portfolio, interviews, industry partners'] },
    ],
    skilltree: {
      kicker: 'Curriculum architecture',
      title: '2-Year Cohort Program from foundation pillars to specialised mastery.',
      intro: 'Every student starts with five mandatory core pillars, building real production systems, before branching into one of eight elite career specializations at the Month-18 gateway.',
      phase1: 'Phase 1: Core Pillars',
      phase2: 'Phase 2: Specialization Tracks',
      gateway: { top: 'MONTH 18', bottom: 'Gateway' },
      outcome: 'OUTCOME',
      stats: [
        { value: '65+', label: 'Production applications built' },
        { value: '12+', label: 'Technical domains covered' },
        { value: '5', label: 'Mandatory core pillars' },
        { value: '8', label: 'Specialization tracks' }
      ]
    },
    treeNodes: [
      { id: 'imperative', label: 'Imperative', tier: 'LVL 1', title: 'Imperative (Go)', desc: 'CLI tools, concurrency, network sockets and file systems.', projects: '7 projects' },
      { id: 'algorithms', label: 'Algorithms', tier: 'LVL 2', title: 'Algorithms & Logic', desc: 'Data structures, graph pathfinding and algorithmic optimization.', projects: '12 projects' },
      { id: 'admin', label: 'AdminSys', tier: 'LVL 3', title: 'AdminSys & Linux', desc: 'Linux server administration, VM clusters and network security.', projects: '9 projects' },
      { id: 'fullstack', label: 'Full-Stack', tier: 'LVL 4', title: 'Web Full-Stack', desc: 'Custom reactive DOM, real-time WebSockets and GraphQL APIs.', projects: '14 projects' },
      { id: 'systems', label: 'Systems', tier: 'LVL 5', title: 'Systems & Rust', desc: 'Memory management, raw socket servers and 3D raytracing.', projects: '11 projects' },
      { id: 'gateway', label: 'CROSSROADS', tier: 'GATEWAY', title: 'Choose your specialization', desc: 'After 18 months of core pillars, pick one of eight advanced tracks for your final six months and capstone.', projects: 'Milestone' },
      { id: 'ai', label: 'AI / ML', tier: 'TRACK', title: 'AI / Machine Learning Engineer', desc: 'Predictive ML pipelines, NLP sentiment analyzers, quantitative models and neural vision networks.', projects: '6 projects' },
      { id: 'java', label: 'Java Full Stack', tier: 'TRACK', title: 'Enterprise Software Engineer', desc: 'Production-grade backends using Spring Boot, Angular, high-volume architectures and automated CI/CD.', projects: '11 projects' },
      { id: 'cyber', label: 'Cybersecurity', tier: 'TRACK', title: 'Security Engineer / Pen Tester', desc: 'Active penetration testing, binary exploitation, malware analysis and network forensics.', projects: '11 projects' },
      { id: 'cloud', label: 'Cloud & DevOps', tier: 'TRACK', title: 'Cloud Infrastructure Engineer', desc: 'Scalable multi-cloud infrastructure, Kubernetes orchestration and zero-downtime pipelines.', projects: '7 projects' },
      { id: 'mobile', label: 'Mobile App', tier: 'TRACK', title: 'Mobile Application Engineer', desc: 'Production-ready cross-platform apps with encrypted messaging and real-time market feeds.', projects: '7 projects' },
      { id: 'games', label: 'Video Games', tier: 'TRACK', title: 'Graphics & Game Developer', desc: 'Custom 2D/3D physics engines, multiplayer networking and advanced graphics pipelines.', projects: '6 projects' },
      { id: 'blockchain', label: 'Blockchain', tier: 'TRACK', title: 'Blockchain / Web3 Developer', desc: 'Decentralized applications, Solidity smart contracts and layer-2 financial protocols.', projects: '5 projects' },
      { id: 'ux', label: 'UX / UI', tier: 'TRACK', title: 'UX / UI Track', desc: 'Advanced UI/UX research, design systems and highly interactive user experiences.', projects: '4 projects' },
    ],
    admissions: {
        kicker: 'Admissions & Piscine',
        title: 'A genuine test not a paperwork exercise.',
        intro: 'The application process filters out the uncommitted while encouraging diverse backgrounds to rise to their potential. It is completely merit-based no CVs, no prior coding experience required.',
        steps: [
          { num: '01', title: 'The Piscine', text: 'A grueling, intensive 4-week immersion where you must rely entirely on peer-to-peer collaboration to survive.' },
          { num: '02', title: 'The Core Cohort', text: 'Pass the Piscine, and you join the cohort. Spend 18 months mastering core software engineering concepts through project-based teamwork.' },
          { num: '03', title: 'Specialization', text: 'Branch off into specialized tracks like AI, Cybersecurity, or Web3 to build industry-ready mastery in your chosen field.' }
        ]
      },
    piscine: {
      kicker: 'Selection phase',
      title: 'The Piscine four weeks of immersion.',
      intro: 'The Piscine ("swimming pool" in French) is our legendary 4-week, immersive selection bootcamp. It strips away traditional learning habits and throws you directly into the deep end of coding 7 days a week, facing seemingly impossible logic puzzles, relying entirely on your peers to survive.',
      
      
      stats: [
        { value: '0%', text: 'Prior knowledge required we test logic, resilience and teamwork, not CS background.' },
        { value: '100%', text: 'Commitment required a grueling, transformative four weeks where you fail, retry, and learn how to learn.' }
      ],
      expect: 'What to expect',
      expectItems: ['Structured progressive quests and rigorous capstone project requirements', 'Collaborative peer evaluations give and receive constructive feedback', 'High-energy team collaboration on complex challenges as an agile unit', 'Full-immersion learning designed to rapidly accelerate your growth and focus', 'Weekend team hackathons sprint projects against real-world deadlines'],
      notExpect: 'What not to do',
      notExpectItems: ["Don't isolate yourself open communication and teamwork are the keys to progress", "Don't just chase points deep conceptual understanding is the ultimate metric", "Don't rely on shortcuts write code you understand and can defend", "Don't get discouraged by setbacks resilience and iteration build great engineers", "Don't overlook balance and well-being sustained energy drives performance"]
    },
    eligibility: {
      kicker: 'Eligibility',
      title: 'Built for logic, driven by resilience.',
      intro: 'NextEra is built for everyone gamers, artists, career switchers, and fresh graduates alike. We do not care about degrees or CVs. We care about how you think and whether you will keep going.',
      items: ['No prior coding experience is required or expected', 'No high school diploma, university degree, or certificates needed', 'No CVs, resumes, or letters of recommendation accepted', 'Must be able to commit full-time during the 4-week Piscine', 'Open to all backgrounds the only thing that matters is how you think']
    },
    partners: {
      kicker: 'Exclusive Recruiting Partners',
      title: 'Your direct path to top tech employers.',
      intro: 'Our network of recruiting partners works directly with the academy to ensure eligible students secure a tech job within their first 6 months of entering the program.'
    },

    dayInLife: {
      kicker: 'Immersion',
      title: 'A Day in the Life',
      intro: 'There are no typical days, but here is what 24 hours at NextEra Academy might look like during a sprint.',
      events: [
        { time: '09:00 AM', title: 'Campus Check-in', desc: 'Arrive at the hub, sync with your peer group, and review yesterday’s code.' },
        { time: '11:30 AM', title: 'Deep Work', desc: 'Headphones on. Tackling complex C programming algorithms for the current quest.' },
        { time: '03:00 PM', title: 'Peer Defense', desc: 'Explain your code line-by-line to a peer. If you can’t defend it, you fail the quest.' },
        { time: '07:00 PM', title: 'Hackathon Kickoff', desc: 'Weekend rush starts. 48 hours to build a working web server from scratch in C++.' },
        { time: '11:00 PM', title: 'Late Night Debugging', desc: 'Pizza, energy drinks, and hunting down a segmentation fault with your team.' }
      ]
    },
    minigame: {
      kicker: 'Test your logic',
      title: 'Ready for The Game?',
      intro: 'Step 01 of the admissions process is a rigorous cognitive assessment. Try this quick 3x3 memory grid to see if your focus is sharp enough.',
      start: 'Start Sequence',
      memorize: 'Memorize the pattern...',
      yourTurn: 'Your turn! Click the highlighted squares.',
      win: 'Logic Verified. You are ready to apply.',
      lose: 'Memory Fault. Try again.',
      stats: {
        difficulty: 'Difficulty',
        difficultyVal: 'Extreme',
        successRate: 'Global Success Rate',
        successRateVal: '14.2%',
        avgReaction: 'Avg. Reaction Time',
        avgReactionVal: '1.2s'
      }
    },
    application: {
      kicker: 'Start your application',
      title: 'Ready to enter the pool?',
      desc: 'Fill this in and our admissions team will follow up with your Step 1 cognitive assessment and financing options, including BM YOUTH installment plans.',
      trust: ['Merit-based admission. No CV required.', 'Client-side application flow your details stay in this session.', 'Full-time, project-based learning in Egypt.'],
      successTitle: 'You are in the pool.',
      successDesc: 'We have your interest. In the live admissions flow, the team will reach out with your Step 1 cognitive assessment details.',
      submitAnother: 'Submit another application',
      form: {
        name: 'Full name',
          age: 'Age',
          agePlace: 'e.g. 21',
        namePlace: 'Your name',
        email: 'Email address',
        emailPlace: 'you@example.com',
        phone: 'Phone number',
        phonePlace: '01000000000',
        city: 'City',
        cityPlace: 'Cairo',
        statusLabel: 'What best describes you now?',
        statusDefault: 'Select an option',
        statusOptions: ['University Student', 'Graduate (Not Working)', 'Working (Non-Tech) & Looking for Career Shift', 'Working in Tech'],
        tracksLabel: 'Tracks you are curious about',
        optional: '(optional)',
        tracks: ['AI & Machine Learning', 'Java Full Stack', 'Cybersecurity', 'Cloud DevOps', 'Mobile Applications', 'Video Games', 'Blockchain & Crypto', 'UX / UI'],
        noExp: 'No prior coding experience required.',
        submit: 'Apply now',
        sending: 'Sending your application…'
      }
    },
    footer: {
      desc: 'Interactive technology education that enables learners to solve problems, innovate, and prepare for tomorrow\'s opportunities.',
      address: 'Mobica Building, 3rd Floor, 3 El-Montaza, El-Nozha, Cairo, Egypt.',
      explore: 'EXPLORE',
      follow: 'FOLLOW THE SIGNAL',
      copyright: '© 2025 NextEra Education. A 01 Talent partner in Egypt.',
      slogan: 'Built for people who keep going.'
    }
  },
  ar: {
    nav: {
      pedagogy: 'المنهجية',
      journey: 'الرحلة',
      skilltree: 'الرحلة',
      admissions: 'القبول',
      piscine: 'المعسكر (Piscine)',
      partners: 'الشركاء',
      apply: 'قدم الآن',
    },
    hero: {
      eyebrow: '01 تالنت × نكست إيرا للتعليم مصر',
      title: 'انطلق في مسيرتك المهنية في مجال التقنية خلال عامين.',
      titleHighlight: 'المهنية',
      lede: 'برنامج هندسة برمجيات صارم يعتمد على المشاريع للأشخاص المستعدين لتغيير مسار حياتهم. مدعوم من 01 تالنت في أكثر من 30 دولة. يُقدم حصريًا في مصر.',
      startApp: 'ابدأ طلب التقديم',
      exploreTree: 'استكشف الرحلة',
      tags: ['بدون معلمين', 'بدون فصول دراسية', 'برمجة 100%', 'لا يشترط سيرة ذاتية'],
      profile: {
        label: 'ملف الطالب',
        cohort: 'الدفعة 04',
        name: 'مرشح المعسكر',
        role: 'المستوى 01 · البرنامج الأساسي'
      }
    },

    pbl: {
      kicker: 'الميزة',
      title: 'لماذا التعلم القائم على المشاريع؟',
      intro: 'تؤدي المحاضرات التقليدية إلى معدل احتفاظ بالمعلومات يبلغ 10٪ فقط. بينما بناء برمجيات حقيقية في فرق يرفع هذه النسبة إلى 90٪، ويحاكي بيئة الهندسة الواقعية بشكل مثالي.',
      pros: [
        { title: 'الاحتفاظ والإتقان', desc: 'التعلم بالممارسة يرسخ المعرفة أعمق من أي محاضرة.', value: 90 },
        { title: 'الجاهزية لسوق العمل', desc: 'ستقوم ببناء تطبيقات حقيقية، ونشر خوادم، وإدارة قواعد بيانات.', value: 95 },
        { title: 'المهارات الشخصية والعمل الجماعي', desc: 'حل النزاعات والتعاون المرن مدمجان في النظام.', value: 85 },
        { title: 'بناء معرض أعمال', desc: 'تتخرج مع أكثر من 65 مشروعاً حقيقياً، وليس مجرد شهادة ورقية.', value: 100 }
      ]
    },
    pedagogy: {
      kicker: 'المنهجية',
      title: 'تعلم من خلال البناء. لا أساتذة، فقط برمجة بحتة.',
      intro: 'يعتمد التعليم التقليدي على الاستماع، بينما نعتمد نحن على البناء. تم تصميم منهجيتنا لمحاكاة بيئة العمل التقنية في العالم الحقيقي.',
      cards: [
        { title: 'التعلم من الأقران (Peer-to-Peer)', text: 'لا يوجد أساتذة ليمسكوا بيدك. تعلم من خلال التعاون، ومراجعة أكواد زملائك، وحل المشكلات المعقدة كفريق.' },
        { title: 'برنامج العامين', text: 'تصفح تعليمك وكأنه لعبة تقمص أدوار (RPG). اكتسب خبرة، ورفع مستوى ملفك الشخصي، وافتح فروع تكنولوجية متقدمة كلما أثبتت مهاراتك.' },
        { title: 'الاحتراف المعتمد على المشاريع', text: 'لا امتحانات نظرية أو اختبارات اختيار من متعدد. يُقاس تقدمك بالبرمجيات والأنظمة التي تبنيها أكثر من 65 تطبيقًا عبر 12+ مجالًا.' },
        { title: 'تقييم الأقران', text: 'إذا لم يكن هناك معلمين، فمن يقيم عملك؟ زملائك هم من يفعلون ذلك. يجب فهم كل سطر من الكود، وتبريره، والدفاع عنه.' },
      ]
    },
    pyramid: {
      kicker: 'علم التعلم',
      title: 'لماذا ينجح التعلم من الأقران.',
      intro: 'تعتمد الجامعات التقليدية على المحاضرات والقراءة، والتي تحقق أدنى معدلات الاحتفاظ بالمعرفة. نحن نركز بالكامل على قاعدة هرم التعلم: الممارسة العملية وتعليم الآخرين.',
      tiers: [
        { label: 'المحاضرة', percent: '5%', type: 'passive' },
        { label: 'القراءة', percent: '10%', type: 'passive' },
        { label: 'السمعي والبصري', percent: '20%', type: 'passive' },
        { label: 'العرض التوضيحي', percent: '30%', type: 'passive' },
        { label: 'المناقشة', percent: '50%', type: 'active' },
        { label: 'الممارسة العملية', percent: '75%', type: 'nextera' },
        { label: 'تعليم الآخرين (التعلم من الأقران)', percent: '90%', type: 'nextera-core' }
      ]
    },
    evaluation: {
      kicker: 'كيف يتم تقييم كل مشروع',
      title: 'ابنِ. دافع. احترف.',
      quote: '”إذا لم تستطع شرحه، فأنت لم تتقنه بعد.“',
      steps: [
        { num: '01', title: 'ابنِ', text: 'أنت تكتب الكود وتبني المعمارية لحل متطلبات المشروع. لا توجد دروس تعليمية، ولا مساعدة مباشرة.' },
        { num: '02', title: 'دافع', text: 'يتم تعيينك عشوائيًا لتقديم مشروعك لـ 3 - 5 من زملائك. اشرح وبرر كل سطر من الكود.' },
        { num: '03', title: 'النجاح أو الرسوب', text: 'إذا لم تستطع شرحه، فأنت لم تحترفه. اجتياز التقييم يتطلب إقناع زملائك بأن معمارية الكود الخاص بك متينة.' }
      ]
    },
    journey: {
      kicker: 'برنامج العامين',
      title: 'من أساسيات الأنظمة إلى الاحتراف المتخصص.',
      intro: 'أربعة وعشرون شهرًا من التقدم المدروس. تبدأ بكتابة كود Go في بيئة Unix صارمة، وتنتهي بإطلاق أنظمة على مستوى الإنتاج في التخصص الذي تختاره.',
    },
    timeline: [
      { months: 'الأشهر 0–6', title: 'الأساسيات الحتمية', desc: 'تبدأ بكتابة Go مقابل بيئة Unix صارمة، وتؤسس فهمًا عميقًا لتخصيص الذاكرة، والتحكم في التدفق، والتعقيد الخوارزمي.', bullets: ['Go، إدارة الذاكرة وهياكل البيانات اليدوية', 'Unix، موجه الأوامر (Shell)، git ومعايير كتابة الأكواد الصارمة', 'حل المشكلات الخوارزمية والتفكير المنطقي المعقد'] },
      { months: 'الأشهر 6–12', title: 'التوجه الكائني والمعمارية', desc: 'بمجرد أن تتمكن من بناء أي شيء من الصفر، تتعلم بناء أشياء يمكن للآخرين توسيعها. التصميم الكائني، واللغات عالية المستوى، ومشاريع الفريق الحقيقية الأولى.', bullets: ['OOP، أنماط التصميم وتصميم الواجهات النظيفة', 'قواعد البيانات، واجهات برمجة التطبيقات (APIs) ومشاريع الفريق (Full-Stack)', 'التعاون السريع (Agile)، ثقافة مراجعة الكود والاختبار'] },
      { months: 'الأشهر 12–18', title: 'الأنظمة ومفتوح المصدر', desc: 'تتوقف المشاكل عن أن تكون بسيطة. تتعامل مع التزامن، والأنظمة الموزعة، والأداء، وتقوم بشحن مساهمات في أكواد لم تكتبها.', bullets: ['تصميم الأنظمة المتقدمة، التزامن وقابلية التوسع', 'المساهمة في المصادر المفتوحة في أكواد غير مألوفة', 'DevOps، المراقبة والعمل على منتجات متعددة التخصصات'] },
      { months: 'الأشهر 18–24', title: 'التخصص ومشروع التخرج', desc: 'تلتزم بمسار وتتعمق فيه، وتنتهي بمشروع تخرج مبني وفقًا لمعايير الإنتاج وتدافع عنه أمام أقرانك والمراجعين في الصناعة.', bullets: ['7+ مسارات تخصص: الأمن السيبراني، الموبايل والألعاب، الذكاء الاصطناعي، Web3 والمزيد', 'مشروع التخرج مُنشر، ومُوثق، وتم الدفاع عنه', 'الجاهزية للتوظيف: معرض الأعمال، المقابلات، شركاء الصناعة'] },
    ],
    skilltree: {
      kicker: 'معمارية المنهج الدراسي',
      title: 'برنامج العامين من الركائز الأساسية إلى الاحتراف المتخصص.',
      intro: 'يبدأ كل طالب بخمس ركائز أساسية إلزامية، وبناء أنظمة إنتاج حقيقية، قبل التفرع إلى واحد من ثمانية تخصصات مهنية متقدمة في مفترق طرق الشهر 18.',
      phase1: 'المرحلة 1: الركائز الأساسية',
      phase2: 'المرحلة 2: مسارات التخصص',
      gateway: { top: 'الشهر 18', bottom: 'العبور' },
      outcome: 'المُخرجات',
      stats: [
        { value: '+65', label: 'تطبيق إنتاجي تم بناؤه' },
        { value: '+12', label: 'مجال تقني تمت تغطيته' },
        { value: '5', label: 'ركائز أساسية إلزامية' },
        { value: '8', label: 'مسارات تخصصية' }
      ]
    },
    treeNodes: [
      { id: 'imperative', label: 'البرمجة الحتمية', tier: 'مستوى 1', title: 'البرمجة الحتمية (Go)', desc: 'أدوات سطر الأوامر (CLI)، التزامن، ومقابس الشبكة، وأنظمة الملفات.', projects: '7 مشاريع' },
      { id: 'algorithms', label: 'الخوارزميات', tier: 'مستوى 2', title: 'الخوارزميات والمنطق', desc: 'هياكل البيانات، والبحث في المسارات الرسومية، والتحسين الخوارزمي.', projects: '12 مشروع' },
      { id: 'admin', label: 'إدارة الأنظمة', tier: 'مستوى 3', title: 'إدارة الأنظمة و لينكس', desc: 'إدارة خوادم لينكس، ومجموعات الأجهزة الوهمية، وأمن الشبكات.', projects: '9 مشاريع' },
      { id: 'fullstack', label: 'الويب الشامل', tier: 'مستوى 4', title: 'تطوير الويب الشامل', desc: 'واجهة مستخدم تفاعلية (DOM)، WebSockets في الوقت الفعلي، وواجهات GraphQL.', projects: '14 مشروع' },
      { id: 'systems', label: 'الأنظمة', tier: 'مستوى 5', title: 'الأنظمة و Rust', desc: 'إدارة الذاكرة، وخوادم الشبكة الخام، والتتبع الشعاعي ثلاثي الأبعاد.', projects: '11 مشروع' },
      { id: 'gateway', label: 'نقطة التقاطع', tier: 'العبور', title: 'اختر تخصصك', desc: 'بعد 18 شهرًا من الركائز الأساسية، اختر أحد المسارات الثمانية المتقدمة لآخر ستة أشهر ومشروع التخرج.', projects: 'علامة فارقة' },
      { id: 'ai', label: 'الذكاء الاصطناعي', tier: 'مسار', title: 'مهندس الذكاء الاصطناعي/تعلم الآلة', desc: 'خطوط أنابيب تعلم الآلة التنبؤية، ومحللات المشاعر NLP، والنماذج الكمية، وشبكات الرؤية العصبية.', projects: '6 مشاريع' },
      { id: 'java', label: 'جافا الشامل', tier: 'مسار', title: 'مهندس برمجيات المؤسسات', desc: 'واجهات خلفية بمستوى الإنتاج باستخدام Spring Boot، Angular، ومعماريات عالية الكثافة.', projects: '11 مشروع' },
      { id: 'cyber', label: 'الأمن السيبراني', tier: 'مسار', title: 'مهندس أمن / مختبر اختراق', desc: 'اختبار الاختراق النشط، واستغلال الثغرات، وتحليل البرمجيات الخبيثة، والتحاليل الجنائية للشبكات.', projects: '11 مشروع' },
      { id: 'cloud', label: 'السحابة و DevOps', tier: 'مسار', title: 'مهندس البنية التحتية السحابية', desc: 'بنية تحتية سحابية قابلة للتطوير، وتنسيق Kubernetes، وخطوط أنابيب بدون توقف.', projects: '7 مشاريع' },
      { id: 'mobile', label: 'تطبيقات الجوال', tier: 'مسار', title: 'مهندس تطبيقات الموبايل', desc: 'تطبيقات متعددة المنصات جاهزة للإنتاج مع مراسلات مشفرة وخلاصات أسواق في الوقت الفعلي.', projects: '7 مشاريع' },
      { id: 'games', label: 'ألعاب الفيديو', tier: 'مسار', title: 'مطور رسومات وألعاب', desc: 'محركات فيزياء ثنائية/ثلاثية الأبعاد مخصصة، وشبكات متعددة اللاعبين، وخطوط أنابيب رسومية.', projects: '6 مشاريع' },
      { id: 'blockchain', label: 'البلوكتشين', tier: 'مسار', title: 'مطور البلوكتشين / Web3', desc: 'تطبيقات لامركزية، وعقود Solidity الذكية، وبروتوكولات التمويل من الطبقة الثانية.', projects: '5 مشاريع' },
      { id: 'ux', label: 'تجربة المستخدم', tier: 'مسار', title: 'مسار تجربة/واجهة المستخدم', desc: 'أبحاث متقدمة في تجربة المستخدم، وأنظمة التصميم، وتجارب مستخدم تفاعلية للغاية.', projects: '4 مشاريع' },
    ],
    admissions: {
        kicker: 'القبول والمعسكر',
        title: 'اختبار حقيقي وليس مجرد إجراءات ورقية.',
        intro: 'عملية القبول تستبعد غير الملتزمين بينما تشجع الخلفيات المتنوعة على الارتقاء إلى إمكاناتهم. تعتمد بالكامل على الجدارة لا حاجة للسير الذاتية أو خبرة سابقة في البرمجة.',
        steps: [
          { num: '01', title: 'معسكر Piscine', text: 'انغماس مكثف لمدة 4 أسابيع حيث يجب عليك الاعتماد كليًا على التعلم من الأقران للنجاة.' },
          { num: '02', title: 'الدفعة الأساسية', text: 'اجتز المعسكر، وانضم إلى الدفعة. اقضِ 18 شهرًا في إتقان مفاهيم هندسة البرمجيات من خلال العمل الجماعي.' },
          { num: '03', title: 'التخصص', text: 'تفرع إلى مسارات متخصصة مثل الذكاء الاصطناعي، الأمن السيبراني، أو Web3 لبناء خبرة جاهزة للصناعة.' }
        ]
      },
    piscine: {
      kicker: 'مرحلة الاختيار',
      title: 'المعسكر (Piscine) أربعة أسابيع من الانغماس التام.',
      intro: 'المعسكر ("Piscine" بالفرنسية بمعنى المسبح) هو معسكر الاختيار الأسطوري لدينا لمدة 4 أسابيع. يُجردك من عادات التعلم التقليدية ويلقيك مباشرة في عمق البرمجة 7 أيام في الأسبوع، تواجه ألغازاً منطقية تبدو مستحيلة، معتمداً كلياً على زملائك للنجاة.',
      
      
      stats: [
        { value: '0%', text: 'خبرة سابقة مطلوبة نحن نختبر المنطق والمرونة والعمل الجماعي، وليس الخلفية البرمجية.' },
        { value: '100%', text: 'التزام مطلوب أربعة أسابيع شاقة ومغيرة للحياة حيث تفشل، تحاول مجددًا، وتتعلم كيف تتعلم.' }
      ],
      expect: 'ماذا تتوقع',
      expectItems: ['مهام تدريجية منظمة ومتطلبات صارمة لمشاريع التخرج', 'تقييمات تعاونية من الأقران تقديم وتلقي ملاحظات بناءة', 'تعاون جماعي عالي الطاقة في تحديات معقدة كوحدة مرنة', 'تعلم منغمس تماماً مصمم لتسريع نموك وتركيزك بسرعة', 'هاكاثونات فرق في عطلات نهاية الأسبوع مشاريع سريعة بمواعيد نهائية حقيقية'],
      notExpect: 'ما لا يجب فعله',
      notExpectItems: ['لا تعزل نفسك التواصل المفتوح والعمل الجماعي هما مفاتيح التقدم', 'لا تلاحق النقاط فقط الفهم المفاهيمي العميق هو المقياس النهائي', 'لا تعتمد على الطرق المختصرة اكتب كودًا تفهمه وتستطيع الدفاع عنه', 'لا تحبط من الانتكاسات المرونة والتكرار يبنيان مهندسين عظماء', 'لا تتجاهل التوازن والصحة الطاقة المستدامة تدفع الأداء']
    },
    eligibility: {
      kicker: 'الأهلية',
      title: 'مبني للمنطق، مدفوع بالمرونة.',
      intro: 'تم بناء نكست إيرا للجميع لاعبين، فنانين، محولين مسارهم المهني، وخريجين جدد على حد سواء. نحن لا نهتم بالدرجات العلمية أو السير الذاتية. نحن نهتم بكيفية تفكيرك وما إذا كنت ستستمر في المحاولة.',
      items: ['لا يُشترط أو يُتوقع أي خبرة سابقة في البرمجة', 'لا حاجة لشهادة ثانوية، أو درجة جامعية، أو شهادات', 'لا نقبل السير الذاتية أو خطابات التوصية', 'يجب أن تكون قادرًا على الالتزام بدوام كامل خلال الـ 4 أسابيع الخاصة بالمعسكر', 'متاح لجميع الخلفيات الشيء الوحيد الذي يهم هو كيف تفكر']
    },
    partners: {
      kicker: 'شركاء التوظيف الحصريون',
      title: 'طريقك المباشر لأفضل أصحاب العمل التقنيين.',
      intro: 'تعمل شبكتنا من شركاء التوظيف مباشرة مع الأكاديمية لضمان حصول الطلاب المؤهلين على وظيفة تقنية خلال أول 6 أشهر من دخولهم البرنامج.'
    },

    dayInLife: {
      kicker: 'الانغماس التام',
      title: 'يوم في حياة طالب',
      intro: 'لا توجد أيام تقليدية هنا، ولكن إليك كيف تبدو 24 ساعة في أكاديمية نكست إيرا أثناء فترات الضغط.',
      events: [
        { time: '09:00 ص', title: 'تسجيل الدخول', desc: 'الوصول إلى الحرم، والمزامنة مع مجموعة الأقران، ومراجعة كود الأمس.' },
        { time: '11:30 ص', title: 'عمل عميق', desc: 'سماعات الرأس على أذنيك. مواجهة خوارزميات برمجية معقدة للمهمة الحالية.' },
        { time: '03:00 م', title: 'الدفاع عن الكود', desc: 'اشرح الكود الخاص بك سطراً بسطر لزميلك. إذا لم تستطع الدفاع عنه، تفشل في المهمة.' },
        { time: '07:00 م', title: 'انطلاق الهاكاثون', desc: 'يبدأ سباق نهاية الأسبوع. 48 ساعة لبناء خادم ويب من الصفر.' },
        { time: '11:00 م', title: 'تصحيح الأخطاء ليلاً', desc: 'بيتزا، ومشروبات طاقة، والبحث عن خطأ برمجي مع فريقك.' }
      ]
    },
    minigame: {
      kicker: 'اختبر منطقك',
      title: 'هل أنت مستعد للعبة؟',
      intro: 'الخطوة الأولى من عملية القبول هي تقييم إدراكي صارم. جرب شبكة الذاكرة السريعة هذه لترى إن كان تركيزك حاداً بما يكفي.',
      start: 'بدأ التسلسل',
      memorize: 'احفظ النمط...',
      yourTurn: 'دورك! انقر على المربعات المضيئة.',
      win: 'تم التحقق من المنطق. أنت مستعد للتقديم.',
      lose: 'خطأ في الذاكرة. حاول مرة أخرى.',
      stats: {
        difficulty: 'مستوى الصعوبة',
        difficultyVal: 'شديد',
        successRate: 'معدل النجاح العالمي',
        successRateVal: '14.2%',
        avgReaction: 'متوسط وقت الاستجابة',
        avgReactionVal: '1.2s'
      }
    },
    application: {
      kicker: 'ابدأ طلب التقديم',
      title: 'جاهز لدخول المعسكر؟',
      desc: 'املأ هذه البيانات وسيقوم فريق القبول بالتواصل معك لترتيب التقييم الإدراكي (الخطوة 1) وخيارات التمويل، بما في ذلك خطط تقسيط BM YOUTH.',
      trust: ['القبول مبني على الجدارة. لا حاجة للسيرة الذاتية.', 'تظل بياناتك آمنة في هذه الجلسة على متصفحك.', 'تعلم بدوام كامل، يعتمد على المشاريع في مصر.'],
      successTitle: 'أنت الآن في المرحلة الأولى.',
      successDesc: 'لقد استلمنا طلبك. سيتواصل معك الفريق قريباً بخصوص تفاصيل التقييم الإدراكي (الخطوة 1).',
      submitAnother: 'تقديم طلب آخر',
      form: {
        name: 'الاسم الكامل',
        namePlace: 'الاسم الخاص بك',
          age: 'العمر',
          agePlace: 'مثال: 21',
        email: 'البريد الإلكتروني',
        emailPlace: 'you@example.com',
        phone: 'رقم الهاتف',
        phonePlace: '01000000000',
        city: 'المدينة',
        cityPlace: 'القاهرة',
        statusLabel: 'ما هو وضعك الحالي؟',
        statusDefault: 'اختر إجابة',
        statusOptions: ['طالب جامعي', 'خريج (لا يعمل)', 'أعمل (في مجال غير تقني) وأبحث عن تغيير مساري المهني', 'أعمل في مجال التقنية'],
        tracksLabel: 'مسارات تثير فضولك',
        optional: '(اختياري)',
        tracks: ['الذكاء الاصطناعي وتعلم الآلة', 'تطوير جافا الشامل', 'الأمن السيبراني', 'السحابة و DevOps', 'تطبيقات الجوال', 'ألعاب الفيديو', 'البلوكتشين والعملات المشفرة', 'تجربة/واجهة المستخدم (UX / UI)'],
        noExp: 'لا يُشترط أي خبرة سابقة في البرمجة.',
        submit: 'قدم الآن',
        sending: 'جاري إرسال طلبك…'
      }
    },
    footer: {
      desc: 'تعليم تكنولوجي تفاعلي يمكن المتعلمين من حل المشكلات، والابتكار، والاستعداد لفرص الغد.',
      address: 'مبنى موبيكا، الدور الثالث، 3 المنتزه، النزهة، القاهرة، مصر.',
      explore: 'اكتشف',
      follow: 'تابعنا',
      copyright: '© 2025 نكست إيرا للتعليم. شريك 01 تالنت في مصر.',
      slogan: 'صُنع للأشخاص الذين لا يستسلمون.'
    }
  }
};
