import React from "react";
import Particles from "react-particles-js";
import Routes from "./Routes/Routes";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  saveUser = user => {
    this.setState({ user });
  };
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Routes />
      </div>
    );
  }
}

export default App;
