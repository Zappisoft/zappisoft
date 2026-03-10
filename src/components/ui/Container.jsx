import styles from './Container.module.css';

export default function Container({ children, narrow = false, className = '' }) {
  const classes = [
    styles.container,
    narrow ? styles.narrow : '',
    className,
  ].filter(Boolean).join(' ');

  return <div className={classes}>{children}</div>;
}
