import { PROCESS_STEPS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import styles from './Process.module.css';

export default function Process() {
  return (
    <Section id="process" background="elevated">
      <Container>
        <SectionHeader
          label="How we work"
          title="From concept to launch in four phases."
        />
        <div className={styles.steps}>
          {PROCESS_STEPS.map(({ number, title, description }) => (
            <div key={number} className={styles.step}>
              <span className={styles.number}>{number}</span>
              <div className={styles.body}>
                <h3 className={styles.stepTitle}>{title}</h3>
                <p className={styles.stepDescription}>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
