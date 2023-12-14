import React from 'react';
import Login from "./components/Pages/LoginPage.jsx";
import Main from "./components/MainPage.jsx";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
