
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className='landingPage'>
    <div className="landing">
            <h1>Welcome </h1>
            <h2>Lovely Student</h2>
            <p>This 
              is an <br></br>overview of our<br></br> system. <br></br>
            Do well navigate <br></br>through the links
            taking<br></br> you wherever you<br></br> want to <br></br>be.
            </p>
            
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/courselist'>Transcript</Link></li>
        <li><Link to='/reportForm'>Report Form</Link></li>
        <li><Link to='/instructorInfo'>Instructor's Info</Link></li>
        <li><Link to='/help'>Help</Link></li>
        <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
