import React from 'react'
import './Dashboard.css'
import Chart from './Chart'
import AppFeatures from './AppFeatures'

class Dashboard extends React.Component {

  render() {
    return (
      <div>
      <div className="background-container"></div>
        <div className="stats-main-container">
          <AppFeatures />
          <Chart />
        </div>
      </div>
      
    )
  }
}
export default Dashboard

