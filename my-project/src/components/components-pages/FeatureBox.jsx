import React from "react";
import "../components-css/Navbar.css"




function FeatureBox (props) {
      return (
         <div className="a-box">
          <div className="a-b-img">
             <img src={props.image} alt=""/>
          </div>
          <div className="s-b-text">
            <h2> {props.title} </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum nam rem facere dolore ipsam animi! Rem, laboriosam? Veniam, ipsam facere? Facilis est debitis vitae nulla suscipit?
                 Impedit repellendus accusantium numquam.</p>
          </div>
         </div>
      )

}
export default FeatureBox;