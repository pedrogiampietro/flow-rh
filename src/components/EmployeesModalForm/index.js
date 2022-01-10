import { useEffect } from 'react';

import styles from './EmployeesModalForm.module.css';

export function EmployeesModalForm(props) {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <span className={styles.close}>&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div className={styles.modalBody}>
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className={styles.modalFooter}>
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
}
