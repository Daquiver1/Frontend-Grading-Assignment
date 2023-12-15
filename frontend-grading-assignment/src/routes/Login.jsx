import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
const Login = () => {
    return (
        <div>
            <Navbar />
            {/* box-shadow:  6px rgba(0,0,0,0 3px0.16), 0 3px 6px rgba(0,0,0,0.23); */}
              <div className="container mt-5" style={{boxShadow: "0 3px 3px 5px rgba(0, 0, 0, 0.12)", marginBottom: "5rem", padding: "6rem 0"}}>
                <div className="row">
                    <div className="col-md-6">
                       <img className="img-fluid w-75" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSErMY-wdMOUkUkHI3v3OS8a59Rp89ZunOsjDMSqrkTKg&s" alt="" />
                    </div>
                    <div className="col-md-6">
                       <h4 className="text-center py-3">Login To Access Your Grades</h4>
                        <div className="form-container px-4">
                            <form action="/login" method="post">
                                <div className="container  my-2">
                                    <label htmlFor="student-ID" className="py-2">Student ID</label>
                                    <input type="text" name="studentId" id="id" className="py-2 form-control"/>
                                </div>
                                <div className="container my-2">
                                    <label htmlFor="student-password" className="py-2">Student Password</label>
                                    <input type="password" name="studentPass" id="pass" className="py-2 form-control"/>
                                </div>
                                <div className="container my-3">
                                    <input type="submit" name="submit" id="pass" className="py-2 form-control btn btn-dark"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
              </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Login