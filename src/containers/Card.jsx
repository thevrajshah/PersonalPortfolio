import React, { Component } from "react";
import "./containers.scss";

class Card extends Component {
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
