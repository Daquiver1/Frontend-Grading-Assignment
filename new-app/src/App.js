import './App.css';
// import schlogo from './schlogo.png';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import grade from './grade.jpg';
import Login from './pages/Login';
import Layout from './pages/layout';
import Graderep from './pages/Graderep';
import Dashboard from './pages/Dashboard'
import Out from './pages/Out';
import Missing from './pages/Missing';
import Instructor from './pages/Instructor';
import Help from './pages/Help';



function App() {
    return (
    
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Graderep" element={<Graderep />} />
          <Route path="Missing" element={<Missing/>} />
          <Route path="Instructor" element={<Instructor/>} />
          <Route path="Help" element={<Help/>} />
          <Route path="Out" element={<Out/>} />
        </Route>
      </Routes>
    </BrowserRouter>
      
      
      {/* <header>
        <div id="flexbox">
          <div id="schlogo"><img src={schlogo} className="deptlogo" alt="Ug DCS logo"   ></img></div>
          <div id="navbar">
            <ul className="horiznav1"> */}
               {/* <button className="frontgate" onClick={Graderep}><li>Grade Report</li></button>
               <button className="frontgate" onClick={Dashboard}><li>Dashboard</li></button>
               <li>Missing Grade Form</li>
               <li>Insructor</li>
               <li>Help &amp; Support</li> */}
               {/* <button className="frontgate" onClick={Login}><li>Login</li></button> */}

            {/* </ul>
          </div>
        </div>
      </header> */}
      <br></br>
      {/* <h1 style={{color:"#BD9C6C"}}>Welcome to GradePortal</h1>
      <div id="bflexbox">
        <div id="flexitem">
          <p style={{width:"600px"}}>
           This system helps students to access their grade reports, a detailed view of the grades scored for all
           courses.The system also reports noticifications to students to alert 
           them on missing grades for a particular course or courses,
           this allows students  make complains to the instructors
           of the course if their grade is not showing. A missing grade report
           form is filled by the student and submitted to the instructor to solve any problem regarding the grades for a particular 
           course. There is also an instructor contact page that allows students to contact and seek for information regarding 
           grade issues personally from their instructor through mail.
          </p>
        </div>
        <div id="flexitem">
          <p style={{width:"600px"}}>
           This system has and will continue to help this institution handle grade reporting issues as it makes the job very easy
           and all instructors responsible to make sure that they upload the grade of each student that offered their course in during
           a particular period of study. This hass reduced the stress that students have to go through when they can't access their grades
           for a particular course.
          </p>
        </div>
      </div>
      <div id="imgbox">
        <img src={grade} alt="eg of grades"></img>
      </div> */}
      
    </div>
  );
  
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;