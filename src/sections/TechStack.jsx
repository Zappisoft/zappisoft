import { Cloud } from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiVite,
  SiVercel,
  SiDocker,
  SiExpo,
  SiExpress,
  SiFramer,
  SiStripe,
  SiOpenai,
  SiGoogle,
  SiJsonwebtokens,
  SiFigma,
  SiSwagger,
} from 'react-icons/si';
import { TECH_STACK } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import RevealGrid from '../components/ui/RevealGrid';
import styles from './TechStack.module.css';

const TECH_ICONS = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  'Tailwind CSS': SiTailwindcss,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Prisma: SiPrisma,
  'REST APIs': SiSwagger,
  Git: SiGit,
  Vite: SiVite,
  Vercel: SiVercel,
  Docker: SiDocker,
  'React Native': SiReact,
  Expo: SiExpo,
  'Express.js': SiExpress,
  'Framer Motion': SiFramer,
  Stripe: SiStripe,
  'Google APIs': SiGoogle,
  OpenAI: SiOpenai,
  JWT: SiJsonwebtokens,
  Figma: SiFigma,
  AWS: Cloud,
};

export default function TechStack() {
  return (
    <Section id="technology" background="tier2">
      <Container>
        <SectionHeader
          label="Our toolkit"
          title="Modern technologies. Proven results."
        />
        <RevealGrid staggerDelay={50} className={styles.grid}>
          {TECH_STACK.map(({ name, category }) => {
            const Icon = TECH_ICONS[name];
            return (
              <div key={name} className={styles.badge}>
                {Icon && (
                  <span className={styles.icon} aria-hidden>
                    <Icon size={18} />
                  </span>
                )}
                <span className={styles.name}>{name}</span>
                <span className={styles.category}>{category}</span>
              </div>
            );
          })}
        </RevealGrid>
      </Container>
    </Section>
  );
}
