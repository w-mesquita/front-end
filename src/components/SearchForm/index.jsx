import { FormControl, Input, InputLabel } from "@material-ui/core";
import { Component } from "react";

import "./styles.css";

export class SearchForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <FormControl >
        <InputLabel htmlFor="input-with-icon-adornment">Procurar...</InputLabel>
        <Input className="search-form"
          id="standard-search"
          label="Procurar..."
          type="search"
          value={value}
          onChange={onChange}
        />
      </FormControl>
    );
  }
}
