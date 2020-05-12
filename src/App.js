import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
