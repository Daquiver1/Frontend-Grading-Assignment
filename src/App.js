import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import GradeviewPage from "./pages/GradeviewPage";
import MissingGradeFormPage from "./pages/MissingGradeFormPage";
import InstructorContactPage from "./pages/InstructorContactPage";
import HelpAndSupportPage from "./pages/HelpAndSupportPage";

import './App.css';

function App() {
  return (
    <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dash" element={<DashboardPage />} />
                <Route path="/view" element={<GradeviewPage />} />
                <Route path="/form" element={<MissingGradeFormPage />} />
                <Route path="/contact" element={<InstructorContactPage />} />
                <Route path="/help" element={<HelpAndSupportPage />} />
              </Routes>
           
    </Router>
  );
}

export default App;
