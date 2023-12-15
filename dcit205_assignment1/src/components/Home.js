import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="homepage">
        <h1 className="text-center">Overview</h1>

        <p>This website is designed to help students track and report grades that are not recorded in their academic profiles. It consists of seven main pages:
        Our mission is to ensure that every student has access to their complete academic profile.
        We understand how important it is for you to keep track of your grades and we're here to help!</p>
        
                
                
                
                
               
                
        <p>1.<Link to="/Home"><span>Home:</span></Link>  You are here! This page provides an overview of our system and its features.</p>

        <p>2. <Link to="/GradeReport"><span> Grade Report: </span> </Link> Check your current grades for all your courses.</p>

        <p>3. <Link to="/MissingGrade"><span> Missing Grade:</span></Link> If you notice a grade is missing, use this page to report it. We'll make sure it gets to the right people.</p>

        <p>4.  <Link to="/contact"><span>Contact:</span></Link> Need to discuss a grade with your instructor? We provide an easy way to get in touch.</p>

        <p>5. <Link to="/Help-Support"><span>Help & Support:</span></Link> Have questions? We have answers! Check out our Frequently Asked Questions page.
        If you need help with the system, our support team is ready to assist you.
        </p>

        <p>6. <Link to="/Dashboard"><span>Dashboard:</span></Link> Get an overview of your current grades by visiting this page </p>

        <p>7. <Link to="/Login"><span>Login:</span></Link>  Enter your student ID and PIN to access your academic profile.        </p>
        </div>
      );
}
 
export default Home;