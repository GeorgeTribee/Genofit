export type AccentColor = 'teal' | 'blue' | 'purple' | 'emerald';

export const accentGradients: Record<AccentColor, string> = {
  teal: 'linear-gradient(135deg, #14B8A6, #06B6D4)',
  blue: 'linear-gradient(135deg, #3B82F6, #6366F1)',
  purple: 'linear-gradient(135deg, #8B5CF6, #A855F7)',
  emerald: 'linear-gradient(135deg, #10B981, #059669)',
};

export const accentBaseColors: Record<AccentColor, string> = {
  teal: '#14B8A6',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  emerald: '#10B981',
};

// ─── Card data (used on /courses main page) ───────────────────────────────────

export interface CourseCardData {
  slug: string;
  title: string;
  description: string;
  accent: AccentColor;
  comingSoon?: boolean;
}

export const courseCards: CourseCardData[] = [
  {
    slug: 'qa-manual-pro',
    title: 'QA Manual Pro',
    description:
      'A four-month flagship for career-switchers and complete beginners. You finish having run the full QA cycle end-to-end.',
    accent: 'teal',
  },
  {
    slug: 'web-test-automation',
    title: 'Web Test Automation',
    description:
      'Automation training for working QA engineers. Java, Selenium, Playwright, API testing, and CI/CD.',
    accent: 'blue',
  },
  {
    slug: 'mobile-qa',
    title: 'Mobile QA Engineering',
    description:
      'A two-month specialization in iOS and Android testing. Taught by a senior SDET working in international product teams.',
    accent: 'purple',
  },
  {
    slug: 'qa-english',
    title: 'QA English for Tech',
    description:
      'English for QA engineers preparing for international roles. Technical terminology, documentation, and interview practice.',
    accent: 'emerald',
    comingSoon: true,
  },
];

// ─── Detail page tab / card content types ────────────────────────────────────

export interface ApproachTab {
  type: 'approach';
  body: string;
  bullets: string[];
}

export interface OverviewTab {
  type: 'overview';
  heading: string;
  body: string;
  features: Array<{ title: string; body: string }>;
}

export interface Module {
  label: string;
  title: string;
  body: string;
}

export interface CurriculumTab {
  type: 'curriculum';
  heading: string;
  body: string;
  modules: Module[];
  skills: string[];
}

export interface MentorsTab {
  type: 'mentors';
  heading: string;
  body: string;
  mentors: Array<{ name: string; role: string; linkedinUrl?: string }>;
}

export interface LecturersTab {
  type: 'lecturers';
  heading: string;
  body: string;
  lecturers: Array<{ name: string; role: string; linkedinUrl?: string }>;
}

export interface LecturerTab {
  type: 'lecturer';
  heading: string;
  leadIn: string;
  lecturer: {
    name: string;
    role: string;
    bio: string;
    linkedinUrl?: string;
  };
}

