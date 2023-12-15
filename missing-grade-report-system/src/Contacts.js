import React from "react";
import "./Contacts.css";
import Header from './Header';
import Footer from './Footer.js';


const Home = () => {
  return (
    <div className="main">
      <Header />
      <h1>Connect With Us</h1>
      <div className="sub3">

        <div>
        <img src={require('./address.png')} alt='Address' className='littleimg' />
          <h3>Address</h3>
          <p className="little">
            789 Oak Avenue, Villageton, State, Zip Code
            <br />
            Address: 789 Oak Avenue, Villageton, State, Zip Code
            <br />
            Address: 789 Oak Avenue, Villageton, State, Zip Code
          </p>
        </div>

        <div>
        <img src={require('./phone.png')} alt='Phone' className='littleimg' />
          <h3>Phone</h3>
          <p className="little">
            +1 (555) 123-4567
            <br />
            +1 (555) 123-4567
            <br />
            +1 (555) 123-4567
            <br />
            +1 (555) 789-0123
            <br />
            +1 (555) 789-0123
            <br />
            +1 (555) 789-0123
          </p>
        </div>

        <div>
        <img src={require('./email.png')} alt='E-mail' className='littleimg' />
          <h3>Email</h3>
          <p className="little">
            1123 Main Street, Cityville, State, Zip Code
            <br />
            123 Main Street, Cityville, State, Zip Code
            <br />
            123 Main Street, Cityville, State, Zip Code
            <br />
          </p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
