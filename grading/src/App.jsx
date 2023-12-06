
import './App.css';
import logo from './logo.jpeg'
import back_img from './carlos-muza-hpjSkU2UYSU-unsplash.jpg'



import {Link, Route, Routes} from 'react-router-dom';
import Instructor from './Instructor';
import Miss from './missGrade';
import Apps from './sign';
import View from './viewGrade';
import Help from './help'
import AppDashboard from './Dashboard';







function App() {
  return (
   
   
    <div>
      
    <div className="Header">
      
      
      <img className='logo' src={logo} />
      <div  className='grade'><h1>GRADE</h1></div>
     
      
   
   
      <div>
     
    <button className='item'>
    <Link to='/'>Home</Link>
    </button>
    <button  className='item'>
   <Link to='/Apps'>login</Link>
    </button>
    <button  className='item'>
   <Link to='/Miss'> Grade</Link>
    </button>
    <button  className='item'>
    <Link to='/Instructor'>Instructor</Link>
    </button>
    <button  className='item'>
    <Link to='/View'>ViewGrade</Link>
    </button>
    <button  className='item'>
    <Link to='/Dashboard'>Dashboard</Link>
    </button>
   
   

    




      </div>

    
    </div>
    <div >
   <img className='back' width='1872px' height='830px'src={back_img}/>

    </div>

  <h1 className='overview_header'>OVERVIEW OF GRADE SYSTEM</h1>
    <div className='overview'>
<div>
<h2>Introduction</h2>
<p>
Welcome to our innovative Grade System website, where academic excellence meets technological convenience! In the fast-paced world of education, keeping track of grades and performance can be a daunting task. That's where our Grade System website comes in, providing a streamlined and user-friendly platform to manage and monitor academic progress effortlessly.
Our platform is designed to cater to students, parents, and educators alike, offering a comprehensive solution for efficient grade management. Whether you're a student striving for excellence, a parent keen on staying involved in your child's academic journey, or an educator looking for a reliable tool to simplify grading processes, our website has you covered.
</p>
</div>
<div>
<h2>Purpose</h2>
<p>
The primary purpose of a grade system in education is to assess and communicate the level of a student's understanding, knowledge, and proficiency in a particular subject or course. Grades serve several important functions within the educational system:
Evaluation of Learning: Grades provide a quantitative measure of a student's academic performance. They reflect the extent to which students have mastered the content and skills taught in a specific course.
Feedback for Improvement: Grades offer constructive feedback to students, indicating areas of strength and weakness. This feedback helps students understand their performance, identify areas for improvement, and tailor their study strategies accordingly.
</p>
</div>
<div>
<h2>Grade System</h2>
<p>Grading within a grade system involves the evaluation and assignment of scores or letter grades to students based on their performance in various assessments, assignments, and examinations. The grading process is designed to provide a clear and standardized way of assessing students' understanding and proficiency in a particular subject or course. Here are the key aspects of the grading process within a typical grade system:
Establishing Grading Criteria:
Educators begin by defining clear and transparent grading criteria. These criteria may include specific learning objectives, knowledge mastery, problem-solving skills, creativity, participation, and other relevant factors.Different assessments carry varying levels of importance in determining the final grade


</p>
</div>



    </div>
    <br></br>
    <br></br>
    <br></br>
    <button  className='item'>
    <Link to='/Help'>Help</Link>
    </button>






    <Routes>
    <Route path='/Instructor' element={<Instructor/>}/>
    <Route path='/Miss' element={<Miss/>}/>
    <Route path='/Apps' element={<Apps/>}/>
    <Route path='/View' element={<View/>}/>
    <Route path='/Help' element={<Help/>}/>
    <Route path='/Dashboard' element={<AppDashboard/>}/>

   
      
    </Routes>


    </div>
    
    
  );
}

export default App;
