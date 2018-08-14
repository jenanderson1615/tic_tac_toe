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
  render() {
    return (
      <span>
        {this.props.winningBox && (
          <Button className={this.props.classes.winningBox} variant="outlined">
            {this.props.character}
          </Button>
        )}
        {!this.props.winningBox && (
          <Button color="default" variant="outlined">
            {this.props.character}
          </Button>
        )}
      </span>
    );
  }
}

export default withStyles(styles)(Square);
