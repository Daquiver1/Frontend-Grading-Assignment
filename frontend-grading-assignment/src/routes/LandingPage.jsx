import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx";
import "./LandingPage.css"

const LandingPage = () => {
    return(
        <div>
            <Navbar/>

            <div className="container-fluid" style={{marginTop: "7rem"}}>
                <div>
                    <h1 className="head2 text-center"> Missing Grade Reporting System </h1>
                    <p className="head3">Welcome to the University of Ghana Missing Grade Reporting System</p>
                </div>
            </div>

            <div className="container-fluid">
                <h1>General Overview</h1>

                <p>
                 The Missing Grade Reporting System is a user-friendly platform designed to 
                    help students track and report missing grades that are not recorded in 
                    their acaedemic profiles. Whether you needed to view your grades, report 
                    them missing ones or communicate with your instructours/lectures, this 
                    system has you covered.
                </p>
            </div>

            <div className="container-fluid mt-5">
                <h1 className="head2"> Key Features</h1>
                <p className="head3">&#8226; Responsive design for seamless user experience.</p>
                <p className="head3">&#8226; Secure login for students using Student ID and Password.</p>
                <p className="head3">&#8226; Detailed dashboard with current grades and missing grade alerts.</p>
                <p className="head3">&#8226; Filterable Grade Report by academic year/semester</p>
                <p className="head3">&#8226; Easy-to-use form to report missing grades.</p>
                <p className="head3">&#8226; Contact information for instructors/lectures with a simulated email option.</p>
                <p className="head3">&#8226; Help and support section with FAQs and technical support contact form.</p>
        
            </div>

            <div className="container-fluid">
            <section id="login-side">
            <div>
                <p className="head3">Ready to take control of your grades? Login now to access your grades 
                    and make any compliant form. </p> 
                    <a href="login-page.html" className="loggg text-center">
                       <div className="m-auto">
                        <button id="loginButton" className="logg">
                                <i className="logggg"> Log In</i>
                            </button>
                       </div>
                    </a>
            </div>
        </section>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default LandingPage;