import React from 'react'
import "./Body.css"
import Nice from "./Images/new.jpg"
import Niceone from "./Images/loginpagescreenshot.png"
import Nicetwo from "./Images/reportpagescreenshot.png"
import Nicethree from "./Images/missinggradepagescreenshot1.png"
import Nicefour from "./Images/missinggraderepage2.png"
import Nicefive from "./Images/contactpagescreenshot.png"
import Nicesix from "./Images/helppagescreenshot1.png"
import Niceseven from "./Images/helppagescreenshot2.png"
import Niceeight from "./Images/dashboard1.png"




function Body() {
  return (
    <div className="main-div">

    <div className="first-div">
    
    <h1 className="dhead">Navigating the Academic Maze with Ease</h1>
<div className="dhead-span">EXPLORE OUR PAGES HERE::</div>
    </div>

    <div className="boxes">
<div className="one">
<img className="image2" src={Niceone} /><br/>
<span className="killmoves"> it is better you log in to your school account first if you want to be more accessible to the courses and grade arena</span>
</div>

<div className="two">
<img className="image2" src={Nicetwo} /><br/>
<span className="killmoves">his page has detailed view of all courses and their respective grades, follow the instructions there if you are not pleased with your results</span>
</div>

<div className="three">
<img className="image2" src={Niceeight} /><br/>
<span className="killmoves">This page gives an overview of the grade report of the student, access and check the results statistics</span>
</div>

<div className="four">
<img className="image2" src={Nicethree} /><br/>
<span className="killmoves">Incase you find some of your grades or results missing, feel free to check this page and follow the instructions to resolve the issue</span>
</div>

    </div>
    
    <div className="boxes">
<div className="five">
<img className="image2" src={Nicefour} /><br/>
<span className="killmoves">Incase you find some of your grades or results missing, feel free to check this page and follow the instructions to resolve the issue</span>
</div>

<div className="six">
<img className="image2" src={Nicefive} /><br/>
<span className="killmoves">For any further information about a particular course or you want to make a report about a course, visit this page too</span>
</div>

<div className="seven">
<img className="image2" src={Nicesix} /><br/>
<span className="killmoves">if you have any question about a particular course, kindly visit the help and support page to get an instant answer without any stress</span>
</div>

<div className="eight">
<img className="image2" src={Niceseven} /><br/>
<span className="killmoves">if you have any question about a particular course, kindly visit the help and support page to get an instant answer without any stress</span>
</div>
    </div>
    </div>
  )
}

export default Body