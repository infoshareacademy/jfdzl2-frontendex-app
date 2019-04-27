import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from '../../database/firebase';

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


  handleChange = (event) => {
    console.log("Piszę coś")
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    console.log("Klik")
    auth
      .signInWithEmailAndPassword(
        this.state.login, this.state.password
      )
      .then(response => {
        console.log('Response: ', response);
        this.props.history.push('/');
      })
      .catch(error => {
        console.error(`Error: ${error.code} ${error.message}`);
      })
    console.log(this.state);
    this.setState({ login: '', password: '' });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="login-container-flex login-main-container">
        <div className="login-content">
          <div onSubmit={this.handleSubmit} className="login-form-container">
            <div className="login-form-header login-bottom-border">
              <p>LOGOWANIE</p>
            </div>
              <form onSubmit={this.handleSubmit}>
                <div className="login-container-flex">
                  <FontAwesomeIcon icon="user" className="login-icon" />
                  <TextField
                    onChange={this.handleChange}
                    id="login"
                    name="login"
                    label="Login"
                    placeholder="Login"
                    margin="normal"
                    className={classes.textField}
                  />
                </div>
                <div className="login-container-flex">
                  <FontAwesomeIcon icon="lock" className="login-icon" />
                  <TextField
                    onChange={this.handleChange}
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Hasło"
                    margin="normal"
                    className={classes.textField}
                  />
                </div>
                <Fab
                  variant="extended"
                  type='submit'
                  aria-label="Add"
                  className={classes.loginButton}
                >
                  Zaloguj
                </Fab>
                <div className="login-password-remind">
                  <p>Przypomnij hasło</p>
                </div>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
