import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <header className="bg-white shadow">
        <nav className="container flex items-center justify-between py-4 mx-auto">
          <a href="/" className="text-2xl font-bold text-gray-800">My Website</a>
          <div>
            <button className="px-4 py-2 mr-2 text-lg font-bold text-white bg-gray-500 rounded-md hover:bg-gray-600">
              <Link to="/login">Login</Link>
            </button>
            <button className="px-4 py-2 text-lg font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
              <Link to="/dashboard">Get Started</Link>
            </button>
          </div>
        </nav>
      </header>
      <main className="container py-12 mx-auto">
        <h1 className="mb-4 text-4xl font-bold">Welcome to My Website!</h1>
        <p className="mb-8 text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies tristique finibus. Phasellus vitae erat sed velit consectetur tincidunt.</p>
        <button className="px-2 py-1 text-sm font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </main>
      <footer className="py-4 text-center text-white bg-gray-800">
        <p>&copy; 2022 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;