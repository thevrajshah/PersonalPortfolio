import React, { Component } from "react";
import "./components.css";

class Dots extends Component {
  state = {};
  render() {
    return (
      <div className="slider">
        <ul>
          <li id="dot" />
          <li id="dot" />
          <li id="dot" />
        </ul>
      </div>
    );
  }
}

export default Dots;
