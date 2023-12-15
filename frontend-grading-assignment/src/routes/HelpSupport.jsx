import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const HelpSupport = () => {
    return (
        <><div>
            <Navbar />

            <div style={{ marginTop: "7rem" }}>
                <div className="top">
                    <h1 className="too">
                        Welcome to the University of Ghana Missing Grade Reporting
                        System Help and Support page!
                    </h1>
                    <p className="mnbv1, fs-3">This page allows provides the student frequently
                        asked question about University of Ghana Missing Grade Reporting
                        System page!.
                    </p>
                </div>
            </div>
        </div><div>
                <div className="top1">
                    <h1 className="too" style={{ textAlign: "center" }}>
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Login Related
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    If you forget your password, you can click on the Forgot Password link on the login page. Follow the instructions provided to reset your password. Typically, you'll receive an email with a link to create a new password.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Dashboard Navigation:
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                    Yes, you can filter your academic records on the dashboard. Look for options such as dropdown menus or filters that allow you to select a specific semester or academic year. This customization feature helps you view the academic information relevant to your chosen timeframe.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header"></h2>
                    </div>
                    <div className="container w-70" style={{ border: "solid blue", marginTop:"50px"}}>
                        <form action="" className="m-auto">
                            <div className="top1">
                                <h1 className="too" style={{ textAlign: "center" }}>
                                    Contact Our Technical Team
                                </h1>
                            </div>
                            <div className="container my-3, fs-4">
                                <label htmlFor="name, ">Student Name</label>
                                <input type="text" name="" className="form-control" id="" />
                            </div>

                            <div className="container my-3, fs-4">
                                <label htmlFor="name">Course Name</label>
                                <input type="text" name="" className="form-control" id="" />
                            </div>
                            <div className="container my-3, fs-4">
                                <label htmlFor="name">Explanation</label>
                                <textarea name="explanation" id="" cols="30" rows="10" className="form-control"></textarea>
                            </div>
                            <div className="container my-4">
                                <input type="submit" name="submit" id="submit" className="form-control btn btn-dark " />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div></>
    )
}

export default HelpSupport