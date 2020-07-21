import React, { Component, Fragment } from "react";
import "./routes.scss";
import Helmet from "react-helmet";
import { WhiteSection } from "../components/Containers";
import Projects from "../components/Projects";
import Design from "../components/Design";

export default class Work extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>Portfolio -- Vraj Shah</title>
        </Helmet>
        <WhiteSection textAlign='center'>
          <h1 style={{ fontSize: "4rem" }}>work</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>
        </WhiteSection>
        <Projects />
        <Design />
      </Fragment>
    );
  }
}
