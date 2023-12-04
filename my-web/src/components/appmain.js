import React from 'react';
import '../styles/main.css';
import myImage from './images/400.png';
 
function Main(){
    return( 
    <><div className="custom-div">
        <img className="imag" src={myImage} alt="Landing Image" />
      </div>
      <h1 style={{ color: 'black' }}>Welcome to Gradesk</h1></>

    );
    
};
export default Main;