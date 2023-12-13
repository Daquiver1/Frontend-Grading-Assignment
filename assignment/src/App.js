import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import AppNavbar from './Components/navabar';
import LandingPage from './Components/homepage';
import Dashboardpage from './Components/dashboard';
import GradeReportPage from './Components/gradereport';
import ContactInstructor from './Components/contact';
import MyModal from './Components/login';
import HelpAndSupportPage from './Components/help';
import MissingGradeForm from './Components/missing grade form';






function App() {
  return (
    <>
    <AppNavbar />
    <Routes>
      <Route path ='/' element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboardpage />} />
      <Route path="grade report" element={<GradeReportPage />} />
      <Route path="instructor" element={<ContactInstructor />} />
      <Route path="login" element={<MyModal />} />
      <Route path="help and support" element={<HelpAndSupportPage />} />
      <Route path="missing grade form" element={<MissingGradeForm />} />
    </Routes>
    
    </>
  );
}

export default App;