export interface OutcomesTab {
  type: 'outcomes';
  heading: string;
  body?: string;
  cards: Array<{ title: string; body: string }>;
  disclaimer?: string;
  callout?: { heading: string; body: string };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQTab {
  type: 'faq';
  heading?: string;
  items: FAQItem[];
}

export interface ScheduleTab {
  type: 'schedule';
  heading: string;
  cohortDate: string;
  duration: string;
  schedule?: string;
  time?: string;
  format: string;
  sessions?: string;
  recordings?: string;
  price: string;
  priceLabel?: string;
  priceNote?: string;
  totalAmount?: string;
  totalLectures?: string;
  priceDetails?: {
    full: string;
    earlyBird: string;
    saving: string;
    installments: Array<{ label: string; amount: string }>;
  };
}

export interface FinalExamTab {
  type: 'final-exam';
  heading: string;
  subheading: string;
  body: string;
}

export interface CapstoneTab {
  type: 'capstone';
  heading: string;
  body: string;
  subheading?: string;
  cards: Array<{ title: string; body: string }>;
  quote?: string;
}

export type TabContent =
  | ApproachTab
  | OverviewTab
  | CurriculumTab
  | MentorsTab
  | LecturersTab
  | LecturerTab
  | OutcomesTab
  | FAQTab
  | ScheduleTab
  | FinalExamTab
  | CapstoneTab;

// ─── Expandable cards (used by QA Manual Pro) ─────────────────────────────────

export interface ExpandableCardItem {
  id: string;
  frontTitle: string;
  frontPreview: string;
  expandedTitle: string;
  content: TabContent;
}

export interface ExpandableSection {
  eyebrow: string;
  heading: string;
  cards: ExpandableCardItem[];
}

// ─── Tab navigation (used by Mobile QA, Web Test Automation) ─────────────────

export interface TabConfig {
  id: string;
  label: string;
  content: TabContent;
}

// ─── Full course detail data ──────────────────────────────────────────────────

export interface CourseDetailData {
  slug: string;
  title: string;
  accentWord: string;
  accent: AccentColor;
  eyebrow: string;
  subheadline: string;
  infoBar: string;
  trustLine: string;
  quickFacts: string[];
  tabs?: TabConfig[];
  expandableSection?: ExpandableSection;
  faqSection?: FAQTab;
  finalCTA: { eyebrow?: string; heading: string; body: string };
  comingSoon?: boolean;
  comingSoonContent?: {
    heading: string;
    body: string;
    cards: Array<{ title: string; body: string }>;
  };
}

// ─── QA Manual Pro ────────────────────────────────────────────────────────────

const qaManualPro: CourseDetailData = {
  slug: 'qa-manual-pro',
  title: 'QA Manual Pro',
  accentWord: 'Manual',
  accent: 'teal',
  eyebrow: 'Academy · Flagship Program',
  subheadline:
    'A four-month QA program for career-switchers and complete beginners. You finish with a capstone, professional documentation, and the working knowledge international teams expect.',
  infoBar: 'Next cohort: July 27, 2026 · 4 months · Online',
  trustLine: '$265 per month over four installments. Processed via Stripe at enrollment.',
  quickFacts: ['4 Months', '31 Lectures', '4 Lecturers', 'Online via Zoom', '$265 / Month'],
  finalCTA: {
    heading: 'Next cohort begins July 27, 2026.',
    body: 'Cohorts stay small so every student gets direct lecturer time during the capstone. Applications close when the cohort fills.',
  },
  expandableSection: {
    eyebrow: 'The Program',
    heading: 'The program, section by section.',
    cards: [
      {
        id: 'approach',
        frontTitle: 'The Approach',
        frontPreview: 'How the four months are structured.',
        expandedTitle: 'Four months of QA work, not QA theory.',
        content: {
          type: 'approach',
          body: "Most QA courses teach theory. We teach the work. Over four months, you'll move from \"what is QA\" to documenting bugs in Jira and Qase, testing APIs in Postman, validating data with SQL, and shipping a capstone you can hand to a working engineer.",
          bullets: [
            'No technical background required',
            'Twice-weekly live sessions with direct lecturer time',
            'Career track included: resume, interview prep, U.S. market preparation',
          ],
        } as ApproachTab,
      },
      {
        id: 'curriculum',
        frontTitle: 'Curriculum',
        frontPreview: 'Seven modules across four months.',
        expandedTitle: "What's in the curriculum.",
        content: {
          type: 'curriculum',
          heading: "What's in the curriculum.",
          body: 'Seven modules, each building toward the next.',
          modules: [
            {
              label: 'Module 01',
              title: 'Fundamentals of Software Testing',
              body: 'Testing concepts, methodologies, the QA mindset, and where QA fits in modern engineering teams.',
            },
            {
              label: 'Module 02',
              title: 'Professional Documentation & Testing Process',
              body: 'Test plans, test cases, bug reports, and the documentation workflows real teams rely on.',
            },
            {
              label: 'Module 03',
              title: 'Frontend Testing',
              body: 'Browser testing, cross-device validation, DevTools, and the patterns that catch frontend bugs early.',
            },
            {
              label: 'Module 04',
              title: 'UI/UX Testing',
              body: 'Accessibility, usability, and visual validation — testing the experience, not just the code.',
            },
            {
              label: 'Module 05',
              title: 'Backend Testing — APIs & SQL',
              body: 'Hands-on Postman, REST principles, request/response analysis, and SQL for data validation.',
            },
            {
              label: 'Module 06',
              title: 'Career Track',
              body: 'Resumes, LinkedIn, U.S. interview prep, communication, and how to position yourself for international teams.',
            },
            {
              label: 'Module 07',
              title: 'Advanced Topics',
              body: 'Performance basics, security awareness, automation foundations, and the bridge to your next track.',
            },
          ],
          skills: ['Frontend', 'Backend', 'APIs', 'SQL', 'Accessibility Testing'],
        } as CurriculumTab,
      },
      {
        id: 'capstone',
        frontTitle: 'The Capstone',
        frontPreview: 'The project you finish with.',
        expandedTitle: 'The capstone project',
        content: {
          type: 'capstone',
          heading: 'The capstone project',
          body: "The course doesn't end with a test. It ends with a project that looks like work, because it is work. You'll take a real application and run the full QA cycle — from planning to presentation.",
          cards: [
            { title: 'Test Plan', body: 'Strategy, scope, and approach' },
            { title: 'Test Cases', body: 'Structured documentation in industry-standard tools' },
            { title: 'Test Execution', body: 'Running the actual testing cycle on a real product' },
            { title: 'Bug Reports', body: 'Professional-grade reporting with severity and priority' },
            { title: 'Test Summary Report', body: 'Metrics, findings, and recommendations' },
            { title: 'Final Presentation', body: 'Presenting your work to the group' },
          ],
        } as CapstoneTab,
      },
      {
        id: 'lecturers',
        frontTitle: 'Your Lecturers',
        frontPreview: 'Working engineers, not full-time teachers.',
        expandedTitle: 'Learn from people who do this work.',
        content: {
          type: 'mentors',
          heading: 'Learn from people who do this work.',
          body: "Our lecturers aren't full-time teachers. They're working QA engineers and team leads currently shipping product on international teams.",
          mentors: [
            {
              name: 'Mari Zakaidze',
              role: 'QA Lead & Mentor',
              linkedinUrl: 'https://www.linkedin.com/in/mari-zakaidze/',
            },
            {
              name: 'Vakhtang Muskhelishvili',
              role: 'Senior QA Engineer',
              linkedinUrl: 'https://www.linkedin.com/in/vakhtang-muskhelishvili/',
            },
            {
              name: 'Elene Danelia',
              role: 'Software Engineer',
              linkedinUrl: 'https://www.linkedin.com/in/elene-danelia-a6aa7219b/',
            },
            {
              name: 'Demetre Chaligava',
              role: 'QA Automation Engineer',
              linkedinUrl: 'https://www.linkedin.com/in/demetre-chaligava-5995a5180/',
            },
          ],
        } as MentorsTab,
      },
      {
        id: 'outcomes',
        frontTitle: 'Career Outcomes',
        frontPreview: "What happens after you graduate.",
        expandedTitle: 'Career Outcomes',
        content: {
          type: 'outcomes',
          heading: 'Career Outcomes',
          cards: [
            {
              title: 'Internship Placements',
              body: "With our partner companies, for graduates whose capstone and class performance meet the bar.",
            },
            {
              title: 'Practice on GenofIT Projects',
              body: "After graduation, you can continue testing GenofIT's in-house products. It's the bridge between the program and your first paid QA role.",
            },
            {
              title: 'U.S. Tech Interview Preparation',
              body: 'Mock interviews with senior engineers, communication coaching, and resume reviews.',
            },
          ],
          disclaimer: "We don't guarantee employment. We prepare you to be competitive.",
        } as OutcomesTab,
      },
      {
        id: 'schedule',
        frontTitle: 'Schedule & Pricing',
        frontPreview: 'Dates, format, and tuition.',
        expandedTitle: 'How it works.',
        content: {
          type: 'schedule',
          heading: 'How it works.',
          cohortDate: 'July 27, 2026',
          duration: '4 months',
          schedule: 'Mon & Thu',
          time: '20:00 Tbilisi',
          format: 'Online via Zoom',
          sessions: '31 + 6 career',
          priceLabel: 'Tuition',
          price: '$265 / month',
          totalAmount:
            'Full program: $1,060 in 4 monthly installments. Processed securely via Stripe at enrollment.',
        } as ScheduleTab,
      },
    ],
  },
  faqSection: {
    type: 'faq',
    items: [
      {
        question: 'Do I need a technical background to enroll?',
        answer:
          "No. QA Manual Pro is designed for people switching careers and complete beginners. You'll start from the fundamentals — no programming experience is assumed.",
      },
      {
        question: "What's the time commitment per week?",
        answer:
          'Two live sessions per week, Monday and Thursday at 20:00 Tbilisi time, plus homework and self-study. Most students spend 8–10 hours a week on the program.',
      },
      {
        question: 'Will I get a certificate?',
        answer:
          "Yes — every graduate receives a completion certificate. More importantly, you finish with a capstone project, professional documentation, and a portfolio you can show to employers.",
      },
      {
        question: 'What if I miss a session?',
        answer:
          'All sessions are recorded and shared with the cohort. You can rewatch any class, and lecturers hold office hours if you need to catch up.',
      },
      {
        question: 'How does payment work?',
        answer:
          'Tuition is $1,060 total, paid in four monthly installments of $265 via Stripe at enrollment. No hidden fees, no financing partners.',
      },
      {
        question: 'Do you offer job placement?',
        answer:
          "We don't guarantee employment, but we do prepare you to compete. Top performers are introduced to our partner companies for internship opportunities, and the Career Track includes interview prep, resume review, and LinkedIn coaching.",
      },
      {
        question: 'Is the program in English or Georgian?',
        answer:
          'Classes are delivered in Georgian, but all documentation, tools, and the U.S. interview prep module are in English — which is part of how we prepare you for international teams.',
      },
    ],
  },
};

// ─── Web Test Automation ──────────────────────────────────────────────────────

const webTestAutomation: CourseDetailData = {
  slug: 'web-test-automation',
  title: 'Web Test Automation',
  accentWord: 'Automation',
  accent: 'blue',
  eyebrow: 'ACADEMY · AUTOMATION TRACK',
  subheadline:
    'A four-month engineering program that takes you from manual testing into full test automation — Java, Selenium, Playwright, API testing, and performance under one roof.',
  infoBar: 'NEXT COHORT: SEPTEMBER 28, 2026 · 4 MONTHS · ONLINE',
  trustLine: 'From $198/month · 27 lectures · Taught from zero — no prior automation experience required',
  quickFacts: ['4 MONTHS', '27 LECTURES', '54 HOURS', 'ONLINE VIA ZOOM', 'FROM $198/MONTH'],
  finalCTA: {
    heading: 'Ready to Move Into Automation?',
    body: 'The next cohort begins September 28. Spots are limited — apply now to reserve yours.',
  },
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
      content: {
        type: 'overview',
        heading: 'The Next Step in a Real QA Career',
        body: "Manual testing gets you in the door. Automation is what advances your career.\n\nThis program teaches you the full automation engineering stack — from Java basics to Playwright, from REST API testing to JMeter performance testing — built from zero. You don't need prior programming experience. Everything starts from the foundations.\n\nLectures are in Georgian. All code, tools, and documentation are in English.",
        features: [
          {
            title: 'Built From Zero',
            body: 'The program assumes no prior programming knowledge. Java fundamentals are taught from scratch before a single automation framework is introduced.',
          },
          {
            title: 'Four Complete Disciplines',
            body: 'UI automation, API testing, database testing, and performance testing — all in one program. No gaps.',
          },
          {
            title: 'Industry-Standard Stack',
            body: 'You graduate knowing the tools that international QA teams actually use: Playwright, RestAssured, TestNG, Allure, JMeter.',
          },
        ],
      } as OverviewTab,
    },
    {
      id: 'curriculum',
      label: 'Curriculum',
      content: {
        type: 'curriculum',
        heading: 'Four Parts. One Complete Automation Engineer.',
        body: 'The program is structured in four progressive parts — from Java foundations to advanced performance testing. Every tool and concept is introduced from zero. By the end, you have the full skill set of a professional automation engineer.',
        modules: [
          {
            label: 'PART 01',
            title: 'Java Foundations',
            body: 'The full programming foundation, taught from absolute zero. Git and version control, Java syntax and data types, control flow, collections, OOP principles, exception handling, and multithreading.',
          },
          {
            label: 'PART 02',
            title: 'Test Automation Toolkit',
            body: 'The core automation stack. Web testing with Selenide and Playwright, CSS selectors and XPath, the Page Object Pattern, test orchestration with TestNG, professional reporting with Allure, data-driven testing.',
          },
          {
            label: 'PART 03',
            title: 'Databases & API Testing',
            body: 'SQL Server fundamentals, JDBC for database-driven tests, REST API testing with Swagger and Postman, full RestAssured workflows, and serialization/deserialization with Jackson and Lombok.',
          },
          {
            label: 'PART 04',
            title: 'Performance Testing',
            body: 'JMeter fundamentals, thread groups and samplers, load and stress testing, CSV data injection, and distributed performance testing.',
          },
        ],
        skills: ['Java', 'Selenide', 'Playwright', 'TestNG', 'RestAssured', 'JMeter'],
      } as CurriculumTab,
    },
    {
      id: 'final-exam',
      label: 'Final Exam',
      content: {
        type: 'final-exam',
        heading: 'The Final Exam',
        subheading: 'A comprehensive assessment that proves you can do the work.',
        body: "The course concludes with a comprehensive final exam covering everything learned across all four parts — Java fundamentals, UI automation, API testing, database work, and performance testing. It is designed to mirror the kinds of technical challenges you will face in real automation interviews and on the job.\n\nPassing the final exam is required to receive your GenofIT certificate.",
      } as FinalExamTab,
    },
    {
      id: 'lecturers',
      label: 'Lecturers',
      content: {
        type: 'lecturers',
        heading: 'Learn From Working Automation Engineers',
        body: 'This course is taught by three working automation engineers, each with specializations across the curriculum.',
        lecturers: [
          { name: '[Lecturer 1 Name]', role: 'Senior Automation Engineer' },
          { name: '[Lecturer 2 Name]', role: 'SDET' },
          { name: '[Lecturer 3 Name]', role: 'QA Automation Lead' },
        ],
      } as LecturersTab,
    },
    {
      id: 'outcomes',
      label: 'Outcomes',
      content: {
        type: 'outcomes',
        heading: 'What a Graduating Automation Engineer Has',
        cards: [
          {
            title: 'A Working Automation Framework',
            body: 'You leave with a fully functional test automation project in your GitHub — UI tests, API tests, and a performance suite, all in one repository.',
          },
          {
            title: 'Four Tested Skill Areas',
            body: "You've been examined on Java, UI automation, API automation, and performance testing. Your certificate confirms all four.",
          },
          {
            title: 'The Career Vocabulary',
            body: 'You can discuss automation architecture, CI/CD integration, test coverage strategy, and performance benchmarks in professional English.',
          },
        ],
        disclaimer: "We don't guarantee employment. We prepare you to be competitive.",
      } as OutcomesTab,
    },
    {
      id: 'schedule',
      label: 'Schedule & Pricing',
      content: {
        type: 'schedule',
        heading: 'Enrollment & Pricing',
        cohortDate: 'September 28, 2026',
        duration: '4 months',
        format: 'Online via Zoom',
        priceLabel: 'Tuition',
        price: 'From $198/month',
        totalLectures: '27 (54 hours)',
      } as ScheduleTab,
    },
  ],
};

