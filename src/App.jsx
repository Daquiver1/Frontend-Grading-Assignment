import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import SideBar from './components/Sidebar';
import LogIn from './components/LogIn';
import Footer from './components/Footer';


function App() {

  return (
    <div className='relative'>
      {/* <LandingPage /> */}
      <div>
        <SideBar />
      </div>
      
      <Footer />
      {/* <LogIn /> */}
      
    </div>
  )
}

export default App
