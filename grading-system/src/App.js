import React from 'react';
import {BrowserRouter as Router, Route , Link , Routes , Navigate } from 'react-router-dom'
import Landingpage from './Pages/Landingpage';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';

import GradeForms from './Pages/gradeforms';

import GradeReport from './Pages/gradereport';

import Instructors from './Pages/instructors';

import SignOut from './Pages/signout';

import Help from './Pages/help';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/gradeforms" element={<GradeForms />} />
        <Route path="/dashboard/gradereport" element={<GradeReport />} />
        <Route path="/dashboard/instructors" element={<Instructors />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
