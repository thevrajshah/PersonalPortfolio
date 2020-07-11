import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        <div>
          <span id='hello'>Hello There!</span>
          <div id='name'>VRAJ. SHAH</div>
        </div>
        <div id='prof'>
          <ReactRotatingText
            items={["Developer", "Designer", "Creator"]}
            emptyPause={300}
          />
        </div>
      </section>
    );
  }
}

export default Hero;
