import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import SideBar from './components/Sidebar';
import LogIn from './components/LogIn';
import Footer from './components/Footer';


import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  return (
    <div className='relative'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/SideBar' element={<SideBar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
