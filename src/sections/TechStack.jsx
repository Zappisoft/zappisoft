import { TECH_STACK } from '../constants/data';
import useScrollReveal from '../hooks/useScrollReveal';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import styles from './TechStack.module.css';

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <Section id="technology">
      <Container>
        <SectionHeader
          label="Our toolkit"
          title="Modern technologies. Proven results."
        />
        <div
          ref={ref}
          className={`${styles.grid} ${isVisible ? styles.revealed : ''}`}
        >
          {TECH_STACK.map(({ name, category }, index) => (
            <div
              key={name}
              className={styles.badge}
              style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <span className={styles.name}>{name}</span>
              <span className={styles.category}>{category}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
