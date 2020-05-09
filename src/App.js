import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
