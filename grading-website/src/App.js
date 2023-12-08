import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import HelpAndSupport from './pages/HelpAndSupport';

function App() {
  return (
    
    
    <Router>
      <Routes>
        < Route path='/home' element={<Home />} />
        < Route path='/login' element={<Login/>} />
        < Route path='/help' element={<HelpAndSupport/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
