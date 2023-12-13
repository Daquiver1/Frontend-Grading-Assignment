import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
 { name: 'Fall 2019', gpa: 3.5 },
 { name: 'Spring 2020', gpa: 3.8 },
 { name: 'Fall 2020', gpa: 4.0 },
];

const GPAChart = () => {
 return (
    <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="gpa" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
 );
};

export default GPAChart;