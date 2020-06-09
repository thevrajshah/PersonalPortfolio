import React, { Component } from "react";
import "./containers.scss";
import Section from "../UI/Section";

class Gallery extends Component {
  render() {
    return (
      <React.Fragment>
        <Section>
          <h2>Art is Lorem ipsum.</h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quisquam
          delectus praesentium atque debitis quia expedita voluptates ipsam
          quasi maxime. Magnam, nemo.
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
      </React.Fragment>
    );
  }
}

export default Gallery;
