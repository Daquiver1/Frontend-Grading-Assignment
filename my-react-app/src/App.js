import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import LoginPage from "./component/LoginPage";
import DashboardPage from "./component/DashboardPage";
import GradeReportPage from "./component/GradeReportPage";
import MissingGradeFormPage from "./component/MissingGradeFormPage";
import InstructorContactPage from "./component/InstructorContactPage";
import HelpAndSupportPage from "./component/HelpAndSupportPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {"/dashboard"}
        <Route path="/grade-report" element={<GradeReportPage />} />
        <Route path="/missing-grade-form" element={<MissingGradeFormPage />} />
        <Route path="/instructor-contact" element={<InstructorContactPage />} />
        <Route path="/help-and-support" element={<HelpAndSupportPage />} />
      </Routes>
    </Router>
  );
}

export default App;
