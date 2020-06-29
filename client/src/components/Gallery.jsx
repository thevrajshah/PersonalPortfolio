import React, { Component, Fragment, Suspense } from "react";
import "./components.scss";

class Gallery extends Component {
  render() {
    const urls = [
      "https://placeimg.com/300/300/animals&rnd=" + Math.random(),
      "https://placeimg.com/300/300/nature&rnd=" + Math.random(),
      "https://placeimg.com/300/300/tech&rnd=" + Math.random(),
      "https://placeimg.com/300/300/animals&rnd=" + Math.random(),
      "https://placeimg.com/300/300/nature&rnd=" + Math.random(),
      "https://placeimg.com/300/300/tech&rnd=" + Math.random(),
      "https://placeimg.com/300/300/animals&rnd=" + Math.random(),
      "https://placeimg.com/300/300/nature&rnd=" + Math.random(),
      "https://placeimg.com/300/300/tech&rnd=" + Math.random(),
      "https://placeimg.com/300/300/nature&rnd=" + Math.random(),
    ];
    return (
      <Fragment>
        <div className="imageContainer">
          {urls.map((url) => (
            <div className="imgWrapper">
              <img key={url} src={url} />
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
