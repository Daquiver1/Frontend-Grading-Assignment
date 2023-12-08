import { Outlet, Link } from "react-router-dom";
import schlogo from './schlogo.png';


const Layout = () => {
  return (
    <>
          
    <header style={{position:"fixed",backgroundColor:"#fff",width:"100%"}}>
     
      <div style={{backgroundColor:"#fff",display:"inline-block",marginLeft:"0px",marginRight:"100px"}}><img src={schlogo} className="deptlogo" alt="Ug DCS logo"   ></img></div>
      <div id="horiznav">
        <ul className="horiznav" style={{backgroundColor:"#fff"}}>
          
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Graderep">Grade Report</Link>
          </li>
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Missing">Missing Grade Form</Link>
          </li>
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Instructor">Instructor contact</Link>
          </li>
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Help">Help &amp; Support</Link>
          </li>
          <li>
            <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Out">Log Out</Link>
          </li>
          
        </ul>
      </div>
      
    </header>
    
    <Outlet />
    </>
  )
};

export default Layout;