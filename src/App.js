import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MyNavbar } from './landing';
import Login from './login';
import Contact from './contact';
import Dashboard from './dashboard';
import Report from './report';
import Grade from './grade';
import Help from './help';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyNavbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/report" element={<Report />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/help" element={<Help />} />
       
      </Routes>
    </Router>
  );
};

export default App;
