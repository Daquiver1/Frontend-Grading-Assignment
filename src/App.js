import React from  'react'
import './App.css';
import {Help} from './pages/Help and Support';
import { Login } from './pages/Login';
import {Contact} from './pages/Contact Instructor'
import {Missing} from './pages/Missing Grade';
import {Grade, grade} from './pages/Grade Report';
//import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(){
  return(
    <Router>
  <Routes>
  <Route path='/Login' element = {<Login />} />
     <Route path='/Dashboard' element = {<Dashboard />} />
     <Route path='/Help and Support' element = {< Help and Support />} />
     <Route path='/Contact Instructor' element = {< Contact Instructor />} />
    <Route path='/Missing Grade' element = {< Missing Grade />} />
     <Route path='/Contact Instructor' element = {< Contact Instructor />} />
     <Route path='/Grade Report' element = {< Grade Report />} />
     </Routes>
    
    </Router>
  );

};
export default App;