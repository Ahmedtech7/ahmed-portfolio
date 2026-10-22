import type { ImageMetadata } from 'astro';

import shotTwin from './assets/projects/digital-twin.png';
import shotEcoSync from './assets/projects/ecosync.png';
import shotNextBest from './assets/projects/nextbest.png';
import shotFraudGuard from './assets/projects/fraudguard.png';
import shotSentinel from './assets/projects/data-sentinel.png';

import certNN from './assets/certs/neural-networks-deeplearningai.png';
import certBA from './assets/certs/business-analytics-colorado.png';
import certPM from './assets/certs/project-management-google.png';
import certPy from './assets/certs/python-pandas-numpy.png';
import certAWS from './assets/certs/aws-lambda-foundations.png';
import certLA from './assets/certs/linear-algebra-data-science.png';

import logoIU from './assets/logos/iu.svg';
import logoSIDF from './assets/logos/sidf.jpg';
import logoKFU from './assets/logos/kfu-white.png';
import logoTuwaiq from './assets/logos/tuwaiq-white.png';
import logoAlinma from './assets/logos/alinma-white.svg';
import logoSANI from './assets/logos/sani.jpg';
import logoOlo from './assets/logos/olo-white.svg';
import logoMCIT from './assets/logos/mcit-white.svg';

export const person = {
  name: 'Ahmed Alhejaili',
  title: 'AI Engineer | Computer Science Graduate',
  email: 'ahmed6tech@gmail.com',
  phoneDisplay: '+966 53 707 6353',
  phoneHref: 'tel:+966537076353',
  linkedin: 'https://www.linkedin.com/in/ahmed-alhejaili1',
  github: 'https://github.com/Ahmedtech7',
  twin: 'https://my-digital-twin-ai.vercel.app',
};

