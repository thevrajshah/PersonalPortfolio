import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Social from "../containers/Social";
import "./components.scss";

class NavBar extends Component {
  state = { toggle: false };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <Fragment>
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
          </nav>
        </header>
        <div
          className="mobileMenu"
          style={{ display: this.state.toggle ? "block" : "none" }}
        >
          <ul>
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
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
