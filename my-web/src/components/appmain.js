import React from 'react';
import '../styles/main.css';
import myImage from './images/400.png';
 
function Main(){
    return( 
    <><div className="custom-div">
        <img className="imag" src={myImage} alt="Landing Image" />
      </div>
      <h1 style={{ color: '#123456' }}>Welcome to Gradesk</h1>
      <main class="cards">
        <section className="card contact">
            <div className="icon">
                <img src="#" alt="Contact us."/>
            </div>
            <h3>Contact us.</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            <button>Learn More</button>
        </section>
        </main>
      
      
      
      </>

    );
    
};
export default Main;