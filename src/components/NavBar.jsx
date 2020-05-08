import React, { Component } from "react";
import "./components.css";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <nav>
          <span id="social">
            <a
              target="_blank"
              class="fa fa-github"
              href="https://github.com/thevrajshah"
            ></a>
            <a
              target="_blank"
              class="fa fa-linkedin-square"
              href="https://www.linkedin.com/in/thevrajshah/"
            ></a>
            <a
              target="_blank"
              class="fa fa-instagram"
              href="https://www.instagram.com/thevrajshaah"
            ></a>
            <a
              target="_blank"
              class="fa fa-twitter"
              href="https://twitter.com/thevrajshah"
            ></a>
          </span>
          <span id="menu">
            <a onclick="showHome()">Home</a>
            <a onclick="showAbout()">About</a>
            <a onclick="showContact()">Contact</a>
            <a href="#">
              <button>Blog</button>
            </a>
          </span>
        </nav>
      </header>
    );
  }
}

export default NavBar;
