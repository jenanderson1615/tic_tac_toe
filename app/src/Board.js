import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  handleSquareChange = position => {
    this.props.handleSquareChange(position);
  };

  render() {
    const squares = this.props.squares;
    return (
      <div>
        <div>
          <Square
            id={0}
            winningBox={false}
            character={squares[0]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={1}
            winningBox={false}
            character={squares[1]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={2}
            winningBox={false}
            character={squares[2]}
            handleSquareChange={this.handleSquareChange}
          />
        </div>
        <div>
          <Square
            id={3}
            winningBox={false}
            character={squares[3]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={4}
            winningBox={false}
            character={squares[4]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={5}
            winningBox={false}
            character={squares[5]}
            handleSquareChange={this.handleSquareChange}
          />
        </div>
        <div>
          <Square
            id={6}
            winningBox={false}
            character={squares[6]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={7}
            winningBox={false}
            character={squares[7]}
            handleSquareChange={this.handleSquareChange}
          />
          <Square
            id={8}
            winningBox={false}
            character={squares[8]}
            handleSquareChange={this.handleSquareChange}
          />
        </div>
      </div>
    );
  }
}

export default Board;
