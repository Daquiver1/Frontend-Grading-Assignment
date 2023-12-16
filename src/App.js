import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navigation from './component/navbar';
import Home from './component/home';
import Dashboard from './component/dashboard';
import GradeReport from './component/grade report';
import InstructorContact from './component/instructor';
import HelpAndSupport from './component/help';
import Login from './component/login';
import GradeForm from './component/form';

function App() {
  return (
    <div>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grade report" element={<GradeReport />} />
        <Route path="/form" element={<GradeForm />} />
        <Route path="/instructor" element={<InstructorContact />} />
        <Route path="/help" element={<HelpAndSupport />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
    </div>
  );
}

export default App;
