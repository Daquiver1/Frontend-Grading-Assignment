//import { Alert, Button, Navbar } from 'react-bootstrap';
import './App.css';
import HomePage from './components/homepage.js';
import LoginPage from './components/login.js';
import MyNavbar from './components/MyNavbar.js';
import Dashboard from './components/dashboard.js';
import {Routes, Route } from 'react-router-dom';
import GradeIssueForm from './components/gradeform.js';
import ContactInstructors from './components/contact.js';
import GradeReport from './components/gradereport.js';




function App() {
  return (
    <div className="App">
     <MyNavbar></MyNavbar>
     <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gradeform" element={<GradeIssueForm />} />
      <Route path="/contact" element={<ContactInstructors/>} />
      <Route path="/gradereport" element={<GradeReport/>} />
     </Routes>
      </div>

   
  );
}

export default App;
