import React from "react";
import "./home.css";
import backgound1 from "./img/background.jpg";



const Home=()=>{
    return(
    <div >
          
          <img src={backgound1} className="App-background"/>
        <p>
    
         <h1 className="h1-style"> OVERVIEW</h1> 
        </p>
        <div className="positioning">
        
            <div>
                <p> <h3 className="ui header"></h3></p>
                <p className="welcome">
                    Welcome to GradeTracker Your Ultimate Student Companion! 🎓 Discover a seamless way to stay on top of your academic journey.
                    Our innovative platform allows you to effortlessly check and track missing grades, ensuring you never miss a beat in your academic progress. 
                    Dive into a user-friendly experience that puts your grades at your fingertips. 
                    Let's embark on a journey of academic excellence together!"
                </p>
                
                <p><h2 className="welcome-text1">Features</h2></p>
                <section className="arrangement">
                <div className="cover1">
                <p>
                <h3 className="welcome-text">Centralized Dashboard</h3>
                <p className="welcome-text">Access a centralized dashboard that provides an at-a-glance overview of all your courses
                     and their respective missing grades.
                     Stay organized and informed about your academic standing effortlessly</p>
                </p>
                </div>
                <div className="cover1">
                <p>
                <h3 className="welcome-text">Intuitive Grade Tracking</h3>
                <p className="welcome-text">
                    Effortlessly track missing grades for each assignment,
                    exam, or project within your courses. This intuitive interface allows you to input and update grades seamlessly, 
                    ensuring accurate and up-to-date informationp</p>
                </p>
                </div>
                <div className="cover1">
                <p>
                <h3 className="welcome-text">User-Friendly interface</h3>
                <p className="welcome-text">
                    Our user-friendly interface ensures a seamless experience for users of all levels. Navigate through courses,
                    assignments, and grades effortlessly,
                    making academic management a breeze. </p>
                </p>
                </div>
                </section>
              
            </div>
               
            
            
          
        </div>
     
    </div>
    
        
    )
}

export default Home; 