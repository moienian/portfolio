import React, { Component } from "react";
import { about } from "./constants/About";
import { skills } from "./constants/Skills";

const PortfolioContext = React.createContext();

const { heading: aboutHeading, quote: aboutQuote, bio } = about;
const {
  heading: skillsHeading,
  quote: skillQuote,
  techSkills,
  industryKnowledge,
  interpersonalSkills,
} = skills;

class PortfolioProvider extends Component {
  state = {
    aboutMe: {
      aboutHeading: "",
      aboutQuote: "",
      bio: "",
    },
    skills: {
      skillsHeading: "",
      skillQuote: "",
      techSkills: [],
      industryKnowledge: [],
      interpersonalSkills: [],
    },
  };

  componentDidMount() {
    this.setState({
      aboutMe: {
        aboutHeading,
        aboutQuote,
        bio,
      },
      skills: {
        skillsHeading,
        skillQuote,
        techSkills,
        industryKnowledge,
        interpersonalSkills,
      },
    });
    // console.log(this.state);
  }
  handleMenuItem(menuItem) {
    console.log(menuItem);
  }
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
