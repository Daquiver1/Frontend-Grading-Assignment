// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/landingPage';
import Dashboard from './Pages/dashboard';
import Login from './Pages/login';
import GradeReport from './Pages/GradeReport';
import GradeForm from './Pages/gradeForm';
import Instructor from './Pages/instructor';
import Help from './Pages/help';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/gradereport" element={<GradeReport />} />
        <Route path="/dashboard/gradeforms" element={<GradeForm />} />
        <Route path="/dashboard/instructors" element={<Instructor />} />
        <Route path="/" element={<Navigate to="/ggg" />} />

      </Routes>
    </Router>
  );
};

export default App;


