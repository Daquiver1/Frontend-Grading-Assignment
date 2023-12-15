import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HelpAndSupport from "./pages/HelpAndSupport";
import MissingGradeFormPage from "./pages/MissingGradeFormPage";
import InstructorContact from "./pages/InstructorContact";
import GradeReport from "./pages/GradeReport";
import StudentDashboard from "./pages/StudentDashboard";

const gradesData = [
  { course: "UGRC 110 Academic Writing I", grade: "A" },
  { course: "UGRC 131-136 Understanding Human Society", grade: "C" },
  { course: "MATH 122 Calculus I", grade: "C+" },
  {
    course: "STAT 112 Introduction to Statistics and Probability II",
    grade: "A",
  },
  { course: "DCIT 104 Programming Fundamentals", grade: "B" },
  {
    course: "DCIT 102 Computer Hardware Fund. and Circuits",
    grade: "C",
  },
];

const missingGradesData = [
  "UGRC 210 Academic Writing II",
  "DCIT 201 Programming I",
  "DCIT 203 Digital and Logic Systems DesignI",
  "DCIT 205 Multi Media and Web Design",
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<HelpAndSupport />} />
        <Route path="/missing" element={<MissingGradeFormPage />} />
        <Route path="/instructors" element={<InstructorContact />} />
        <Route path="/report" element={<GradeReport />} />
        <Route
          path="/dashboard"
          element={
            <StudentDashboard
              grades={gradesData}
              missingGrades={missingGradesData}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
