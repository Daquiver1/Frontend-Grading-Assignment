
import {Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Homepage from './pages/Homepage/Homepage'
import Login from "./pages/Homepage/component/login"
import Signup from "./pages/Homepage/component/Signup"


// const navigate = useNavigate() ;
// const 

const App = () => {
  return (
   <Routes>

<Route index element={<Homepage/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>


   </Routes>
  )
}

export default App