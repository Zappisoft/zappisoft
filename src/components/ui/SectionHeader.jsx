import styles from './SectionHeader.module.css';

export default function SectionHeader({ label, title, description, align = 'left' }) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
