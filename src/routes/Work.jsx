import React, { Component, Fragment } from "react";
import "./routes.scss";
import { WhiteSection } from "../components/Containers";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Design from "../components/Design";

export default class Work extends Component {
  render() {
    return (
      <Fragment>
        <WhiteSection textAlign='center'>
          <h1>Programming</h1>
          <p>
            One must consider programming as an Art which is how I feel like
            working all the time man!
          </p>
        </WhiteSection>
        <Projects />
        <Design />
        <WhiteSection textAlign='center'>
          <h1>Art is Lorem ipsum.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            quisquam delectus praesentium atque debitis quia expedita voluptates
            ipsam quasi maxime. Magnam, nemo.
          </p>
        </WhiteSection>
        <Gallery />
      </Fragment>
    );
  }
}
