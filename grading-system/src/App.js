

import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Header from './component/pages/Header';
import Home from './component/pages/Home';
import Login from './component/pages/Login';
import Dashboard from './component/pages/Dashboard';
import Help from './component/pages/Help';
import Grade from './component/pages/Grade';
import Footer from './component/pages/Footer';
import Missing from './component/pages/Missing';
import Instructor from './component/pages/Instructor';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='Content'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/missing" element={<Missing />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/login" element={<Login />} />

            <Route path="/grade" element={<Grade />} />



          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;