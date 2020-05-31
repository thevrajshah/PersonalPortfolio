import React, { Component } from "react";
import "./components.scss";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav className="gradientTextOnHover">
          <span id="social">
            <a
              target="_blank"
              class="fa fa-github"
              href="https://github.com/thevrajshah"
            />
            <a
              target="_blank"
              class="fa fa-linkedin-square"
              href="https://www.linkedin.com/in/thevrajshah/"
            />
            <a
              target="_blank"
              class="fa fa-instagram"
              href="https://www.instagram.com/thevrajshaah"
            />
            <a
              target="_blank"
              class="fa fa-twitter"
              href="https://twitter.com/thevrajshah"
            />
          </span>
          <a
            href="javascript:void(0);"
            className="fa fa-bars"
            id="hamburger"
            onclick="hamburger()"
          />
          <span id="menu">
            <a onclick="showHome()">Home</a>
            <a onclick="showAbout()">About</a>
            <a onclick="showContact()">Contact</a>
            <button>Blog</button>
          </span>
        </nav>
      </header>
    );
  }
}

export default NavBar;
