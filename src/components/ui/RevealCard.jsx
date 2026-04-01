'use client';

import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './RevealCard.module.css';

const REVEAL_OPTIONS = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

export default function RevealCard({ children, className = '', controlled, isVisible, animateFromParent, style }) {
  const { ref, isVisible: observedVisible } = useScrollReveal(REVEAL_OPTIONS);
  const visible = controlled ? isVisible : observedVisible;

  if (animateFromParent) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={controlled ? undefined : ref}
      className={`${styles.revealCard} ${visible ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
