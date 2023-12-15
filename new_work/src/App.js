import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/Navbar';
import AppHome from './components/Home';
import FAQs from './components/help and support';
import AppLogin from './components/Login';
import AppGradeReport from './components/grade report';
import AppDashboard from './components/dashboard';
import Footer from './components/footer';
import MissingGradeReport from './components/missinggrade';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <AppNavbar />
      <div>
      <Routes>
        <Route path="Home" element={<AppHome />} />
        <Route path="missinggrade" element={< MissingGradeReport/>} />
        <Route path="Login" element={<AppLogin />} />
        <Route path="help and support" element={<FAQs />} />
        <Route path="grade report" element={<AppGradeReport />} />
        <Route path="dashboard" element={<AppDashboard />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
