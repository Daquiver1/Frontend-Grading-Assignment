
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import GradeReportPage from './gradereport';
import DashboardPage from './dashboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Navigation/>
    <Routes>
    <Route path='/dashboard' element={<DashboardPage/>} ></Route>
      <Route path='/gradereport' element={<GradeReportPage/>} ></Route>
    </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
