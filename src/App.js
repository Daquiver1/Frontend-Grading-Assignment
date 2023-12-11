import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeReport from './pages/MissingGradeReport';
import InstructorContact from './pages/InstructorContact';
import HelpandSupport from './pages/HelpandSupport';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Landing />} />  {/* Update the import path */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/missing-grade" element={<MissingGradeReport />} />
          <Route path="/instructor-contact" element={<InstructorContact />} />
          <Route path="/help" element={<HelpandSupport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
