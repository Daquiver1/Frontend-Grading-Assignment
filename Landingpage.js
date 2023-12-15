// LandingPage.js

import React from 'react';
import "tailwindcss/tailwind.css";
import './home.css'

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-bold mb-4">Missing Grade System</h1>
      <p className="text-gray-600 mb-6">
        Welcome to the Missing Grade System, a platform designed to track and manage missing grades efficiently.
      </p>
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <p className="text-gray-600 mb-6">
        The Missing Grade System aims to streamline the process of identifying and addressing missing grades in educational institutions. It provides a centralized platform for teachers, students, and administrators to collaborate and resolve missing grade issues.
      </p>
      <h2 className="text-2xl font-bold mb-4">Reason for Creation</h2>
      <p className="text-gray-600 mb-6">
        The primary goal behind creating this system is to enhance communication and transparency regarding missing grades. By offering a user-friendly interface, it simplifies the tracking of missing grades, reducing administrative burden and ensuring timely resolution.
      </p>
      <h2 className="text-2xl font-bold mb-4">Features</h2>
      <ul className="list-disc list-inside text-gray-600">
        <li>Efficient tracking of missing grades.</li>
        <li>Real-time notifications for teachers and students.</li>
        <li>Collaborative tools for communication between stakeholders.</li>
        <li>Automated reminders for pending grade submissions.</li>
      </ul>
    </div>
  </div>
  );
};

export default LandingPage;
