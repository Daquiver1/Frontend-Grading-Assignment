import React from 'react';
import './App.css';
import Landingpage from './landingpage'
import {Route , Routes} from 'react-router-dom'
import Contact from './Contact.js'
import Navigationbar from './navbar.jsx';
import Loginform from './login.js';
import GradeList from './GradeReport.js';
import MissingGradeForm from './missinggrade.js';
import FAQ from './HelpandSupport.js'




function App() {
  return (
    <div>
     <Routes>
    <Route path="homepage" element={<Landingpage />} />;
    <Route path="Contactpage" element={<Contact />} />;
    <Route path="/login" element={<Loginform />} />;
    <Route path="/GradeReport" element={<GradeList />} />;
    <Route path="/Missingrade" element={<MissingGradeForm />} />;
    <Route path="/Support" element={<FAQ/>} />;

    </Routes>
    <Navigationbar/>
    
  </div>
  )
}

export default App;
