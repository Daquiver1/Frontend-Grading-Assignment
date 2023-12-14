import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpSupportPage from './components/HelpSupportPage';
function App() {
 return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
          <li><Link to="/help-support">Help & Support</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/instructor-contact" element={<InstructorContactPage />} />
        <Route path="/help-support" element={<HelpSupportPage />} />
      </Routes>
    </Router>
 );
}

export default App;