// ─── Mobile QA Engineering ────────────────────────────────────────────────────

const mobileQA: CourseDetailData = {
  slug: 'mobile-qa',
  title: 'Mobile QA Engineering',
  accentWord: 'Mobile',
  accent: 'purple',
  eyebrow: 'Academy · Specialization',
  subheadline:
    'A two-month specialization in iOS and Android testing. Taught by Davit Peradze, a Senior SDET with ten years of QA experience and a track record on international product teams.',
  infoBar: 'Next cohort: July 7, 2026 · 2 months · Online',
  trustLine: 'From $183/month · 19 sessions · Reviewed within 24 hours',
  quickFacts: ['2 months', '19 sessions', 'iOS + Android', 'Online via Zoom', 'From $183 / month'],
  finalCTA: {
    eyebrow: 'Mobile QA Engineering · Cohort 01',
    heading: 'The next cohort begins July 7, 2026.',
    body: 'Cohorts stay small so every student gets direct lecturer time during the capstone. Applications close when the cohort fills.',
  },
  tabs: [
    {
      id: 'overview',
      label: 'Overview',
      content: {
        type: 'overview',
        heading: 'Mobile testing is its own discipline.',
        body: "Mobile QA isn't web testing on a smaller screen. It has its own tools, workflows, and constraints: device fragmentation, OS version drift, battery optimization, platform-specific permissions. Two months on iOS and Android testing as it's practiced on international product teams.",
        features: [
          {
            title: 'Device Testing',
            body: 'Hands-on practice with emulators, simulators, and physical device labs across iOS and Android.',
          },
          {
            title: 'iOS & Android in Parallel',
            body: 'Both platforms covered side by side, including Xcode tools, Android Studio, and ADB.',
          },
          {
            title: 'Performance & Release',
            body: 'Performance profiling, network manipulation, OWASP Mobile fundamentals, and release readiness for iOS and Android.',
          },
        ],
      } as OverviewTab,
    },
    {
      id: 'curriculum',
      label: 'Curriculum',
      content: {
        type: 'curriculum',
        heading: 'The five-module curriculum.',
        body: 'The curriculum runs from mobile testing fundamentals through hardware-level scenarios and release management. Each module builds toward the kind of work international iOS and Android teams hire for.',
        modules: [
          {
            label: 'Module 01',
            title: 'Foundations & Strategy',
            body: 'The differences between web and mobile testing, device fragmentation, OS ecosystems, and how to build a mobile testing strategy from scratch.',
          },
          {
            label: 'Module 02',
            title: 'Core Mobile Testing Types',
            body: 'Functional testing, mobile bug reporting, usability and accessibility on touch devices, UI validation for compiled iOS and Android interfaces, and app lifecycle management.',
          },
          {
            label: 'Module 03',
            title: 'Advanced OS & Hardware Context',
            body: 'Deep work with ADB and Xcode tools, OS version histories, hardware-level risks, and an introduction to embedded Android testing for Auto, TV, and Wear OS.',
          },
          {
            label: 'Module 04',
            title: 'Performance, Network & Security',
            body: 'Performance metrics, network manipulation, OWASP Mobile Top 10 fundamentals, push notifications, and crash reporting.',
          },
          {
            label: 'Module 05',
            title: 'Release & Production Management',
            body: "CI/CD, app store policies, release processes, the mobile automation landscape, and a final end-to-end testing project on a real application.",
          },
        ],
        skills: ['iOS', 'Android', 'ADB', 'Xcode Tools', 'Performance Testing', 'Embedded Android'],
      } as CurriculumTab,
    },
    {
      id: 'capstone',
      label: 'Capstone',
      content: {
        type: 'capstone',
        heading: 'The Final Capstone',
        body: "The program ends with a full testing cycle on a working mobile application. You'll prepare a test strategy, build a test plan, execute functional, UI, performance, and interruption testing, and produce the bug reports and documentation that ship with the cycle. The artifacts go into your portfolio.",
        cards: [
          { title: 'Test Strategy', body: 'Defining scope and approach for a real mobile app.' },
          { title: 'Test Plan', body: 'Structured documentation for the full testing cycle.' },
          { title: 'Functional Testing', body: 'Validating core flows across iOS and Android.' },
          { title: 'UI & Performance', body: 'Cross-device, cross-OS validation under real conditions.' },
          { title: 'Bug Reports & Triage', body: 'Professional-grade reporting with logs and screen recordings.' },
          { title: 'Final Documentation', body: 'Test summary, metrics, and a portfolio-ready presentation.' },
        ],
      } as CapstoneTab,
    },
    {
      id: 'lecturer',
      label: 'Lecturer',
      content: {
        type: 'lecturer',
        heading: 'The Lecturer',
        leadIn: 'This program is taught entirely by Davit Peradze.',
        lecturer: {
          name: 'Davit Peradze',
          role: 'Senior Software Development Engineer in Test (SDET)',
          bio: 'Davit is a Senior SDET currently working remotely for a leading international cybersecurity company. With over a decade of QA experience — from web development to leading multi-platform test automation frameworks covering mobile, desktop, and web — he has built testing infrastructure for products running across major display and casting platforms. As a longtime lecturer and mentor, he has trained QA engineers at universities and corporate programs in Tbilisi.',
        },
      } as LecturerTab,
    },
    {
      id: 'outcomes',
      label: 'Outcomes',
      content: {
        type: 'outcomes',
        heading: 'After the program.',
        body: 'By the end of the program, you have a mobile-specific portfolio, working knowledge of iOS and Android testing, and introductions to our partner companies for top performers.',
        cards: [
          {
            title: 'Internship Placements',
            body: 'Top-performing graduates are introduced to our partner companies for mobile QA internships.',
          },
          {
            title: 'Practice on GenofIT Projects',
            body: "After graduation, you can continue testing GenofIT's in-house mobile products. It's the bridge between the program and your first paid role.",
          },
          {
            title: 'International Mobile Market',
            body: 'Mobile QA roles are commonly remote, including across borders. The toolchain you\'ll learn — Xcode tools, Android Studio, ADB, OWASP Mobile — is what international product teams hire for.',
          },
        ],
        disclaimer: "We don't guarantee employment. We prepare you to be competitive.",
      } as OutcomesTab,
    },
    {
      id: 'schedule',
      label: 'Schedule & Pricing',
      content: {
        type: 'schedule',
        heading: 'Schedule & Pricing',
        cohortDate: 'July 7, 2026',
        duration: '2 months',
        schedule: 'Tuesday & Friday',
        time: '20:00 Tbilisi',
        format: 'Online via Zoom',
        sessions: '19 × ~1.5 hr',
        priceLabel: 'Tuition',
        price: 'From $183 per month',
        priceNote: '2-month program · pay in 3 monthly installments via Stripe.',
        totalAmount:
          'The full program is $550, with the option to split payment into three monthly installments of $183. Payment is processed securely through Stripe at the time of enrollment.',
      } as ScheduleTab,
    },
  ],
  faqSection: {
    type: 'faq',
    items: [
      {
        question: 'Do I need prior QA experience to take this course?',
        answer:
          "Some foundational understanding of QA principles helps — but it's not required. The course is designed for beginners, web testers transitioning to mobile, and QA professionals who want to specialize. We start with the fundamentals and build from there.",
      },
      {
        question: 'Do I need an iPhone or Mac to take this course?',
        answer:
          "For Android testing, any modern computer works (we use emulators and ADB). For iOS testing, Xcode and full iOS testing tools are only available on macOS — students without a Mac will focus more deeply on Android work and follow iOS sessions in overview format.",
      },
      {
        question: 'What if I miss a session?',
        answer:
          "All sessions are recorded and stay available throughout the program. Live attendance is where questions and feedback happen, so we recommend it. The recordings are there for the sessions you can't make.",
      },
      {
        question: 'Is employment guaranteed after graduation?',
        answer:
          "We don't guarantee employment. We prepare you to be competitive — mobile-specialized skills, a portfolio you can show employers, and recommendations to our partner companies for top performers.",
      },
      {
        question: 'Can I pay in installments?',
        answer:
          'Yes. The $550 program can be split into three monthly payments of $183, processed through Stripe.',
      },
      {
        question: 'Who teaches the course?',
        answer:
          'The entire course is taught by Davit Peradze, a Senior SDET with over a decade of QA experience and a long history of mentoring and lecturing. Full profile and LinkedIn link are available in the Lecturer tab above.',
      },
      {
        question: 'Is the course in English or Georgian?',
        answer:
          'Lectures are conducted in Georgian, but all professional terminology, tools, and documentation are in English — preparing you for the international market from day one.',
      },
    ],
  },
};

