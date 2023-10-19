import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Transactions</h1>
      <button className={styles.button} type="button">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span>Download</span>
      </button>
    </div>
  );
};

export default Header;
