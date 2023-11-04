import React from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>Home</span>
      </Link>
      <Link href="/Cards" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>Cards</span>
      </Link>

      <Link href="/ParkingSessions" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>Parking Sessions</span>
      </Link>

      <Link href="/Applications" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>Applications</span>
      </Link>
      
      <Link href="https://www.google.com/" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>Statistic</span>
      </Link>

      <Link href="https://www.google.com/" className={styles.navButton}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          {/* Insert SVG path here */}
        </svg>
        <span className={styles.navText}>User</span>
      </Link>
    </nav>
  );
};

export default Navigation;
