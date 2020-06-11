import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./components.scss";

class NavBar extends Component {
  state = { toggle: false };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <header>
        <nav>
          <span id="logo">thevrajshah</span>
          <button
            className={this.state.toggle ? "hamburger x" : "hamburger"}
            onClick={this.Toggle}
          ></button>
          <ul className="desktopMenu gradientTextOnHover">
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button id="blog">Blog</button>
            </li>
          </ul>
          <ul
            className="mobileMenu"
            style={{ display: this.state.toggle ? "block" : "none" }}
          >
            <li>
              <NavLink to="/" exact onClick={this.Toggle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={this.Toggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={this.Toggle}>
                Contact
              </NavLink>
            </li>
            <li>
              <button id="blog" onClick={this.Toggle}>
                Blog
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
