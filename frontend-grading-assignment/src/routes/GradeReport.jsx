import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const GradeReport = () => {
   return (
    <div>
        <Navbar />

        <div style={{marginTop: "7rem"}}>
        <h1 className="mkiy">
            Welcome to the University of Ghana Missing Grade 
            Reporting System Grade Report page! 
        </h1>
        <p className="wast">
            This page allows the student to view his or her current 
            academic report and also allows the student to be able 
            to view all of his or her academic reports for all the 
            academic years he or she has spent in the University of.
        </p>
     </div>
     <div className="current" style={{textAlign: "center"}}> 
        <h3> <strong>STUDENT ACADEMIC RECORDS</strong></h3>
    </div>

    <div>
        <Footer />
    </div>
    </div>
   )
}


export default GradeReport