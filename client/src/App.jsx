
import {Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Homepage from './pages/Homepage/Homepage'



const App = () => {
  return (
   <Routes>

<Route path='/' element={<Homepage/>}/>


   </Routes>
  )
}

export default App