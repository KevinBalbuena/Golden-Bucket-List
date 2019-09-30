import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.user.email}</h1>
      </div>
    );
  }
}
