import React from 'react';
import Header from "../component/header.js";
import Footer from './Footer.jsx';

const Home = () => {
    return (
        <>
            <div className='container-class min-h-screen'>
                <p className='welcome-text text-4xl text-dark ml-[50%] translate-x-[-50%] file:font-bold italic'>Welcome To Our Home Page</p>
                <p className='text-dark max-w-fit ml-[50%] translate-x-[-50%] mt-5 text-2xl'>Welcome to the University of Ghana's Academic Affairs Department, where we prioritize excellence in handling student results. Committed to fostering a conducive learning environment, our dedicated team ensures accurate and timely processing of academic outcomes. We employ rigorous quality control measures to maintain the integrity of assessments, providing students with reliable and transparent feedback. Our goal is to support your academic journey, offering assistance and guidance when needed. At the University of Ghana, we take pride in upholding academic standards and promoting a culture of continuous improvement, empowering students to thrive in their educational pursuits.</p>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home