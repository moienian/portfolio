import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./MainContainer.module.css";
import About from "../About";
import Skills from "../Skills";

export default function MainContainer() {
  const {
    aboutMe: { heading, quote },
  } = useContext(PortfolioContext);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.mainHeading}>{heading}</h1>
        <p className={styles.mainQuote}>{quote}</p>
      </div>
      <div className={styles.component}>
        {/*<About />*/}
        <Skills />
      </div>
    </div>
  );
}
