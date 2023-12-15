import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogin from './Pages/Login';
import AcademicReport from './Pages/Admin';
import GradeForm from './Pages/Form';
import HelpSupport from './Pages/HelpSupport';
import InstructorContact from './Pages/Contact';
import GradeReport from './Pages/Grade';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<StudentLogin />} />
          <Route path="/Dashboard" element={<AcademicReport />} />
          <Route path="/GradeForm" element={<GradeForm />} />
          <Route path="/Contact" element={<InstructorContact />} />
          <Route path="/Help" element={<HelpSupport />} />
          <Route path="/Grade" element={<GradeReport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
