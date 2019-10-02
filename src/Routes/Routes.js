import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../Components/Register/Register";
import SignIn from "../Components/SignIn/SignIn";
import Home from "../Components/Home/Home";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/Login" component={SignIn} />
        <Route exact path="/home" component={Home} />
      </Switch>
    );
  }
}
