import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import GradeReport from "./Pages/Grade-report";
import GradeForm from "./Pages/GradeForm";
import Instructor from "./Pages/Instructor-contact";
function App() {
  return (
    <div className="">
        <BrowserRouter>
          <Routes>
           
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/dashboard/grade-report" element={<GradeReport />} />
            <Route path="/dashboard/gradeform" element={<GradeForm />} />
            <Route path="/dashboard/instructor" element={<Instructor />} />
        </Routes>

        </BrowserRouter>
      </div>
  );
};

export default App;
