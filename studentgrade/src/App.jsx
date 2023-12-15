import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Login from "./pages/login.js";
import Contact from "./pages/contact.js";
import "./App.css";
import Home from "./pages/home.js";
import Footer from "./pages/Footer.jsx";
import Dashboard from "./pages/dashboard.js";
import HelpAndSupportPage from "./pages/help.js";
import MissingGradeFormPage from "./pages/missingGrade.js";
import GradeReportPage from "./pages/gradeReport.js";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-screen h-screen overflow-hidden">
        <Routes>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route
            path="/help"
            element={<HelpAndSupportPage></HelpAndSupportPage>}
          ></Route>
          <Route
            path="/missing-grade"
            element={<MissingGradeFormPage></MissingGradeFormPage>}
          ></Route>
          <Route
            path="/report"
            element={<GradeReportPage></GradeReportPage>}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
