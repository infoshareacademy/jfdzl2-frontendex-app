import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { auth } from '';

import "./Login.css";

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

class Login extends React.Component {
  state = {
    login: "",
    password: ""
  };


  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value })
    console.log('change')
  }
  handleSubmit = () => {
    console.log('handlesubmit')
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="login-container-flex login-main-container">
        <div className="login-content">
          <div className="login-form-container">
            <div className="login-form-header login-bottom-border">
              <p>LOGOWANIE</p>
            </div>
            <div className="login-container-flex">
              <FontAwesomeIcon icon="user" className="login-icon" />
              <TextField
                id="login"
                label="Login"
                placeholder="Login"
                margin="normal"
                className={classes.textField}
                onChange={this.handleChange}
                value={this.state.login}
              />
            </div>
            <div className="login-container-flex">
              <FontAwesomeIcon icon="lock" className="login-icon" />
              <TextField
                id="password"
                label="Password"
                type="password"
                placeholder="Password"
                margin="normal"
                className={classes.textField}
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
            <Fab
              variant="extended"
              aria-label="Add"
              className={classes.loginButton}
              onClick={this.handleSubmit}
            >
              Zaloguj
            </Fab>
            <div className="login-password-remind">
              <p>Przypomnij hasło</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
