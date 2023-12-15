import './App.css';

import Login from './component/Logsc';
import Navbar from './component/Navbar';
import FAQPage from './component/FaqSection/FAQPage';
import InstructorContactPage from './component/InstructorPAGE/InstructorContactPage';
import MissingGradeForm from './component/MissingGrade/MissingGradeForm';
import GradeReportPage from './component/GradeSection/GradeReportPage';
import DashboardPage from './component/DashboardPage';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './component/Landing/Landingpage';

function App() {
  return (
  <div className='App'>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Navbar' element={<Navbar/>}/>
      <Route path='FAQPage' element={<FAQPage/>}/>
      <Route path='/Instructor' element={<InstructorContactPage/>}/>
      <Route path='/Missing' element={<MissingGradeForm/>}/>
      <Route path='/Grade' element={<GradeReportPage/>}/>
      <Route path='/Dashboard' element={<DashboardPage/>}/>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   
   </div>
  );
}

export default App;
