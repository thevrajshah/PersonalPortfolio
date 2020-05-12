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
          <h1>Welcome my Website.</h1>
          This is the place where I put up my blah blah blah
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
