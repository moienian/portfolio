import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import avatar from "../../images/avatar.png";
import { PortfolioContext } from "../../context";

export default function Sidebar() {
  const { handleMenuItem } = useContext(PortfolioContext);

  return (
    <div className={styles.sidebar}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <h2 className={styles.name}>Mohammad Moien</h2>
      <p className={styles.subtitle}>"A Caddet Who Codes"</p>
      <div className={styles.list}>
        <p
          className={styles.listItem}
          onClick={(e) => handleMenuItem(e.target.innerText)}
        >
          About Me
        </p>
        <p
          className={styles.listItem}
          onClick={(e) => handleMenuItem(e.target.innerText)}
        >
          Skills
        </p>
        <p
          className={styles.listItem}
          onClick={(e) => handleMenuItem(e.target.innerText)}
        >
          Projects
        </p>
      </div>
    </div>
  );
}
