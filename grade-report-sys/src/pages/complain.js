import React from 'react';
import Form from '../components/complainform/reportingform';
import Footer from '../components/footer/footer';
import "./main.css";


const Complain = () => {
  return (
    <div>
      <div className='Loginsect'>
      <Form />
      </div>
        <div>
            <Footer />
            </div>
    </div>
    
  )
}

export default Complain;