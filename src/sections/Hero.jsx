import { ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import styles from './Hero.module.css';

const TECH_MARKERS = [
  'React / React Native',
  'Next.js',
  'Node.js',
  'APIs',
  'Scalable Architecture',
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <Container>
        <div className={styles.content}>
          <span className={styles.label}>Full-stack development studio</span>

          <h1 className={styles.headline}>
            Custom software engineered{' '}
            <br />
            to move businesses{' '}
            <span className={styles.accent}>forward.</span>
          </h1>

          <p className={styles.subheadline}>
            Custom websites, web apps, and mobile apps — built with precision
            by a developer-led studio.
          </p>

          <div className={styles.actions}>
            <Button href="#contact" size="lg">
              Start a project
              <ArrowRight size={16} />
            </Button>
            <Button href="#work" variant="secondary" size="lg">
              See our work
            </Button>
          </div>

          <div className={styles.techLine} aria-label="Technologies we use">
            {TECH_MARKERS.map((tech, i) => (
              <span key={tech}>
                {tech}
                {i < TECH_MARKERS.length - 1 && (
                  <span className={styles.separator} aria-hidden="true">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
