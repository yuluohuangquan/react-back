import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";

function Main() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Login} />
    </Router>
  );
}

export default Main;
