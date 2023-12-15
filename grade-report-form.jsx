import "./grade-report-form-styles.css"
import Footer from "./ms-footer";
import Header from "./ms-header";
function GradeReportForm(){
  return(
    <div>
      <Header />
      <form type="submit"  className="form">
      <div className="f-info">
      <h1 className="h1-text">Missing Grade Report</h1>
          <h2>Student Information</h2>
          <input required placeholder="NAME" type="text" />
          <input required placeholder="STUDENT ID" type="text" />
          <input required placeholder="STUDENT E-MAIL" type="text" />
          <h2>Class Details</h2>
          <input required placeholder="COURSE NAME" type="text"/>
          <input required placeholder="INSTRUCTOR NAME" type="text" />      
          <h2>Missing Grade Information</h2>
          <input required placeholder="ASSIGNMENT/EXAM" type="text" />
          <input required placeholder="DATE OF ASSIGNMENT/EXAM" type="date" />
          <input required placeholder="DUE DATE" type="date" />
          <input required placeholder="REASON For Missing Submission" type="text" />
          <input required placeholder="Missing Grade" type="text" /> 
          <h2>Supporting Documentation</h2>
          <input required type="file" />
          <h2>Additional Comments</h2>
          <input required placeholder="Any COMMENTS" type="text" />
          <button className="butt"><a>SUBMIT REPORT</a></button>

      </div>
    </form>
    <Footer />
    </div>
  );
}
export default GradeReportForm;