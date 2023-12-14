import "./CustomHelp.css"
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const Help  = () => {
    return (
        <div>
            <div className="container faqs p-5">
               <h4 className="text-center mb-4 mt-2 fw-bolder">FREQUENTLY ASKED QUESTIONS REGARDING GRADE REPORTING</h4>

                <div className="accordion container" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                           <strong className="text-uppercase">How do I view my grades on the platform?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <p>
                                To view your grades, log in to your account and navigate 
                                to the "Grades" or "Academic Records" section.
                                There, you should find a detailed list of your course grades
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <strong className="text-uppercase">What should I do if some of my grades are missing?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <p>
                                If you notice missing grades, please use the "Report Missing Grades" 
                                feature on the platform. Provide specific details about the missing grades,
                                and our support team will investigate and update your records accordingly.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong className="text-uppercase">Can I dispute a grade if I believe there's an error?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                Yes, you can dispute a grade by submitting a Grade Dispute 
                                Form available on the platform. Attach any relevant documentation supporting your claim,
                                and our academic review committee will assess the situation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong className="text-uppercase">Is there a specific deadline for reporting missing grades?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    While there isn't a strict deadline, we recommend reporting missing 
                                    grades promptly to ensure timely resolution. 
                                    Delays in reporting may affect the efficiency of the investigation.
                                </p>
                            </div>
                        </div>
                    </div>

                   <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong className="text-uppercase">How often are grades updated on the platform?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    Grades are typically updated at the end of each grading period. 
                                    However, interim updates may occur, especially for ongoing courses. 
                                    Check the platform regularly for the latest information.
                                </p>
                            </div>
                        </div>
                    </div>
                   {/*
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong>Can I download an official grade report for my records?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    Yes, you can download an official grade report. 
                                    Navigate to the "Download Records" section, 
                                    where you'll find options to generate and 
                                    save an official report for your records.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong>Are there resources available to help me understand specific grading policies?</strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    Yes, comprehensive resources on grading policies are available in the "Policy Documents" section. 
                                    Familiarize yourself with these documents to gain a deeper understanding.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item">
                        <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                           <strong> What should I do if I encounter technical issues with the grade reporting system? </strong>
                        </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className="accordion-body">
                                <p>
                                    If you face technical issues, visit the "Technical Support" section on the platform. 
                                    You can also use the contact form on the Help and Support page to report the issue to
                                     our technical support team.
                                </p>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
            
            <div className="container contact-container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <img style={{height: "100%", width: "100%"}} src="https://t4.ftcdn.net/jpg/02/69/47/11/360_F_269471110_mdi7Gs2Hrq0igFIKpAEVVdqNohlLRxO3.jpg" alt="" className="img-fluid" />
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
                                <input className="form-control btn btn-primary p-2" type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Help;