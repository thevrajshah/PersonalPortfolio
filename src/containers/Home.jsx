import React, { Component } from "react";
import "./containers.css";
import Hero from "../components/Hero";
import Section from "../UI/Section";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Section>
          <h1>Welcome my Website.</h1>I create this place in order to put
          together all my work, thoughts & information all in one place for no
          specific reason (Just wanted to have something like this). Anyone who
          visits this site can get into my mind once I'm completely done with
          the building process.
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
