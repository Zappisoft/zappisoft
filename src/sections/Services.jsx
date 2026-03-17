import { SERVICES } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import RevealCard from '../components/ui/RevealCard';
import styles from './Services.module.css';

export default function Services() {
  return (
    <Section id="services" disableSectionReveal>
      <Container>
        <SectionHeader
          label="What we build"
          title="Software designed to perform."
        />
        <div className={styles.grid}>
          {SERVICES.map(({ icon: Icon, title, description, tags }) => (
            <RevealCard key={title}>
              <Card hover>
                <div className={styles.iconWrapper}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </Card>
            </RevealCard>
          ))}
        </div>
      </Container>
    </Section>
  );
}
