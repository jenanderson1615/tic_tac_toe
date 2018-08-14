import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class Board extends Component {
  render() {
    return (
      <div>
        <div>
          <Button variant="outlined" />
          <Button variant="outlined" />
          <Button variant="outlined" />
        </div>
        <div>
          <Button variant="outlined" />
          <Button variant="outlined" />
          <Button variant="outlined" />
        </div>
        <div>
          <Button variant="outlined" />
          <Button variant="outlined" />
          <Button variant="outlined" />
        </div>
      </div>
    );
  }
}

export default Board;
