import React, { Component } from "react";
import "./components.scss";
import { Section } from "../containers/Section";
import Loader from "./Loader";

export default class Design extends Component {
  render() {
    return (
      <Section>
        <h2>Design</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          vitae corporis suscipit architecto fuga fugiat odio laborum eius
          voluptas voluptate iste quo, itaque veritatis perferendis laboriosam
          animi, sunt ratione rerum.
        </p>
        <Loader />
      </Section>
    );
  }
}
