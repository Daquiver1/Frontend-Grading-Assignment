import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard(){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = ()=>{
        setIsClicked(!isClicked);
    }
    return(
        <>
        <Header/>
        <>
        <div className ="dashContainer">
        <Navigation/>
        <div>
            <div className="dashbox">
            <label id="mylab" className="noteMessage" for="note">{isClicked ? "You currently have no missing grades" :"" }</label>
        <svg onClick={handleClick} className="note" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
</svg>
</div>
        <div className="dash-container">
            <h1 className="dashTitle">Dashboard</h1>
            <hr></hr>
            <h2 className="currentGrades">Current Grades</h2>
            <p className="grades">DCIT 201: A</p>
            <p className="grades">DCIT 203: B</p>
            <p className="grades">MATH 223: B+</p>
            <Link className="moreGrades" to="/gradeReport">See full grade list</Link>
            </div>
           </div>
        </div>
        </>
        <Footer/>
        </>
    );
}
export default Dashboard;