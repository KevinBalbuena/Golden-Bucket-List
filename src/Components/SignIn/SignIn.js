import React, { Component } from "react";
import Header from "../Header/Header";
import axios from "axios";
import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  login = async () => {
    const { email, password } = this.state;
    const loggedInUser = await axios.post("http://localhost:4000/login_user", {
      email,
      password
    });
    this.props.saveUser(loggedInUser.data);
    this.props.history.push("/home");
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <>
        <Header />
        <article className="main-article">
          <main className="fixed">
            <div className="measure">
              <fieldset id="sign_up" className="form">
                <legend className="sign-in">Sign In</legend>
                <div style={{ marginTop: "1rem" }}>
                  <label htmlFor="email-address">Email</label>
                  <input
                    className="user-input"
                    type="email"
                    name="email-address"
                    id="email-address"
                    value={this.state.email}
                    onChange={this.onEmailChange}
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <label htmlFor="password">Password</label>
                  <input
                    className="user-input"
                    type="password"
                    name="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div style={{ marginTop: "1rem" }}>
                <button onClick={this.login} className="sub-btn">
                  Submit
                </button>
              </div>
              <div className="mt3">
                <p className="dim">Register</p>
              </div>
            </div>
          </main>
        </article>
      </>
    );
  }
}

export default SignIn;
