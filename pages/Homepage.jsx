import React from 'react';
import UniversityLogo from '../images/logo5.png';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the University of Ghana</h1>
        <p className="text-lg mb-8">Empowering Minds, Transforming Lives</p>
        <img
          src={UniversityLogo}
          alt="University Logo"
          className="w-62 h-32 mx-auto mb-4"
        />
        <p className="text-gray-300">Explore our innovative programs and services.</p>
      </div>
    </div>
  );
};

export default HomePage;
