import React, { Component } from "react";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <div id='Hero'>
        <section>
          <div id='profile'></div>
          <div id='heroText'>
            <div id='name'>VRAJ SHAH</div>
            <div id='prof'>
              <div className='slidingVertical'>
                <span>Developer.</span>
                <span>Designer.</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
