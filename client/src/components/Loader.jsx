import React, { Component } from "react";
import "./components.scss";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </div>
    );
  }
}

export default Loader;
