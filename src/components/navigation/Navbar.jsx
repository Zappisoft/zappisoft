import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';
import Button from '../ui/Button';
import logoIcon from '../../assets/logo-icon.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#" className={styles.logo} aria-label="Zappisoft — back to top">
          <img src={logoIcon} alt="" className={styles.logoIcon} />
          <span className={styles.wordmark}>Zappisoft</span>
        </a>

        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cta}>Get in touch</a>

        <button
          className={styles.toggle}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div className={styles.drawer} role="dialog" aria-label="Mobile navigation">
          <ul className={styles.drawerLinks}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.drawerLink} onClick={closeMobile}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" size="lg" onClick={closeMobile}>
            Get in touch
          </Button>
        </div>
      )}
    </header>
  );
}
