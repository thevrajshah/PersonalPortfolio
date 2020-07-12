import React, { Component } from "react";
import ReactRotatingText from "react-rotating-text";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <section>
          <div id='name'>Vraj Shah</div>

          <div id='prof'>
            <ReactRotatingText
              items={["Developer", "Designer", "Creator"]}
              emptyPause={300}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
