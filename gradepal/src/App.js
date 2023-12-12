// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Footer from "./components/footer/footer";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage from "./components/login/LoginPage";
import Dashboard from "./components/Dashboard/Dashboard";
import GradeReportPage from "./components/GradeReportingPage/GradeReportPage";
import MissingGradeFormPage from "./components/MissingGradeFormPage/MissingGradeFormPage";
import InstructorContactPage from "./components/InstructorContactPage/InstructorContactPage";
import HelpAndSupportPage from "./components/HelpAndSupportPage/HelpAndSupportPage";
const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<LandingPage authenticated={authenticated} />}
            />
            <Route
              path="/login"
              element={<LoginPage setAuthenticated={setAuthenticated} />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grades" element={<GradeReportPage />} />
            <Route
              path="/missing-grade-form"
              element={<MissingGradeFormPage />}
            />
            <Route
              path="/contact-instructor"
              element={<InstructorContactPage />}
            />
            <Route path="/help-and-support" element={<HelpAndSupportPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;
