import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const state = {
  labels: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  datasets: [
    {
      label: 'Class strength',
      backgroundColor: '#007bff',
      borderColor: '#007bff',
      borderWidth: 1,
      data: [38, 47, 19, 20, 40, 50, 39],
    },
  ],
}

export default class BarChart extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          height={100}
          
          options={{
            title: {
              display: true,
              text: 'Class strength',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
    )
  }
}
