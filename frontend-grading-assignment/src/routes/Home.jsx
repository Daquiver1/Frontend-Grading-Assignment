import "./Home.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Home  = () => {
    return (
        <div>
           <Navbar />

           <div className="home-session">
               <h1>STUDENT GRADING SYSTEM</h1>
            </div>

            <div className="container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>OUR MISSION</h3>
                        <p>
                            Our goal is to provide instructors and students
                             with an easy-to-use, dynamic, and effective grading
                              system that is based on React. Our goal is to create 
                              a learning environment with this project that goes 
                              beyond conventional limits. It will give teachers an
                               easy-to-use platform to evaluate students and give them helpful comments, and it will give students 
                            insightful information about how they are doing academically.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-hand-drawn-6-graduated-student-characters-back-view-paintedcartoongraduationstudenttravelcharacter-illustration-png-image_578513.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}


export default Home