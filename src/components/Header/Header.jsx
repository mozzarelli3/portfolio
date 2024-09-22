import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="#project-section" target="_blank">Projects</a>
      <a href="https://github.com/mozzarelli3" target="_blank">GitHub</a>
      <a href="https:www.linkedin.com/in/ellierparry" target="_blank">LinkedIn</a>
      <a href="#" target="_blank">CV</a>
    </div>
  );
};

export default Header;