import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


export default function App({gpa}) {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        position: "none"
      },
      title: {
        display: false,
        text: 'GPA',
      },
    }
  }

  let gpaV = gpa
  let gpaCalc = 4 - gpaV

  const data = {
    labels: ["", ""],
    datasets: [
      {
        label: 'GPA',
        data: [gpaV, gpaCalc],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'gray',
        ],
        borderColor: [
          '#081A51',
          '#081A51',
        ],
        borderWidth: 4,
      },
    ],
  };

  return (
    <div className='w-[100px]'>
      <Pie data={data} options={options}/>
    </div>
  )
}
