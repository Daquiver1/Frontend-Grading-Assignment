import React from 'react';
import './Home.css';
import home_background from '../Assets/homebackground.jpeg'

const Home = () => {
  return (
    <div>
     <div className='container' style={{backgroundImage: `linear-gradient(rgba(40, 40, 40, 0.5), rgba(0, 0, 0, 0.5)), url(${home_background})
     `}}>
      <h1 className='big-font-h1'>Students Inquiry</h1>
      <p className='big-font'>Welcome to the University of Ghana Students' inquiry page. <br /> You can check and report your missing grades here, <br />and your academic report.</p>
      <div className='center_content'>
      <a href='/LoginForm'>Login</a>
      <p>Click here to Login and check your Dashboard</p>
      </div>
     </div>
    </div>

   )
};

export default Home;