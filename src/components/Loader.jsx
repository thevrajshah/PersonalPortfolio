import React, { Component } from "react";
import "./components.scss";
import dino from "../images/dino.gif";

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img
          // src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif'
          src={dino}
          alt=''
        />
      </div>
    );
  }
}

export default Loader;
