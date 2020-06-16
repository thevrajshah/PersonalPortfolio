import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import Social from "../containers/Social";
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
          <NavLink to="/" exact id="logo">
            /thevrajshah
          </NavLink>
          <Social />
          <button
            className={this.state.toggle ? "hamburger x" : "hamburger"}
            onClick={this.Toggle}
          ></button>
          <ul id="desktopMenu">
            <li>
              <NavLink to="/" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/work">Work</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <button id="blog">Blog</button>
            </li>
          </ul>
        </nav>
        <div
          className="mobileMenu"
          style={{ display: this.state.toggle ? "block" : "none" }}
        >
          <ul>
            <li>
              <NavLink to="/" exact onClick={this.Toggle}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/work" onClick={this.Toggle}>
                Work
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
        </div>
      </header>
    );
  }
}

export default NavBar;
