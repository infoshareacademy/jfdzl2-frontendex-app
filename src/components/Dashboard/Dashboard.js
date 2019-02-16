import React from 'react'
import DonutChart from 'react-svg-donut'

const title="Zarejestrowani"
const data = [
  {name: "Elektromechanicy", value: 4},
  {name: "Lakiernicy", value: 5},
  {name: "costamnicy", value: 6},
  {name: "costamnicy2", value: 1},
  {name: "costamnicy3", value: 4},
]
 
const Dashboard = () => (
  <DonutChart
    size={250}
    title={title}
    data={data}
    onHover={(i) => {
      if (i>=0) {
        console.log("Selected ", data[i].name)
      } else {
        console.log("Mouse left donut")
      }
    }
  }
    innerRadius={0.5}
    outerRadius={0.8}
    activeOffset={0.1}
  />
)
export default Dashboard