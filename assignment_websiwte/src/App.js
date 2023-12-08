
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import GradeReport from './GradeReport';
import InstructorPage from './InstructorPage';




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
        </Routes>
      </header>
    </div>
  );
}

export default App;
