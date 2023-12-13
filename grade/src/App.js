import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';


import AppHero from './Components/Hero';
import DashboardPage from './Components/Dasboard';
import AppGradeReport from './Components/GradeReport';
import AppContact from './Components/Contact';
import AppLogIn from './Components/LogIn';
import AppFAQ from './Components/HelpAndSupport';
import AppMissingGradeFormPage from './Components/MissingGradeForm';
import AppFooter from './Components/Footer';
import AppHead from './Components/Navbar';





function App() {
  return (
    <>
    <AppHead />
    <Routes>
      <Route path ='/' element={<AppHero />} />
      <Route path="Dashboard" element={<DashboardPage />} />
      <Route path="GradeReport" element={<AppGradeReport />} />
      <Route path="Contact" element={<AppContact />} />
      <Route path="LogIn" element={<AppLogIn />} />
      <Route path="HelpAndSupport" element={<AppFAQ />} />
      <Route path="MissingGradeForm" element={<AppMissingGradeFormPage />} />
    </Routes>
    <AppFooter />
    </>
  );
}

export default App;