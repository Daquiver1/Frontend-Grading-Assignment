import React from 'react'
import images from "../Project images/front.png"
import "./Navbar.css"

const Background = () => {
  return (
    <div className="wrapper">
      <div className="wrapper"><div className="image">
        <div className="wave-container">
            <img src={images} alt="Front" className="wave-image" /></div>
      <div class="text-box"><h2>The Grade System</h2>

      <p><h3>Begin Now</h3>
      Welcome to our Missing Grade Reporting System! We understand the importance of transparency and efficiency in academic processes.
       Our platform is designed to provide a seamless and user-friendly experience for reporting missing grades, ensuring that every student's academic journey is accurately reflected.
        Feel empowered to utilize this system to streamline the reporting process and contribute to a more transparent and collaborative educational environment. Your participation is key in enhancing the overall academic experience. 
        Thank you for being a part of our community dedicated to academic excellence.</p>
        </div>
        <br></br></div>
        </div>
      

    </div>
  )
}

export default Background
