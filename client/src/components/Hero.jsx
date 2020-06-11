import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <main className="hero">
        <div>
          <h3>Hello There!</h3>
          <div id="name">I'm Vraj.</div>
        </div>
        <div id="prof">
          <ReactRotatingText items={["Developer", "Designer", "Creator"]} />
        </div>
        {/* 
          <li>Developer</li>
          <li>Designer</li>
         */}
      </main>
    );
  }
}

export default Hero;
