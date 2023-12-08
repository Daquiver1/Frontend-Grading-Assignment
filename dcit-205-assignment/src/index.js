import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import MissingGrades from "./pages/MissingGradeForm";
import GradeReport from "./pages/GradeReport";
import InstuctorContact from "./pages/InstructorConctact.Js";
import HelpAndSupport from "./pages/HelpAndSupport";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/missing-grades" element={<MissingGrades />} />
        <Route path="/grade_report" element={<GradeReport />} />
        <Route path="/instructor_contacts" element={<InstuctorContact />} />
        <Route path="/help" element={<HelpAndSupport />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
