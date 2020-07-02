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
        <Section>
          <h2>Art is Lorem ipsum.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            quisquam delectus praesentium atque debitis quia expedita voluptates
            ipsam quasi maxime. Magnam, nemo.
          </p>
        </Section>
        <Gallery />
      </Fragment>
    );
  }
}
