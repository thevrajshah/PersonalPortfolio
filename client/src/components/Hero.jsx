import React, { Component } from "react";
import "./components.scss";

class Hero extends Component {
  state = {};
  render() {
    return (
      <main className="hero">
        <div>
          <h3>Hello There!</h3>
          <div id="name">I'm Vraj.</div>
        </div>
        <div id="prof">
          <li>Developer</li>
          <li>Designer</li>
        </div>
      </main>
    );
  }
}

export default Hero;
