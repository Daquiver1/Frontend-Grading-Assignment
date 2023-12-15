// App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import HelpSupport from "./components/HelpSupport";
import ContactInstructor from "./components/ContactInstructorPage";
import ReportMissingGrade from "./components/ReportMissingGrade";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HeaderComponent />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/contact-instructor" element={<ContactInstructor />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route
            path="/report-missing-grade"
            element={<ReportMissingGrade />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
