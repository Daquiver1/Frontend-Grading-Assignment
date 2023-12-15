import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Help = () => {
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <div className="row">
                    <div className="col col-md-6 m-auto">
                        <h3 className="py-2 ">Frequently Asked Questions</h3>
                        <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               Login Related
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                   If you forget your password, you can click on the "Forgot Password" link on the login page. Follow the instructions provided to reset your password. Typically, you'll receive an email with a link to create a new password.
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
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                  Yes, you can filter your academic records on the dashboard. Look for options such as dropdown menus or filters that allow you to select a specific semester or academic year. This customization feature helps you view the academic information relevant to your chosen timeframe.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Security and Privacy:
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                  Your personal and academic information is secured through encryption protocols and access controls. The system adheres to strict privacy policies, and only authorized personnel have access to sensitive data. Regular security audits and updates are performed to maintain the integrity of the system.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Technical Support:
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>
                                   If you encounter technical issues, you can reach out to our technical support team through the "Support" or "Help" section of the system. This section may provide contact details, such as an email address or a dedicated support portal, where you can submit your issue. Be sure to include details about the problem you're experiencing for a quicker resolution.

                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
     
                    <div className="col-md-6 p-5">
                        <div className="p-2">
                            <h5 className="">Do you have any Issue? Send Us a Message</h5>
                            <p className="py-2">We are here to assist you</p>
                        </div>
                        <form action="" className="contact-form">
                            <div className="mt-2">
                                <input className="form-control p-2" type="text" name="name" placeholder="Your Name"/><br/>
                            </div>

                            <div className="my-2">
                                <input className="form-control p-2 mb-2" type="email" name="" id="Enter your student mail" placeholder="student mail"/>
                            </div>

                            <div className="my-2">
                                <input className="form-control p-2" type="text" name="" id="" placeholder="Subject" />
                            </div>
 
                            <div className="my-2">
                                <textarea className="form-control p-2 mb-2" name="" id="" cols={20} rows={5}>Message</textarea>
                            </div>

                            <div className="mt-2">
                                <input className="form-control btn btn-dark p-2" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Help