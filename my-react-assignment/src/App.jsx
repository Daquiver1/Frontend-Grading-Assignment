import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import GradeReport from "./Pages/GradeReport.jsx";
import HelpSupport from "./Pages/HelpSupport.jsx";
import InstructorContact from "./Pages/InstructorContact.jsx";
import MissingGrade from "./Pages/MissingGrade.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  // const [isAuthenticated, setAuthenticated] = useState(false);
  return (
        <BrowserRouter>
        <Navbar />
       
          <Routes>
            {/* <Route index element={<Home />} /> */}
            
            <Route path="/home" element={<Home />} />
            
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/missinggrade" element={<MissingGrade />} />
            <Route path="/gradereport" element={<GradeReport />} />
            <Route path="/helpsupport" element={<HelpSupport />} />
            <Route path="/login" element={<Login />} />
            {/* <Login setAuthenticated={setAuthenticated} /> */}
            <Route path="/instructorcontact" element={<InstructorContact />} />
            {/* <Redirect from="/" to="/login" /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
  );
};

export default App;
