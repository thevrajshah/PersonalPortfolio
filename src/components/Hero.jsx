import React, { Component } from "react";
import "./components.scss";
import profile from "../images/vraj_dev.png";

class Hero extends Component {
  render() {
    return (
      <div id='Hero'>
        <section>
          <img src={profile} id='profile'></img>
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
