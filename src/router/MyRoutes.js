import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Landing from '../components/pages/Landing/Landing'
import Login from '../components/pages/Login/Login'
import Dashboard from '../components/pages/Dashboard/Dashboard'

const MyRoutes = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" exact Component={Landing}/>
      <Route path="/login" exact Component={Login}/>
      <Route path="/Dashboard" exact Component={Dashboard}/>

      </Routes>
      
    </Router>
    </>
  )
}

export default MyRoutes