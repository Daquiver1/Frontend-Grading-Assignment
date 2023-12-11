import './App.css';
import Dashboard from './pages/dashboard.js';
import Gradeform from './pages/gradeform.js';
import GradeReport from './pages/gradereport.js';
import Helpsup from './pages/helpsup.js';
import Landingpage from './pages/landingpage.js';
import Instructorcon from './pages/instructorcon.js';
import Login from './pages/login.js';
import {Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gradeform" element={<Gradeform />} />
        <Route path="/gradereport" element={<GradeReport/>} />
        <Route path="/helpsup" element={<Helpsup></Helpsup>} />
        <Route path="/instructorcon" element={<Instructorcon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landingpage" element={<Landingpage />} />
      </Routes>
      </div>
      
    
  );
}

export default App;

