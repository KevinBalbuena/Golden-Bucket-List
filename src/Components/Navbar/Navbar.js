import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Logo from "../Header/logo.png";
import Tilt from "react-tilt";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <Tilt
          className="tilt"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <img src={Logo} alt="logo" />
        </Tilt>
        <ul className="nav-links">
          <Link to="/home">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/contact_us">
            <li className="nav-link">Contact Us</li>
          </Link>
          <li className="nav-link">Bucket List</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
