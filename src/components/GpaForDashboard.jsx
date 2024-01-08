import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


export default function App() {

  ChartJS.register(ArcElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true
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

  const data = {
    labels: ['Blue', ""],
    datasets: [
      {
        label: 'GPA',
        data: [3.9, 0.1],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'gray',
        ],
        borderColor: [
          'red',
          'gray',
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
