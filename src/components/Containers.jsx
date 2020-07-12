import React, { Component } from "react";

export class WhiteSection extends Component {
  render() {
    return (
      <div
        className='whiteSection'
        style={{
          padding: this.props.paddingTB ? this.props.paddingTB : "30px 0",
        }}
      >
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
            padding: this.props.paddingLR ? this.props.paddingLR : "0 24px",
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
      <div
        className='greySection'
        style={{
          padding: this.props.paddingTB ? this.props.paddingTB : "30px 0",
        }}
      >
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
            padding: this.props.paddingLR ? this.props.paddingLR : "0 24px",
          }}
        >
          {this.props.children}
        </section>
      </div>
    );
  }
}

export class Card extends Component {
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
