import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { Dashboard } from "./Pages/Dashboard";
import { GradeReport } from "./Pages/GradeReport";
import { MissingGradeForm } from "./Pages/MissingGradeForm";
import { InstructorContact } from "./Pages/InstructorContact";
import { Help } from "./Pages/Help";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<GradeReport />} />
            <Route path="/instructorContact" element={<InstructorContact />} />
            <Route path="/missing-grade" element={<MissingGradeForm />} />
            <Route path="/help" element={<Help />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
