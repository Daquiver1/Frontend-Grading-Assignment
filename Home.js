import React from "react";
import './Home.css';

function Home(){
  return(
  <><div className="case">
    <div className="bin">
      <div><p id="gh"><strong>Missing Grade Report System</strong></p><hr /></div>
      <p id="jh"><strong>Welcome to the Missing Grade Report System</strong></p>
      <p>The system is designed to help students track and report grades that are not recorded in their academic profiles.</p>
      <p>Please navigate through the menu to view your grades,report missing grades, report missing grade, or contact instructors or academic administration.</p>

      <strong>Degree Classification</strong>
      <p>Standard grading system for degree Classification based on the overall percentage achieved. The four university grade boundaries are </p>
      <ul>
        <li>First-Class Honour(1st)(70% and above)Exceptional academic performance</li>
        <li>Second-Class Upper(60%-70%) Strong Performance ,most common degree class</li>
        <li>Second-Class Lower(50%-60%) Satisfactory </li>
        <li>Third-Class(40%-50%) Minimum passing grade for an honours grade</li>
      </ul>
    </div>
    <div className="vibe">
      <div className="vb">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXg6k2FL88XK7tgygtZAG2jeWeiQfYdBt3Xg&usqp=CAU" alt="" width="300px"/>
      </div>
      <div className="vb">
        <img src="https://images.datacamp.com/image/upload/v1651047046/image8_0e61d0dad8.png" alt="" width="300px"/>
      </div>
      <div className="vb">
        <img src="https://a.slack-edge.com/9c84081/marketing/img/solutions/tech/png/billboard.png" alt="" width="300px" /><br />
      </div>
    </div>
    </div>
        
        </>
  )
}
export default Home;