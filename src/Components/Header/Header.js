import React, { Component } from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="nav-bar">
          <Tilt
            className="tilt"
            options={{ max: 55 }}
            style={{ height: 150, width: 150 }}
          >
            <img alt="logo" src={logo} />
            <h1 className="title">Golden Bucket List</h1>
          </Tilt>
          <ul className="nav-list">
            <li>Sign In</li>
            <li>Resgister</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
