import React from "react";
import "./home.css";
import backgound1 from "./img/background.jpg";

const Home=()=>{
    return(
    <div  >
        <p>
        <img src={backgound1} className="App-background"/>
        <h1 className="h1-style"> OVERVIEW</h1></p>
      < div className="positioning">
        
            <div className="welcome-text">
                <p> <h3 className="ui header"></h3></p>
                
               
                 
                
        
                <p className="welcome">
                    Welcome to GradeTracker Your Ultimate Student Companion! 🎓 Discover a seamless way to stay on top of your academic journey.
                    Our innovative platform allows you to effortlessly check and track missing grades, ensuring you never miss a beat in your academic progress. 
                    Dive into a user-friendly experience that puts your grades at your fingertips. Let's embark on a journey of academic excellence together!"
                </p>
                </div>
            
            
          
      </div>

    </div>
        
    )
}

export default Home; 