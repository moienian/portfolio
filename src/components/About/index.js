import React, { useContext } from "react";
import { PortfolioContext } from "../../context";
import styles from "./About.module.css";

export default function About() {
  const {
    about: { bio },
  } = useContext(PortfolioContext);

  return <div className={styles.container}>{bio}</div>;
}
