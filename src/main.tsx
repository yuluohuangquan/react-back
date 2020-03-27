import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './axios/interceptors';

import Login from "./components/login";
import Test from "./components/test";

import store from "./store";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/test" exact component={Test} />
        <Route path="/" exact component={Login} />
      </Router>
    </Provider>
  );
}

export default Main;
