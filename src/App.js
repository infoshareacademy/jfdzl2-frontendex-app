import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './routes/Main/Main';
 
import ApplicationBar from './components/AppBar/AppBar';
import Stats from './routes/Stats/Stats';    
import Mechanic from './routes/Mechanic/Mechanic';
import MechanicList from './routes/MechanicList/MechanicList';


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

        </div>
      </Router>
    );
  }
}

export default App;
