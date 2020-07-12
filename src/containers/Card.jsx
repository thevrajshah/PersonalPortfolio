import React, { Component } from "react";
import "./containers.scss";

export default class Card extends Component {
  render() {
    return (
      <section>
        <div
          className='card'
          style={{ textAlign: this.props.align ? this.props.align : "center" }}
        >
          {this.props.children}
        </div>
      </section>
    );
  }
}
