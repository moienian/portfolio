import React from "react";
import styles from "./SkillCard.module.css";

export default function SkillCard({ skill }) {
  return <div className={styles.card}>{skill}</div>;
}
