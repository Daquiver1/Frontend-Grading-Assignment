import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import InstructorContactPage from './InstructorContactPage';
import MissingGradeForm from './MissingGradeForm';
import HelpAndSupportPage from './HelpAndSupportPage';
import GradeReportPage from './GradeReportPage';

import reportWebVitals from './reportWebVitals';
//import {  BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/InstructorContactPage' element={<InstructorContactPage />} />
        <Route path='/HelpAndSupportPage' element={<HelpAndSupportPage/>} />
        <Route path='/GradeReportPage' element={<GradeReportPage/>} />
        <Route path='/MissingGradeForm' element={<MissingGradeForm />} />
        <Route path='/DashboardPage' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
