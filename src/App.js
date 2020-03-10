import React from "react";
import { Router } from "@reach/router";

import "./App.css";

import Home from "./views/Home";
import Hello from "./views/Hello";
import Color from "./views/Color";

/*****************APP*****************/

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="home" />
        <Hello path=":id" />
        <Color path=":word/:backgroundColor/:color" />
      </Router>
    </div>
  );
}

export default App;
