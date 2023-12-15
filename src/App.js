import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Dashboard from './components/Dashboard/dashboard';
import Grade from './components/Docs/Grade';
import GradeForm from './components/Docs/Grade-Form';
import Instructors from './components/Docs/Instructors';
import Support from './components/Docs/Support';


function App() {
  
  return (
    <Routes>
      <Route>
        <Route path='*' element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/dashboard" element={<Dashboard />} />    
        <Route  path="/home" element={<Home />} />    
        <Route  path="/grade" element={<Grade />} />    
        <Route  path="/grade-form" element={<GradeForm />} />    
        <Route  path="/instructor" element={<Instructors />} />    
        <Route  path="/support" element={<Support />} />      
      </Route>
    </Routes>

  ); 
}

export default App;
