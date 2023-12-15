import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Help from './pages/Help'
import Report from './pages/Report'
import Navbar from './components/Navbar'
import Instructor from "./Pages/Instructor"
import Missing from "./Pages/Missing"
import Footer from './components/Footer'


import './App.css'


function App() {
  

  return (
    <>
      <div className="App">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      
      <Routes>
      <Route path="/" element={< Home />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/report" element={< Report />} />
        <Route path="/help" element={< Help />} />
        <Route path="/instructor" element={< Instructor />} />
        
        <Route path="/login" element={< Login />} />
        <Route path="/missing" element={<Missing /> } />
      </Routes>
    <Footer />
    <br />
     
      </div>
    </>
  )
}

export default App
