import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './RevealCard.module.css';

const REVEAL_OPTIONS = { threshold: 0.15, rootMargin: '0px 0px -15% 0px' };

export default function RevealCard({ children, className = '' }) {
  const { ref, isVisible } = useScrollReveal(REVEAL_OPTIONS);

  return (
    <div
      ref={ref}
      className={`${styles.revealCard} ${isVisible ? styles.visible : ''} ${className}`}
    >
      {children}
    </div>
  );
}
