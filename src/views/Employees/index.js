import { Container } from '../../components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import {
  AiFillPlusCircle,
  AiOutlineClose,
  AiFillEdit,
  AiFillDelete,
} from 'react-icons/ai';
import { MdPersonSearch } from 'react-icons/md';

import EmployeesModalForm from '../../components/EmployeesModalForm';
import useModal from '../../hooks/useModal';

import styles from './Employees.module.css';

export function Employees() {
  const { isShowing, toggle } = useModal();

  return (
    <Container>
      <div className={styles.employeesPainelReturn}>
        <span>
          <BsArrowLeft size={24} />
        </span>
        <h4>Lista de Funcionarios</h4>
        <span>
          <AiFillPlusCircle size={24} onClick={toggle} />
        </span>
        <span>
          <AiOutlineClose size={24} />
        </span>
      </div>

      <EmployeesModalForm isShowing={isShowing} hide={toggle} />

      <div className={styles.employeesSearchMethod}>
        <div className={styles.employeesSearchGroup}>
          <input
            type="radio"
            id="searchEmployees"
            name="searchEmployees"
            value="search"
          />
          <label for="searchEmployees">Buscar por Funcionário</label>
        </div>

        <div className={styles.employeesSearchGroup}>
          <input
            type="radio"
            id="searchEmployees"
            name="searchEmployees"
            value="search"
          />
          <label for="searchAttribute">Buscar por Atribuição</label>
        </div>
      </div>

      <div className={styles.employeesPainelBody}>
        <fieldset
          className={`${styles.employeesParameterSearch} ${styles.fieldsetBorder}`}
        >
          <legend className={styles.legendBorder}>Parâmetros de busca</legend>

          <div className={styles.employeesFormGroup}>
            <input className={styles.employeesInput} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.employeesLabel}>Matrícula</label>
          </div>

          <div className={styles.employeesFormGroup}>
            <input className={styles.employeesInput} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.employeesLabel}>Nº do Documento</label>
          </div>

          <div className={styles.employeesFormGroup}>
            <input className={styles.employeesInput} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.employeesLabel}>Nome</label>
          </div>

          <div className={styles.employeesFormGroup}>
            <input className={styles.employeesInput} type="text" required />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
            <label className={styles.employeesLabel}>Data de Nascimento</label>
          </div>

          <button className={styles.searchButton}>
            <MdPersonSearch size={30} />
          </button>
        </fieldset>

        <section>
          <h4 className={styles.titleResults}>Resultados da busca...</h4>

          <table className={styles.table}>
            <tr>
              <th>Matricula</th>
              <th>Nº do Documento</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Actions</th>
            </tr>
            <tr>
              <td>219412</td>
              <td>223808801</td>
              <td>Pedro Henrique Giampietro</td>
              <td>10/10/1994</td>
              <td>
                <label className={styles.switch}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.toggleThumb}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      style={{ fill: '#4ADE80', transform: '', msFilter: '' }}
                    >
                      <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      style={{ fill: '#F87171', transform: '', msFilter: '' }}
                    >
                      <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                    </svg>
                  </span>
                </label>
                <span className={styles.buttonActionEdit}>
                  <AiFillEdit size={25} />
                </span>
                <span className={`${styles.buttonActionEdit}`}>
                  <AiFillDelete size={25} />
                </span>
              </td>
            </tr>
            <tr>
              <td>219412</td>
              <td>223808801</td>
              <td>Pedro Henrique Giampietro</td>
              <td>10/10/1994</td>
              <td>
                <label className={styles.switch}>
                  <input type="checkbox" className={styles.checkbox} />
                  <span className={styles.toggleThumb}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      style={{ fill: '#4ADE80', transform: '', msFilter: '' }}
                    >
                      <path d="M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 24 24"
                      style={{ fill: '#F87171', transform: '', msFilter: '' }}
                    >
                      <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
                    </svg>
                  </span>
                </label>
                <span className={styles.buttonActionEdit}>
                  <AiFillEdit size={25} />
                </span>
                <span className={`${styles.buttonActionEdit}`}>
                  <AiFillDelete size={25} />
                </span>
              </td>
            </tr>
          </table>

          {/* <div className={styles.center}>
            <ul className={styles.pagination}>
              <li>
                <a href="#">«</a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a className={styles.active} href="#">
                  2
                </a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">»</a>
              </li>
            </ul>
          </div> */}
        </section>
      </div>
    </Container>
  );
}
