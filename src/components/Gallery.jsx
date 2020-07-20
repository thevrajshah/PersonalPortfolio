import React, { Component, Suspense } from "react";
import "./components.scss";
import { GreySection } from "./Containers";
import { photographs } from "../assets/Data.json";

class Gallery extends Component {
  render() {
    return (
      <GreySection paddingLR='0' paddingTB='0'>
        <div className='imgContainer'>
          {photographs.map((url, key) => (
            <div className='imgWrapper'>
              <img key={key} src={url} />
            </div>
          ))}
        </div>
      </GreySection>
    );
  }
}

export default Gallery;
