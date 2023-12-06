
import Navbar from './Navbar';
import Home from './Home';

function App() {
  

  return (
  <div className='App'>
    <Navbar></Navbar>
    <div className='content'>
      <a href='/'>Home</a>
      <a href='Login'>Login</a>
      <a href='Dashboard'>Dashboard</a>
      <a href='Grade report'>Grade Report</a>
      <a href='Mising Grade form'>Missing Grade Form</a>
      <a href='Instructor Contact Page'>Instructor Contact Page</a>
      <a href='Help and Support Page'>Help and Support Page</a>
      

      <Home/>
      
    </div>

  </div>
    
          
  );
}

export default App;
