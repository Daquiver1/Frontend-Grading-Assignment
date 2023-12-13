
import React from 'react';
import Navbar from '../Components/Navbar';

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        {/* Your dashboard content here */}
      </div>
      {/* Footer Component */}
    </div>
    </>
  );
};

export default Dashboard;
