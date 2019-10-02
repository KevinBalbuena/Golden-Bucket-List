import React, { Component } from "react";
import "./Navbar.scss";
import Logo from "../Header/logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <img src={Logo} alt="logo" />
        <ul className="nav-links">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Bucket List</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
