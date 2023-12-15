import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import GradeReport from './Pages/GradeReport'
import MissingGradeForm from './Pages/MissingGradeForm'
import InstructorContactPage from './Pages/InstructorContactPage'
import HelpandSupport from './Pages/HelpandSupport'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
      <Route index element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/GradeReport' element={<GradeReport/>}/>
      <Route path='/MissingGradeForm' element={<MissingGradeForm/>}/>
      <Route path='/InstructorContactPage' element={<InstructorContactPage/>}/>
      <Route path='/HelpandSupport' element={<HelpandSupport/>}/>
        </Routes>
      </BrowserRouter>
     
 </div>
  );
}

export default App;     
      
      
      
      
      
   

