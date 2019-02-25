import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import {Link} from 'react-router-dom';

import "./Register.css";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: "black",
    width: "350px"
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
  }
});

class Register extends React.Component {
  state = {
    name: "",
    login: "",
    password: ""
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="login-form-container">
        <div className="login-form-header">
          <div className="login-bottom-border-register">
            <p><Link to='/loginForm'>LOGOWANIE</Link></p>
          </div>
          <div className="login-bottom-border">
            <p>REJESTRACJA</p>
          </div>
        </div>
        <div className="login-container-flex">
          <TextField
            id="login"
            label="Login"
            placeholder="Login"
            margin="normal"
            className={classes.textField}
          />
        </div>
        <div className="login-container-flex">
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="Hasło"
            margin="normal"
            className={classes.textField}
          />
        </div>
        <Fab
          variant="extended"
          aria-label="Add"
          className={classes.loginButton}
        >
          Zaloguj
        </Fab>
        <div className="login-password-remind">
            <p>Przypomnij hasło</p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
