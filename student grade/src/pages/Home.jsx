import React from "react";
import backgroundImage from '../assets/images/home.jpg'
import Header2 from "../components/header2";
import logo from '../assets/images/logo.png'

const HomePage = () => {
  return(
    <div>
      <Header2 logoPath={logo}/>
      <div className="h-screen bg-cover bg-center bg-opacity-75"  style={{ backgroundImage: `url(${backgroundImage})` }}>
          <main>
          <div className="bg-cover bg-center  h-screen flex items-center justify-center">
      <div className="bg-purple-900 max-w-2xl p-8 rounded-lg text-white">
        
        <h1 className="text-3xl font-bold mb-4">UG School Grading System</h1>
        <p>
         Welcome to our Grading System – a dedicated platform committed to fostering academic excellence, providing insightful assessments, and empowering students on their educational journey by transforming grades into stepping stones for continuous growth and success
        </p>
        <h4 style={{ fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 'normal', marginTop:'20px' }}>
        Grades That Reflect Your Potential
        </h4>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
          </main>
      </div>
    </div>
  )
}
export default HomePage