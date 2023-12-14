import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeForm from './pages/MissingGradeForm';
import InstructorContact from './pages/InstructorContact';
import HelpAndSupport from './pages/HelpAndSupport';


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/grade-report" element={<GradeReport />} />
          <Route path="/missing-grade-form" element={<MissingGradeForm />} />
          <Route path="/instructor-contact" element={<InstructorContact />} />
          <Route path="/help-and-support" element={<HelpAndSupport />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
