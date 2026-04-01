'use client';

import { useState, useRef, useEffect } from 'react';
import { DIFFERENTIATORS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import RevealGrid from '../components/ui/RevealGrid';
import styles from './WhyZappisoft.module.css';

export default function WhyZappisoft() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const items = itemRefs.current;
    const cleanups = [];
    items.forEach((item, i) => {
      if (!item) return;
      const onEnter = () => setHoveredIndex(i);
      const onLeave = () => setHoveredIndex(null);
      item.addEventListener('mouseenter', onEnter);
      item.addEventListener('mouseleave', onLeave);
      item.addEventListener('touchstart', onEnter, { passive: true });
      item.addEventListener('touchend', onLeave);
      item.addEventListener('focusin', onEnter);
      item.addEventListener('focusout', onLeave);
      cleanups.push(() => {
        item.removeEventListener('mouseenter', onEnter);
        item.removeEventListener('mouseleave', onLeave);
        item.removeEventListener('touchstart', onEnter);
        item.removeEventListener('touchend', onLeave);
        item.removeEventListener('focusin', onEnter);
        item.removeEventListener('focusout', onLeave);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <Section id="about" background="tier2">
      <Container>
        <SectionHeader
          label="Why Zappisoft"
          title="Built different. On purpose."
        />
        <RevealGrid staggerDelay={300} className={`${styles.grid} ${styles.aboutGrid}`}>
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                ref={(el) => { itemRefs.current[index] = el; }}
                className={`${styles.item} ${hoveredIndex === index ? styles.itemHovered : ''}`}
                tabIndex={0}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{title}</h3>
                  <p className={styles.itemDescription}>{description}</p>
                </div>
            </div>
          ))}
        </RevealGrid>
      </Container>
    </Section>
  );
}
