

import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/HomePage/Dashboard';
import InstructorContact from './components/HomePage/InstructorContact';
import MissingGrade from './components/HomePage/MissingGrade';
import HelpAndSupport from './components/HomePage/HelpAndSupport';
import GradeReport from './components/HomePage/GradeReport';
import LoginPage from './components/HomePage/LoginPage'
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <BrowserRouter>

      <Dashboard />
    </BrowserRouter>
  );
}
<MissingGrade/>
export default App;
