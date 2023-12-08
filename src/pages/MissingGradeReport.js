import { useNavigate } from "react-router-dom";

const MissingGradeReport = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        showSuccessAlert();
        navigate('/grades');
    }

    const showSuccessAlert = () => {
        alert("Your report has been submitted successfully!");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-9 col-md-10">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            {/* <!-- Nested Row within Card Body --> */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Report a Missing Grade</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    id="course_name" 
                                                    placeholder="Course Name"
                                                    name="course_name"
                                                    autocomplete="false"
                                                    required
                                                    />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    id="instructor_name"
                                                    placeholder="Instructor Name"
                                                    autocomplete="new-password"
                                                    name="instructor_name"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    id="expected_grade"
                                                    placeholder="Expected Grade"
                                                    autocomplete="new-password"
                                                    name="expected_grade"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea 
                                                    type="text" 
                                                    className="form-control"
                                                    id="explanation"
                                                    placeholder="Explanation"
                                                    autocomplete="new-password"
                                                    name="explanation"
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                Report
                                            </button>
                                            <hr/>
                                        </form>
                                        <div className="text-center">
                                            <a className="small" href="/grade">Back to Grades</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}

export default MissingGradeReport;
