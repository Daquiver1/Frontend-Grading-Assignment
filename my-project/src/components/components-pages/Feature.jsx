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
               <FeatureBox image={kids} title="Grade Center" content="Unique content for Box 1" />
               <FeatureBox image={edu} title="Grade Form" content="This website uses forms as a means to communicate or report issues" />
               <FeatureBox image={confused} title="Dashboard" content="Unique content for Box 1" />
              

            </div>
         </div>
      )

}
export default Feature;