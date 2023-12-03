// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; // Adjust the import path based on your project structure

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={LandingPage} />
        {/* Add more routes for other pages */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
