import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import "./components.scss";

class NavBar extends Component {
  state = { toggle: false };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <header>
        <nav style={{ height: this.props.height }}>
          <NavLink to='/' exact id='logo'>
            /thevrajshah
          </NavLink>
          <DesktopNav />
          <Social />
          <button
            className={this.state.toggle ? "hamburger x" : "hamburger"}
            onClick={this.Toggle}
          ></button>
        </nav>
        <div
          className='mobileMenu'
          style={{ display: this.state.toggle ? "block" : "none" }}
        >
          <ul>
            <li>
              <NavLink to='/' exact onClick={this.Toggle}>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink to='/work' onClick={this.Toggle}>
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink to='/connect' onClick={this.Toggle}>
                CONNECT
              </NavLink>
            </li>
            <li>
              <a href='#' id='blog' onClick={this.Toggle}>
                BLOG
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default NavBar;

class DesktopNav extends Component {
  render() {
    return (
      <ul id='desktopNav'>
        <li>
          <NavLink to='/' exact>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to='/work'>WORK</NavLink>
        </li>
        <li>
          <NavLink to='/connect'>CONNECT</NavLink>
        </li>
        <li>
          <a id='blog' href='#'>
            BLOG
          </a>
        </li>
      </ul>
    );
  }
}

export { DesktopNav };
