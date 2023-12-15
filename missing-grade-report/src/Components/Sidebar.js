import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import DashboardPage from './Pages/DashboardPage';
import Footer from './Components/Footer';
import GradeReportPage from './Pages/GradeReportPage';
import HelpSupportPage from './Pages/HelpSupportPage';
import Home from './Pages/HomePage';
import InstructorContactPage from './Pages/InstructorContactPage';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import MissingGradeFormPage from './Pages/MissingGradeFormPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/grade-report" element={<GradeReportPage />} />
          <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
          <Route path="/instructor-contact" element={<InstructorContactPage />} />
          <Route path="/help" element={<HelpSupportPage />} />
          {/* Define other routes for different pages */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
