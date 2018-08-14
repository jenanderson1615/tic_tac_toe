import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <Square winningBox={true} character="x" />
          <Square winningBox={false} character="o" />
          <Square winningBox={false} character="x" />
        </div>
        <div>
          <Square winningBox={false} character="x" />
          <Square winningBox={true} character="x" />
          <Square winningBox={false} character="o" />
        </div>
        <div>
          <Square winningBox={false} character="o" />
          <Square winningBox={false} character="o" />
          <Square winningBox={true} character="x" />
        </div>
      </div>
    );
  }
}

export default Board;
