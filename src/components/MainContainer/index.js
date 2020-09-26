import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./MainContainer.module.css";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";

export default function MainContainer() {
  const { selectedSection, selectedQoute } = useContext(PortfolioContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.mainHeading}>{selectedSection}</h1>
        <p className={styles.mainQuote}>{selectedQoute}</p>
      </div>
      <div className={styles.component}>
        {
          {
            "about me": <About />,
            skills: <Skills />,
            projects: <Projects />,
          }[selectedSection]
        }
      </div>
    </div>
  );
}
