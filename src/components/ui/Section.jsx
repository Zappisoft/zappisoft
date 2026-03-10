import useScrollReveal from '../../hooks/useScrollReveal';
import styles from './Section.module.css';

const BACKGROUNDS = {
  default: '',
  elevated: styles.elevated,
  subtle: styles.subtle,
};

export default function Section({
  children,
  id,
  background = 'default',
  className = '',
}) {
  const { ref, isVisible } = useScrollReveal();

  const classes = [
    styles.section,
    BACKGROUNDS[background],
    isVisible ? styles.visible : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section id={id} ref={ref} className={classes}>
      {children}
    </section>
  );
}
