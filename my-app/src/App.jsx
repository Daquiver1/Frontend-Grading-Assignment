import './App.css'
import { useState } from 'react'
import Home from './pages/home/home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Help from './pages/help/help'
import SideBar from './navigations/sidebar'
import Dashboard from './pages/dashboard/dashboard'
import MissingGrade from './pages/missingGrade/missingGrade'
import Grade from './pages/grade/grade'
import Instructor from './pages/instructor/instructor'
import Footer from './navigations/footer'
import { GiHamburgerMenu } from "react-icons/gi"

function App() {

  const [showNav, setShowNav] = useState(false);

  return ( 
    <div className='app'>

      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/>
      </header>

      <SideBar show={showNav}/>

      <div id="container">

        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/help' element={<Help />}/>
          <Route path='/grade' element={<Grade />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/instructor' element={<Instructor />}/>
          <Route path='/missingGrade' element={<MissingGrade />}/>
        </Routes>

      </div>

      <footer id='footer'>
        <Footer />
      </footer>

    </div>
    
  )
}

export default App
