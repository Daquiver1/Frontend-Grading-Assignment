import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import AppNavbar from './components/Navbar';
import AppHome from './components/Home';

import FAQs from './components/help and support';
import AppLogin from './components/Login';
import AppGradeReport from './components/grade report';
import AppDashboard from './components/dashboard';






function App() {
  return (
    <>
    <AppNavbar />
    <Routes>
      <Route path ='Home' element={<AppHome />} />
      <Route path="Login" element={<AppLogin />} />
      <Route path="help and support" element={<FAQs />} />
      <Route path="grade report" element={<AppGradeReport />} />
      <Route path="dashboard" element={<AppDashboard />} />

    </Routes>
    
    </>
  );
}

export default App;