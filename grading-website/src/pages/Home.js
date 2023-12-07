import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

function Home() {
  const backgroundImage=(
    <>
    <img src={process.env.PUBLIC_URL + './images/image1jpeg.jpeg' } alt='education-background'/>
    </>
  )
  const pageContent=(
  <>
   <section className="overview-section">
  <h2>Overview of the System</h2>
  <p>
    Welcome to the Missing Grade Reporting System. This system is designed to help you track and report grades that are not recorded in your academic profiles.
  </p>
</section>
<div className='page-image'>
  <img src={process.env.PUBLIC_URL + './images/image3.png'} alt='shows-the-page-is-academic' />
</div>
<div className='card-container'>
<div className="card" style={{width: 18 +'rem'}}>
  <img src={process.env.PUBLIC_URL + './images/login-image.jpg'} class="card-img-top" alt="Login image" />
  <div class="card-body">
    <h5 class="card-title">Login Page</h5>
    <p class="card-text">Check out your dashboard!</p>
    <a href="#" class="btn btn-primary">Login</a>
  </div>
</div>
<div className="card" style={{width: 18 +'rem'}}>
  <img src={process.env.PUBLIC_URL + './images/login-image.jpg'} class="card-img-top" alt="Login image" />
  <div class="card-body">
    <h5 class="card-title">Instructor Contact Page</h5>
    <p class="card-text">Get in touch with your instructors</p>
    <a href="#" class="btn btn-primary">Contact Them</a>
  </div>
</div>
</div>
<div className='card-item'>
<div className="card" style={{width: 18 +'rem'}}>
  <img src={process.env.PUBLIC_URL + './images/login-image.jpg'} class="card-img-top" alt="Login image" />
  <div class="card-body">
    <h5 class="card-title">Help and Support Page</h5>
    <p class="card-text">Having problems navigating the page?</p>
    <a href="#" class="btn btn-primary">Find our expert team!</a>
  </div>
</div>

</div>

  </>)
 
  return (
    <>
    <Navbar />
    <HeroSection
    backgroundImage={backgroundImage}  pageContent={pageContent}
     />
     <RightSidebar />
     <Footer />
    </>
    
  )
}

export default Home

