import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement);

export const data = {
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

export default function App() {
  return (
    <div className='w-[150px]'>
      <Pie data={data} />
    </div>
  )
}
