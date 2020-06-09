import React, { Component } from "react";
import "./UI.scss";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={require("../assets/dino.gif")} alt="Loading..." />
      </div>
    );
  }
}

export default Loader;
