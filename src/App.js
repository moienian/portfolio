import React from "react";
import Portfolio from "./components/Portfolio";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <Portfolio />
      </div>
    );
  }
}

export default App;
