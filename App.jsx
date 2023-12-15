import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomHeader from './Header.jsx';
import CustomFooter from './Footer.jsx';
import Description from './Description.jsx';
import Signin from './Signin.jsx';
import Login from './Login.jsx';
import MissingGrade from './MissingGrade';

function App() {
  return (
    <Router>
      <div>
        <CustomHeader />
        <Routes>
          <Route path="/description" element={<Description />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/missing-grade" element={<MissingGrade />} />
        </Routes>
        <CustomFooter />
      </div>
    </Router>
  );
}

export default App;

