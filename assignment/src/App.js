import React from "react";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import MissingGradeFormPage from "./Pages/MissingGradeReport";
import GradeReportPage from "./Pages/GradeReport";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import HelpSupportPage from "./Pages/HelpSupportPage";
import LandingPage from "./Pages/Landing page";
import Footer from "./Components/Footer";

function App() {
  return (
        <React.Fragment>
          <MissingGradeFormPage/>
        </React.Fragment>
  );
}

export default App;
