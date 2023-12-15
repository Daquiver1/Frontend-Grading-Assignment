import React from "react";
import "./Dashboard.css";


const Dashboard = ()=> {
    return (
        <div>
            
  <div class="container">
    
    <section class="main">
      <div class="main-top">
        
        <i class="fas fa-user-cog"></i>
      </div>
      <div class="main-skills">
        <div class="card">
          <i class="fas fa-laptop-code"></i>
          <h3>COURSE</h3>
          <p>Computer Science</p>
          <button>Groups</button>
        </div>
        <div class="card">
          <i class="fab fa-wordpress"></i>
          <h3>LEVEL 200</h3>
          <p>First Semester</p>
          <button>Year 2023</button>
        </div>
        <div class="card">
          <i class="fas fa-palette"></i>
          <h3>MESSAGES</h3>
          <p>27</p>
          <button>Now</button>
        </div>
        <div class="card">
          <i class="fab fa-app-store-ios"></i>
          <h3>GPA</h3>
          <p>3.5</p>
          <button>First Class</button>
        </div>
      </div>

      <section class="main-course">
        <h1>Course Overview</h1>
        <div class="course-box">
          <ul>
            <li class="active">In progress</li>
            <li>explore</li>
            <li>incoming</li>
            <li>finished</li>
          </ul>
          <div class="course">
            <div class="box">
              <h3>Exam Performance</h3>
              <p>80% - progress</p>
              <button>continue</button>
              <i class="fab fa-html5 html"></i>
            </div>
            <div class="box">
              <h3>Assigment</h3>
              <p>50% - progress</p>
              <button>continue</button>
              <i class="fab fa-css3-alt css"></i>
            </div>
            <div class="box">
              <h3>Quiz</h3>
              <p>30% - progress</p>
              <button>continue</button>
              <i class="fab fa-js-square js"></i>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>

 </div>

    );
}

export default Dashboard