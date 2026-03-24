/* ============================================================
   AI Sage — Data Layer
   All personas, questions, action plans, landscape data
   ============================================================ */

const APP = {
  name: 'AI Sage',
  tagline: 'Your trusted companion for the AI era',
  version: '1.0',
  author: 'Sivakanth Badigenchala',
  authorUrl: 'https://sivakanth.vercel.app/'
};

/* ------ PERSONAS ------ */
const PERSONAS = [
  {
    id: 'student',
    icon: '🎓',
    label: 'Student',
    subtitle: 'Starting your journey in tech',
    description: 'You\'re pursuing or about to begin a CS/tech degree and wondering how AI changes the game for your career.',
    color: '#6366f1'
  },
  {
    id: 'developer',
    icon: '💻',
    label: 'Developer',
    subtitle: 'Building software every day',
    description: 'You write code professionally and want to understand how AI reshapes your craft, tools, and career trajectory.',
    color: '#0ea5e9'
  },
  {
    id: 'architect',
    icon: '🏗️',
    label: 'Architect',
    subtitle: 'Designing systems & platforms',
    description: 'You design technical architectures and are evaluating how AI-native patterns change the way systems are built.',
    color: '#8b5cf6'
  },
  {
    id: 'qa',
    icon: '🔍',
    label: 'QA / Tester',
    subtitle: 'Guarding quality & reliability',
    description: 'You ensure software quality and are navigating how AI transforms testing, automation, and quality strategy.',
    color: '#10b981'
  },
  {
    id: 'agile-leader',
    icon: '🎯',
    label: 'Agile Leader',
    subtitle: 'Scrum Master / RTE / Coach',
    description: 'You facilitate delivery and coach teams — and now the very frameworks you champion are being disrupted by AI.',
    color: '#f59e0b'
  },
  {
    id: 'leader',
    icon: '👔',
    label: 'IT Leader / Executive',
    subtitle: 'Driving strategy & decisions',
    description: 'You lead teams, programs, or organizations and need to make strategic calls about AI adoption and transformation.',
    color: '#ef4444'
  },
  {
    id: 'non-it',
    icon: '🌐',
    label: 'Non-IT Professional',
    subtitle: 'AI is coming to your world too',
    description: 'You work outside IT — marketing, legal, HR, healthcare, education — but AI is reshaping your domain rapidly.',
    color: '#ec4899'
  },
  {
    id: 'freelancer',
    icon: '🚀',
    label: 'Freelancer / Indie Builder',
    subtitle: 'Building on your own terms',
    description: 'You work independently — consulting, freelancing, or building side projects — and AI is your biggest leverage point.',
    color: '#14b8a6'
  }
];

/* ------ DIMENSIONS (Radar) ------ */
const DIMENSIONS = [
  { id: 'awareness',  label: 'Awareness',  desc: 'Do you know what\'s changing?' },
  { id: 'adoption',   label: 'Adoption',   desc: 'Are you using AI tools?' },
  { id: 'adaptation', label: 'Adaptation', desc: 'Have you changed how you work?' },
  { id: 'advantage',  label: 'Advantage',  desc: 'Are you ahead of your peers?' },
  { id: 'anxiety',    label: 'Confidence',  desc: 'How confident do you feel?' }
];

