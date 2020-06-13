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
        <span id="social">
          <a
            target="_blank"
            className="fa fa-github"
            href="https://github.com/thevrajshah"
            rel="noopener noreferrer"
          />
          <a
            target="_blank"
            className="fa fa-linkedin-square"
            href="https://www.linkedin.com/in/thevrajshah/"
            rel="noopener noreferrer"
          />
          <a
            target="_blank"
            className="fa fa-instagram"
            href="https://www.instagram.com/thevrajshaah"
            rel="noopener noreferrer"
          />
          <a
            target="_blank"
            className="fa fa-twitter"
            href="https://twitter.com/thevrajshah"
            rel="noopener noreferrer"
          />
        </span>
        <div id="copyright">
          © 2020 <span style={{ fontWeight: "600" }}>VrajShah</span>.
        </div>
      </footer>
    );
  }
}
