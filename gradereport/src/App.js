import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Gradereport from './Gradereport';
import Helpandsupport from './HelpabdSupport';
import Home from './Home';
import InstructedContact from './InstructedContact';
import Login from './Login';
import Missinggrade from './Missinggrade';

function App() {
  return (
    <div className='navigation'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/Grade report' element={<Gradereport/>} />
        <Route path='/Help and Support' element={<Helpandsupport/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/Instructed Contact' element={<InstructedContact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Missing grade' element={<Missinggrade/>} />

      </Routes>
    </div>
  );
}

export default App;
