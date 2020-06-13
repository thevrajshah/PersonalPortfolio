import React, { Component } from "react";
import "./components.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="made">
          Made with{" "}
          <span style={{ color: "#01d5f5", fontWeight: "600" }}>React</span>.
        </div>

        <div id="copyright">
          © 2020 <span style={{ fontWeight: "600" }}>VrajShah</span>.
        </div>
      </footer>
    );
  }
}
