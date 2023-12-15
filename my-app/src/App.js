import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import GradeReport from './pages/GradeReport';
import MissingGradeForm from './pages/MissingGradeForm';
import InstructorContactPage from './pages/InstructorContactPage';
import HelpandSupport from './pages/HelpandSupport';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path='/Dashboard' element={<Dashboard />}/>
          <Route path='/GradeReport' element={<GradeReport />}/>
          <Route path='/MissingGradeForm' element={<MissingGradeForm />}/>
          <Route path='/InstructorContactPage' element={<InstructorContactPage />}/>
          <Route path='/HelpandSupport' element={<HelpandSupport />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
