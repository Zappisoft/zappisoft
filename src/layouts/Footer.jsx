import { Instagram } from 'lucide-react';
import { NAV_LINKS, INSTAGRAM_URL } from '../constants/siteNav';
import Container from '../components/ui/Container';
import LogoMark from '../components/ui/LogoMark';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <a href="#top" className={styles.logo} aria-label="Zappisoft — back to top">
            <LogoMark className={styles.logoMark} />
            <span className={styles.wordmark}>Zappisoft</span>
          </a>

          <nav className={styles.links} aria-label="Footer navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={styles.link}>{label}</a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="Zappisoft on Instagram"
            >
              <Instagram size={18} />
            </a>
          </nav>

          <p className={styles.copyright}>
            &copy; {currentYear} Zappisoft
          </p>
        </div>
      </Container>
    </footer>
  );
}
