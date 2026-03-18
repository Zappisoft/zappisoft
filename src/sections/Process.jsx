import { useState, useRef, useEffect } from 'react';
import { PROCESS_STEPS } from '../constants/data';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import SectionHeader from '../components/ui/SectionHeader';
import RevealGrid from '../components/ui/RevealGrid';
import styles from './Process.module.css';

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [fillHeight, setFillHeight] = useState('5%');
  const timelineRef = useRef(null);
  const stepRefs = useRef([]);

  const [clickedStep, setClickedStep] = useState(null);

  const activateStep = (index) => {
    setActiveStep(index);
  };

  const handleStepClick = (index) => {
    setClickedStep(index);
    setTimeout(() => setClickedStep(null), 450);
  };

  const alignDots = () => {
    stepRefs.current.forEach((step) => {
      if (!step) return;
      const dot = step.querySelector(`.${styles.dot}`);
      const num = step.querySelector(`.${styles.number}`);
      if (!dot || !num) return;
      const stepRect = step.getBoundingClientRect();
      const numRect = num.getBoundingClientRect();
      const centerY = numRect.top + numRect.height / 2 - stepRect.top;
      dot.style.top = `${centerY - dot.offsetHeight / 2}px`;
    });
  };

  useEffect(() => {
    const steps = stepRefs.current;
    const cleanups = [];
    steps.forEach((step, i) => {
      if (!step) return;
      const onActivate = () => activateStep(i);
      step.addEventListener('mouseenter', onActivate);
      step.addEventListener('touchstart', onActivate, { passive: true });
      cleanups.push(() => {
        step.removeEventListener('mouseenter', onActivate);
        step.removeEventListener('touchstart', onActivate);
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    alignDots();
    window.addEventListener('resize', alignDots);
    return () => window.removeEventListener('resize', alignDots);
  }, [activeStep, clickedStep]);

  useEffect(() => {
    const timeline = timelineRef.current;
    const stepEl = stepRefs.current[activeStep];
    if (!timeline || !stepEl) return;

    const updateFillHeight = () => {
      const num = stepEl.querySelector(`.${styles.number}`);
      if (!num) return;
      const timelineRect = timeline.getBoundingClientRect();
      const numRect = num.getBoundingClientRect();
      const centerY = numRect.top + numRect.height / 2 - timelineRect.top;
      const percent = Math.min(95, Math.max(5, (centerY / timelineRect.height) * 100));
      setFillHeight(`${percent}%`);
    };

    updateFillHeight();
    const resizeObserver = new ResizeObserver(updateFillHeight);
    resizeObserver.observe(timeline);

    return () => resizeObserver.disconnect();
  }, [activeStep]);

  return (
    <Section id="process" background="tier3">
      <Container>
        <SectionHeader
          label="How we work"
          title="From concept to launch in four phases."
        />
        <div ref={timelineRef} className={styles.timelineWrapper}>
          <div className={styles.trackLine} aria-hidden />
          <div
            className={styles.fillLine}
            style={{ height: fillHeight }}
            aria-hidden
          />
          <RevealGrid staggerDelay={300} className={styles.steps}>
            {PROCESS_STEPS.map(({ number, title, description }, index) => (
              <div
                key={number}
                ref={(el) => { stepRefs.current[index] = el; }}
                className={styles.step}
                onClick={() => handleStepClick(index)}
              >
                <span
                  className={`${styles.dot} ${index <= activeStep ? styles.dotActive : ''}`}
                  aria-hidden
                />
                <span
                  className={`${styles.number} ${index === activeStep ? styles.numberActive : ''} ${clickedStep === index ? styles.numberClicked : ''}`}
                >
                  {number}
                </span>
                <div className={styles.body}>
                  <h3 className={styles.stepTitle}>{title}</h3>
                  <p className={styles.stepDescription}>{description}</p>
                </div>
              </div>
            ))}
          </RevealGrid>
        </div>
      </Container>
    </Section>
  );
}
