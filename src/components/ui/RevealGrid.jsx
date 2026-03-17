import { Children, cloneElement } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './RevealGrid.module.css';

export default function RevealGrid({ children, className = '', staggerDelay = 50 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${styles.revealGrid} ${isVisible ? styles.revealed : ''} ${className}`}
    >
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          style: {
            ...child.props?.style,
            animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
          },
        })
      )}
    </div>
  );
}
