import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";

import "./Search.css";

const styles = theme => ({
  searchTextField: {
   
    [theme.breakpoints.up("sm")]: {
      
    }
  }
});

class Search extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <form>
        <div className="container-flex">
          <h2>Szukaj mechanika</h2>
        </div>
        <TextField className={classes.searchTextField}
          id="input-with-icon-textfield"
          label="Nazwa warsztatu"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" />
              </InputAdornment>
            )
          }}
        />
        <TextField className={classes.searchTextField}
          id="input-with-icon-textfield"
          label="Lokalizacja"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" />
              </InputAdornment>
            )
          }}
        />
        <TextField className={classes.searchTextField}
          id="input-with-icon-textfield"
          label="Zakres usług"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" />
              </InputAdornment>
            )
          }}
        />
      </form>
    );
  }
}

export default withStyles(styles)(Search);
