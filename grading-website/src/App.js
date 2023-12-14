import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HelpAndSupport from "./pages/HelpAndSupport";
import MissingGradeFormPage from "./pages/MissingGradeFormPage";
import InstructorContact from "./pages/InstructorContact";
import GradeReport from "./pages/GradeReport";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<HelpAndSupport />} />
        <Route path="/missing" element={<MissingGradeFormPage />} />
        <Route path="/instructors" element={<InstructorContact />} />
        <Route path="/report" element={<GradeReport />} />
      </Routes>
    </Router>
  );
}

export default App;
