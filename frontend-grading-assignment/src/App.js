import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpSupportPage from './components/HelpSupportPage';

const PrivateRoute = ({ children, ...rest }) => {
 const location = useLocation();
 const isAuthenticated = // add your authentication logic here
 if (!isAuthenticated) {
    return <Redirect to="/login" />;
 }
 return <Route {...rest}>{children}</Route>;
};

function App() {
 return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/grade-report">Grade Report</Link></li>
          <li><Link to="/missing-grade-form">Missing Grade Form</Link></li>
          <li><Link to="/instructor-contact">Instructor Contact</Link></li>
          <li><Link to="/help-support">Help & Support</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <PrivateRoute path="/grade-report" element={<GradeReportPage />} />
        <PrivateRoute path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <PrivateRoute path="/instructor-contact" element={<InstructorContactPage />} />
        <PrivateRoute path="/help-support" element={<HelpSupportPage />} />
      </Routes>
    </Router>
 );
}

export default App;