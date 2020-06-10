import React, { Component } from "react";
import "./UI.scss";

class Badge extends Component {
  render() {
    return (
      <div
        className="badge"
        style={{ fontSize: this.props.fsize ? this.props.fsize : "18px" }}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Badge;
