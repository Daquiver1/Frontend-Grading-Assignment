// App.tsx
import './App.css'; // Import the global CSS file
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import GradeReportPage from './GradeReportPage';
import MissingGradeFormPage from './MissingGradeFormPage';
import InstructorContactPage from './InstructorContactPage';
import HelpAndSupportPage from './HelpAndSupportPage';
import Footer from './common/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header /> {/* Include the Header component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={(userCredentials) => console.log(userCredentials)} />}
          />
          <Route path="/dashboard" element={<DashboardPage studentName= ""currentGrades={[]} missingGrades={[]} />} />
          <Route
            path="/grade-report"
            element={<GradeReportPage gradeData={{}} />}
          />
          <Route
            path="/missing-grade-form"
            element={<MissingGradeFormPage onSubmit={(formData) => console.log(formData)} />}
          />
          <Route
            path="/instructor-contact"
            element={<InstructorContactPage instructors={[]} />}
          />
          <Route path="/help-and-support" element={<HelpAndSupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
