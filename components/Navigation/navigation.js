import React from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <button className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here  */}
        </svg>
        <span className={styles.navText}>Home</span>
      </button>
      {/* Repeat this button structure for other navigation items */}
    </nav>
  );
};

export default Navigation;
