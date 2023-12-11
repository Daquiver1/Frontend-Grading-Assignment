// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";

const ReportMissingGrade = () => {

    const boxShadow = {
        "boxShadow": "0px 4px 8px 0px #757575",
        // "padding": "20px",
        "marginTop": "4rem",
        "background": "#fff"

    }
    return (
        <div>
            {/* <Navbar /> */}
            <div className="container" style={ boxShadow }>
               
                <div className="row">
                    <div className="bg-blue py-5">
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

                            <button type="submit" className="btn btn-primary form-control py-2">Submit</button>
                        </form>
                    </div>
                    <div className="bg-blue py-5 mt-5"></div>
                </div>
                
            </div>

            {/* <Footer /> */}
        </div>
    )
                       
}


export default ReportMissingGrade;