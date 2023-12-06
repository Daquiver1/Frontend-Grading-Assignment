// Import necessary dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage  from './components/LandingPage';
import GradeReportPage from './components/GradeReportPage';
import HelpPage from './components/HelpPage';
import InstructorContactPage from './components/InstructorContactPage';
import MissingGradeFormPage from './components/MissingGradeFormPage';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';

const App = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/" element={<DashboardPage/>} />
      <Route path="/" element={<GradeReportPage/>} />
      <Route path="/" element={<MissingGradeFormPage/>} />
      <Route path="/" element={<InstructorContactPage/>} />
      <Route path="/" element={<HelpPage/>} />
      {/* TO Add more routes for other pages */}
    </Routes>
  </BrowserRouter>
 );


export default App;
