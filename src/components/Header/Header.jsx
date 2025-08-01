import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>W/C</div>
      <nav className={styles.navigation}>
        <a href="#">Home</a>
        <a href="#">Category</a>
        <a href="#">Series</a>
        <a href="#">Movies</a>
      </nav>
      <div className={styles.searchAndProfile}>
        <span>Search...</span>
        <span>Profile</span>
      </div>
    </header>
  );
}

export default Header;