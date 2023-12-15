import React from 'react';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <nav className="w-full bg-gray-800 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">Your System</a>
          <div className="space-x-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your System</h1>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}

export default LandingPage;