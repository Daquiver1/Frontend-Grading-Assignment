import React from "react";
import './styles.css';
function Overview(){
    return(
        <div className="homepage">
        <div className="introImageContainer">
        <div className="introImageOverlay"></div>
            <img
                src="https://github.com/SelaHyp/11126606_DCIT_205/blob/main/compssa%20img/Screenshot%20(11).png?raw=true"
                alt="student in the lab"
                className="introImage"
            />
            <div className="welcomeText">
                <h1>Welcome to the Missing Grade Reporting System!</h1>

            <h3>At the heart of every academic journey lies the pursuit of knowledge, growth, and success.<br />
            Here at our Missing Grade Reporting System, we recognize the importance of a seamless academic
            experience, and we are committed to ensuring that no grades are left unaccounted for and every achievement is acknowledged on your 
            educational path .</h3>
            </div><br /> 
    </div>
     <div className="gridBox">
     <div className="column marg">
     <div className="column1">
     <h1 className="h1Color">Empowering Students, Enhancing Education</h1>
     <h4>Navigating the complexities of academia can be challenging, and missing grades should never be a roadblock to your progress.
        Our user-friendly platform is designed with you in mind, providing a comprehensive solution to effortlessly track, report, and
        communicate regarding any missing grades.</h4>
        </div>
     </div>
     <div className="column marg1">
        <div className="column1" >
     <h1 className="h1Color">Your Academic Compass</h1><br />
     <h4>Embark on a journey of clarity and transparency as you explore the features of our system.
        From viewing your grades at a glance to reporting any discrepancies, we are your compass in
         the academic landscape. Stay in control of your educational destiny, with the power to ensure
          that every achievement is duly recognized.</h4>
        </div>
     </div>
 </div>
 <div className="card-container">
      <div className="event-research-container">
        <div className="event-research-image">
          <img
            src="https://th.bing.com/th/id/R.e4ceec4535aaec148039b1f17fba919b?rik=43P9G4mtIKfgig&pid=ImgRaw&r=0"
            alt="upcoming-events-image"
          />
        </div>
        <div className="image-text">
          <h1>GETTING STARTED</h1>
          <p>
          Your academic destiny awaits. Dive into the Missing Grade Reporting System now.
          Log in to discover, report, and communicate seamlessly. Let's co-create an academic experience where
          every grade contributes to the symphony of your success.<br /><br />

        Welcome to a platform where every grade matters, and no achievement goes unnoticed. Welcome to the
         Missing Grade Reporting System - Shaping Your Academic Success!
          </p>
          <button className="login-button">LOGIN</button>
        </div>
      </div>
    </div>
    <div>
    <section className="sec1">
        <h1>Features that Define Us</h1>

        <div class="feature">
            <img src="https://th.bing.com/th/id/OIP.K2VbdAWuwo9VlDZhLm42AAHaFL?rs=1&pid=ImgDetMain" alt="Intuitive Design Icon" />
            <div>
                <h3>Intuitive Design</h3>
                <p>Navigate effortlessly through our sleek and intuitive design, putting the power of your academic information at your fingertips.</p>
            </div>
        </div>

        <div class="feature">
            <img src="https://cdn.rarejob.com/material/jitsuyo_eikaiwa/2018/03/12114626/L6_Ch7_L3_Voc_2.png" alt="Effortless Reporting Icon" />
            <div>
                <h3>Efficient Reporting</h3>
                <p>Report missing grades with just a few clicks! Our reporting system is designed to be straightforward, allowing you to communicate any discrepancies promptly.</p>
            </div>
        </div>

        <div class="feature">
            <img src="https://th.bing.com/th/id/OIP.xMxtpvKrr5AR8wzbG0Ca3QHaHa?w=512&h=512&rs=1&pid=ImgDetMain" alt="Security Icon" />
            <div>
                <h3>Securing Your Academic Identity</h3>
                <p>Your academic journey is personal. Our robust security measures ensure the confidentiality of your information, allowing you to explore your records with confidence.</p>
            </div>
        </div>
    </section>
    </div>



 </div>  
    )
}
export default Overview;