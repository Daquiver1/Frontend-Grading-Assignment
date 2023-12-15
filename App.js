import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Transcripts from './Components/Transcripts';
import MissingGradeForms from './Components/Missing Grade Forms';
import GradeReport from './Components/Grade Report';
import Contacts from './Components/Contacts';
import FAQ from './Components/FAQ';
//import Readme from './Components/Readme';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Transcripts" element={<Transcripts />} />
        <Route path="/MissingGradeForms" element={<MissingGradeForms />} />
        <Route path="/GradeReport" element={<GradeReport />} />
        <Route path="/ Contacts" element={< Contacts />} />
        <Route path="/ FAQ" element={< FAQ />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;