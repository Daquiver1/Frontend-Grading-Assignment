import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Hero from '../components/hero'
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features/>
      <HowItWorks/>
      <Footer />
    </div>
  )
}

export default App
