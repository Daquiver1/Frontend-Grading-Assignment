import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import './HelpAndSupport.css'

const HelpAndSupport = () => {
  return (
    <div>
        <Header/>
        <div className='page-body'>
            <div className='welcome'>
                Help and Support
            </div>
            <FAQ />
            <br/>
            <ContactForm />  
        </div>
        <Footer/>
    </div>
  );
};

export default HelpAndSupport;