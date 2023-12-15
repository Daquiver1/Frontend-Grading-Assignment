import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContextProvider } from './pages/AuthContextProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeReport from './pages/MissingGradeReport';
import InstructorContact from './pages/InstructorContact';
import HelpandSupport from './pages/HelpandSupport';

function App() {
  return (
    <AuthContextProvider>
       <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact render={() => <Landing />} />
          <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/grade-report" render={() => <GradeReport />} />
          <Route path="/missing-grade" render={() => <MissingGradeReport />} />
          <Route path="/instructor-contact" render={() => <InstructorContact />} />
          <Route path="/help" render={() => <HelpandSupport />} />
        </Switch>
        <Footer />
      </div>
    </Router>
    </AuthContextProvider>
   
  );
}

export default App;