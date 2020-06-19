import React, { Component } from "react";
import "./components.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="made">
          Made with &nbsp;
          <span
            className="fab fa-react"
            style={{ fontSize: "13px", color: "#0ad3fd" }}
          />{" "}
          &nbsp; & &nbsp;
          <span
            className="fas fa-heart"
            style={{ fontSize: "13px", color: "#ed4b52" }}
          />
        </div>

        <div id="copyright">
          © 2020 <b>VrajShah</b>.
        </div>
      </footer>
    );
  }
}
