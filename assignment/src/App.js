
import 'bootstrap/dist/css/bootstrap.css'
import { Routes,Route } from 'react-router-dom';
import React from 'react';
import './App.css'

import AppNavbar from './components/Navbar';
import AppDashboard from './components/Dashboard';
import AppLogin from './components/Login';
import AppGradeReport from './components/GradeReport';
import AppHelpAndSupport from './components/HelpAndSupport';
import AppLanding from './components/Landing';
import AppFooter from './components/Footer';
import AppInstructorContact from './components/InstructorContact';
 import AppMissingGradeForm from './components/MissingGradeForm';


// <Route path="InstructorContact" element={<AppInstructorContact/>} />
// <Route path="GradeReport" element={<AppGradeReport/>} />
// <Route path="MissingGradeForm" element={<AppMissingGradeForm/>} />

function App() {
  return (
    <>
    <AppNavbar/>
    <Routes>
      <Route path="Dashboard" element={<AppDashboard />} />
      <Route path="Landing" element={<AppLanding />} />
      <Route path="HelpAndSupport" element={<AppHelpAndSupport />} />
      <Route path="Login" element={<AppLogin />} />
      <Route path="MissingGradeForm" element={<AppMissingGradeForm/>} />
      <Route path="InstructorContact" element={<AppInstructorContact/>} />
      <Route path="GradeReport" element={<AppGradeReport/>} />
     </Routes>
    <AppFooter />
    

     </>
  );
}

export default App;
