import React, { Component, Fragment } from "react";
import "./routes.scss";
import { Section } from "../containers/Section";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Design from "../components/Design";

export default class Work extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h2>Programming</h2>
          <p>
            One must consider programming as an Art which is how I feel like
            working all the time man!
          </p>
        </Section>
        <Projects />
        <Design />
        <Gallery />
      </Fragment>
    );
  }
}
