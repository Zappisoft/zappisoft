import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';
import Button from '../ui/Button';
import logoIcon from '../../assets/logo-icon.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMobile();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen, closeMobile]);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isMobileOpen ? styles.menuOpen : ''}`}
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <a href="#top" className={styles.logo} aria-label="Zappisoft — back to top">
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
          ref={toggleRef}
          className={`${styles.toggle} ${isMobileOpen ? styles.toggleOpen : ''}`}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isMobileOpen && (
        <div ref={drawerRef} className={styles.drawer} role="dialog" aria-label="Mobile navigation">
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
