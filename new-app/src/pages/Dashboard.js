import Out from "./Login"

import schlogo from './schlogo.png';
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
      {/* <p>{remarks ? </App> : </Login>}</p> */}
      <p>The performance this academic period was very impressive as you improved on 
        your C.G.P.A. This led you to second class upper from the third class.
      </p>
      
        </>
    )
}
export default Dashboard;