import Button from "@material-ui/core/Button";
import { Component } from "react";
import './styles.css'

export class Buttons extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <Button
        variant="contained"
        color="primary"
        className="button-main"
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </Button>
    );
  }
}
