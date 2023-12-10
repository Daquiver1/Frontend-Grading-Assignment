import React from "react";
import "../components-css/Navbar.css"
import FeatureBox from "./FeatureBox";
import featureimage from "../components-images/feature_1.png";
import featureimage1 from "../components-images/feature_2.png";
import featureimage2 from "../components-images/feature_3.png";



function Feature () {
      return (
         <div id="features">
            <div className="a-container">
               <FeatureBox image={featureimage} title="Grade Center"/>
               <FeatureBox image={featureimage1} title="Grade Form"/>
               <FeatureBox image={featureimage2} title="Dashboard"/>
            </div>
         </div>
      )

}
export default Feature;