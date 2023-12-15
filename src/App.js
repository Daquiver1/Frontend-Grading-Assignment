

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/HomePage/Dashboard';
import InstructorContact from './components/HomePage/InstructorContact';
import MissingGrade from './components/HomePage/MissingGrade';
import HelpAndSupport from './components/HomePage/HelpAndSupport';
import GradeReport from './components/HomePage/GradeReport';
import LoginPage from './components/HomePage/LoginPage'
import HomePage from './components/HomePage/HomePage';
import Footer from './components/HomePage/Footer';

function App() {
  return (
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/grade-report' element={<GradeReport/>}/>
       <Route path='/missing-grade-form' element={<MissingGrade/>}/>
       <Route path='/instructor-contact' element={<InstructorContact/>}/>
       <Route path='/help-and-support' element={<HelpAndSupport/>}/>
       <Route path='/Footer' element={<Footer/>}/>
    </Routes>
  );
}
export default App;
