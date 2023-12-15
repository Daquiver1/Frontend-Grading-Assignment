import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import Login from './pages/login';
import Contact from "./pages/contact";
import Support from "./pages/support";
import  Dashboard from "./pages/dashboard";
import Gradereport from "./pages/gradereport";
import Missing from "./pages/missing";
import NotFound from './pages/404';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/gradereport' element={<Gradereport/>}/>
        <Route path='/missing' element={<Missing/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/support' element={<Support/>}/>
         
         
         
        <Route path='/*' element={<NotFound />} />
        
        {/* <Route path='/contact' element={} />
        <Route path='/dashboard' element={} /> */}
      </Routes>
    </>

  );
}

export default App;
