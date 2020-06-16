import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { About, Work, Contact } from "./containers/Pages";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
