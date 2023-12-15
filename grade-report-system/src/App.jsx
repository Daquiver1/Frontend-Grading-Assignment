import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login'


function App() {

  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route index element = {<HomePage/>} />
      <Route path = '/home' element = {<HomePage/>} />
      <Route path = '/Login' element = {<HomePage/>} />

      </Routes>

    
    </BrowserRouter>
    </>
  )
}

export default App
