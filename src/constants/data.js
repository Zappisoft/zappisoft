import {
  Code,
  Gauge,
  Globe,
  LayoutGrid,
  Layers,
  MessageSquare,
  Paintbrush,
  Rocket,
  Search,
  Server,
  Smartphone,
  Sparkles,
} from 'lucide-react';

export const SERVICES = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description:
      'Fast, responsive websites built from scratch with modern frameworks. Designed to rank well and convert visitors into customers.',
    tags: ['React', 'Performance', 'SEO'],
  },
  {
    icon: Layers,
    title: 'Web Applications',
    description:
      'Custom web apps with dashboards, real-time data, and platforms built around how your business actually works.',
    tags: ['SaaS', 'Dashboards', 'APIs'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Reach users on iOS and Android with a single codebase. Native performance without doubling your budget.',
    tags: ['React Native', 'iOS', 'Android'],
  },
  {
    icon: Server,
    title: 'Backend & Integrations',
    description:
      'Server infrastructure, database architecture, and API integrations that keep your product running and your tools talking to each other.',
    tags: ['Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    icon: LayoutGrid,
    title: 'UI Engineering',
    description:
      'Clean interfaces and reusable design systems that work across every device and don\'t fall apart when you need to extend them.',
    tags: ['UI/UX', 'Design Systems', 'Responsive'],
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description:
      'Integrate AI features into your product, whether that\'s a chatbot, a workflow automation, or something custom.',
    tags: ['AI', 'Automation', 'APIs'],
  },
  {
    icon: Search,
    title: 'SEO & Site Audits',
    description:
      'Audits that find what\'s holding your site back, whether it\'s search rankings, metadata, infrastructure bottlenecks, or Core Web Vitals.',
    tags: ['SEO', 'Audits', 'Core Web Vitals'],
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description:
      'Speed up load times, improve Lighthouse scores, and reduce server costs through code splitting, caching, and infrastructure tuning.',
    tags: ['Speed', 'Lighthouse', 'Infrastructure'],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: Code,
    title: 'Developer-led',
    description:
      'Every project is led by senior developers who actually understand the architecture, not project managers chasing deadlines.',
  },
  {
    icon: Paintbrush,
    title: 'Custom code',
    description:
      'No templates. No page builders. Every line of code is written for your project, from scratch.',
  },
  {
    icon: Rocket,
    title: 'Modern stack',
    description:
      'React, Node.js, and the same modern tooling that big tech companies run on.',
  },
  {
    icon: MessageSquare,
    title: 'Transparent process',
    description:
      'Honest timelines and regular updates. You\'ll never have to ask where your project stands.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We learn about your business and the people who\'ll use what we build. Then we work with you to nail down the scope, timeline, and requirements.',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description:
      'We plan the technical approach and design the interface, mapping out a clear roadmap before any production code gets written.',
  },
  {
    number: '03',
    title: 'Development',
    description:
      'We build iteratively with regular demos and feedback. You\'ll see progress every week, not just at launch.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'We deploy, test thoroughly, and stick around after launch to make sure everything\'s running smoothly in production.',
  },
];

export const PROJECTS = [
  {
    title: 'Peptide Depot',
    description:
      'A full-stack Canadian e-commerce platform built from the ground up: multi-rail checkout (card with 3DS, crypto with on-chain verification, Interac e-Transfer), wholesale B2B and affiliate portals with commission tracking, an AI-driven blog/SEO pipeline, and an admin suite for orders, inventory, tax, and analytics. Type-safe end to end and deployed on AWS.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    href: 'https://www.thepeptidedepot.ca',
    screenshot: 'peptide-depot',
  },
  {
    title: 'Atalo Gym',
    description:
      'A fast, mobile-first website that\'s been bringing in new gym memberships since launch. Integrated Google reviews and built for local SEO.',
    tags: ['React', 'Google Places API', 'SEO'],
    href: 'https://atalogym.com',
    logo: 'atalo',
    screenshot: 'atalo',
  },
  {
    title: 'Sydney Forks Self Storage',
    description:
      'A custom site for a growing storage business that\'s pulled in more inquiries since going live. Google reviews integrated and tuned for local SEO.',
    tags: ['React', 'Google Places API', 'SEO'],
    href: 'https://sydneyforksstorage.ca',
    logo: 'sydneyforks',
    screenshot: 'sydney',
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
  { name: 'Anthropic', category: 'Integration' },
  { name: 'JWT', category: 'Authentication' },
  { name: 'Figma', category: 'Design' },
];

