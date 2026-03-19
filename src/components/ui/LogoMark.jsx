import logoIcon from '../../assets/logo-icon.png';
import styles from './LogoMark.module.css';

/**
 * Geometric Z mark — uses logo-icon.png as a mask so fill tracks --color-accent.
 */
export default function LogoMark({ className = '' }) {
  return (
    <span
      className={`${styles.mark} ${className}`}
      style={{
        WebkitMaskImage: `url(${logoIcon})`,
        maskImage: `url(${logoIcon})`,
      }}
      aria-hidden="true"
    />
  );
}
