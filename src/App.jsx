import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HelpAndSupport from "./pages/HelpAndSupport";
import InstructorContact from "./pages/InstructorContact";
import GradeReport from "./pages/GradeReport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help-and-support" element={<HelpAndSupport />} />
        <Route path="/instructor-contact" element={<InstructorContact />} />
        <Route path="/missing-grade" element={<GradeReport />} />
      </Routes>
    </Router>
  );
}

export default App;
