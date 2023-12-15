import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';  
import Login from './component/LoginPage';
import Dashboard from './component/Dashboard';
import MissingReport from './component/MissingReport';
import InsructorPage from './component/InstructorPage';
import FAQ from './component/FAQ';
import GradeReport from './component/GradeReport';



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/missingReport" element={<MissingReport />} />
      <Route path="/instructors" element={<InsructorPage />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/gradeReport" element={<GradeReport />} />

    </Routes>
  </Router>
     
  );
}

export default App;
