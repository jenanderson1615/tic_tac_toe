import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Board />
        </div>
        <div>The winner is X!</div>
      </div>
    );
  }
}

export default App;
