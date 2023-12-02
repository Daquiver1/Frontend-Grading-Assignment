import "./CustomHome.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container-fluid pt-5 hero-session">
                <div className="container hero-content text-white">
                    <h1>
                        Student Grading System
                    </h1>
                    <button type="button" class="btn btn-outline-light mt-2 rounded">
                        Read More
                    </button>

                </div>
            </div>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col col-12 col-md-6 col-sm-12 col-xs-12">
                        <div className="content mt-5 p-5">
                            <h2 className="mb-3 text-primary">Our Mission</h2>
                            <p>
                                To empower students by providing a transparent and efficient
                                platform for tracking and reporting grades in real-time. With 
                                a user-friendly interface, the system facilitates seamless 
                                interactions between students and instructors, enabling the 
                                submission of missing grades and fostering open communication channels. The mission encompasses
                                ensuring data security, promoting educational equity, and offering academic support services. 
                            </p>
                            <button type="button" className="btn btn-primary text-white btn-sm py-2 px-3 mt-2">Read More</button>
                        </div>
                        </div>
                        <div className="col col-12 col-md-6 col-sm-12 col-xs-12">
                            <div className="img mt-5 p-3">
                            <img src="https://www.mystudentplan.ca/_images/student-plan-landing.png" className="img-fluid" alt="student image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <Footer />
        </div>
    )
}

export default Home;