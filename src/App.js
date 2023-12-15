import * as React from 'react';
import Home from './Home.js'
import LogIn from './LogIn.js'
import Form from './Form.js'
import Dashboard from './Dashboard.js';
import Contact from './Contact.js'
import GradeReport from './GradeReport.js';
import Help from './Help.js';
import { Route, Routes } from 'react-router-dom';
function App(){
      return(
        <>
        <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/instructor" element={<Contact/>}/>
        <Route path="/gradeReport" element={<GradeReport/>}/>
        <Route path="/help" element={<Help/>}/>
        </Routes>
        </>
      );
}

export default App;