/* ------ QUESTIONS PER PERSONA ------ */
const QUESTIONS = {
  student: [
    { q: 'How familiar are you with what AI tools like ChatGPT, Copilot, or Cursor can do?', dim: 'awareness',
      opts: ['Never heard of them', 'Heard about them but haven\'t tried', 'Tried a few times', 'Use them regularly'] },
    { q: 'Have you used an AI coding assistant to write or debug code?', dim: 'adoption',
      opts: ['No', 'Once or twice in curiosity', 'Sometimes for assignments', 'It\'s part of my workflow'] },
    { q: 'How has AI changed the way you approach learning or coursework?', dim: 'adaptation',
      opts: ['It hasn\'t', 'I use it occasionally for explanations', 'I actively learn with AI as a tutor', 'I\'ve restructured my entire learning approach around AI'] },
    { q: 'Compared to your classmates, how would you rate your AI readiness?', dim: 'advantage',
      opts: ['Behind most', 'About the same', 'Slightly ahead', 'Significantly ahead'] },
    { q: 'How confident are you that your degree will prepare you for an AI-driven job market?', dim: 'anxiety',
      opts: ['Very worried', 'Somewhat uncertain', 'Cautiously optimistic', 'Very confident — I\'m adapting'] },
    { q: 'Have you built any project using AI tools end-to-end (prompt → code → deploy)?', dim: 'adoption',
      opts: ['No', 'Tried but didn\'t finish', 'Yes, one small project', 'Yes, multiple projects'] },
    { q: 'Do you understand what "prompt engineering" means and why it matters?', dim: 'awareness',
      opts: ['No idea', 'Vague understanding', 'Good understanding', 'I practice it actively'] },
    { q: 'Have you explored how AI is changing fields beyond coding (design, testing, project management)?', dim: 'adaptation',
      opts: ['No', 'A little', 'Yes, I read about it', 'Yes, I\'ve explored tools across domains'] }
  ],

  developer: [
    { q: 'What percentage of your code is now AI-assisted (Copilot, Cursor, ChatGPT)?', dim: 'adoption',
      opts: ['0% — I don\'t use AI for coding', '10–25%', '25–50%', '50%+ of my code involves AI'] },
    { q: 'How has your daily workflow changed because of AI tools in the last 12 months?', dim: 'adaptation',
      opts: ['Not at all', 'Minor tweaks', 'Significant changes', 'Completely transformed'] },
    { q: 'Are you aware of AI-native architecture patterns (agent mesh, MCP, tool-use protocols)?', dim: 'awareness',
      opts: ['Never heard of them', 'Heard the terms', 'Read about them', 'Working with them'] },
    { q: 'How do you feel about AI\'s impact on the demand for traditional coding skills?', dim: 'anxiety',
      opts: ['Very threatened', 'Concerned but adapting', 'See it as an opportunity', 'Already leveraging it as an advantage'] },
    { q: 'Have you mentored or helped others adopt AI tools in their development workflow?', dim: 'advantage',
      opts: ['No', 'Informally, a little', 'Yes, actively', 'I\'m the go-to person on my team'] },
    { q: 'Do you use AI for tasks beyond coding — documentation, testing, design, debugging?', dim: 'adoption',
      opts: ['No, only coding', 'One or two other tasks', 'Several tasks', 'AI touches most of my work'] },
    { q: 'How well do you understand the limitations and risks of AI-generated code?', dim: 'awareness',
      opts: ['Not well', 'Somewhat', 'Well — I review everything', 'Expert-level — I have a review framework'] },
    { q: 'Are you building personal projects or side experiments using AI agents?', dim: 'advantage',
      opts: ['No', 'Thinking about it', 'One or two experiments', 'Regular AI-first side projects'] }
  ],

  architect: [
    { q: 'Are your current architecture decisions accounting for AI-native patterns?', dim: 'adaptation',
      opts: ['No, we use traditional patterns', 'Starting to consider AI', 'Actively integrating AI patterns', 'AI-first is our default approach'] },
    { q: 'How familiar are you with emerging patterns like agent orchestration, MCP, and tool-use protocols?', dim: 'awareness',
      opts: ['Not familiar', 'Heard about them', 'Studying them', 'Implementing them'] },
    { q: 'Has AI changed how you evaluate build-vs-buy or technology selection decisions?', dim: 'adaptation',
      opts: ['No', 'Slightly', 'Yes, significantly', 'AI is a primary factor in every decision'] },
    { q: 'Are you using AI to assist with architecture documentation, threat modeling, or design reviews?', dim: 'adoption',
      opts: ['No', 'Experimenting', 'Regularly', 'It\'s embedded in my process'] },
    { q: 'How confident are you in designing systems that are AI-augmented and AI-resilient?', dim: 'anxiety',
      opts: ['Not confident', 'Somewhat', 'Fairly confident', 'Very confident'] },
    { q: 'Are you guiding your teams on AI-safe coding practices and responsible AI integration?', dim: 'advantage',
      opts: ['No', 'Starting to', 'Yes, actively', 'I\'ve established guidelines and governance'] },
    { q: 'How well do you understand the infrastructure implications of AI (GPU, vector DBs, model serving)?', dim: 'awareness',
      opts: ['Minimal understanding', 'Basic awareness', 'Good working knowledge', 'Deep expertise'] },
    { q: 'Do you see the architect role evolving, and are you preparing for that evolution?', dim: 'adaptation',
      opts: ['The role won\'t change much', 'It will change but I\'m not sure how', 'I see the changes and I\'m adapting', 'I\'m actively redefining what architecture means in the AI era'] }
  ],

  qa: [
    { q: 'Are you using AI tools (Copilot, ChatGPT, Testim) in your testing workflow?', dim: 'adoption',
      opts: ['Not at all', 'Experimenting lightly', 'Regularly for some tasks', 'AI is core to my testing'] },
    { q: 'How has AI changed your approach to test strategy and test design?', dim: 'adaptation',
      opts: ['It hasn\'t', 'Minor adjustments', 'Significant rethinking', 'Completely new approach'] },
    { q: 'Are you aware of AI-powered testing tools (self-healing tests, visual AI, AI test generation)?', dim: 'awareness',
      opts: ['No', 'Heard of them', 'Tried some', 'Using them actively'] },
    { q: 'How do you feel about the future demand for traditional manual testing skills?', dim: 'anxiety',
      opts: ['Very worried', 'Concerned', 'Evolving my skills', 'Confident — I\'m becoming an AI Quality Strategist'] },
    { q: 'Are you using AI to generate test cases, test data, or analyze test results?', dim: 'adoption',
      opts: ['No', 'Occasionally', 'Regularly', 'It\'s my primary method'] },
    { q: 'Do you understand how to test AI-generated code differently from human-written code?', dim: 'awareness',
      opts: ['No', 'Somewhat', 'Yes, I have strategies', 'I\'ve defined a framework for it'] },
    { q: 'Have you explored new roles like AI Quality Strategist, Prompt Tester, or AI Risk Analyst?', dim: 'advantage',
      opts: ['No', 'Read about them', 'Actively exploring', 'Already transitioning'] },
    { q: 'Are you helping your team understand the quality implications of AI-assisted development?', dim: 'advantage',
      opts: ['No', 'Sometimes', 'Yes, actively', 'I lead this conversation in my org'] }
  ],

  'agile-leader': [
    { q: 'How has AI impacted the Agile ceremonies and practices you facilitate?', dim: 'adaptation',
      opts: ['No impact', 'Minor efficiencies', 'Significant changes to how we run ceremonies', 'Fundamentally rethinking what Agile means'] },
    { q: 'Are you using AI tools to support retrospectives, planning, or sprint analytics?', dim: 'adoption',
      opts: ['No', 'Experimenting', 'Regularly', 'AI-assisted by default'] },
    { q: 'Do you see traditional Scrum/SAFe evolving or being replaced by AI-first delivery models?', dim: 'awareness',
      opts: ['Scrum/SAFe will stay as-is', 'Minor evolution needed', 'Major evolution underway', 'AI-first models are already emerging'] },
    { q: 'How prepared do you feel to coach teams through AI-driven transformation?', dim: 'anxiety',
      opts: ['Not prepared', 'Somewhat', 'Fairly prepared', 'I\'m leading this in my org'] },
    { q: 'Are you helping teams adopt AI tools while maintaining delivery discipline?', dim: 'advantage',
      opts: ['Not yet', 'Starting to', 'Yes, actively balancing both', 'I\'ve established an AI + Agile operating model'] },
    { q: 'How are you evolving your own skillset as an Agile leader in the AI era?', dim: 'adaptation',
      opts: ['Haven\'t started', 'Learning on my own', 'Actively upskilling', 'Already operating as an AI-enabled delivery coach'] },
    { q: 'Do you understand how AI compresses sprint cycles and changes estimation practices?', dim: 'awareness',
      opts: ['No', 'Vaguely', 'Yes, I see the impact', 'I\'m redefining our estimation and planning approach'] },
    { q: 'Are you a voice for AI enablement at leadership and organizational levels?', dim: 'advantage',
      opts: ['No', 'Occasionally', 'Yes, I advocate regularly', 'I\'m the driving force in my org'] }
  ],

  leader: [
    { q: 'Have you defined an AI strategy or adoption roadmap for your organization or team?', dim: 'adaptation',
      opts: ['No', 'Thinking about it', 'In progress', 'Yes, it\'s active and evolving'] },
    { q: 'How confident are you in making AI-related investment and staffing decisions?', dim: 'anxiety',
      opts: ['Not confident', 'Somewhat', 'Fairly confident', 'Very confident — grounded in firsthand experience'] },
    { q: 'Are you using AI tools yourself (not just approving them for others)?', dim: 'adoption',
      opts: ['No', 'A little', 'Regularly', 'I build with AI personally'] },
    { q: 'How well do you understand the technical implications of AI on your delivery pipeline?', dim: 'awareness',
      opts: ['Minimal', 'High-level', 'Good working knowledge', 'Deep understanding'] },
    { q: 'Have you restructured teams, roles, or operating models to account for AI capabilities?', dim: 'adaptation',
      opts: ['No', 'Planning to', 'In progress', 'Yes, new models are in place'] },
    { q: 'Do you have AI governance, risk management, and responsible AI frameworks?', dim: 'awareness',
      opts: ['No', 'Starting to think about it', 'In development', 'Established and operational'] },
    { q: 'Are you measuring the ROI and impact of AI adoption across your teams?', dim: 'advantage',
      opts: ['No', 'Anecdotally', 'With some metrics', 'Comprehensive measurement in place'] },
    { q: 'Do your teams see you as someone who understands AI, or just someone who approves budgets?', dim: 'advantage',
      opts: ['They see me as distant from AI', 'Somewhat informed', 'Actively engaged', 'I\'m a hands-on AI champion they trust'] }
  ],

  'non-it': [
    { q: 'How much do you interact with AI tools in your daily work?', dim: 'adoption',
      opts: ['Not at all', 'Rarely', 'A few times a week', 'Daily'] },
    { q: 'Do you understand what AI can realistically do for your specific field?', dim: 'awareness',
      opts: ['No idea', 'Vague sense', 'Good understanding', 'I can identify specific use cases'] },
    { q: 'Are tasks in your role becoming automated or AI-assisted?', dim: 'adaptation',
      opts: ['Not yet', 'A few minor tasks', 'Several tasks', 'Significant portions of my work'] },
    { q: 'How confident do you feel about your career relevance in an AI-driven world?', dim: 'anxiety',
      opts: ['Very worried', 'Uncertain', 'Cautiously optimistic', 'Confident — I\'m adapting'] },
    { q: 'Have you proactively learned any AI tools relevant to your profession?', dim: 'adoption',
      opts: ['No', 'Heard about some', 'Tried one or two', 'Yes, learning actively'] },
    { q: 'Do you see AI as a threat to your role, or as a way to amplify your expertise?', dim: 'awareness',
      opts: ['Mostly a threat', 'Mixed feelings', 'Leaning toward opportunity', 'Clearly an amplifier'] },
    { q: 'Are you ahead of most peers in your field when it comes to AI readiness?', dim: 'advantage',
      opts: ['Behind', 'About the same', 'Slightly ahead', 'Significantly ahead'] },
    { q: 'Have you changed any process or workflow because of AI capabilities?', dim: 'adaptation',
      opts: ['No', 'Considering it', 'One or two changes', 'Meaningful restructuring'] }
  ],

  freelancer: [
    { q: 'How much of your work output is now AI-assisted?', dim: 'adoption',
      opts: ['None', '10–25%', '25–50%', '50%+'] },
    { q: 'Has AI changed the types of projects or clients you take on?', dim: 'adaptation',
      opts: ['No', 'Slightly', 'Yes, significantly', 'I\'ve pivoted my entire offering'] },
    { q: 'Are you using AI to handle tasks you used to outsource (design, copy, code)?', dim: 'adoption',
      opts: ['No', 'For one or two things', 'For several things', 'AI replaced most outsourcing'] },
    { q: 'How well do you understand the competitive landscape of AI in your niche?', dim: 'awareness',
      opts: ['Not well', 'Somewhat', 'Well', 'I\'m tracking it actively'] },
    { q: 'Do you see AI as compressing your billable hours, or expanding your value?', dim: 'anxiety',
      opts: ['Compressing — I\'m worried', 'Mixed', 'Leaning toward expanding', 'Definitely expanding my value'] },
    { q: 'Have you built an AI-augmented workflow that gives you a competitive edge?', dim: 'advantage',
      opts: ['No', 'Working on it', 'Yes, partially', 'Yes, it\'s my differentiator'] },
    { q: 'Are you staying current with AI tools and trends relevant to your work?', dim: 'awareness',
      opts: ['Falling behind', 'Catching up', 'Keeping pace', 'Ahead of the curve'] },
    { q: 'Are you positioning yourself as AI-savvy to clients and in your personal brand?', dim: 'advantage',
      opts: ['No', 'Starting to', 'Yes, actively', 'It\'s central to my brand'] }
  ]
};

