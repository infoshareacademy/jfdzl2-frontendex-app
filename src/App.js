import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from './routes/Main/Main';
import Stats from './routes/Stats/Stats';
import ApplicationBar from './components/AppBar/AppBar';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        

        <Router>
          <div>
            <ApplicationBar></ApplicationBar>

            <Route exact path="/" component={Main} />
            <Route path="/stats" component={Stats} />

          </div>
        </Router>
        <div>
          <Dashboard></Dashboard>
        </div>
      </div>

    );
  }
}

export default App;
