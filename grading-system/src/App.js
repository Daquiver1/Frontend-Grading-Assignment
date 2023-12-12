import React from 'react';
import {BrowserRouter as Router, Route , Link , Routes , Navigate } from 'react-router-dom'
import Landingpage from './Pages/Landingpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
