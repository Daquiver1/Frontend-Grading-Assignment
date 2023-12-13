import React from "react";
import boanokyeImage from '../Assets/boanokye.jpeg';
import frederickImage from '../Assets/Frederick-Yuorkuu.jpg';
import InyakoImage from '../Assets/lnyako-danquah5 .jpg'
import YvonneImage from '../Assets/Yvonne Lartey 3.jpg'
import PersonImage from '../Assets/person.png'
import './instructors.css';
const instructor = () => {
    return(
<div className="container_instruct">
  <div className="header">
 <h2 className="text_instruct">Academic Affairs Directorate Team</h2>               
   <h4 className="text_2_instruct">Administrative Officers</h4>
   </div>
    <div className="row_instruct">        
     <div className="content_instruct">
      <img src={InyakoImage} alt="Inyako"/>             
            <p>DIRECTOR, ACADEMIC AFFAIRS</p>
            <span>Lydia Anowa Nyako-Danquah</span>
            <p>BSc (Ghana), M.Sc. (KNUST)</p>
            <span>aad@ug.edu.gh</span>      
            <br />
            <textarea className="textarea_instruct" rows="8" placeholder="Please Explain Your Predicament"/>
            <div className="submit-container_instruct">
            <button className="submit_instruct">Submit</button>            
           </div> 
    </div>
    <div className="content_instruct">
<img src={PersonImage} alt="Person"/>
               <p>HEAD, AFFILIATIONS UNIT</p>
               <span>Essie takowa Budu Ayensah</span>
               <p>Assistant Registrar</p>
               <span>appiliation@ug.edu.gh</span>
               <br />
        <textarea className="textarea_instruct" rows="8" placeholder="Please Explain Your Predicament"/>
        <div className="submit-container_instruct">
        <button className="submit_instruct">Submit</button>
      </div> 
      </div>
      <div className="content_instruct">
                <img src={YvonneImage} alt="Yvonne" />
                <p>HEAD, ADMISSIONS UNIT</p>
                <span>Yvonne Lartey (Mrs.)</span>
                <p>Senior Assistant Registrar</p>
                <span>admissions@ug.edu.gh</span>
                <br />
        <textarea className="textarea_instruct" rows="8" placeholder="Please Explain Your Predicament"/>
        <div className="submit-container_instruct">
        <button className="submit_instruct">Submit</button>
      </div>
      </div>
      </div>
      

<div className="row_2_instruct">
<div className="content_instruct_2">                
      <img src={frederickImage} alt="Fredrick"/>
                <p>HEAD, TEACHING AND EXAMINATIONS UNIT</p>
                <span>Fredrick Yuorkuu (Mr.)</span>
                <p>Senior Assistant Registrar</p>
                <p>B.A (Ghana), MBA (Ghana)</p>
                <span>teu-academic@ug.edu.gh</span>
                <br />
                <textarea className="textarea_instruct_2" placeholder="Please Explain Your Predicament"/>
        <div className="submit-container_instruct_2">
        <button className="submit_instruct_2">Submit</button>
      </div>
      </div>
      <div className="content_instruct_2">
<img src={boanokyeImage} alt="Boanokye"/>
                <p>HEAD, BOARD AND COMMITTEES UNIT</p>
                <span>Bernice O.Anokye (Mrs.)</span>
                <p>Senior Assistant Registrar</p>
                <p>B.A (Ghana), MPhil (Cambridge), MPhil (Bergen)</p>
                <span>boards-committees@ug.edu.gh</span>
            <br />
            <textarea className="textarea_instruct_2" placeholder="Please Explain Your Predicament"/>
            <div className="submit-container_instruct_2">
        <button className="submit_instruct_2">Submit</button>
      </div>
      </div>

<div className="content_instruct_2">
            <img src={PersonImage} alt="Person" />
                <p>HEAD, STUDENTS SERVICES AND RECORDS UNIT</p>
                <span>Matilda Appiah (Ms.)</span>
                <p>Assistant Registrar</p>
                <p>B.A (KNUST),M.A (GHANA), MPHIL (GHANA)</p>
                <span>ADEMICSUG.EDU.GH</span>
                <br />
      <textarea className="textarea_instruct_2" placeholder="Please Explain Your Predicament"/>
        <div className="submit-container_instruct_2">
        <button className="submit_instruct_2">Submit</button>
      </div>
      </div>
      </div> 
      </div>      
    );
};
export default instructor;