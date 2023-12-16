import React from 'react';
import Footer from './Footer';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import './HelpAndSupport.css'

const HelpAndSupport = () => {
  return (
    <div>
        <div className='page-body-help'>
            <div className='welcome-help'>
                Help and Support
            </div>
            <div><FAQ /></div>
            
            <div><ContactForm /></div>  
        </div>
        <Footer/>
    </div>
  );
};

export default HelpAndSupport;