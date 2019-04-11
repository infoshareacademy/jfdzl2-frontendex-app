import React from "react";
import { connect } from 'react-redux';
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { filter } from 'lodash';
import { setPlaces } from '../../store/actions/places';
import { setFilters } from '../../store/actions/filters';


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
  },
  iconButton: {
    backgroundColor: 'white',
    borderRadius: '5px',
    fontSize: '80%',
    padding: '5px 25px'

  }
});

class Search extends React.Component {

  state = {
    name: null,
    location: null,
    specialization: null,
    brand: null
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setFilters(this.state);
    console.log('submit');

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
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
          <TextField fullWidth className={classes.searchTextField}
          onChange={this.handleChange}
            id="input-with-icon-textfield"
            name='name'
            label="Nazwa warsztatu"
            InputProps={{
              className: classes.input,
              classes: {
                focused: classes.inputFocused
              },
            }}
          />
          <TextField fullWidth className={classes.searchTextField}
            onChange={this.handleChange}
            id="input-with-icon-textfield"
            label="Lokalizacja"
            name='location'
            InputProps={{
              className: classes.input,
              classes: {
                focused: classes.inputFocused
              },
            }}
          />
          <TextField fullWidth
            className={classes.searchTextField}
            onChange={this.handleChange}
            name='brand'
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
            {this.props.brands.map(brand =>
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            )}
          </TextField>
          <TextField fullWidth
            className={classes.searchTextField}
            onChange={this.handleChange}
            name='specialization'
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
            {this.props.services.map(service =>
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            )}
          </TextField>
          <IconButton
            variant='contained'
            size='medium'
            type='submit'
            className={classes.iconButton}
            onSubmit={this.handleSubmit}
          >
            <SearchIcon />
            Szukaj
        </IconButton>
        </div>
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
  setPlaces,
  setFilters
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Search));
