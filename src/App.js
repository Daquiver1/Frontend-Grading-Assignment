import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage'
import GradeReportPage from './components/GradeReportPage';
import FormPage from './components/FormPage';
const App = () => {
  return (
  
    <Router>
     
    

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Dashboard" element={<DashboardPage/>}/>
        <Route path="/GradeReport" element={<GradeReportPage/>}/>
        <Route path="/FormPage" element={<FormPage/>}/>





      </Routes>
    </Router>
  );
}

export default App;
