import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { Home, About, Contact } from "./containers/Pages";
import Footer from "./components/Footer";

function App() {

state = { hidden: false };

  constructor(props) {
    super(props);

    // Bind the function to this component, so it has access to this.state
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let lastScrollTop = 0;
    const currentScrollTop = navbar.scrollTop;

    // Set the state of hidden depending on scroll position
    // We only change the state if it needs to be changed
    if (!this.state.hidden && currentScrollTop > lastScrollTop) {
      this.setState({ hidden: true });
    } else if(this.state.hidden) {
      this.setState({ hidden: false });
    }
    lastScrollTop = currentScrollTop;
  }

  return (
    <React.Fragment>
      <Router>
        <NavBar hidden={this.state.hidden} />
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

export default App;
