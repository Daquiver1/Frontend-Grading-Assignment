import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import HelpAndSupport from './pages/HelpAndSupport';
import MissingGradeFormPage from './pages/MissingGradeFormPage';

function App() {
  return (
    
    
    <Router>
      <Routes>
        < Route path='/home' element={<Home />} />
        < Route path='/login' element={<Login/>} />
        < Route path='/help' element={<HelpAndSupport/>} />
        < Route path='/missing' element={<MissingGradeFormPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
