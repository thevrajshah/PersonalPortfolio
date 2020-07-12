import React, { Component } from "react";

export class WhiteSection extends Component {
  render() {
    return (
      <div className='whiteSection'>
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
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
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}
