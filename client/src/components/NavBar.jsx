import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import Social from "../containers/Social";
import "./components.scss";

class NavBar extends Component {
  state = { toggle: false, toggleWork: false };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  ToggleWork = () => {
    this.setState({ toggleWork: !this.state.toggleWork });
  };
  render() {
    return (
      <header>
        <nav>
          <span id="logo">/thevrajshah</span>
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
              <div className="work">
                <a>Work</a>
                <div className="work-content">
                  <NavLink to="/work/development">Development</NavLink>
                  <NavLink to="/work/Others">Others</NavLink>
                </div>
              </div>
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
              <span className="work-m">
                <a onClick={this.ToggleWork}>Work</a>
                <div
                  className="work-content-m"
                  style={{ display: this.state.toggleWork ? "block" : "none" }}
                >
                  <NavLink to="/work/development" onClick={this.Toggle}>
                    Development
                  </NavLink>
                  <NavLink to="/work/Others" onClick={this.Toggle}>
                    Others
                  </NavLink>
                </div>
              </span>
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
