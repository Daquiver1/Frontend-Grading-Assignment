// src/components/GradeReportPage.jsx
import React from 'react';
import Navbar from '../Components/Navbar';

const GradeReportPage = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Grade Report</h1>
        {/* Your grade report content here */}
      </div>
      {/* Footer Component */}
    </div>
    </>
    
  );
};

export default GradeReportPage;
