import { ArrowRight } from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <Section id="contact" background="elevated">
      <Container>
        <div className={styles.content}>
          <h2 className={styles.headline}>
            Ready to build something great?
          </h2>
          <p className={styles.description}>
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <Button href="mailto:contact@zappisoft.com" size="lg">
            Start a conversation
            <ArrowRight size={16} />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
