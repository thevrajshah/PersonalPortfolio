import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Social from "./Social";
import "./components.scss";
import ThemeMode from "../ThemeChanger";

export default class NavBar extends Component {
  state = { mobileNavVisible: false, transparentNav: false };
  // Hide or show the menu.
  toggleMobileNav = () => {
    this.setState({ mobileNavVisible: !this.state.mobileNavVisible });
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 50;
      document.body.style.overflowY = this.state.mobileNavVisible
        ? hidden
        : scroll;

      if (isTop !== true) {
        this.setState({ transparentNav: true });
      } else {
        this.setState({ transparentNav: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <header className={this.state.transparentNav ? "" : "transparentNav"}>
        <nav>
          <ThemeMode />
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
              <Link to='/404'>BLOG</Link>
            </li>
          </ul>
          <Social />
          <button id='mobileMenu'>
            <i
              className={
                this.state.mobileNavVisible ? "hamburger cross" : "hamburger"
              }
              onClick={this.toggleMobileNav}
            />
          </button>
        </nav>
        <ul
          id='mobileNav'
          style={{ display: this.state.mobileNavVisible ? "block" : "none" }}
        >
          <li>
            <NavLink to='/' exact onClick={this.toggleMobileNav}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to='/work' onClick={this.toggleMobileNav}>
              WORK
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
        </ul>
      </header>
    );
  }
}
