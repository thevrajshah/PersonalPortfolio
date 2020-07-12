import React, { Component } from "react";
import "./components.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <section>
          <button id='toTop' onClick={() => window.scrollTo(0, 0)}>
            <i className='fa fa-angle-up' aria-hidden='true' />
          </button>
          <div id='credits'>
            <div id='createdWith'>
              Created with &nbsp;
              <span
                className='fas fa-heart'
                style={{ fontSize: "14px", color: "#dc143c" }}
              />
              &nbsp; & &nbsp;
              <span
                className='fab fa-react'
                style={{ fontSize: "15px", color: "#0ad3fd" }}
              />
              .
            </div>
            <div id='copyright'>
              © 2020 <b>VrajShah</b>.
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
