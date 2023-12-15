import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import AppHeader from './components/navbar';
import Home from './components/home';
import InstructorContact from './components/instructor contact';
import Dashboard from './components/dashboard';
import AppLogin from './components/login';
import AppMissingGradeForm from './components/missing grade form';
import Faqs from './components/help and support';
import GradeReport from './components/grade report';
import Footer from './components/footer';




function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="instructor contact" element={<InstructorContact />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<AppLogin />} />
        <Route path="missing grade form" element={<AppMissingGradeForm />} />
        <Route path="help and support" element={<Faqs/>} />
        <Route path="grade report" element={<GradeReport/>} />
        <Route path="grade report" element={<Footer/>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
