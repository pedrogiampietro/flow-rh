import { Container } from '../Layout';
import styles from './Login.module.css';

export function Login() {
  return (
    <Container>
      <div className={styles.loginContainer}>
        <h1 className={styles.loginTitle}>Autenticação</h1>

        <form className={styles.loginForm}>
          <div className={styles.loginFormGroup}>
            <input className={styles.loginInput} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.loginLabel}>Usuário</label>
          </div>

          <div className={styles.loginFormGroup}>
            <input className={styles.loginInput} type="password" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.loginLabel}>Senha</label>
          </div>
          <button className={styles.loginButton}>Entrar</button>
        </form>
      </div>
    </Container>
  );
}
