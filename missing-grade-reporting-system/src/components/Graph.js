import React from 'react';
// import Navbar from '../navbar';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} 
from 'chart.js'; import {Bar} from 'react-chartjs-2'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

function Graph() {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Grade Overview'
            },
        },
    }

    const data = {
        labels: ['DCIT 201', 'DCIT 203', 'DCIT 205', 'DCIT 207', 'DCIT 209', 'CBAS 210'],
        datasets: [
            {
                label: 'Grades',
                data: [90, 85, 50, 78, 80, 25],
                backgroundColor: 'rgba(75,192,192,1)',
                fill: false
            },
        ],
    };


    return (
        <Bar options={options} data={data} style={{height:'50px'}}/>
    );
}

export default Graph;