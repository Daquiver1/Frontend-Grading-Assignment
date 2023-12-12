import { useState } from 'react';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Faq from './pages/Faq';
import GradeReport from './pages/GradeReport';
import Help from './pages/Help';
import MissingGrade from './pages/MissingGrade';
import Header from './Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
 return(
  <>
  <Header/>
  
  <Navbar/>
  <div className="container">
    <Routes>
      <Route path='/' element = {<Home/>} /> 
      <Route path='/about' element = {<About/>} /> 
      <Route path='/contact' element = {<Contact/>} /> 
      <Route path='/dashboard' element = {<Dashboard/>} />
      <Route path='/faq' element = {<Faq/>} />
      <Route path='/gradereport' element = {<GradeReport/>} />
      <Route path='/Help' element = {<Help/>} />
      <Route path='/missinggrade' element = {<MissingGrade/>} />
      <Route path='/contact' element = {<Contact/>} />
      



    </Routes>
    </div>
  
  </>

 );
  
}

export default App;
