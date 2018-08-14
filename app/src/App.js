import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  state = {
    squares: {
      0: '',
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: ''
    }
  }

  hasValueSet(currentValue) {
    return currentValue !== '';
  }

  //if there's an even amount of values, its x's turn.  if odd, its o's turn
  calculateTurn = () => {
    let squareValues = Object.values(this.state.squares)
    let setSquares = squareValues.filter(this.hasValueSet);
    if (setSquares.length % 2 === 0)
      return 'X';
    else
      return 'O';
  } 

  changeSquare = (position) => {
    let squaresCopy = Object.assign({}, this.state.squares);
    let valueForSquare = this.calculateTurn();
    squaresCopy[position] = valueForSquare;
    this.setState({
      squares: squaresCopy
    });
  }

  render() {
    return (
      <div>
        <div>
          <Board handleSquareChange={this.changeSquare} squares={this.state.squares}/>
        </div>
        <div>The winner is X!</div>
      </div>
    );
  }
}

export default App;
