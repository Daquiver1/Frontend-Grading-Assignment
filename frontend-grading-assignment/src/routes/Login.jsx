import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Login = () => {
    return (
        <div>
            <Navbar/>
            <div style={{marginTop: "7rem"}}>
                <h1 className="mnbv"> Welcome to the University of Ghana Missing Grade Reporting System Login page!</h1>
                    <p className="mnbv1 fs-3">This page allows the student to login and view his/her academic report 
                        and also allows the student to be able to fill a complaint form when the
                        students grade(s) is(are) missing. </p>
            </div>
            <div className="container border" style={{width: "70%", marginTop: "4rem"}}>
                <div className="container1 mt-5 text-center"
                    style={{display: "block"}}>
                    <h1 className="required"> Login Required</h1>
                </div>
                <div>
                    <form action="" className="m-auto">
                        <div className="container my-4">
                            <label htmlFor="name" className="fs-4">Student ID</label>
                            <input type="text" name="id" id="id" className="form-control"/>
                        </div>
                        <div className="container my-4">
                            <label htmlFor="pin" className="fs-4">Student Password</label>
                            <input type="password" name="id" id="id" className="form-control"/>
                        </div>
                        <div className="container my-4">
                            <input type="submit" name="submit" id="submit" className="form-control btn btn-dark " />
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Login