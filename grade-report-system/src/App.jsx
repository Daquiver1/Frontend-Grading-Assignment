import { Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import ContactInstructor from './Pages/ContactInstructor';
import Help from './Pages/Help';
import MissingGradeForm from './Pages/MissingGradeForm';
import GradeReport from './Pages/GradeReport';
import './Navbar.css'
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
   <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gradereport" element={<GradeReport />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/contactinstructor" element={<ContactInstructor/>} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/missinggradeform" element={<MissingGradeForm />} /> 
      </Routes>
 
    </div>
  );
}

export default App;
