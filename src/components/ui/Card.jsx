import styles from './Card.module.css';

export default function Card({ children, className = '', hover = true }) {
  return (
    <div className={`${styles.card} ${hover ? styles.hoverable : ''} ${className}`}>
      {children}
    </div>
  );
}
