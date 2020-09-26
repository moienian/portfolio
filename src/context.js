import React, { Component } from "react";
import { about } from "./constants/About";
import { skills } from "./constants/Skills";
import { projects } from "./constants/Projects";

const PortfolioContext = React.createContext();

class PortfolioProvider extends Component {
  state = {
    selectedSection: "about me",
    selectedQoute: about.quote,
    about,
    skills,
    projects,
  };

  handleMenuItem = (menuItem) => {
    this.setState({
      selectedSection: this.state[menuItem].heading,
      selectedQoute: this.state[menuItem].quote,
    });
  };
  render() {
    return (
      <PortfolioContext.Provider
        value={{ ...this.state, handleMenuItem: this.handleMenuItem }}
      >
        {this.props.children}
      </PortfolioContext.Provider>
    );
  }
}

const PortfolioConsumer = PortfolioContext.Consumer;

export { PortfolioProvider, PortfolioContext, PortfolioConsumer };
