import React, { Component } from "react";

import Button from "./components/Button";
import TextField from "./components/TextField";

class App extends Component {
  state = {
    name: "Dima"
  };

  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({ name: "vasya" })}
          label={"Click me"}
        />
        <TextField placeholder={"add todo"} />
      </div>
    );
  }
}

export default App;
