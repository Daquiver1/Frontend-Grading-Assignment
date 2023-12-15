import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import image1 from './grading1.jpg'
import image2 from './grading2.jpg'

function LandingPage(){
    return(
        <>
        <Header></Header>
        <div className="homepage">
            <h1>HOME</h1>
        </div>
        <div>
            <h2 className="homepage1">Student Grade Reporting System</h2>
        </div>
        <div className="homepage2">
            <h3>
                Welcome to the Student Grade Reporting System
            </h3>
        </div>
        <div  className='home-img-1'>
        <img src={image1} alt="image" className='home-image-grade1' />
            <p className='home-img-p1'>
                This System is designed to help student view, report, and manage their academic grades. It also helps system addresses the issue of missing or unrecorded grades in a student's profile. It's a system that the school has developed for the organization of assignment scores in gradebooks (either online or paper), and the determination of final grades for report cards and transcripts.
                We do all this to ensure a successful graduation for or students withouts having problems with their grades.
            </p>
        </div>
        <div>
            <h3>
                What Is The Purpose of This System???</h3>
        </div>
        <div>
            <p className='home-img-p2'>
                This system is purposely designed to provide a results in brief, understandable form for varied users. Also, it provide input for realistic educational, vocational, and personal counseling. Secondly, it report achievement to other schools or to employers. Lastly it help decide promotion, graduation, honors, athletic eligibility.
                The university always ensures the best for the student. You will only get the best in the University of Ghana, Legon.
            </p>
        </div>
        <div className='home-img-2'>
        <img src={image2} alt="image" className='home-image-grade2'/>
        </div>
        <Footer></Footer>
        </>
    );

}

export default LandingPage