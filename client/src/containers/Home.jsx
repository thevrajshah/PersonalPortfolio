import React, { Component } from "react";
import "./containers.css";
import Hero from "../components/Hero";
import Section from "../UI/Section";
import Projects from "./Projects";
import Gallery from "./Gallery";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Section>
          <h1>Welcome my Website.</h1>
          Hey, looks like you found my site. In case you're wondering I've
          created this place in order to put together all my work, thoughts &
          information all in one place for no specific reason (Just wanted to
          have something like this). Anyone who visits this site can get inside
          my mind once I'm completely done with the building process.
        </Section>
        <Projects />
        <Gallery />
      </React.Fragment>
    );
  }
}

export default Home;
