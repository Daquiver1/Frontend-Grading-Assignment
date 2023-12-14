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
        {/* Your content goes here */}
        <h1 className="text-3xl font-bold mb-4">School Grading System</h1>
        <p>
          This is an example of a centered container with a light purple background using Tailwind CSS.
        </p>
      </div>
    </div>
          </main>
      </div>
    </div>
  )
}
export default HomePage