import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
    return (
    <html>
        <head>
            University of Ghana Grade Report System
        
        </head>
        
        <body>
            <main>
            <section class = "hero">
                <h1>Welcome to the University of Ghana Grade Report System</h1>
            </section>
            
            <section class = "text">
                Please log in to report your missing grades.
            </section>
            
            <div class = "button-container-div">
                <Link to = "/LogIn"><button class = "button">Log In</button></Link>
            </div>

            </main> 
            <Footer position = "absolute" />        
        </body>
    </html>
    
    
    );
  };
  
  export default Home;