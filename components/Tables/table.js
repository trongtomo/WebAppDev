import React from 'react';
import styles from './Table.module.css';

const Table = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.columnHeader}>Date</th>
            <th className={styles.columnHeader}>Description</th>
            <th className={styles.columnHeader}>Category</th>
            <th className={styles.columnHeader}>Amount</th>
            <th className={styles.columnHeader}></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {/* Repeat this row structure for each table row */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
