import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./components/LandingPage";
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage'
import GradeReportPage from './components/GradeReportPage';
const App = () => {
  return (
  
    <Router>
      <Navbar/>
     
    

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Dashboard" element={<DashboardPage/>}/>
        <Route path="/GradeReport" element={<GradeReportPage/>}/>





      </Routes>
    </Router>
  );
}

export default App;
