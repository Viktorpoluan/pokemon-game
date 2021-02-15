import React from "react";
import styles from "./StyleForComponents/NavBar.module.css";

const NavBar = ({ isOpen, handleClickHamburger, bgActive }) => {
  const handleClik = () => {
    handleClickHamburger();
  };
  return (
    <nav className={`${styles.navbar} ${bgActive && styles.bgActive}`}>
      <div className={styles.navWrapper}>
        <p className={styles.brand}>Pokemon Game</p>
        <div
          className={`${styles.menuButton} ${isOpen && styles.active}`}
          onClick={handleClik}
        >
          <span />
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
