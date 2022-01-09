import { Container } from '../../components/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import { AiFillPlusCircle, AiOutlineClose } from 'react-icons/ai';
import { MdPersonSearch } from 'react-icons/md';

import styles from './Employees.module.css';

export function Employees() {
  return (
    <Container>
      <div className={styles.employeesPainelBody}>
        <div className={styles.employeesPainelReturn}>
          <span className={styles.employeesBack}>
            <BsArrowLeft size={24} />
          </span>
          <h4>Lista de Funcionarios</h4>
          <span className={styles.employeesCreate}>
            <AiFillPlusCircle size={24} />
          </span>
          <span className={styles.employeesClose}>
            <AiOutlineClose size={24} />
          </span>
        </div>

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
          <h4>Resultados da busca...</h4>

          <table>
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
              <td>Tres bolinhas, dropdown</td>
            </tr>
          </table>
        </section>
      </div>
    </Container>
  );
}
