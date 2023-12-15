import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Login from './components/Login'
import Home from './components/Home'
import Missing_grade from './components/Missing_grade'; 
import Grade_Report from './components/Grade_Report';
import Contact from './components/Contact'




function App() {

  return (
    
      <div>
       <Sidenav />
       <Main />
       <Login />
       <Home />
       <Missing_grade />
       <Grade_Report />
       <Contact />
      </div>
      
  )
}

export default App