/* ------ SCORING BANDS ------ */
const BANDS = [
  { max: 25, label: 'Observer',    color: '#ef4444', emoji: '👀', desc: 'You\'re watching from the sidelines. The AI wave is here — it\'s time to step in.' },
  { max: 50, label: 'Explorer',    color: '#f59e0b', emoji: '🧭', desc: 'You\'re curious and dipping your toes in. Good start — now it\'s time to go deeper.' },
  { max: 75, label: 'Practitioner',color: '#0ea5e9', emoji: '⚡', desc: 'You\'re actively engaging with AI. Keep pushing — you\'re building real advantage.' },
  { max: 100,label: 'Vanguard',    color: '#10b981', emoji: '🚀', desc: 'You\'re leading the charge. Stay sharp, keep experimenting, and lift others with you.' }
];

/* ------ ACTION PLANS (30/60/90 day) ------ */
const ACTION_PLANS = {
  student: {
    30: [
      'Set up an AI coding assistant (Copilot, Cursor, or Windsurf) in your editor',
      'Build one small project entirely with AI pair-programming',
      'Learn prompt engineering basics — take the free Google AI Essentials course',
      'Explore 3 AI tools beyond coding (Perplexity, Midjourney, NotebookLM)'
    ],
    60: [
      'Build a portfolio project that showcases your ability to work with AI',
      'Study how AI is changing your target career path — read 5 articles or watch 5 talks',
      'Join an AI community (Discord, Reddit, LinkedIn group) for your area of interest',
      'Experiment with building an AI-native app (chatbot, agent, or automation)'
    ],
    90: [
      'Publish something — a blog post, a project, a tutorial about AI in your field',
      'Mentor a peer on AI tools — teaching deepens your own understanding',
      'Explore agent frameworks (LangChain, CrewAI, AutoGen) to understand the next frontier',
      'Define your AI-era career thesis: what unique value will you bring?'
    ]
  },
  developer: {
    30: [
      'Track your AI-assisted vs. manual code ratio for 2 weeks — set a target to increase it',
      'Adopt AI for at least 2 non-coding tasks (docs, tests, design, debugging)',
      'Learn about AI-native architecture patterns (agent mesh, MCP, tool-use)',
      'Set up a personal AI playground — experiment with one new AI tool each week'
    ],
    60: [
      'Refactor a legacy module using AI agents — measure time and quality difference',
      'Build a side project using AI agents end-to-end (idea → code → deploy)',
      'Establish a personal AI code review process — what to trust, what to verify',
      'Study the competitive landscape: how are the best developers using AI?'
    ],
    90: [
      'Mentor a team member on AI-augmented development practices',
      'Write an internal guide or blog on AI-assisted development for your team',
      'Evaluate and champion at least one AI tool for team-wide adoption',
      'Define your evolved developer identity: orchestrator, architect, or specialist?'
    ]
  },
  architect: {
    30: [
      'Audit one current architecture — where would AI-native patterns improve it?',
      'Learn about MCP (Model Context Protocol), agent orchestration, and AI-native APIs',
      'Use AI to draft architecture documentation, ADRs, or threat models',
      'Map your technology radar: what AI-era technologies should your org evaluate?'
    ],
    60: [
      'Design an AI-native reference architecture for a real use case in your org',
      'Evaluate the infrastructure implications: GPU, vector DBs, model serving, AI gateways',
      'Run an architecture workshop with your team on AI design patterns',
      'Establish responsible AI architecture guidelines (data privacy, bias, security)'
    ],
    90: [
      'Publish an internal AI architecture playbook for your organization',
      'Mentor developers and tech leads on AI-native design thinking',
      'Propose and prototype one AI-first system redesign',
      'Redefine what "architecture" means in your org for the AI era'
    ]
  },
  qa: {
    30: [
      'Try AI-assisted test generation for one project (Copilot, ChatGPT, or Testim)',
      'Explore self-healing test frameworks and visual AI testing tools',
      'Learn how AI-generated code differs in quality patterns from human code',
      'Identify 3 testing tasks in your workflow that AI could accelerate'
    ],
    60: [
      'Build an AI-augmented testing workflow for one project end-to-end',
      'Define a strategy for testing AI-generated code (what to check, what to trust)',
      'Study emerging roles: AI Quality Strategist, Prompt Tester, AI Risk Analyst',
      'Create a test automation framework that leverages AI for maintenance'
    ],
    90: [
      'Share your AI testing strategy with your team and org — lead the conversation',
      'Propose a new quality role or practice for your org in the AI era',
      'Build expertise in AI-specific testing: bias detection, hallucination testing, model eval',
      'Position yourself as the quality voice in AI adoption decisions'
    ]
  },
  'agile-leader': {
    30: [
      'Run one AI-assisted retrospective or planning session',
      'Study how AI compresses sprint cycles and changes estimation practices',
      'Explore AI tools for Agile analytics (velocity forecasting, dependency mapping)',
      'Have a candid team discussion: how is AI changing how we work?'
    ],
    60: [
      'Design an AI + Agile operating model prototype for your team',
      'Use AI to generate sprint reports, dashboards, or retrospective insights',
      'Coach your team on responsible AI adoption — balance speed with governance',
      'Connect with other Agile leaders navigating the AI shift — share learnings'
    ],
    90: [
      'Propose an evolved delivery model to leadership that accounts for AI capabilities',
      'Establish AI enablement as a pillar of your coaching practice',
      'Run an AI-augmented PI Planning or quarterly planning session',
      'Define what the Agile leader role looks like in the AI-first era'
    ]
  },
  leader: {
    30: [
      'Use an AI coding tool or builder personally — build something small',
      'Audit your team\'s current AI tool adoption — what\'s happening organically?',
      'Identify the top 3 areas where AI could impact your team\'s delivery',
      'Talk to your technical leaders: what are they excited and worried about?'
    ],
    60: [
      'Draft an AI adoption roadmap for your organization — phases, pilots, governance',
      'Establish responsible AI guidelines — data, privacy, quality, and ethical boundaries',
      'Run an AI impact retrospective: what has AI already changed? what\'s next?',
      'Restructure at least one workflow or team structure to leverage AI capabilities'
    ],
    90: [
      'Measure and communicate AI ROI to your stakeholders',
      'Champion an AI enablement program — Labs, workshops, or a Center of Excellence',
      'Build your reputation as an AI-informed leader, not just an AI budget approver',
      'Set a 12-month AI transformation vision and share it organization-wide'
    ]
  },
  'non-it': {
    30: [
      'Try 3 AI tools relevant to your field (ChatGPT, Perplexity, Grammarly, Jasper)',
      'Identify 5 tasks in your daily work that could be AI-assisted',
      'Take a free AI course — Google AI Essentials or Elements of AI',
      'Talk to an IT/tech colleague about how AI is being used in your organization'
    ],
    60: [
      'Automate one repetitive task using AI (writing, research, data analysis)',
      'Explore AI tools purpose-built for your profession (legal, healthcare, marketing, HR)',
      'Join an AI community or group specific to your industry',
      'Document how AI has saved you time or improved quality on 3 tasks'
    ],
    90: [
      'Share your AI learnings with colleagues — become the AI champion in your team',
      'Propose an AI pilot for your department or function',
      'Build a personal AI workflow that makes you measurably more effective',
      'Redefine your professional value — focus on judgment, creativity, and what AI can\'t do'
    ]
  },
  freelancer: {
    30: [
      'Audit your workflow: which paid hours could AI compress? which could AI expand?',
      'Add AI tools to at least 3 stages of your typical project delivery',
      'Update your portfolio/brand to highlight AI-augmented capabilities',
      'Study how competitors and peers in your niche are using AI'
    ],
    60: [
      'Build an AI-augmented service offering — faster, higher quality, or new capability',
      'Develop a signature workflow that uses AI as a force multiplier',
      'Create an AI-powered internal tool (template, automation, or agent) for your work',
      'Double your output capacity on one project using AI — document the results'
    ],
    90: [
      'Launch a new service or product that is only possible because of AI',
      'Teach or write about your AI-augmented approach — build thought leadership',
      'Build a personal AI toolkit document — your curated stack for maximum leverage',
      'Set pricing that reflects value delivered (not hours worked) — AI enables this shift'
    ]
  }
};

