import React from 'react';
import './main.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './components/appmain';
import Login from './components/login';
import DashboardPage from './components/dashboardpage'; 
import GradeReportPage from './components/GradeReport';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import MissingGrade from './components/missinggrade';
import InstructorContact from './components/instructorcontact';
import HelpAndSupportPage from './components/helpnsupport';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} /> 
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missinggrade" element={<MissingGrade />} />
        <Route path="/instructorcontact" element={<InstructorContact />} />
        <Route path="/helpnsupport" element={<HelpAndSupportPage />} />
      </Routes>
      <Footer />
    </Router>
    </BrowserRouter>
  );
}

export default App;
