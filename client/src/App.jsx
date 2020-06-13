import React, { lazy, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Headroom from "react-headroom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { Home, About, Contact } from "./containers/Pages";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Headroom
            style={{
              WebkitTransition: "all .3s cubic-bezier(0.7, 0, 0.3, 1)",
              MozTransition: "all .3s cubic-bezier(0.7, 0, 0.3, 1)",
              OTransition: "all .3s cubic-bezier(0.7, 0, 0.3, 1)",
              transition: "all .3s cubic-bezier(0.7, 0, 0.3, 1)",
            }}
          >
            <NavBar />
          </Headroom>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
