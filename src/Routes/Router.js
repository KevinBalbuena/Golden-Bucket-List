import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "../Components/SignIn/SignIn";
import Todo from "../Components/Todo/Todo";

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={routeprops => <SignIn {...this.props} {...routeprops} />}
        ></Route>
        <Route path="/home">
          <Todo {...this.props} />
        </Route>
      </Switch>
    );
  }
}
