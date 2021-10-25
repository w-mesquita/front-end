import { FormControl, Input, InputLabel } from "@material-ui/core";

import "./styles.css";

export const SearchForm = ({ searchValue, handleChange} ) => {
  return (
    <FormControl >
      <InputLabel htmlFor="input-with-icon-adornment">Procurar...</InputLabel>
      <Input className="search-form"
        id="standard-search"
        label="Procurar..."
        type="search"
        value={searchValue}
        onChange={handleChange}
      />
    </FormControl>
  );
} 
