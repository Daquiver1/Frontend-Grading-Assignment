import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home-page.jsx";
import Header from "./Components/header.jsx";
import InstructorContact from "./Pages/Instructor-Contact-page.jsx";
import GradeReport from "./Pages/Grade-Report-page.jsx";
import Help from "./Pages/Help-and-Support-page.jsx";
import MissingGradeReport from "./Pages/Missing-Grade-Form-page.jsx";
import Login from "./Pages/Login-page.jsx";

import './css/main.css';
import './css/fontawesome-all.min.css';


export default function App(){
  return (
    <>

    {/* <Header /> */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grade_report" element={<GradeReport />} />
          <Route path="/instructor_contact" element={<InstructorContact />} />
          <Route path="/Missing_grade_form" element={<MissingGradeReport />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}