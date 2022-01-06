import styles from './Header.module.css';
import Logo from '../../styles/img/logo.png';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.logoImg} src={Logo} alt="Logo" />
      <h4 className={styles.titleHeader}>Sistema de Recursos Humanos</h4>
    </div>
  );
}
