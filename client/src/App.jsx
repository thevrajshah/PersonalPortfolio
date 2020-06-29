import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Section } from "./containers/Section";

const About = lazy(() => import("./routes/About"));
const Work = lazy(() => import("./routes/Work"));
const Contact = lazy(() => import("./routes/Contact"));

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <NavBar />
          <Suspense
            fallback={
              <Section>
                <Loader />
              </Section>
            }
          >
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Suspense>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
