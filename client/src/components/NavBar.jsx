import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
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
        </div>
      </Fragment>
    );
  }
}

export default NavBar;
