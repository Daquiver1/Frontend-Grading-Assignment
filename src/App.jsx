
import {Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Homepage from './pages/Homepage/Homepage'
import Login from "./pages/Homepage/component/login"
import Signup from "./pages/Homepage/component/Signup"
import Missinggrade from "./pages/Homepage/component/Missinggrade"
import Hearder from "./pages/Homepage/component/Hearder"
import Faqs from "./pages/Homepage/component/Faqs"
import Dashboard from "./pages/Homepage/component/Dashboard"
import Contact from "./pages/Homepage/component/Contact"
import Footer from "./pages/Homepage/component/Footer"


const App = () => {
  return (
   <Routes>

<Route index element={<Homepage/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path="/Signup" element={<Signup/>}/>
<Route path="/Missinggrade" element={<Missinggrade/>}/>
<Route path="/Header" element={<Hearder/>}/>
<Route path="/Faqs" element={<Faqs/>}/>
<Route path="/Dashboard" element={<Dashboard/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Footer"element={<Footer/>}/>

   </Routes>
  )
}

export default App