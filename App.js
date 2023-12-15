import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Landing from './components/pages/Landing';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import HelpAndSupport from './components/pages/Helpandsupport';
import Instructor from './components/pages/Instructor';
import Gradereport from './components/pages/Gradereport';
import Gradeform from './components/pages/Gradeform';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/landing' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/helpandsupport' element={<HelpAndSupport />} />
        <Route path='/instructor' element={<Instructor />} />
        <Route path='/gradereport' element={<Gradereport />} />
        <Route path='/gradeform' element={<Gradeform />} />
      </Routes>
    </Router>
  );
}

export default App;