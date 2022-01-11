import React from 'react';
import ReactDOM from 'react-dom';
import { MdPersonSearch } from 'react-icons/md';

import styles from './EmployeesModalForm.module.css';

const EmployeesModalForm = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={styles.modalOverlay} />
          <div
            className={styles.modalWrapper}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <button
                  type="button"
                  className={styles.modalCloseButton}
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className={styles.headerModalTitle}>
                <h4>Adicionar Funcionário</h4>
              </div>

              <fieldset
                className={`${styles.employeesParameterSearch} ${styles.fieldsetBorder}`}
              >
                <legend className={styles.legendBorder}>
                  Parâmetros de busca
                </legend>

                <div className={styles.employeesFormGroup}>
                  <input
                    className={styles.employeesInput}
                    type="text"
                    required
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.employeesLabel}>Nome</label>
                </div>

                <div className={styles.employeesFormGroup}>
                  <input
                    className={styles.employeesInput}
                    type="text"
                    required
                  />
                  <span className={styles.highlight}></span>
                  <span className={styles.bar}></span>
                  <label className={styles.employeesLabel}>
                    Data de Nascimento
                  </label>
                </div>

                <button className={styles.searchButton}>
                  <MdPersonSearch size={30} />
                </button>
              </fieldset>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

export default EmployeesModalForm;
