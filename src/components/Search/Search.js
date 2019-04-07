import React from "react";
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { filter } from 'lodash';
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

    console.log('submit');

   


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
            name='name'
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
            name='location'
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
           <TextField
          id="brands"
          select
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
        {this.props.brands.map( brand => 
          <option key={brand.id} value={brand.id}>
          {brand.name}
        </option>
        )}
        </TextField>
           <TextField
          id="services"
          select
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
        {this.props.services.map( service => 
          <option key={service.id} value={service.id}>
          {service.name}
        </option>
        )}
        </TextField>
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
    places: state.places,
    services: state.services,
    brands: state.brands
  }
}

const mapDispatchToProps = {
  setPlaces
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));
