import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Instructors = () => {
    return (
        <div>
            <Navbar />
                <div className="container mt-5">
                 <div className="row">
                    <div className="col col-md-6 bg-dark my-3">
                        <div className="py-4 m-auto modal-dialog-scrollable">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        View Instructors
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header py-3 bg-dark text-white">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">INSTRUCTORS</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="container">
                                    <h4 className="instructor-name">Paul Armah</h4>
                                    <p className="instructor-contact">Email: demoemail@gmail.com</p>
                                    <p className="instrucor-email">Contact: +233 575498804</p>
                                </div>
                            <hr />
                            <div className="container">
                                    <h4 className="instructor-name">Paul Armah</h4>
                                    <p className="instructor-contact">Email: demoemail@gmail.com</p>
                                    <p className="instrucor-email">Contact: +233 575498804</p>
                                </div>
                                <hr />
                                <div className="container">
                                    <h4 className="instructor-name">Paul Armah</h4>
                                    <p className="instructor-contact">Email: demoemail@gmail.com</p>
                                    <p className="instrucor-email">Contact: +233 575498804</p>
                                </div>
                                <hr />
                                <div className="container">
                                    <h4 className="instructor-name">Paul Armah</h4>
                                    <p className="instructor-contact">Email: demoemail@gmail.com</p>
                                    <p className="instrucor-email">Contact: +233 575498804</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col col-md-6">
                        <div className="container mt-3">
                            <form action="#" method="post">
                                <select name="instructor" className="form-control">
                                    <option value="">Paul Armah</option>
                                    <option value="">Paul Armah</option>
                                    <option value="">Paul Armah</option>
                                    <option value="">Paul Armah</option>
                                </select>

                                <div className="container">
                                    <label className='my-3 ps-2' htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control py-2" name="subject" id="" />
                                </div>
                                <div className="container">
                                   <label htmlFor="message" className='my-3 ps-2'>Message:</label>
                                   <textarea id="message" className="form-control py-2" name="message" rows="4" required></textarea>

                                </div>
                                <div className="container">
                                    <button type="button" className="form-control btn btn-md btn-primary py-2 my-3">Send Email</button>
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

export default Instructors