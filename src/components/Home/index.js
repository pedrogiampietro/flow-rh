import { Container } from '../Layout';
import styles from './Home.module.css';

export function Home() {
  return (
    <Container>
      <main className={styles.homeContainer}>
        <div className={styles.homeBoxMenu}>
          <h4 className={styles.homeTitle}>Administração</h4>
        </div>

        <div className={styles.homeBoxMenu}>
          <h4 className={styles.homeTitle}>Administração</h4>
        </div>

        <div className={styles.homeBoxMenu}>
          <h4 className={styles.homeTitle}>Administração</h4>
        </div>
      </main>
    </Container>
  );
}
