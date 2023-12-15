import React from "react";
import "../components-css/Navbar.css"
import FeatureBox from "./FeatureBox";
import edu from "../components-images/edu.png";
import confused from "../components-images/confused.jpg";
import kids from "../components-images/kids.png"




function Feature () {
      return (
         <div id="features">
            <div className="a-container">
               <FeatureBox image={kids} title="Grades Center" content="Effortlessly track your grades, feedback, and resources, all in one central hub. 
               Your gateway to academic success." />
               <FeatureBox image={edu} title="Grade Form" content="Digital forms to the rescue! No more grading woes, just simplified grading and personalized feedback." />
               <FeatureBox image={confused} title="Dashboard" content="Lost in the grade maze? We're your map! Check grades, track progress, and tackle any issue with ease. 
            " />
              

            </div>
         </div>
      )

}
export default Feature;