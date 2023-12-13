import {
    BrowserRouter, Routes, Route, 
  } from 'react-router-dom';
  import "./App.css";
  import Home from './routes/Home';
  import LogIn from './routes/LogIn';
  import Dashboard from './routes/Dashboard';
  import Gradereport from './routes/GradeReport';
  import MissingGrades from './routes/MissingGrades';
  import HelpandSupport from './routes/HelpandSupport';
  import Contact from './routes/Contact';
  import Sidebar from './components/Sidebar';
  
  
  
  
  
  
  
  function App() {
    return(
  
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="LogIn/" element={<LogIn/>} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Gradereport" element={<Gradereport/>}/>
          <Route path="/MissingGrades" element={<MissingGrades/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/HelpandSupport" element={<HelpandSupport/>}/>
        </Routes>
       </Sidebar>   
      </BrowserRouter>
    )
    
  }
  
  export default App
  