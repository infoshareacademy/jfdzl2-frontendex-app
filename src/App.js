import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


import Main from './routes/Main/Main';
import ApplicationBar from './components/AppBar/AppBar';
import Stats from './routes/Stats/Stats';
import Mechanic from './routes/Mechanic/Mechanic';
import MechanicCreate from './routes/Mechanic/MechanicCreate';
import MechanicList from './routes/MechanicList/MechanicList';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import MechanicEdit from './routes/Mechanic/MechanicEdit';
import { setServices } from './store/actions/services';
import { setBrands } from './store/actions/brands';
import db from './database/firebase';


library.add(faUser)
library.add(faLock)
library.add(faSearch)


class App extends Component {

  componentDidMount() {

		db.ref('/services').on('value', snapshot => {
			const services = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const service = {
					id: elem[0],
					...elem[1]
				}
				services.push(service);
			});

			this.props.setServices(services);

    });
    
    db.ref('/brands').on('value', snapshot => {
			const brands = [];
			Object.entries(snapshot.val()).forEach(elem => {
				const brand = {
					id: elem[0],
					...elem[1]
				}
				brands.push(brand);
			});

			this.props.setBrands(brands);

    });
	}


  render() {
    return (
      <Router>

        <div>
          <ApplicationBar></ApplicationBar>

          <Route exact path="/" component={Main} />
          <Route path="/stats" component={Stats} />
          <Route path="/create" component={MechanicCreate} />
          <Route path="/edit/:id" component={MechanicEdit}/>
          <Route path="/mechanic/:id" component={Mechanic} />
          <Route path="/mechanic-list" component={MechanicList} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  services: state.services
})

const mapDispatchToProps = dispatch => ({
  setServices: (services) => dispatch(setServices(services)),
  setBrands: (brands) => dispatch(setBrands(brands))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