/* ------ LANDSCAPE / SHIFT TIMELINE ------ */
const LANDSCAPE = {
  timeline: [
    { era: 'Dead', emoji: '💀', color: '#6b7280', items: [
      'Manual regression testing at scale',
      'Boilerplate code writing',
      'Manual documentation generation',
      'Repetitive data entry and formatting',
      'Copy-paste coding from Stack Overflow'
    ]},
    { era: 'Dying', emoji: '⚠️', color: '#f59e0b', items: [
      'Traditional Scrum ceremonies for small teams',
      'Manual code reviews as sole quality gate',
      'Fixed sprint velocity as primary metric',
      'Traditional estimation (story points as gospel)',
      'Waterfall-style requirements gathering',
      'Manual test case writing from scratch'
    ]},
    { era: 'Emerging', emoji: '🌱', color: '#10b981', items: [
      'AI pair programming (Copilot, Cursor, Windsurf)',
      'Vibe coding — describing intent, AI builds',
      'Autonomous AI coding agents',
      'AI-assisted architecture decisions',
      'Prompt engineering as a core skill',
      'AI-augmented delivery coaching'
    ]},
    { era: 'Next', emoji: '🔮', color: '#8b5cf6', items: [
      'Self-healing architectures',
      'AI-native SDLC (no sprints, continuous flow)',
      'Agent-to-agent orchestration',
      'AI-driven product discovery',
      'Autonomous quality assurance',
      'Human as strategist, AI as executor'
    ]}
  ],

  roleEvolution: [
    { from: 'Developer',      to: 'AI Orchestrator',           icon: '💻', desc: 'From writing every line to orchestrating AI agents that generate, test, and deploy code.' },
    { from: 'Architect',      to: 'AI Systems Designer',       icon: '🏗️', desc: 'From designing monoliths/microservices to designing agent meshes, AI pipelines, and MCP-native systems.' },
    { from: 'QA Tester',      to: 'AI Quality Strategist',     icon: '🔍', desc: 'From writing test cases to defining quality frameworks for AI-generated code and AI-powered products.' },
    { from: 'Scrum Master',   to: 'Flow & AI Enablement Coach',icon: '🎯', desc: 'From facilitating ceremonies to enabling AI-augmented delivery, coaching humans and AI together.' },
    { from: 'Project Manager',to: 'AI-Augmented Delivery Lead', icon: '📋', desc: 'From tracking Gantt charts to leveraging AI for forecasting, dependency resolution, and intelligent reporting.' },
    { from: 'Product Owner',  to: 'AI Product Strategist',     icon: '🎨', desc: 'From writing user stories to defining AI-powered experiences and guiding AI-driven product discovery.' },
    { from: 'Student',        to: 'AI-Native Builder',         icon: '🎓', desc: 'From learning syntax to learning how to orchestrate AI — the builder who never knew a world without AI tools.' },
    { from: 'Non-IT Pro',     to: 'AI-Augmented Expert',       icon: '🌐', desc: 'From domain expert to domain expert + AI leverage — amplifying human judgment with AI capabilities.' }
  ],

  archShifts: [
    { from: 'Monolith',       to: 'Microservices',    next: 'Agent Mesh',              emoji: '🏛️' },
    { from: 'REST APIs',      to: 'GraphQL',          next: 'MCP + Tool-Use Protocols', emoji: '🔌' },
    { from: 'CI/CD Pipelines',to: 'GitOps',           next: 'AI-Continuous Delivery',   emoji: '🚀' },
    { from: 'Manual Testing', to: 'Test Automation',  next: 'Autonomous AI QA',         emoji: '🧪' },
    { from: 'Sprint Cycles',  to: 'Continuous Flow',  next: 'AI-Native Delivery',       emoji: '🔄' },
    { from: 'Code Reviews',   to: 'Automated Linting',next: 'AI-Verified Code',         emoji: '✅' }
  ]
};

/* ------ REALITY CHECK / HONEST TRUTHS ------ */
const REALITY_CHECK = [
  { myth: 'AI will replace all developers', truth: 'AI amplifies developers — demand for skilled humans who can orchestrate AI is growing. What\'s dying is rote coding, not creative engineering.' },
  { myth: 'You need a PhD to work with AI', truth: 'Most AI adoption is about using tools well, not building models. Prompt engineering, workflow design, and judgment are the real skills.' },
  { myth: 'Agile and Scrum are dead', truth: 'The principles survive. The ceremonies and cadences are evolving. AI compresses what took sprints into hours — the frameworks must adapt, not disappear.' },
  { myth: 'AI-generated code is production-ready', truth: 'AI code needs human review, testing, and architectural judgment. It\'s a first draft, not a final product. Trust but verify.' },
  { myth: 'Non-technical roles are safe from AI', truth: 'AI is transforming every field — legal research, medical diagnosis, marketing copy, HR screening. No domain is immune, but every domain has room for AI-augmented experts.' },
  { myth: 'You have years to adapt', truth: 'The window is now. Teams that adopted AI tools in 2024-2025 are already seeing 2-5x productivity gains. Waiting is falling behind.' }
];
