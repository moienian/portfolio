import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./Projects.module.css";

export default function Projects() {
  const {
    projects: { projectList },
  } = useContext(PortfolioContext);
  console.log(projectList);

  return (
    <div className={styles.container}>
      {projectList.map((project) => {
        return (
          <div className={styles.card}>
            <p>
              <b>Name: </b>
              {project.name}
            </p>
            <p>
              <b>Description: </b>
              {project.description}
            </p>
            <p>
              <b>Link: </b>
              <a href={project.link}>{project.link}</a>
            </p>
          </div>
        );
      })}
    </div>
  );
}
