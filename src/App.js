import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {faLock} from '@fortawesome/free-solid-svg-icons';

import Main from './routes/Main/Main';
import ApplicationBar from './components/AppBar/AppBar';
import Stats from './routes/Stats/Stats';    
import Mechanic from './routes/Mechanic/Mechanic';
import MechanicList from './routes/MechanicList/MechanicList';
import Login from './routes/Login/Login';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/Register/Register';

library.add(faUser)
library.add(faLock)


class App extends Component {
  render() {
    return (
      <Router>
       
        <div>
        <ApplicationBar></ApplicationBar>

          <Route exact path="/" component={Main} />
          <Route path="/stats" component={Stats} /> 
          <Route path="/mechanic" component={Mechanic} />
          <Route path="/mechanic-list" component={MechanicList} />
          <Route path="/login" component={Login}/>>
          <Route path="/loginForm" component={LoginForm}/>
          <Route path="/register" component={Register}/>>

        </div>
      </Router>
    );
  }
}

export default App;
