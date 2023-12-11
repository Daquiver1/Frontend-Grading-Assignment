import React from "react";
import "../components-css/Navbar.css"
import FeatureBox from "./FeatureBox";
import edu from "../components-images/edu.png";
// import featureimage from "../components-images/feature_1.png";
// import featureimage1 from "../components-images/feature_2.png";
// import featureimage2 from "../components-images/feature_3.png";
import confused from "../components-images/confused.jpg";
import kids from "../components-images/kids.png"




function Feature () {
      return (
         <div id="features">
            <div className="a-container">
               <FeatureBox image={kids} title="Grade Center"/>
               <FeatureBox image={edu} title="Grade Form"/>
               <FeatureBox image={confused} title="Dashboard"/>
            </div>
         </div>
      )

}
export default Feature;