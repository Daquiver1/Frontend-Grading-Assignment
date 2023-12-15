
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import InstructorPage from './InstructorPage';
import HelpSupport from './HelpSupport';
import MissingGradeForm from './MissingGradeForm';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
       <Route path = "/" element={<Home/>} />
        <Route path = "/Login_page/dashboard" element={<Dashboard/>}/>
        <Route path = "/grade_report" element={<GradeReport/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/login_page" element={<LoginPage/>}/>
        <Route path = "/instructor_page" element={<InstructorPage/>}/>
        <Route path="/help" element={<HelpSupport/>}/>
        <Route path='/missing_grade_form' element ={<MissingGradeForm/>}/>
        <Route path='/grade_report/missing_grade_form' element ={<MissingGradeForm/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
