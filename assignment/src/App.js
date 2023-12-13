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
import AppFooter from './Components/footer';






function App() {
  return (
    <>
    <AppNavbar />
    <Routes>
      <Route path ='homepage' element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboardpage />} />
      <Route path="gradereport" element={<GradeReportPage />} />
      <Route path="contact" element={<ContactInstructor />} />
      <Route path="login" element={<MyModal />} />
      <Route path="help" element={<HelpAndSupportPage />} />
      <Route path="missing grade form" element={<MissingGradeForm />} />
    </Routes>
    <AppFooter />
    </>
  );
}

export default App;