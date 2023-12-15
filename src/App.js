import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Login from './Pages/Login';
import Missing_gradeform from './Pages/Missing_gradeform';
import Gradereport from './Pages/Gradereport';
import Dashboard from './Pages/Dashboard';
import Help from './Pages/Help';
import Instructorcontact from './Pages/Instructorcontact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route index element={<Login/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Missing_gradeform" element={<Missing_gradeform />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Gradereport" element={<Gradereport />} />
          <Route path="/Help" element={<Help/>} />
          <Route path="/Instructorcontact" element={<Instructorcontact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

