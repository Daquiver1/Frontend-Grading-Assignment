
function Alert(){
 return (
    alert("Your request has been submitted. You will be notified when the new grade is available.")
 );
}


const MissingGrade = () => { 
    return (
        <div className="missinggrade">
            <h1 className="text-center" >Missing Grade</h1>
            <h1 className="text-center">Notice Regarding Grade Complaints</h1>
            <h1 className="text-center">Use this form to request a missing grade.</h1>
            <p>
                Dear Students,
                We understand that you may have concerns about your grades. We want to assure you that our grading process is designed to be fair and transparent.
                If you believe there has been an error in the grading of your work, please fill the form below.
                Please remember that grade complaints must be made within two weeks of receiving the grade.
                Thank you for your understanding and cooperation.

            </p>
            <form>
        <div className="row mb-3">
        <label for="colFormLabel" className="col-sm-2 col-form-label">Course Name</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="colFormLabel" placeholder="Enter Course name" />
        </div>
        </div>

        <div className="row mb-3">
        <label for="colFormLabel" className="col-sm-2 col-form-label">Instructor Name</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="colFormLabel" placeholder="Enter instructor name" />
        </div>
        </div>

        <div className="row mb-3">
        <label for="colFormLabel" className="col-sm-2 col-form-label">Expected Grade</label>
        <div className="col-sm-10">
            <input type="email" className="form-control" id="colFormLabel" placeholder="Enter the expected grade" />
        </div>
        </div>
        <div className="form-group">
        <label for="comment">Comment:</label>
        <textarea className="form-control" rows="5" id="comment"></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={Alert}>Submit</button>

        </form>
        </div>

    );
}
 
export default MissingGrade;