import Navigation from './Navigation.js';
import Header from './HomeHeader.js'
import Footer from './Footer.js';
import Button from  './Button.js'
import { Link } from 'react-router-dom';

function Home(){
    
    return(
        <>
        <Header/>
        <div className ="wcontainer">
        <div className="tContainer">
            <h1>Welcome</h1>
            <p>The Student Grade Report System is a platform designed to streamline and enhance the management and communication of academic performance. This system serves as a centralized hub for students, parents, and educators, providing real-time access to crucial information related to student grades, assessments, and overall academic progress.</p>
           <Link to="/login"><Button name="getStarted" elname="Get Started"/></Link>
        </div>

        </div>
        <Footer/>
        </>
    );
}

export default Home;