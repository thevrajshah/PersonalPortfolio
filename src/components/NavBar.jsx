import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Social from "./Social";
import "./components.scss";
import ThemeMode from "./ThemeChanger";

export default class NavBar extends Component {
  state = { mobileNavVisible: false, opaqueNav: false };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  // Hide or show the menu.
  handleScroll = () => {};
  toggleMobileNav = () => {
    this.setState({ mobileNavVisible: !this.state.mobileNavVisible });
  };
  render() {
    return (
      <header>
        <nav>
          <span id='logo'>
            VRAJ.<b style={{ color: "var(--accent)" }}>SHAH</b>
          </span>
          <ul id='desktopNav'>
            <li>
              <NavLink to='/' exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to='/portfolio'>PROTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to='/connect'>CONNECT</NavLink>
            </li>
            <li>
              <a id='blog' href='#'>
                BLOG
              </a>
            </li>
            <li>
              <ThemeMode />
            </li>
          </ul>
          <Social />
          <i
            className={
              this.state.mobileNavVisible ? "hamburger cross" : "hamburger"
            }
            onClick={this.toggleMobileNav}
          />
        </nav>
        <ul
          id='mobileNav'
          style={{ display: this.state.mobileNavVisible ? "block" : "none" }}
        >
          <li>
            <NavLink to='/' exact onClick={this.toggleMobileNav}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to='/portfolio' onClick={this.toggleMobileNav}>
              PROTFOLIO
            </NavLink>
          </li>
          <li>
            <NavLink to='/connect' onClick={this.toggleMobileNav}>
              CONNECT
            </NavLink>
          </li>
          <li>
            <a href='#' id='blog' onClick={this.toggleMobileNav}>
              BLOG
            </a>
          </li>
          <li>
            <ThemeMode />
          </li>
        </ul>
      </header>
    );
  }
}
