import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import List from "../List/List";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <List />
      </div>
    );
  }
}
