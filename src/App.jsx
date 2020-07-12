import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { WhiteSection } from "./containers/Containers";
import Home from "./routes/Home";

const Work = lazy(() => import("./routes/Work"));
const Connect = lazy(() => import("./routes/Connect"));

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router onUpdate={() => window.scrollTo(0, 0)}>
          <NavBar height='50px' />
          <Suspense
            fallback={
              <WhiteSection>
                <Loader />
              </WhiteSection>
            }
          >
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/work' component={Work} />
              <Route path='/connect' component={Connect} />
            </Switch>
          </Suspense>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}
