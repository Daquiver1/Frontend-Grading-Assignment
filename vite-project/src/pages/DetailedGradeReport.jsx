// DetailedGradeReport.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const DetailedGradeReport = () => {
  // Sample data for the chart
  const chartData = {
    labels: ['Math', 'Science', 'English', 'History', 'Art'],
    datasets: [
      {
        label: 'Your Grades',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [90, 85, 95, 80, 75],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Detailed Report</h2>

      {/* Grade Distribution Chart */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-2">Grade Distribution Chart</h3>
        <Bar data={chartData} />
      </div>

      {/* Additional content for the detailed report */}
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
        <p className="text-gray-700">
          Add your detailed report content here. This could include more charts, tables, or any other relevant information.
        </p>
      </div>
    </div>
  );
};

export default DetailedGradeReport;
