//import { Alert, Button, Navbar } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {  BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
      <GradeReport />
      </BrowserRouter>
      
      
      </div>

   
  );
}

export default App;
