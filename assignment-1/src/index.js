import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Grades from './pages/Grades';
import Login from './pages/Login';
import Instructors from './pages/Instructors';
import Faq from './pages/Faq';
import MissingGrades from './pages/MissingGrades';
import Dashboard from './pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/instructors' element={<Instructors />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/grades' element={<Grades />} />
        <Route path='/missing-grades' element={<MissingGrades />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);