import React, { Component } from "react";
import "./components.css";

class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero">
        <div>
          <div id="hello">Hello There!</div>
          <div id="name">I'm Vraj.</div>
        </div>
        <div id="subhero">
          <ul>
            <li>Web Developer</li>
            <li>Photographer</li>
            <li>Graphic Designer</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Hero;
