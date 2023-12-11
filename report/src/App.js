import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import AppHeader from './components/header';
import AppDashboard from './components/dashboard';
import AppReport from './components/grade report';
import AppInstructor from './components/instructor';
import AppHelpandSupport from './components/help and support';
import AppLogin from './components/login';
import AppMissingGradeForm from './components/missing grade form';
import Footer from './components/footer';




function App() {
  return (
    <>
    <AppHeader />
    <Routes>
      <Route path ='/' element={<Home />} />
      <Route path="dashboard" element={<AppDashboard />} />
      <Route path="grade report" element={<AppReport />} />
      <Route path="instructor" element={<AppInstructor />} />
      <Route path="login" element={<AppLogin />} />
      <Route path="help and support" element={<AppHelpandSupport />} />
      <Route path="missing grade form" element={<AppMissingGradeForm />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;