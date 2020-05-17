import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  state = {};
  render() {
    return (
      <div
        className="card"
        style={{ textAlign: this.props.align ? this.props.align : "center" }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Card;
