import React, { Component } from "react";
import "./containers.scss";

export class WhiteSection extends Component {
  render() {
    return (
      <div className='whiteSection'>
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "center",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}

export class GreySection extends Component {
  render() {
    return (
      <div className='greySection'>
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "center",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}
