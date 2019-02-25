import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";

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
  }
});

function Main(props) {
  const { classes } = props;
  return (
    <div className="main-container container-flex">
      <div className="content">
        <div className="logo-container">
        </div>
        <div className="description-container">
          <div className="title-container">
            <h1 className="app-name">Motoondo</h1>
          </div>
          <div className="container-flex">
            <h2>Znajdź mechanika</h2>
          </div>
          <div className="buttons-container">
            <Fab
              variant="extended"
              aria-label="Add"
              className={classes.mainButton}
            >
              Zaloguj
            </Fab>
            <Fab
              variant="extended"
              aria-label="Add"
              className={classes.mainButton}
            >
              Dołącz do nas
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Main);
