import { ArrowUpRight, Code } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';
import RevealCard from '../components/ui/RevealCard';
import RevealGrid from '../components/ui/RevealGrid';
import useMediaQuery from '../hooks/useMediaQuery';
import ataloScreenshot from '../assets/atalo-screenshot.png';
import sydneyScreenshot from '../assets/sydney-screenshot.png';
import portfolioScreenshot from '../assets/portfolio-screenshot.png';
import styles from './Work.module.css';

const SCREENSHOTS = {
  atalo: ataloScreenshot,
  sydney: sydneyScreenshot,
  portfolio: portfolioScreenshot,
};

export default function Work() {
  const isDesktop = useMediaQuery('(min-width: 641px)');

  const renderCard = ({ title, description, tags, href, screenshot }) => {
    const content = (
      <>
        {screenshot ? (
          <div className={styles.screenshotWrapper}>
            <img
              src={SCREENSHOTS[screenshot]}
              alt={`${title} screenshot`}
              className={styles.screenshot}
            />
          </div>
        ) : (
          <div className={styles.header}>
            <Code size={24} strokeWidth={1.5} className={styles.placeholderIcon} />
            <h3 className={styles.cardTitle}>{title}</h3>
          </div>
        )}
        {screenshot && <h3 className={styles.cardTitle}>{title}</h3>}
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

    const cardContent = href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.cardLink}
      >
        <Card className={styles.projectCard}>{content}</Card>
      </a>
    ) : (
      <Card className={styles.projectCard}>{content}</Card>
    );

    return isDesktop ? (
      <div key={title}>{cardContent}</div>
    ) : (
      <RevealCard key={title}>{cardContent}</RevealCard>
    );
  };

  return (
    <Section id="work" background="elevated" disableSectionReveal>
      <Container>
        <SectionHeader
          label="Selected work"
          title="Real products we've shipped."
        />
        {isDesktop ? (
          <RevealGrid staggerDelay={300} className={styles.grid}>
            {PROJECTS.map(renderCard)}
          </RevealGrid>
        ) : (
          <div className={styles.grid}>
            {PROJECTS.map(renderCard)}
          </div>
        )}
      </Container>
    </Section>
  );
}
