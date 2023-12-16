import React from 'react';
import './App.css'
import Navbar from "./components/Navbar";
import HelpAndSupport from './components/HelpAndSupport';
import MissingGradeForm from './components/MissingGradeForm';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import { Route, Routes } from 'react-router-dom';
import InstructorContactPage from './components/InstructorContactPage';
import LoginPage from './components/LoginPage';



const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/contact" element={<InstructorContactPage/>} />
          <Route path="/missing-grades" element={<MissingGradeForm/>} />
          <Route path="/help" element={<HelpAndSupport/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/help" element={<HelpAndSupport/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App