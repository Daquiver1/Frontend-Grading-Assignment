import React from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route} from "react-router-dom";

import Sidebar from './component/Sidebar';
import Home from './route/Home';
import Dashboard from "./route/Dashboard";
import GradeReport from "./route/GradeReport";
import MissngGrades from "./route/MissingGrades";
import LogIn from "./route/LogIn";
import Contact from "./route/Contact"
import Help from "./route/Help"

function App(){
  return (
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/GradeReport' element={<GradeReport/>}/>
            <Route path='/MissingGrades' element={<MissngGrades/>}/>
            <Route path='/LogIn' element={<LogIn/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Help' element={<Help/>}/>
          </Routes>
          </Sidebar> 
        
      </BrowserRouter>
    


  )
}
export default App