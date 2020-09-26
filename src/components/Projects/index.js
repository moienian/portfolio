import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./Projects.module.css";

export default function Projects() {
  const {
    projects: { projectList },
  } = useContext(PortfolioContext);

  return (
    <div className={styles.container}>
      {projectList.map((project, i) => {
        return (
          <div className={styles.card} key={i}>
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
