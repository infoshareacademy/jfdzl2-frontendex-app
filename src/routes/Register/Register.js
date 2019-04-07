import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { auth } from '../../database/firebase';
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
    email: '',
    password: '',
    passwordCheck: '',
    errorMessage: ''
  };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    if (this.state.password !== this.state.passwordCheck) {
      this.setState({ errorMessage: 'hasła nie są zgodne' })
    } else {
      auth
        .createUserWithEmailAndPassword(
          this.state.email, this.state.password
        )
        .then(response => {
          console.log('Response: ', response);
          this.props.history.push('/');
        })
        .catch(error => {
          console.error(`Error: ${error.code} ${error.message}`);
        })
      this.setState({ errorMessage: '' })
    }
    event.preventDefault()
  }

  render() {

    const { classes } = this.props;
    const { errorMessage } = this.state;
    return (
      <div className="register-container-flex register-main-container">
        <div className="register-content">
          <div className="register-form-container">
            <div className="register-form-header register-bottom-border">
              <p>REJESTRACJA</p>
            </div>
            {errorMessage}
            <form onSubmit={this.handleSubmit}>

              <div className="register-container-flex">
                <FontAwesomeIcon icon={faAt} className="login-icon" />
                <TextField
                  onChange={this.handleChange}
                  id="email"
                  label="E-mail"
                  placeholder="E-mail"
                  margin="normal"
                  type="email"
                  value={this.state.email}
                  className={classes.textField}
                />
              </div>

              <div className="register-container-flex">
                <FontAwesomeIcon icon="lock" className="login-icon" />
                <TextField
                  onChange={this.handleChange}
                  id="password"
                  label="Hasło"
                  placeholder="Hasło"
                  type="password"
                  margin="normal"
                  value={this.state.password}
                  className={classes.textField}
                />
              </div>

              <div className="register-container-flex">
                <FontAwesomeIcon icon="lock" className="login-icon" />
                <TextField
                  onChange={this.handleChange}
                  id="passwordCheck"
                  label="Powtórz Hasło"
                  placeholder="Powtórz Hasło"
                  type="password"
                  margin="normal"
                  value={this.state.passwordCheck}
                  className={classes.textField}
                />
              </div>

              <Fab
                type="submit"
                variant="extended"
                aria-label="Add"
                className={classes.loginButton}
              >
                Dołącz!
            </Fab>

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Register);
