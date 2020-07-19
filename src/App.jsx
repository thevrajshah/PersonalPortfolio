import React, { Component, Fragment, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./_variables.scss";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./routes/Home";

const Portfolio = lazy(() => import("./routes/Portfolio"));
const Connect = lazy(() => import("./routes/Connect"));

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <NavBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/connect' component={Connect} />
            </Switch>
          </Suspense>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}
