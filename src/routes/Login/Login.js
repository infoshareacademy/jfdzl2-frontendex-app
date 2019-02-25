import React from "react";
import { withStyles } from "@material-ui/core/styles";

import "./Login.css";
import LoginForm from "../../components/LoginForm/LoginForm";

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
  }
});

function Login(props) {
  const { classes } = props;
  return (
    <div className="login-container-flex login-main-container">
      <div className="login-content">
       <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
