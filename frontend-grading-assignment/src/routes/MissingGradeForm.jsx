import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const MissingGradeForm = () => {
    return(
        <div>
            <Navbar />
               <div className="container my-5" style={{boxShadow: "0 5px 5px 10px rgba(0, 0, 0, 0.2)"}}>
                <div className="row">
                        <div className="bg-dark py-5">
                           <h3 className="text-center text-white">Report A Missing Grade</h3>
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <form>
                                <div className="mb-3 mt-5">
                                <label htmlFor="courseName" className="form-label">Course Name</label>
                                <input type="text" className="form-control" id="courseName" required />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="instructorName" className="form-label">Instructor Name</label>
                                <input type="text" className="form-control" id="instructorName" required />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="expectedGrade" className="form-label">Expected Grade</label>
                                <input type="text" className="form-control" id="expectedGrade" required />
                                </div>

                                <div className="mb-3">
                                <label htmlFor="explanation" className="form-label">Explanation</label>
                                <textarea className="form-control" id="explanation" rows="3" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-dark form-control py-2">Submit</button>
                            </form>
                        </div>
                        <div className="bg-dark py-5 mt-5"></div>
                    </div>

               </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default MissingGradeForm