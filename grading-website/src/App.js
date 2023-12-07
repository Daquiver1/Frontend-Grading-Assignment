import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    
    
    <Router>
      <Home/>
      <Routes>
        < Route path='/home' element={<Home />} />
      
      </Routes>
    </Router>
    
  );
}

export default App;
