import React from "react";
import styles from "./Sidebar.module.css";
import avatar from "../../images/avatar.jpg";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={avatar} alt="avatar" className={styles.avatar} />
      <h2 className={styles.name}>Mohammad Moien</h2>
      <p className={styles.subtitle}>A Caddet Who Codes</p>
      <div className={styles.list}>
        <p className={styles.listItem}>About Me</p>
        <p className={styles.listItem}>Skills</p>
        <p className={styles.listItem}>Projects</p>
      </div>
    </div>
  );
}
