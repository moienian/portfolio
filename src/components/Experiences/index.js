import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./Experiences.module.css";

export default function Experiences() {
  const {
    experiences: { experienceList },
  } = useContext(PortfolioContext);

  return (
    <div className={styles.container}>
      {experienceList.map((exp, i) => {
        return (
          <div className={styles.card} key={i}>
            <h3>{exp.companyName}</h3>
            <div className={styles.role}>{exp.role}</div>
            <div>{exp.about}</div>
          </div>
        );
      })}
    </div>
  );
}
