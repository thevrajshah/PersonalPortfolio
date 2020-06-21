import React, { Component, Fragment } from "react";
import "./containers.scss";
import { Section } from "../UI/Section";

class Gallery extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <h2>Art is Lorem ipsum.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            quisquam delectus praesentium atque debitis quia expedita voluptates
            ipsam quasi maxime. Magnam, nemo.
          </p>
        </Section>
        <div className="imageContainer">
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
          <div className="imgWrapper">
            <img src="https://picsum.photos/300" alt="" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
