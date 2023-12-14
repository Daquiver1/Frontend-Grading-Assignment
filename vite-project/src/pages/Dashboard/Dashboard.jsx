import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import home1 from '../../assets/images/card1.jpg';

const gradeData = {
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

const missingGradeData = {
  labels: ['Math', 'Science', 'English', 'History', 'Art'],
  datasets: [
    {
      data: [0, 1, 2, 3, 1],
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
      hoverBackgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    },
  ],
};

const gradeDistributionData = {
  labels: ['A', 'B', 'C', 'D', 'F'],
  datasets: [
    {
      label: 'Grade Distribution',
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.6)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: [15, 25, 20, 10, 5],
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="bg-blue-900 text-white w-64 flex-shrink-0">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="block p-2 rounded transition duration-300 hover:bg-blue-800">
                Grades
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="block p-2 rounded transition duration-300 hover:bg-blue-800">
                Missing Grades
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <header className="bg-white shadow-md p-4 mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Welcome to Your Dashboard</h2>
          <div className="flex items-center space-x-4">
            <img src={home1} alt="User Profile" className="w-8 h-8 rounded-full" />
            <button className="text-blue-900 hover:underline">Logout</button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Grade Overview</h3>
            <p className="text-gray-700">Your current grades summary goes here.</p>
            <Bar data={gradeData} />
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-2">Missing Grades</h3>
            <div className="bg-yellow-200 p-2 rounded-md mb-2">
              <p className="text-yellow-800 font-semibold">Alert: You have missing grades!</p>
              <p className="text-yellow-700">Check your missing grades and take action.</p>
              <Doughnut data={missingGradeData} />
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md col-span-2">
            <h3 className="text-lg font-semibold mb-2">Grade Distribution Chart</h3>
            <Bar data={gradeDistributionData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