export const sections = [
  ['home', 'Home'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['hackathons', 'Hackathons'],
  ['programs', 'Programs'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
] as const;

export const focus = ['AI Engineering', 'RAG', 'AI Agents', 'Computer Vision', 'Machine Learning'];

export type Logo = { src: ImageMetadata; alt: string; kind?: 'tile' | 'mark' | 'iu' };

export const logos = {
  iu: { src: logoIU, alt: 'Islamic University of Madinah', kind: 'iu' },
  sidf: { src: logoSIDF, alt: 'Saudi Industrial Development Fund (SIDF)', kind: 'tile' },
  kfu: { src: logoKFU, alt: 'King Faisal University', kind: 'mark' },
  tuwaiq: { src: logoTuwaiq, alt: 'Tuwaiq Academy', kind: 'mark' },
  alinma: { src: logoAlinma, alt: 'alinma', kind: 'mark' },
  sani: { src: logoSANI, alt: 'SANI | صانع', kind: 'tile' },
  olo: { src: logoOlo, alt: 'Olo Academy', kind: 'mark' },
  mcit: { src: logoMCIT, alt: 'Ministry of Communications and Information Technology', kind: 'mark' },
} satisfies Record<string, Logo>;

export const education = {
  school: 'Islamic University of Madinah',
  degree: "Bachelor's Degree in Computer Science",
  period: 'Aug 2021 — Jun 2026',
  gpa: '4.78',
  gpaOf: '5.00',
  honors: 'First Class Honors',
};

export const experience = {
  org: 'Saudi Industrial Development Fund',
  orgShort: 'SIDF',
  orgAr: 'صندوق التنمية الصناعية السعودي',
  role: 'Co-op Trainee — Innovation & Data Analyst',
  period: 'Jun — Aug 2025',
  type: 'Co-op training',
  highlights: [
    'Initiated and built an AI-powered solution that automates key credit-review activities for the Credit Department.',
    'Cut review time by 50% within the project’s scope.',
    'Presented the solution and its business impact to the VP and the CEO Advisor.',
  ],
};

export type Project = {
  id: string;
  title: string;
  category: string;
  blurb: string;
  tags: string[];
  live: string;
  repo: string | null;
  shot: ImageMetadata;
};

export const projects: Project[] = [
  {
    id: 'digital-twin',
    title: 'Digital Twin',
    category: 'Conversational AI · RAG',
    blurb:
      'A 3D digital human that answers questions about my work by text or live voice, in English and Arabic. Every answer is retrieved from a reviewed knowledge base and shows its evidence.',
    tags: ['RAG', 'React', 'Three.js', 'Express', 'Web Speech API'],
    live: 'https://my-digital-twin-ai.vercel.app',
    // shortcut: the repository is private, so no public source link; set the URL once it is made public.
    repo: null,
    shot: shotTwin,
  },
  {
    id: 'ecosync',
    title: 'EcoSync',
    category: 'AI Agents · Campus Energy',
    blurb:
      'Campus energy intelligence: scheduling, building energy analytics and a bilingual AI assistant that proposes actions and waits for confirmation before changing anything.',
    tags: ['AI Agent', 'React', 'Node.js', 'Express', 'Recharts'],
    live: 'https://ecosync-ai-alpha.vercel.app',
    repo: 'https://github.com/Ahmedtech7/EcoSync-AI',
    shot: shotEcoSync,
  },
  {
    id: 'nextbest',
    title: 'NextBest',
    category: 'Causal ML · Decision Intelligence',
    blurb:
      'A next-best-action engine for digital banking. Uplift models estimate which intervention is most likely to help each customer finish an application, trained on synthetic data.',
    tags: ['Uplift Modeling', 'Scikit-learn', 'FastAPI', 'React'],
    live: 'https://nextbest-ai.vercel.app',
    repo: 'https://github.com/Ahmedtech7/NEXTBEST-AI',
    shot: shotNextBest,
  },
  {
    id: 'fraudguard',
    title: 'FraudGuard',
    category: 'Fraud Detection · Risk Scoring',
    blurb:
      'Scores financial transactions for fraud risk with a trained classifier, one at a time or in CSV batches of up to 5,000 rows. Built on simulated data.',
    tags: ['Machine Learning', 'Logistic Regression', 'Node.js', 'React'],
    live: 'https://fraudguard-ai-kappa.vercel.app',
    repo: 'https://github.com/Ahmedtech7/fraudguard-ai',
    shot: shotFraudGuard,
  },
  {
    id: 'data-sentinel',
    title: 'Data Sentinel',
    category: 'Data Quality · Anomaly Detection',
    blurb:
      'Watches recurring business data feeds, learns what normal looks like and opens an incident with row-level evidence when the data breaks.',
    tags: ['Anomaly Detection', 'Scikit-learn', 'FastAPI', 'React', 'Docker'],
    live: 'https://data-sentinel-ai.vercel.app',
    repo: 'https://github.com/Ahmedtech7/data-sentinel-ai',
    shot: shotSentinel,
  },
];

/** `icon` is a simple-icons slug (see icons.ts); `href` points at the work that shows the skill. */
export type Skill = { name: string; icon?: string; href?: string };

export const skillGroups: { name: string; skills: Skill[] }[] = [
  {
    name: 'AI Engineering',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', href: '#project-digital-twin' },
      { name: 'AI Agents', href: '#project-ecosync' },
      { name: 'Agentic AI', href: '#programs' },
      { name: 'Large Language Models', href: '#programs' },
      { name: 'Prompt Engineering' },
      { name: 'Embeddings' },
      { name: 'Vector Search' },
      { name: 'Semantic Search' },
    ],
  },
  {
    name: 'Computer Vision & Deep Learning',
    skills: [
      { name: 'Computer Vision' },
      { name: 'YOLO' },
      { name: 'Object Detection' },
      { name: 'Image Processing' },
      { name: 'Neural Networks', href: '#certifications' },
      { name: 'Deep Learning', href: '#certifications' },
      { name: 'PyTorch', icon: 'pytorch' },
    ],
  },
  {
    name: 'Machine Learning & Data',
    skills: [
      { name: 'Machine Learning', href: '#projects' },
      { name: 'Fraud Detection', href: '#project-fraudguard' },
      { name: 'Anomaly Detection', href: '#project-data-sentinel' },
      { name: 'Recommendation Systems', href: '#project-nextbest' },
      { name: 'Uplift Modeling', href: '#project-nextbest' },
      { name: 'Data Analysis', href: '#certifications' },
      { name: 'Pandas', icon: 'pandas', href: '#certifications' },
      { name: 'NumPy', icon: 'numpy', href: '#certifications' },
      { name: 'Scikit-learn', icon: 'scikitlearn', href: '#project-data-sentinel' },
    ],
  },
  {
    name: 'Software Engineering & DevOps',
    skills: [
      { name: 'Python', icon: 'python', href: '#project-data-sentinel' },
      { name: 'FastAPI', icon: 'fastapi', href: '#project-nextbest' },
      { name: 'JavaScript', icon: 'javascript', href: '#project-fraudguard' },
      { name: 'TypeScript', icon: 'typescript', href: '#project-data-sentinel' },
      { name: 'React', icon: 'react', href: '#projects' },
      { name: 'Node.js', icon: 'nodedotjs', href: '#project-ecosync' },
      { name: 'APIs', href: '#projects' },
      { name: 'Docker', icon: 'docker', href: '#project-data-sentinel' },
      { name: 'Containerization', href: '#project-data-sentinel' },
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github', href: 'https://github.com/Ahmedtech7' },
      { name: 'Vercel', icon: 'vercel', href: '#projects' },
      { name: 'Cloud Deployment', href: '#projects' },
      { name: 'AWS Lambda', icon: 'awslambda', href: '#certifications' },
    ],
  },
];

export type Hackathon = {
  date: string;
  event: string;
  host: string;
  role: string;
  project?: string;
  line: string;
  note?: string;
  logos: Logo[];
};

export const hackathons: Hackathon[] = [
  {
    date: 'Jul 2026',
    event: 'AMAD FinTech Hackathon',
    host: 'Tuwaiq Academy × alinma',
    role: 'Technical Mentor',
    line: 'Advised teams on AI solutions, business models and pitches.',
    note: 'This edition, with 6,000+ participants, was recognized by Guinness World Records as the world’s largest fintech hackathon.',
    logos: [logos.tuwaiq, logos.alinma],
  },
  {
    date: 'Apr 2026',
    event: 'UniThon 2026',
    host: 'King Faisal University · ICMI 2026',
    role: 'Top 50 of 250+ teams',
    project: 'EcoSync',
    line: 'An AI agent concept that optimizes campus energy use around the academic schedule.',
    logos: [logos.kfu],
  },
  {
    date: '2025',
    event: 'AMAD FinTech Hackathon',
    host: 'Tuwaiq Academy × alinma',
    role: 'Finalist',
    project: 'NoApp',
    line: 'A financial-inclusion concept for sending money without a smartphone or internet access.',
    logos: [logos.tuwaiq, logos.alinma],
  },
  {
    date: 'Oct 2024',
    event: 'Industrial Hackathon',
    host: 'Saudi Industrial Development Fund',
    role: 'National finals',
    project: 'PureTech ASG',
    line: 'An IoT smart-city waste-management concept with automated sorting and a live sensor dashboard.',
    logos: [logos.sidf],
  },
];

export const programs = [
  {
    org: 'Olo Academy × MCIT',
    name: 'AI Engineering Program',
    period: 'Sep — Nov 2026',
    status: 'Ongoing',
    rank: 'TOP 1',
    among: 'Among 5,000+ Applicants',
    line: 'A selective program with the Ministry of Communications and Information Technology, focused on building and deploying AI solutions.',
    topics: ['AI Engineering', 'Building AI Solutions', 'Deployment'],
    link: null,
    logos: [logos.olo, logos.mcit],
  },
  {
    org: 'SANI | صانع',
    name: 'AI Agents / Agentic AI',
    period: 'Jun — Aug 2026',
    status: 'Completed',
    rank: 'TOP 2',
    among: 'Among 6,000+ Applicants',
    line: 'A selective program focused on large language models, AI agents and agentic AI systems.',
    topics: ['LLMs', 'AI Agents', 'Agentic AI'],
    link: 'https://www.linkedin.com/company/devwithsani',
    logos: [logos.sani],
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: ImageMetadata;
  pdf: string;
  verify?: string;
  code?: string;
};

export const certificates: Certificate[] = [
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    date: 'Jun 2026',
    image: certNN,
    pdf: '/certificates/neural-networks-deeplearningai.pdf',
    verify: 'https://coursera.org/verify/I336GEERDT21',
  },
  {
    title: 'Business Analytics for Decision Making',
    issuer: 'University of Colorado Boulder',
    date: 'Jun 2026',
    image: certBA,
    pdf: '/certificates/business-analytics-colorado.pdf',
    verify: 'https://coursera.org/verify/0T2PL9TVL8J8',
  },
  {
    title: 'Foundations of Project Management',
    issuer: 'Google',
    date: 'Jun 2026',
    image: certPM,
    pdf: '/certificates/project-management-google.pdf',
    verify: 'https://coursera.org/verify/T8ZK9YUAO2J0',
  },
  {
    title: 'Python for Data Analysis: Pandas & NumPy',
    issuer: 'Coursera',
    date: 'Jun 2026',
    image: certPy,
    pdf: '/certificates/python-pandas-numpy.pdf',
    verify: 'https://coursera.org/verify/VB9QYU9YRW2A',
  },
  {
    title: 'AWS Lambda Foundations',
    issuer: 'Simplilearn',
    date: 'May 2026',
    image: certAWS,
    pdf: '/certificates/aws-lambda-foundations.pdf',
    code: '10266311',
  },
  {
    title: 'Linear Algebra for Data Science and Machine Learning',
    issuer: 'Simplilearn',
    date: 'Jun 2026',
    image: certLA,
    pdf: '/certificates/linear-algebra-data-science.pdf',
    code: '10323094',
  },
];
