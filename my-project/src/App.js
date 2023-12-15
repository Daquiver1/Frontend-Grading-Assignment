// Import necessary components and modules
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your components
import LandingPage from "./components/components-pages/LandingPage";
import Login from "./components/components-pages/Login";
import GradeReport from "./components/components-pages/GradeReport";
import HelpAndSupportPage from "./components/components-pages/HelpAndSupportPage";
import MissingGradeForm from "./components/components-pages/MissingGradeForm";
import InstructorContactPage from "./components/components-pages/InstructorContactPage";
import Dashboard from "./components/components-pages/Dashboard";

// Define your App component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/GradeReport" element={<GradeReport />} />
        <Route path="/HelpAndSupportPage" element={<HelpAndSupportPage />} />
        <Route path="/MissingGradeForm" element={<MissingGradeForm />} />
        <Route path="/InstructorContactPage" element={<InstructorContactPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />

     
      </Routes>
    </Router>
  );
}

export default App;
