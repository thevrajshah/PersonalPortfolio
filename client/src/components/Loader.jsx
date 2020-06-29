import React, { Component } from "react";
import "./components.scss";
import { Section } from "../containers/Section";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <i className="fa fa-spinner" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Loader;
