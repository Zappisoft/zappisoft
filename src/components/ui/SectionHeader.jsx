'use client';

import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title, description, align = 'left' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${styles.header} ${styles[align]} ${isVisible ? styles.revealed : ''}`}
    >
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
