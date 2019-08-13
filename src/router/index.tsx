import React from "react";
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Home from "../component/home";
import Login from "../component/login";
import App from '../App';

export default class RouteUrl extends React.Component {
  render() {
    return (
      <Router>
         <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
