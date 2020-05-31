import React, { Component } from "react";
import "./components.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="made">
          Made with &nbsp;
          <div className="fa fa-heart" /> &nbsp; & &nbsp;
          <img src="logo192.png" alt="React" />
        </div>
        <div id="copyright">© 2020 VrajShah. &nbsp;All Rights Reserved.</div>
      </footer>
    );
  }
}

export default Footer;
