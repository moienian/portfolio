import React from "react";
import ReactDOM from "react-dom";
import { PortfolioProvider } from "./context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
