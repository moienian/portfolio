import React from "react";
import styles from "./Portfolio.module.css";
import Sidebar from "../Sidebar";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <h1>Main</h1>
      </div>
    </div>
  );
}
