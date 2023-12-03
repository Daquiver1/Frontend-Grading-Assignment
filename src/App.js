// Import necessary components and modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import GradeReportPage from "./pages/GradeReportPage";
import MissingGradeFormPage from "./pages/MissingGradeFormPage";

// Define your App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/GradeReportPage" element={<GradeReportPage />} />
        <Route
          path="/MissingGradeFormPage"
          element={<MissingGradeFormPage />}
        />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
