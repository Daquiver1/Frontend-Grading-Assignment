import './Dashboard.css'
import Studenticon from './Studenticon.png';
import Grades from './Grades.png';
import Alert from './Alert.png';
import Upload from './Upload.png';
import React, { useState } from 'react';


const Dashboard = () => {
    const [popupStyle, Show] = useState("main")

    const popUp =() => {
        Show ("profile-popup")
        setTimeout(()=> Show("main"), 3200)};

        const [popupStyle2, Showw] = useState("mainn")

        const popUp2=() => {
            Showw("Sem-popup")
            setTimeout(()=> Showw("mainn"), 3200)};


            const [popupStyle3, Showww] = useState("mainnn")

        const popUp3=() => {
            Showww("Alert-popup")
            setTimeout(()=> Showww("mainnn"), 3200)};

            const [popupStyle4, Showwww] = useState("mainnn")

        const popUp4=() => {
            Showwww("Upload-popup")
            setTimeout(()=> Showwww("mainnnn"), 3200)}

    return ( 
       <div>
<div className="top">
    <div className="Account">
        <h3>Account Info</h3>
        <img src={Studenticon} alt="prof" />
        <button onClick={popUp}>
            View
        </button>

        <div className={popupStyle}>
                <p>
                Student ID : <br /> 11317254 <br /> <br />
                Level: <br /> 200 <br />  <br />      
                Course : <br /> Bsc. Information Technology <br /> <br />
                Account: <br /> Student Account <br /> <br />
                
                


                </p>
                

            </div>

    </div>

    <div className="SemGrades">
        <h3>Available Semester Grades</h3>
        <img src={Grades} alt="grades" />
        <button onClick={popUp2}>
            View
        </button>
        <div className={popupStyle2}>
                <p>
                Grades for courses fully uploaded <br />
                - Second Semester 2023 -
                    <ul>
                        <li>GHIA 207</li>  <br />  <br />
                        <li>GHAT 207</li> <br /> <br />
                        <li>DCIS 104</li>  <br />

                        <li>ASTV 417</li>  <br />  <br />
                        <li>VAFT 210</li> <br /> <br />
                        <li>LTSE 104</li>  <br />
                        </ul>
                </p>
                

            </div>
    </div>
</div>

<div className="down">
        <div className="Alerts">
        <h3>Missing Grade Alert</h3>
        <img src={Alert} alt="alert" />
        <button onClick={popUp3}>
            View
        </button>

        <div className={popupStyle3}>
                <p>
                Grades for courses missing !
                    <ul>
                        <li>UGBS 104</li>  <br />  <br />
                        <li>MNST 203</li> <br /> <br />
                        <li>GEOG 104</li>
                    </ul>


                </p>
                

            </div>

        </div>


        <div className="Upload">
        <h3>Yet to Upload</h3>
        
        <img src={Upload} alt="upload" />
        <button onClick={popUp4}>
            View
        </button>
        <div className={popupStyle4}>
                <p>
                    Courses yet to be uploaded
                    <ul>
                        <li>GHIA 207</li>  <br />  <br />
                        <li>GHAT 207</li> <br /> <br />
                        <li>DCIS 104</li>
                    </ul>

                </p>
                

            </div>

        </div>

</div>


<footer className="Footee">
            <p>&copy; Copyright, Grade-Report-System &middot; 2023</p>
            </footer>


       </div>
     );
}
 
export default Dashboard;