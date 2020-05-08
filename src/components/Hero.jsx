import React, { Component } from "react";
import "./components.css";

class Hero extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src="pic.jpg" alt="profile" className="img" />
        <div id="hero">Vraj Shah</div>
        <div id="subhero">Web Developer / Graphic Designer</div>
      </React.Fragment>
    );
  }
}

export default Hero;
