import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar.jsx";
import { Home, About, Contact } from "./containers/Pages.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />

        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