// ─── QA English for Tech (coming soon) ───────────────────────────────────────

const qaEnglish: CourseDetailData = {
  slug: 'qa-english',
  title: 'QA English for Tech',
  accentWord: 'English',
  accent: 'emerald',
  eyebrow: 'ACADEMY · LANGUAGE TRACK',
  subheadline:
    'English for QA engineers preparing for international roles. Technical terminology, documentation, and interview practice.',
  infoBar: 'COMING SOON · ENROLLMENT NOT YET OPEN',
  trustLine: 'Built for QA graduates preparing for global teams.',
  quickFacts: ['LANGUAGE TRACK', 'QA TERMINOLOGY', 'DOCUMENTATION', 'INTERVIEW PREP', 'COMING SOON'],
  comingSoon: true,
  comingSoonContent: {
    heading: 'What This Program Will Cover',
    body: "QA English for Tech is designed for QA engineers who have the technical skills but need the language fluency to work effectively with international teams. The program covers technical vocabulary, professional documentation in English, and the communication patterns expected in U.S. and European tech companies.\n\nEnrollment details will be announced when the program is ready.",
    cards: [
      {
        title: 'Technical Vocabulary',
        body: 'The exact terminology QA engineers use when communicating with developers, PMs, and clients on international teams.',
      },
      {
        title: 'Documentation in English',
        body: 'Writing test cases, bug reports, and test summaries in professional English that international reviewers expect.',
      },
      {
        title: 'Interview Preparation',
        body: 'Practice with the communication patterns, phrasing, and self-presentation skills needed for remote and U.S.-based roles.',
      },
    ],
  },
  finalCTA: {
    heading: 'Interested in This Program?',
    body: "Tell us and we'll notify you when enrollment opens.",
  },
};

// ─── Exported map ─────────────────────────────────────────────────────────────

export const courseDetails: Record<string, CourseDetailData> = {
  'qa-manual-pro': qaManualPro,
  'web-test-automation': webTestAutomation,
  'mobile-qa': mobileQA,
  'qa-english': qaEnglish,
};
