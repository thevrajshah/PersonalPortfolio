import React, { Component } from "react";
import "./components.scss";
import { Section } from "../containers/Section";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img
          src="https://4.bp.blogspot.com/-Ex7VGxgJcNM/W5Rq2_5L7MI/AAAAAAAFEtQ/AlVEb1VlNZYp3v-O-Enik4S3HLVuK9jhQCLcBGAs/s1600/Dino_non-birthday_version.gif"
          alt=""
        />
      </div>
    );
  }
}

export default Loader;
