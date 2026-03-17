import { DIFFERENTIATORS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import RevealGrid from '../components/ui/RevealGrid';
import styles from './WhyZappisoft.module.css';

export default function WhyZappisoft() {
  return (
    <Section id="about">
      <Container>
        <SectionHeader
          label="Why Zappisoft"
          title="Built different. On purpose."
        />
        <RevealGrid staggerDelay={300} className={styles.grid}>
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.item}>
              <div className={styles.iconWrapper}>
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>{title}</h3>
                <p className={styles.itemDescription}>{description}</p>
              </div>
            </div>
          ))}
        </RevealGrid>
      </Container>
    </Section>
  );
}
