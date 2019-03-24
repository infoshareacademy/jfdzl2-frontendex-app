import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Search from '../../components/Search/Search';



import "./Main.css";

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
  linkStyle: {
    display: "flex",
    justifyContent: "center",
    height: "3em",
    width: "10em",
    margin: "2%",
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      height: "3em",
      width: "20em"
    }
  }
});

function Main(props) {
  const { classes } = props;
  return (
    <div className="main-container main-container-flex">
      <div className="main-content">
        <div className="main-logo-container" />
          <div className="main-title-container">
            <h1 className="main-app-name">Motoondo</h1>
          </div>
      </div>
      <div className="form-container">
      <Search></Search>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
