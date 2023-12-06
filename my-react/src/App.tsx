import Login from './Login';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Header from './component/Header';


function App(){
  return(<>
  
  <Router>
    <div>

     <Header/>
    <Routes>
      <Route path ="my-react/src/Login.tsx" element = {<Login/>}>
      </Route>
      
      <Route path='my-react/src/Home.tsx' element={<Home/>}>

      </Route>
    </Routes>
    
    </div>
   
  </Router>
  
   
     </>
  
  )
}
export default App;