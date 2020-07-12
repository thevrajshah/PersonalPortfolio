import React, { Component } from "react";

export class WhiteSection extends Component {
  render() {
    return (
      <div className='whiteSection'>
        <section
          style={{
            textAlign: this.props.textAlign ? this.props.textAlign : "left",
            padding: this.props.padding ? this.props.padding : "30px 0",
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
            padding: this.props.padding ? this.props.padding : "30px 0",
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
