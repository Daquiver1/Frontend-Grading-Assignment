import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import './App.css';


import Home from './components/home';
import Dashboard from './components/dashboard';
import GradeReport from './components/gradereport';
import HelpandSupport from './components/help and support';
import InstructorContact from './components/instructor contact page';
import Login from './components/login';
import MissingGradeForm from './components/missing grade form';
import NavBar from './components/NavBar';



function App() {
  return (
    <>
    <NavBar />
   <Routes>
    <Route path ='#home' element={<Home />} />
    <Route path ='dashboard' element={<Dashboard />} />
    <Route path ='gradereport' element={<GradeReport/>} />
    <Route path ='helpandsupport' element={<HelpandSupport/>} />
    <Route path ='instructor contact page' element={<InstructorContact/>} />
    <Route path ='login' element={<Login/>} />
    <Route path ='missing grade form' element={<MissingGradeForm />} />
   </Routes>
   </>
  );
}

export default App;
