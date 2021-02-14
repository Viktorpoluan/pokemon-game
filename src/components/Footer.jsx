import React from "react";
import styles from "./StyleForComponents/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021</p>
      </div>
    </footer>
  );
};
export default Footer;
