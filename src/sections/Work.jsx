import { ArrowUpRight, Code } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import logoAtalo from '../assets/logo-atalo.svg';
import logoSydneyforks from '../assets/logo-sydneyforks.png';
import styles from './Work.module.css';

const LOGOS = {
  atalo: logoAtalo,
  sydneyforks: logoSydneyforks,
};

export default function Work() {
  return (
    <Section id="work" background="elevated">
      <Container>
        <SectionHeader
          label="Selected work"
          title="Real products we've engineered."
        />
        <div className={styles.grid}>
          {PROJECTS.map(({ title, description, tags, href, logo }) => {
            const content = (
              <>
                <div className={styles.header}>
                  <div className={styles.logoWrapper}>
                    {logo ? (
                      <img
                        src={LOGOS[logo]}
                        alt={`${title} logo`}
                        className={styles.logo}
                      />
                    ) : (
                      <Code size={24} strokeWidth={1.5} className={styles.placeholderIcon} />
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </div>
                <p className={styles.cardDescription}>{description}</p>

                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>

                <span className={styles.link}>
                  View project
                  <ArrowUpRight size={14} />
                </span>
              </>
            );

            return href ? (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
              >
                <Card className={styles.projectCard}>
                  {content}
                </Card>
              </a>
            ) : (
              <Card key={title} className={styles.projectCard}>
                {content}
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
