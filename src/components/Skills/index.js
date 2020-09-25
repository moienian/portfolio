import React, { useContext } from "react";
import styles from "./Skills.module.css";
import { PortfolioContext } from "../../context";
import SkillCard from "../SkillCard";

export default function Skills() {
  const { skills } = useContext(PortfolioContext);
  const { industryKnowledge, interpersonalSkills, techSkills } = skills;

  return (
    <div className={styles.container}>
      <h3>Industry Knowledge</h3>
      <div className={styles.sectionContainer}>
        {industryKnowledge.map((skill, i) => {
          return <SkillCard skill={skill} key={i} />;
        })}
      </div>

      <h3>Interpersonal Skills</h3>
      <div className={styles.sectionContainer}>
        {interpersonalSkills.map((skill, i) => {
          return <SkillCard skill={skill} key={i} />;
        })}
      </div>

      <h3>Tech Skills</h3>
      <div className={styles.sectionContainer}>
        {techSkills.map((skill, i) => {
          return <SkillCard skill={skill} key={i} />;
        })}
      </div>
    </div>
  );
}
