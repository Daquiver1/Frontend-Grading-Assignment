import './App.css';
import Overview from './overview';
import GradeReport from './gradereport';
import HelpSupport from './helpsupport';
import { Route, Routes } from 'react-router-dom';
import InstructorContact from './instructorcontact';
import Login from './login';
import MissingGrade from './missinggrade';

function App() {
  return (
    <div className="App">
      <Overview/>
     <Routes>
        <Route path='/overview' element={<Overview/>}/>
        <Route path='/grade-report' element={<GradeReport/>}/>
        <Route path='/helpsupport' element={<HelpSupport/>}/>
        <Route path='/instructorcontact' element={<InstructorContact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/missing-grade' element={<MissingGrade/>}/>
     </Routes>
    </div>
  );
}

export default App;
