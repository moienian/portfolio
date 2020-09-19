import React from "react";
import styles from "./Portfolio.module.css";
import Sidebar from "../Sidebar";
import MainContainer from "../MainContainer";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <MainContainer />
      </div>
    </div>
  );
}
