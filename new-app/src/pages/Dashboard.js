// import Out from "./Login"

// import schlogo from './schlogo.png';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from './pages/Login';
// import Layout from './pages/layout';
// import Graderep from './pages/Graderep';


const Dashboard = () => {
    return(
        <>
        {/* <header>
        <div id="flexbox">
          <div id="schlogo"><img src={schlogo} className="deptlogo" alt="Ug DCS logo"   ></img></div> */}
          {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Graderep" element={<Graderep />} />
          <Route path="Out" element={Out} />
        </Route>
      </Routes>
    </BrowserRouter> */}
          {/* <div id="navbar">
            <ul className="horiznav">
               <li>Grade Report</li>
               <li>Dashboard</li>
               <li>Missing Grade Form</li>
               <li>Insructor</li>
               <li>Help &amp; Support</li>
               <button className="frontgate" onClick={Out}><li>Log Out</li></button>

            </ul>
          </div>
        </div>
      </header> */}
      <br></br>
      <br></br>
      <h1 style={{color:"#BD9C6C"}}>Dashboard</h1>
      
      <p>The performance this academic period was very impressive as you improved on 
        your C.G.P.A. This led you to second class upper from the third class.You had 5 As and 3 B+s in the last two semesters.
        You have made a significant transition into an intelligent student and that is good keep it up.
        The grades you had are one of the best the depaartment has seen so far in this academic year.
      </p>
      <p >
        Our school uses a standard grade system. Students are graded on a scale of A to F, with A being the highest grade and F being the lowest. 
        A student's grade is determined by their performance on various assignments, exams, and projects throughout the year.
        Additionally, teachers consider attendance, participation, and classroom behavior when assigning grades. 
        It is important to note that this system may vary slightly depending on the teacher's interpretation of the student's work. 
        Teachers also have the option to assign "+" or "-" grades, indicating above 
       average or below average performance, respectively. Finally, letter grades are converted to 
       numerical grades using a predetermined scale and the overall performance of the student is determined by the C.G.P.A.
       </p>
      
        </>
    )
}
export default Dashboard;