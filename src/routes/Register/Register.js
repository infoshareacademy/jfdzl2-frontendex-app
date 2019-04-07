import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

import './Register.css'

const styles = theme => ({
  mainButton: {
    margin: "5%",
    backgroundColor: "#EEEEEE",
    height: "3em",
    width: "10em",
    [theme.breakpoints.up("sm")]: {
      height: "3em",
      width: "20em"
    }
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: "black",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  loginButton: {
    margin: "2%",
    backgroundColor: "#EEEEEE",
    height: "3em",
    width: "10em",
    [theme.breakpoints.up("sm")]: {
      height: "3em",
      width: "20em"
    }
  },
});

class Register extends React.Component {
  state = {
    name: "",
    lastName: "",
    login: ""
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="register-container-flex register-main-container">
        <div className="register-content">
          <div className="register-form-container">
            <div className="register-form-header register-bottom-border">
              <p>REJESTRACJA</p>
            </div>
            <div className="register-container-flex">
              <TextField
                id="email"
                label="E-mail"
                placeholder="E-mail"
                margin="normal"
                type="email"
                className={classes.textField}
              />
            </div>
            <div className="register-container-flex">
              <TextField
                id="password"
                label="Hasło"
                placeholder="Hasło"
                type="password"
                margin="normal"
                className={classes.textField}
              />
            </div>
            <div className="register-container-flex">
              <TextField
                id="password-check"
                label="Powtórz Hasło"
                placeholder="Powtórz Hasło"
                type="password"
                margin="normal"
                className={classes.textField}
              />
            </div>
            <Fab
              variant="extended"
              aria-label="Add"
              className={classes.loginButton}
            >
              Dołącz!
            </Fab>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
