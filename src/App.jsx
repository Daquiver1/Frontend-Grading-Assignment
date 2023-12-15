import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/header/Navbar';
// import Flyout from './components/Flyout';
import Home from './pages/1.home/Home';
import Services from './pages/2.services/Services';
import Portfolio from './pages/3.portfolio/Portfolio';
import Contact from './pages/4.contact/Contact';
import Footer from './components/footer/Footer';
import MissingGrade from './pages/5. missinggrade/MissingGrade'
import InstructorContact from './pages/6. instructorcontact/InstructorContact'
import Help from './pages/7. help/help'
import GradeReport from './pages/8. grade report/GradeReport'


function App() {

  return (
    <div>
      <Router>
          <Navbar />
          {/* <Flyout /> */}

          <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/missinggrade' element={<MissingGrade />} />
          <Route path='/instructorcontact' element={<InstructorContact />} />
          <Route path='/help' element={<Help />} />
          <Route path='/grade report' element={<GradeReport />} />





          </Routes>

          <Footer />

      </Router>
    </div>
  )
}

export default App
