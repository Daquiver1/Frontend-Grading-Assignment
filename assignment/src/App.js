import './App.css';
import Login from './Components/Pages/Login'
import Missing from './Components/Pages/missing'
import Instructor from './Components/Pages/instructor'
import Landing from './Components/Pages/landing';
import Faq from './Components/Pages/Faq'
import Technical from './Components/Pages/Technical'
import Dashboard from './Components/Pages/Dashboard'

import{ BrowerRouter,  BrowserRouter,  Route,  Routes,  route,} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Dashboard />} />
          <Route path="Login" element={<Login />} />
          <Route path="contact">
            <Route index element={<Instructor />} />
            <Route path="FAQ" element={<Faq />} />
          </Route>
          <Route path="Landing">
            <Route index element={<Landing />} />
            <Route path="Technical" element={<Technical />} />
            <Route path="Missing" element={<Missing />} />
          </Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </div> 
  );
}

export default App;
