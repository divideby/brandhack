import React, { Component } from "react";

import { TodoList } from "./containers";

class App extends Component {
  state = {
    name: "Dima"
  };

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
