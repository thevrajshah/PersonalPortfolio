import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./components.scss";

class NavBar extends Component {
  render() {
    return (
      <header>
        <nav className="gradientTextOnHover">
          <span id="social">
            <a
              target="_blank"
              class="fa fa-github"
              href="https://github.com/thevrajshah"
              rel="noopener noreferrer"
            />
            <a
              target="_blank"
              class="fa fa-linkedin-square"
              href="https://www.linkedin.com/in/thevrajshah/"
              rel="noopener noreferrer"
            />
            <a
              target="_blank"
              class="fa fa-instagram"
              href="https://www.instagram.com/thevrajshaah"
              rel="noopener noreferrer"
            />
            <a
              target="_blank"
              class="fa fa-twitter"
              href="https://twitter.com/thevrajshah"
              rel="noopener noreferrer"
            />
          </span>
          {/* <a
            href="javascript:void(0);"
            className="fa fa-bars"
            id="hamburger"
            onclick="hamburger()"
          /> */}
          <button className="hamburger"></button>
          <span id="menu">
            <NavLink to="/" exact>
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button id="blog">Blog</button>
          </span>
        </nav>
      </header>
    );
  }
}

export default NavBar;
