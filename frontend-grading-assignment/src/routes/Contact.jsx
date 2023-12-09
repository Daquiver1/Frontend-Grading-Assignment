import './CustomContact.css'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"

const Contact = () => {
    return (
        <div>
            <Navbar />

            <div className="container contact bg-white">
                <div className="row">
                    <div className="bg-blue py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="container">
                                {/* <!-- Button trigger modal --> */}
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                      View Instructors
                                    </button>

                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                        <div className="modal-header bg-blue">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Instructors</h1>
                                            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-dark">
                                            <div className="instructor">
                                                <strong>John Smith</strong>
                                                <p>Email: john.smith@example.com</p>
                                                <p>Phone: (555) 123-4567</p>
                                                <p>Office Hours: Mondays and Wednesdays, 10:00 AM - 12:00 PM</p>
                                            </div>
                                            <hr />
                                            <div className="instructor">
                                                <strong>Dr. Emily Johnson</strong>
                                                <p>Email: emily.johnson@example.com</p>
                                                <p>Phone: (555) 987-6543</p>
                                                <p>Office Hours: Tuesdays and Thursdays, 1:00 PM - 3:00 PM</p>
                                            </div>
                                            <hr />
                                            <div className="instructor">
                                                <strong>Professor Alex Davis</strong>
                                                <p>Email: alex.davis@example.com</p>
                                                <p>Phone: (555) 789-0123</p>
                                                <p>Office Hours: Fridays, 2:00 PM - 4:00 PM</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="container text-center">
                                    <h3>Send A Mail</h3>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col col-md-6 email m-auto">
                        <img src="https://freepngimg.com/save/64936-text-messaging-email-emoji-png-image-high-quality/512x512" alt="" />
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="container text-center mt-4">
                            <h3>Send A Mail</h3>
                        </div>
                        <form className="email-form">
                           <div className="container">
                            <label for="recipient" className='my-3 ps-2'>Recipient:</label>
                                <select id="recipient" name="recipient" className="form-control py-2">
                                    <option value="john.smith@example.com">John Smith</option>
                                    <option value="emily.johnson@example.com">Dr. Emily Johnson</option>
                                    <option value="alex.davis@example.com">Professor Alex Davis</option>
                                </select>
                            </div>

                            <div className="container">
                                <label for="subject" className='my-3 ps-2'>Subject:</label>
                                <input className="form-control py-2" type="text" id="subject" name="subject" required />
                            </div>

                            <div className="container">
                                <label for="message" className='my-3 ps-2'>Message:</label>
                                <textarea id="message" className="form-control py-2" name="message" rows="4" required></textarea>

                            </div>
                            
                            <div className="container">
                               <button type="button" className="form-control btn btn-md btn-primary py-2 my-3" onclick="sendEmail()">Send Email</button>
                            </div>
                        </form>
                    </div>

                    <div className="bg-blue py-5 mt-5">
                        <div className="row px-3">
                            {/* <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2023. All rights reserved.</small> */}
                            {/* <div className="social-contact ml-4 ml-sm-auto">
                                <span className="fa fa-facebook mr-4 text-sm"></span>
                                <span className="fa fa-google-plus mr-4 text-sm"></span>
                                <span className="fa fa-linkedin mr-4 text-sm"></span>
                                <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                            </div> */}
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

export default Contact;