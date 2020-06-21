import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <main className="hero">
        <div>
          <span id="hello">Hello There!</span>
          <div id="name">I'm Vraj.</div>
        </div>
        <div id="prof">
          <ReactRotatingText
            items={["Developer", "Designer", "Creator"]}
            emptyPause={300}
          />
        </div>
      </main>
    );
  }
}

export default Hero;
