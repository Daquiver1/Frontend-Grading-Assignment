import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const GradeForm = () => {
    return (
        <div>
             <Navbar />
             <div style={{marginTop: "7rem"}}>
             <div className="lasdf">
        <h1 className="sadf">
            Welcome to the University of Ghana Missing Grade Reporting
             System Missing Grade Form page!
        </h1>
        <p className="sadf1, fs-4">
            The form below consist of four parts, thus course name, 
            instructor name, expected grade and explanation field.
        </p>
        <p className="sadf1, fs-4">
            &#8226; Course name; this requires the student to provide
            the name of the course which grade is missing.
            [Note that this section is compulsory] 
        </p>
        <p className="sadf1, fs-4">
            &#8226; Instructor name; this requires the student to provide 
            the name of the instructor that teaches the course which grade 
            is missing.[Note that this section is compulsory] 
        </p>
        <p className="sadf1, fs-4">
            &#8226; Expected grade; this requires the student to provide 
            the grade that he or she thinks deserves in the course which 
            grade is missing. [Note that this section is compulsory] 
        </p>
        <p className="sadf1, fs-4">
            &#8226; Explanation; this requires the student to provide 
            neccessary information about why he is filling the form 
            and why he or she deserves the expected grade said above.
            [Note that this section is optional] 
        </p>
     </div>
     <div>
     <div className="container w-50" style={{border: "solid"}}>
     <div className="top1">
        <h1 className="too" style={{textAlign: "center"}}>
           Complaint Form
        </h1>
     </div>
                <form action="" className="m-auto">
                    <div className="container my-3, fs-4">
                        <label htmlFor="name, ">Course Name</label>
                        <input type="text" name="" className="form-control" id="" />
                    </div>
                    <div className="container my-3, fs-4">
                        <label htmlFor="name">Instructors Name</label>
                        <input type="text" name="" className="form-control" id="" />
                    </div>
                    <div className="container my-3, fs-4">
                        <label htmlFor="name">Expected Grade</label>
                        <input type="text" name="" className="form-control" id="" />
                    </div>
                    <div className="container my-3, fs-4">
                        <label htmlFor="name">Explanation</label>
                        <textarea name="explanation" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="container my-4">
                            <input type="submit" name="submit" id="submit" className="form-control btn btn-dark " />
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

export default GradeForm