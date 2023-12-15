import { Link } from "react-router-dom";
import "../Styles/ComponentStyles/Overview.css";
import "../Pages/Login.js"





const Overview = () => {

            

    return (
        
        <div className="overview">
            
                <h2>OVERVIEW</h2>
                <button className="login" >
                    <Link to="/Pages/Login">Login</Link>
                </button>
            
            <h3>Welcome to the Student Grade Reporting System</h3>
            <div className="features">
                <h3>Key Features</h3>
                <h3>View Grades:</h3>
                    <p>Easily access a comprehensive view of your academic records </p>
                <h3>Report Missing Grades:</h3>
                    <p>Report missing grades or unrecorded grades through a simple process</p>
                <h3>Communication Hub:</h3>
                    <p>Connect with instructors or academic administration effortlessly</p>
                <h3>User-Friendly Interface:</h3>
                    <p>Enjoy a seamless and intuitive experience.</p>
            </div>

            <div>
                <h3>How it works</h3>
                <ol>
                    <li>Log in to your account using your student id and pin </li>
                    <li>View your grade and report any missing grade </li>   
                    <li>Contact Instructors or Lecturers</li> 
                    <li>Find help and support from our community by reading answers of FAQs and/or filling a support contact form</li>
                </ol>
                
            </div>
        </div>
    )
};
  
  export default Overview;
  