import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RightSidebar from '../components/RightSidebar';

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
  </>)
 
  return (
    <>
    <Navbar />
    <HeroSection
    backgroundImage={backgroundImage}  pageContent={pageContent}
     />
     <RightSidebar />
    </>
    
  )
}

export default Home

