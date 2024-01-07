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
          <Route path='/helpAndSupport' element={<HelpAndSupport />}></Route>
          <Route path='/HelpAndSupport' element={<HelpAndSupport />}></Route>
          <Route path='/MissingGradeForm' element={<MissingGradeForm />}></Route>
          <Route path='/GradeReport' element={<GradeReport />}></Route>
          <Route path='/InstructorContact' element={<InstructorContact />}></Route>
          <Route path='/Dashboard' element={<Dashboard />}></Route>
          <Route path='/LandingPage' element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
