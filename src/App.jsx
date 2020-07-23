import React, { Component, Fragment, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import "./_variables.scss";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./routes/About";

const Work = lazy(() => import("./routes/Work"));
const Connect = lazy(() => import("./routes/Connect"));

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <NavBar /> <Route path='/' exact component={About} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path='/work' component={Work} />
              <Route path='/connect' component={Connect} />
              <Route path='/404' component={Loader} />
            </Switch>
          </Suspense>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}
