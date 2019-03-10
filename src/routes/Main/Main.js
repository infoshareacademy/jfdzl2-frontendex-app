import React from "react";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
        <div className="main-description-container">
          <div className="main-title-container">
            <h1 className="main-app-name">Motoondo</h1>
          </div>
          <div className="main-container-flex">
            <h2>Znajdź mechanika</h2>
          </div>
          <div className="main-buttons-container">
            <Link to="/login" className={classes.linkStyle}>
              <Fab
                variant="extended"
                aria-label="Add"
                className={classes.mainButton}
              >
                Zaloguj
              </Fab>
            </Link>
            <Link to="/register" className={classes.linkStyle}>
            <Fab
              variant="extended"
              aria-label="Add"
              className={classes.mainButton}
            >
              Dołącz do nas
            </Fab>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
