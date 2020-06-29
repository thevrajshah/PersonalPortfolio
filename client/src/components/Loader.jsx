import React, { Component } from "react";
import "./components.scss";
import { Section } from "../containers/Section";

class Loader extends Component {
  render() {
    return (
      <Section>
        <div className="loader">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </div>
      </Section>
    );
  }
}

export default Loader;
