import {
  Code,
  Globe,
  LayoutGrid,
  Layers,
  MessageSquare,
  Paintbrush,
  Rocket,
  Server,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description:
      'Fast, responsive websites that rank well and convert visitors into customers — built from scratch with modern frameworks.',
    tags: ['React', 'Performance', 'SEO'],
  },
  {
    icon: Layers,
    title: 'Web Applications',
    description:
      'Scalable web apps with dashboards, real-time data, and user-facing platforms that grow with your business.',
    tags: ['SaaS', 'Dashboards', 'APIs'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Reach users on both iOS and Android with a single codebase — delivering native performance without doubling your budget.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: Server,
    title: 'Backend & Integrations',
    description:
      'Reliable server infrastructure, database architecture, and API integrations that keep your product running and your tools connected.',
    tags: ['Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    icon: LayoutGrid,
    title: 'UI Engineering',
    description:
      'Polished, pixel-perfect interfaces and reusable design systems that look great on every device and are easy to maintain.',
    tags: ['UI/UX', 'Design Systems', 'Responsive'],
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description:
      'Integrate AI-powered features into your product — from chatbots to workflow automation.',
    tags: ['AI', 'Automation', 'APIs'],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: Code,
    title: 'Developer-led',
    description:
      'Every project is led by senior developers who understand architecture, not just project managers pushing timelines.',
  },
  {
    icon: Paintbrush,
    title: 'Custom code',
    description:
      'No templates. No page builders. Every line of code is written specifically for your project and your requirements.',
  },
  {
    icon: Rocket,
    title: 'Modern stack',
    description:
      'We use the same technologies trusted by leading tech companies — React, Node.js, and modern tooling.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent process',
    description:
      'Clear communication, honest timelines, regular updates. You always know where your project stands.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn about your business, your goals, and your users. We define the scope, timeline, and technical requirements together.',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description:
      'We plan the technical approach, design the interface, and build a clear roadmap before writing any production code.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build iteratively with regular demos and feedback cycles. You see progress every week, not just at launch.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We deploy, test thoroughly, and provide post-launch support to ensure everything runs smoothly in production.',
  },
];

export const PROJECTS = [
  {
    title: 'Atalo Gym',
    description:
      'Built a high-performance website that drives new memberships and establishes a strong online presence — with integrated Google reviews, SEO optimization, and a mobile-first experience.',
    tags: ['React', 'Google Places API', 'SEO'],
    href: 'https://atalogym.com',
    logo: 'atalo',
    screenshot: 'atalo',
  },
  {
    title: 'Sydney Forks Self Storage',
    description:
      'Designed and developed a custom site that increased online visibility and customer inquiries for a growing storage business — featuring Google reviews integration and local SEO.',
    tags: ['React', 'Google Places API', 'SEO'],
    href: 'https://sydneyforksstorage.ca',
    logo: 'sydneyforks',
    screenshot: 'sydney',
  },
  {
    title: "Lui Zappitelli's Portfolio",
    description:
      'A developer portfolio built to demonstrate real-world React projects, modern UI patterns, and clean component architecture.',
    tags: ['React', 'JavaScript', 'Vercel'],
    href: 'https://luizappitelli.vercel.app/',
    logo: null,
    screenshot: 'portfolio',
  },
];

export const TECH_STACK = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Prisma', category: 'Backend' },
  { name: 'REST APIs', category: 'Integration' },
  { name: 'Git', category: 'Tooling' },
  { name: 'Vite', category: 'Tooling' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'Docker', category: 'Infrastructure' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Expo', category: 'Mobile' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'Framer Motion', category: 'Frontend' },
  { name: 'Stripe', category: 'Integration' },
  { name: 'Google APIs', category: 'Integration' },
  { name: 'OpenAI', category: 'Integration' },
  { name: 'JWT', category: 'Authentication' },
  { name: 'Figma', category: 'Design' },
];

