import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Transcripts from './Components/Transcripts';
import MissingGradeForms from './Components/Missing Grade Forms';
import GradeBook from './Components/Grade Book';
import Contacts from './Components/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transcripts" element={<Transcripts />} />
        <Route path="/forms" element={<MissingGradeForms />} />
        <Route path="/Grade Book" element={<GradeBook />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;