import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./axios/interceptors";

import Login from "./components/login";
import Home from './components/home';
import Test from "./components/test";
import Translate from "./components/translate";

import store from "./store";
import { Provider } from "react-redux";

import "antd/dist/antd.css";

function Main() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
        <Route path="/translate" component={Translate} />
        <Route path="/" exact component={Login} />
      </Router>
    </Provider>
  );
}

export default Main;
