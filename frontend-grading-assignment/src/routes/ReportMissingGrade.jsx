import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ReportMissingGrade = () => {

    const boxShadow = {
        "box-shadow": "0px 4px 8px 0px #757575",
        // "padding": "20px",
        "margin-top": "13rem",
        "background": "#fff"

    }
    return (
        <div>
            <Navbar />
            <div class="container" style={ boxShadow }>
               
                <div class="row">
                    <div className="bg-blue py-5">
                       <h3 className="text-center text-white">Report A Missing Grade</h3>
                    </div>
                    <div className="col-md-6 offset-md-3">
                        <form>
                            <div class="mb-3 mt-5">
                            <label for="courseName" className="form-label">Course Name</label>
                            <input type="text" className="form-control" id="courseName" required />
                            </div>

                            <div class="mb-3">
                            <label for="instructorName" className="form-label">Instructor Name</label>
                            <input type="text" className="form-control" id="instructorName" required />
                            </div>

                            <div class="mb-3">
                            <label for="expectedGrade" className="form-label">Expected Grade</label>
                            <input type="text" className="form-control" id="expectedGrade" required />
                            </div>

                            <div class="mb-3">
                            <label for="explanation" className="form-label">Explanation</label>
                            <textarea className="form-control" id="explanation" rows="3" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-control py-2">Submit</button>
                        </form>
                    </div>
                    <div className="bg-blue py-5 mt-5"></div>
                </div>
                
            </div>

            <Footer />
        </div>
    )
                       
}


export default ReportMissingGrade;