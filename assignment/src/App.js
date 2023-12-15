import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Inc/Navbar";
import Footer from "./components/Inc/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import InstructorContact from "./Pages/InstructorContact";
import MissingGrade from "./Pages/MissingGrade";
import Help from "./Pages/Help";
import Dashboard from "./Pages/Dashboard";
import GradeReport from "./Pages/GradeReport";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/login" element={<Login />} />

          <Route path="/gradeReport" element={<GradeReport />} />

          <Route path="/missingGrade" element={<MissingGrade />} />

          <Route path="/instructorContact" element={<InstructorContact />} />

          <Route path="/help" element={<Help />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
