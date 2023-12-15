import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import GradeReportPage from "./components/GradeReportPage";
import MissingGradeFormPage from "./components/MissingGradeFormPage";
import InstructorContactPage from "./components/InstructorContactPage";
import HelpAndSupportPage from "./components/HelpAndSupportPage";
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