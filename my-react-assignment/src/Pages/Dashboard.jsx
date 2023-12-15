
/// Dashboard.jsx

import React from 'react';

const Dashboard = ({ user }) => {
  // Placeholder data for student analytics
  const analyticsData = {
    assignmentsSubmitted: 25,
    timeSpentAtLectures: '50 hours',
    totalQuizzesTaken: 15,
    studentsTakingCourse: 150,
    lecturesRating: 4.5,
    paymentAmount: '$500',
  };

  return (
    <div className="container mx-auto bg-white p-6">
      {/* Greeting and Search Section */}
      
      <div className="bg-white p-4 mb-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Female Icon */}
          <i className="fas fa-female text-3xl text-black mr-2"></i>
          <h2 className="text-2xl font-normal text-black">
            Hey Zheenat, <br />{user?.name} BSc Information Technology {user?.program}
          </h2>
     

        </div>
        <div>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-gray-300 rounded-md"
          />
          <button className="ml-2 bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-200">
            Search
          </button>
        </div>
      </div>

      {/* Analytics Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Here are your analytics</h3>
      </div>

      {/* Student Analytics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {Object.entries(analyticsData).map(([key, value], index) => (
          <div
            key={index}
            className="bg-green-200 p-4 rounded-md flex items-center"
          >
            <div className="mr-4">
              {key === 'assignmentsSubmitted' && (
                <i className="fas fa-clipboard-check text-3xl text-green-600"></i>
              )}
              {key === 'timeSpentAtLectures' && (
                <i className="far fa-clock text-3xl text-blue-600"></i>
              )}
              {key === 'totalQuizzesTaken' && (
                <i className="fas fa-poll text-3xl text-purple-600"></i>
              )}
              {key === 'studentsTakingCourse' && (
                <i className="fas fa-users text-3xl text-yellow-600"></i>
              )}
              {key === 'lecturesRating' && (
                <i className="fas fa-star text-3xl text-pink-600"></i>
              )}
              {key === 'paymentAmount' && (
                <i className="fas fa-dollar-sign text-3xl text-orange-600"></i>
              )}
            </div>
            <div>
              <p className="text-xl font-bold">{value}</p>
              <p>{key.replace(/([A-Z])/g, ' $1')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
