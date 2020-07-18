import React, { Component } from "react";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <div id='Hero'>
        <section>
          <div id='heroText'>
            <div id='hello'>Hello There!</div>
            <div id='name'>I'm Vraj.</div>
            <div id='prof'>
              <ul id='slider'>
                <li>Developer.</li>
                <li>Designer.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
