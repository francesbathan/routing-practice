import React from "react";
import { Router } from "@reach/router";
// import { Router } from "react-router";
import "./App.css";
import Home from "./components/Home";
// import Number from "./components/Number";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Hello path=":id" />
        {/* <Color path="/hello/:id" /> */}
      </Router>
    </div>
  );
}

export default App;
