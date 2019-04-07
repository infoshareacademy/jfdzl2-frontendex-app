import React from "react";
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { filter } from 'lodash';
import db from '../../database/firebase';
import { setPlaces } from '../../store/actions/places';

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

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.setPlaces([1,2,3,4])

    console.log('submit');

    //zapytanie do bazy po liste mechnaikow 

    // db.ref('/places').on('value', snapshot => {
    //   const places = [];
    //   Object.entries(snapshot.val()).forEach(elem => {
    //     const place = {
    //       id: elem[0],
    //       ...elem[1]
    //     }
    //     places.push(place);
    //   });


    //po odpowiedzi korzystamy z metody filter (lodash, js) aby przefiltrowac wyniki na podstawie state'a komponentu  


    //wywolaniee akcji setMechanics

    //przekierowanie na sciezke /mechanics
    // });




  }


  render() {
    const { classes } = this.props;
    console.log('places', this.props.places);
    return (
      <form onSubmit={this.handleSubmit}>
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
                  <FontAwesomeIcon icon="search" className='search-icon' />
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
                  <FontAwesomeIcon icon="search" className='search-icon' />
                </InputAdornment>
              )
            }}
          />
        </div>
        <IconButton
          type='submit'
        >
          <SearchIcon />

          Search
        </IconButton>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    places: state.places
  }
}

const mapDispatchToProps = {
  setPlaces
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));
