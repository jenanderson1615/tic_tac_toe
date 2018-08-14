import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  winningBox: {
    backgroundColor: red[500]
  }
};

class Square extends Component {
  handleSquareClick() {
    this.props.handleSquareChange(this.props.id);
  }

  render() {
    return (
      <span>
        {this.props.winningBox && (
          <Button
            className={this.props.classes.winningBox}
            variant="outlined"
            onClick={() => {
              this.handleSquareClick();
            }}
          >
            {this.props.character}
          </Button>
        )}
        {!this.props.winningBox && (
          <Button
            color="default"
            variant="outlined"
            onClick={() => {
                this.handleSquareClick();
              }}
          >
            {this.props.character}
          </Button>
        )}
      </span>
    );
  }
}

export default withStyles(styles)(Square);
