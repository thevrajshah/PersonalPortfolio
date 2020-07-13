import React, { Component } from "react";
import "./components.scss";

class Hero extends Component {
  render() {
    return (
      <div className='hero'>
        <section>
          <div id='name'>
            Vraj Shah
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
