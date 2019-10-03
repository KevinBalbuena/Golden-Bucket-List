import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { setUser } from "../../dux/reducer";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      register: true
    };
  }

  register = async () => {
    const { email, username, password } = this.state;
    const registerdUser = await axios.post(
      "http://localhost:4000/register_user",
      {
        email,
        username,
        password
      }
    );
    this.props.setUser(registerdUser.data);
    this.props.history.push("/home");
  };
  onNameChange = e => {
    this.setState({ username: e.target.value });
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
                <legend className="sign-in">Register</legend>
                <div style={{ marginTop: "1rem" }}>
                  <label className="sign-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="user-input"
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.onNameChange}
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <label className="sign-label" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="user-input"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <label className="sign-label" htmlFor="password">
                    Password
                  </label>
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
                <button onClick={this.register} className="sub-btn">
                  Register
                </button>
              </div>
            </div>
          </main>
        </article>
      </>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}
const mapDispatchToProps = {
  setUser
};

const authEnhancingFunction = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default authEnhancingFunction(Register);
