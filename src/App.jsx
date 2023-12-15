import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Header/Navbar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from './Pages/Home/home';
import MissingGrade from './Pages/MissingGrade/MissingGrade';
import GradeReport from './Pages/GradeReport/GradeReport';
import Footer from './Components/Footer/footer';
import Help from './Pages/Help/Help';
import Login from './Pages/Login/Login'; // Update the import path for Login
import Contact from './Pages/Contact/contact';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/MissingGrade' element={<MissingGrade />} />
          <Route path='/GradeReport' element={<GradeReport />} />
          <Route path='/Login' element={<Login />} /> 
          <Route path='/Help' element={<Help />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
