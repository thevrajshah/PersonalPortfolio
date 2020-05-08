import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Dots from "./components/Dots";
import Home from "./containers/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Dots />
      <Home />
    </div>
  );
}

export default App;
