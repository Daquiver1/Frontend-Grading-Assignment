import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Overview from './Components/Homepage/Overview';



function App() {
  return (
    <Router>
     <div><Overview/></div>
    </Router>
  );
}

export default App;
