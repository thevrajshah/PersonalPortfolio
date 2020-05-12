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
          <h2>Welcome my Website.</h2>
          <h6>This is the place where I put up my blah blah blah</h6>
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
