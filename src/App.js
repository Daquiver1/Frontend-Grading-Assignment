import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Grades from './pages/Grades';
import HelpSupport from './pages/HelpSupport';
import InstructorList from './components/InstructorList'; // Ensure correct path

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/grades" component={Grades} />
          <Route path="/help-support" component={HelpSupport} />
          <Route path="/instructor-list" component={InstructorList} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
