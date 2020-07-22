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
        <div id='Head'>
          <section>
            <h1 style={{ color: "#111", fontSize: "4.5rem" }}>work.</h1>
          </section>
        </div>
        <Projects />
        <Design />
      </Fragment>
    );
  }
}
