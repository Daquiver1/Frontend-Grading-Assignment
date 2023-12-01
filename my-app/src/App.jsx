import './App.css'
import Home from './pages/home/home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Help from './pages/help/help'
import SideBar from './navigations/sidebar'
import Dashboard from './pages/dashboard/dashboard'
import MissingGrade from './pages/missingGrade/missingGrade'
import Grade from './pages/grade/grade'
import Instructor from './pages/instructor/instructor'

function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/help' element={<Help />}/>
        <Route path='/grade' element={<Grade />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/instructor' element={<Instructor />}/>
        <Route path='/missingGrade' element={<MissingGrade />}/>
      </Routes>
    </>
    
  )
}

export default App
