import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import GradeReport from './Pages/GradeReport';
import Help from './Pages/Help';
import HomePage from './Pages/HomePage';
import InstructorContact from './Pages/InstructorContact';
import LoginSignup from './Pages/LoginSignup';
import MissingGrade from './Pages/MissingGrade';
import Response from './Pages/response';



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/GradeReport' element={<GradeReport/>}/>
      <Route path='/Help' element={<Help/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='/Instructor' element={<InstructorContact/>} />
      <Route path='/Login' element={<LoginSignup/>} />
      <Route path='/MissingGrade' element={<MissingGrade/>} />
      <Route path='/response' element={<Response/>}/>
      
      </Routes>
    </Router>
  );
}

export default App;
