import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import DashboardPage from '../src/components/DashboardPage';
import GradeReportPage from './components/GradeReportPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import InstructorContactPage from './components/InstructorContactPage';
import HelpAndSupportPage from './components/HelpAndSupportPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/DashboardPage' element={<DashboardPage/>}/>
      <Route path='/GradeReportPage' element={<GradeReportPage/>}/>
      <Route path='/MissingGradeFormPage' element={<MissingGradeFormPage/>}/>
      <Route path='/InstructorContact'element={<InstructorContactPage/>}/>
      <Route path='/HelpAndSupport' element={<HelpAndSupportPage/>}/>
    </Routes>
  );
}

export default App;
