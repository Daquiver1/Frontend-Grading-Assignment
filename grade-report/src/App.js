import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import AppLogin from './components/LoginPage';
import AppHome from './components/LandingPage';
import AppHelpAndSupportPage from './components/HelpAndSupportPage';
import AppGradeReport from './components/GradeReport';
import AppDashboard from './components/Dashboard';
import AppMissingGradeForm from './components/MissingGradeReport';
import AppNavigation from './components/Navbar';
import AppFooter from './components/footer';
import AppInstructorContact from './components/InstructorContact';

function App() {
  return (
        <>
        <AppNavigation />
        <Routes>
          <Route path ='LandingPage' element={<AppHome />} />
          <Route path="Dashboard" element={<AppDashboard />} />
          <Route path="GradeReport" element={<AppGradeReport />} />
          <Route path="LoginPage" element={<AppLogin />} />
          <Route path="HelpAndSupportPage" element={<AppHelpAndSupportPage />} />
          <Route path="MissingGradeReport" element={<AppMissingGradeForm />} />
          <Route path="Navbar" element={<AppNavigation />} />
          <Route path="footer" element={<AppFooter />} />
          <Route path="InstructorContact" element={<AppInstructorContact />} />
        </Routes>
        <AppFooter />
        </>
  );
}

export default App;
