import React from 'react';
import Header from "../ms-header";
import Footer from "../ms-footer";
import Login from "../ms-login";
import Instructors from "../instructors-info";
import WelcomeMessage from "../ms-home";
import GradeReportForm from "../grade-report-form";
import Help from "../help";
import Home from "../home";
import GradeReport from "./GradeReport";
import Dashboard from "./dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/instructor" element={<Instructors />} />
          <Route path="/welcome" element={<WelcomeMessage />} />
          <Route path="/gradereport" element={<GradeReportForm />} />
          <Route path="/help" element={<Help />} />
          <Route path="/grade" element={<GradeReport />} />
          <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;

