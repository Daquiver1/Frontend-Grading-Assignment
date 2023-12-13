// App.js

import React from 'react';
import HomePage from './components/HomePage/HomePage'; // Adjust the path based on your project structure
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
