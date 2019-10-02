import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="header-nav-bar">
          <Tilt
            className="tilt"
            options={{ max: 55 }}
            style={{ height: 150, width: 150 }}
          >
            <img alt="logo" src={logo} />
            <h1 className="title">Golden Bucket List</h1>
          </Tilt>
          <div className="div-btn">
            <Link to="/Login">
              <button className="nav-btn">Sign In</button>
            </Link>
            <Link to="/">
              <button className="nav-btn">Resgister</button>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
