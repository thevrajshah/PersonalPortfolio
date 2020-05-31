import React, { Component } from "react";
import "./Section.scss";

class Section extends Component {
  state = {};
  render() {
    return (
      <div
        className="section"
        style={{ textAlign: this.props.align ? this.props.align : "center" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Section;
