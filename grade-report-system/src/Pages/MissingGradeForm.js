import "./MissingGradeForm.css";
import {useState} from 'react';

const MissingGradeForm = () => {
    const [popupStyle, Show] = useState("main")

    const popUp =() => {
        Show ("login-popup")
        setTimeout(()=> Show("main"), 3200)
    }
            
    return ( 
     
        <div className="Content">
            <div className="Formcover">
                <h1>Missing Grade Form</h1>

                <p>Fill in with right details </p>
            
        <input type="text" placeholder="Course name" />
        <input type="text" placeholder="Instructor's name" />
        <input type="text" placeholder="Expected grade" />
        <input type="text" placeholder="Describe your Issue" className="Describe"/>


        <div className="SubmitButton" onClick={popUp}>
            Submit
        </div>
         
        <div className={popupStyle}>
                <h3>Successful !

                </h3>
            </div>

            
            </div>

            <div className="footer-barr">
            <span className="span1"> 
            Having a missing grade? <br />
        
         </span>

        <span className="span2">
     Get in touch now ! 
        </span>
         
            </div>


        </div>




     );
}
 
export default MissingGradeForm;