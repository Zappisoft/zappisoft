import { TECH_STACK } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import RevealGrid from '../components/ui/RevealGrid';
import styles from './TechStack.module.css';

export default function TechStack() {
  return (
    <Section id="technology">
      <Container>
        <SectionHeader
          label="Our toolkit"
          title="Modern technologies. Proven results."
        />
        <RevealGrid staggerDelay={50} className={styles.grid}>
          {TECH_STACK.map(({ name, category }) => (
            <div key={name} className={styles.badge}>
              <span className={styles.name}>{name}</span>
              <span className={styles.category}>{category}</span>
            </div>
          ))}
        </RevealGrid>
      </Container>
    </Section>
  );
}
