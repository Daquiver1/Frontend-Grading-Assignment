
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Login_page from './Login_page';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
       <Route path = "/" element={<Home/>} />
        <Route path = "/login_page" element={<Login_page/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
