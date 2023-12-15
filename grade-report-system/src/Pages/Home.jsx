import Navbar from "../Navbar";
import Footer from "../Footer";
import './Home.css';
import '../Navbar.css'
import Studenticon from './Studenticon.png';
const Home = () => {
    return ( 

        <div className="Home">
            <Navbar />

            <div className="Body">
            <img className="studentimg" src={Studenticon} alt="logo1" />
                <h1> Dear User ! <br />
                    Welcome to this platform
                </h1>
                <p>
                    This platform allows you to view grades for all academic semesters, <br />
                    report all missing grades and communicate with various Instructors and Academic Administrators.

                </p>

                <button className="linkbutton"><a href="/login">LOGIN</a></button>
            </div>
    

            <div>
                <Footer />
            </div>


        </div>
        
     );
}
 
export default Home;