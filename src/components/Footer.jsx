import React, { Component } from "react";
import "./components.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div id="made">
            Made with &nbsp;
            <div className="fa fa-heart" /> &nbsp; & &nbsp;
            <img src="logo192.png" alt="React" />
          </div>
          <div id="copyright">
            © 2020 VrajShah. All Rights Reserved. &nbsp;|&nbsp; Designed by{" "}
            <span style={{ color: "aqua" }}>Vraj Shah</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
