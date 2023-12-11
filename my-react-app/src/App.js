import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import GradeReport from './pages/GradeReport'
import MissingGradeForm from './pages/MissingGradeForm'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstructorContact from './pages/InstructorContact';
import Help from './pages/Help'
import Dashboard from './pages/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/Login' exact Component={Login} />
        <Route path='/Grade report' exact Component={GradeReport} />
        <Route path='/MissingGradeForm' exact Component={MissingGradeForm} />
        <Route path='/InstructorContact' exact Component={InstructorContact} />
        <Route path='/Help' exact Component={Help} />
        <Route path='/Dashboard' exact Component={Dashboard} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
