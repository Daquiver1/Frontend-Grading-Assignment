import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';




export default function App({subjects, marks, sem, borderCol, backgroundCol}) {
  

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    tension: 0.3,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true
      },
      title: {
        display: false,
        text: 'Performance',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };
  
  const labels = subjects;
  const data = {
    labels,
    datasets: [
      {
        label: sem,
        data: marks,
        borderColor: borderCol,
        backgroundColor: backgroundCol,
      },  
    ]
  };

  return <div className='w-[400px]'>
    <Line options={options} data={data} />
  </div>;
}
