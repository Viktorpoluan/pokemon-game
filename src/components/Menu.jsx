import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes";
import styles from "./StyleForComponents/Menu.module.css";

const Menu = ({ isOpen, handleClickHamburger }) => {
  return (
    <div
      className={`${styles.menuContainer}
        ${isOpen === true ? styles.active : styles.deactive}
      `}
    >
      <div className={styles.overlay} />
      <div>
        <ul>
          {routes.map(({ id, link, title }) => (
            <li key={id}>
              <Link to={link} onClick={handleClickHamburger}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Menu;
