import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";

import "./Search.css";

const styles = theme => ({
  searchTextField: {
   marginLeft: "2%",
   marginRight: "2%",
  },
  input: {
    color: 'white'
  },
  inputFocused: {
    color: 'white !important'
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
        <div className="search-fields-container">
        <TextField className={classes.searchTextField}
          id="input-with-icon-textfield"
          label="Nazwa warsztatu"  
          InputProps={{
            className: classes.input,
            classes: {
              focused: classes.inputFocused
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" className='search-icon'/>
              </InputAdornment>
            )
          }}
        />
        <TextField className={classes.searchTextField} 
          id="input-with-icon-textfield"
          label="Lokalizacja"
          InputProps={{
            className: classes.input,
            classes: {
              focused: classes.inputFocused
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" className='search-icon' />
              </InputAdornment>
            )
          }}
        />
        <TextField className={classes.searchTextField}
          id="input-with-icon-textfield"
          label="Zakres usług"
          InputProps={{
            className: classes.input,
            classes: {
              focused: classes.inputFocused
            },
            startAdornment: (
              <InputAdornment position="start">
                <FontAwesomeIcon icon="search" className='search-icon'/>
              </InputAdornment>
            )
          }}
        />
        </div> 
      </form>
    );
  }
}

export default withStyles(styles)(Search);
