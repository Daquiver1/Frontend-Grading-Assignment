
import {Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Homepage from './pages/Homepage/Homepage'
import Login from "./pages/Homepage/component/login"
import Signup from "./pages/Homepage/component/Signup"
import Missinggrade from "./pages/Homepage/component/Missinggrade"




const App = () => {
  return (
   <Routes>

<Route index element={<Homepage/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Missinggrade" element={<Missinggrade/>}/>


   </Routes>
  )
}

export default App