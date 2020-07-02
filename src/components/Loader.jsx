import React, { Component } from "react";
import "./components.scss";

class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src='https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Dino_non-birthday_version.gif' alt='' />
      </div>
    );
  }
}

export default Loader;
