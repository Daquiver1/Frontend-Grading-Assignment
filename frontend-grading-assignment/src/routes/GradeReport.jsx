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
        <p className="wast, fs-4">
            This page allows the student to view his or her current 
            academic report and also allows the student to be able 
            to view all of his or her academic reports for all the 
            academic years he or she has spent in the University of.
        </p>
     </div>
     <div className="current" style={{textAlign: "center"}}> 
        <h3> <strong>STUDENT ACADEMIC RECORDS</strong></h3>
    </div>
    <div className="big-cont">
        <div className="cont1 justify-content-around"
            style={{display: "flex"}}>
            <h4 className="name">
                <strong>NAME:</strong> MARKS SPENCER
            </h4>
            <h4 className="name4">
                <strong>STUDENT ID:</strong> 12345678
            </h4>
        </div>
        <div className="cont2 my-4"
        style={{display: "flex", justifyContent:"space-between"}}>
        <h4 className="aqwer">
            <strong>Academic Year:</strong> 2021/2022
        </h4>
        <h4 className="aqwer">
            <strong>Semester:</strong> First Semester
        </h4>
        <h4 className="aqwer">
            <strong> CCT:</strong> 18
         </h4>
         <h4 className="aqwer">
            <strong>CCP:</strong> 18
         </h4>
         <h4 className="aqwer">
            <strong>CGPA:</strong> 3.5
         </h4>
         </div>
         <div className="cont3"
         style={{display: "flex"}}>
            <div className="conta"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert"> CODE</h4></strong>
                <p className="code"> UGRC 110</p>
                <p className="code"> STAT 120</p>
                <p className="code"> MATH 123</p>
                <p className="code">STAT 111</p>
                <p className="code">MATH 121</p>
                <p className="code">DCIT 101</p>
            </div>
            <div className="contb"
            style={{display: "block",
            flex: "2"}}>
                <strong><h4 className="wert">COURSE TITLE</h4></strong>
                <p className="code">ACADEMIC WRITING I</p>
                <p className="code">INTRODUCTION TO STATISTICS</p>
                <p className="code">VECTORS AND GEOMETRY</p>
                <p className="code">INTRODUCTION TO PROBABILITY </p>
                <p className="code">ALGEBRA AND GEOMETRY I</p>
                <p className="code">INTRODUCTION TO COMPUTER SCIENCE</p>
            </div>
            <div className="contc"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GRADE</h4></strong>
                <p className="code">C</p>
                <p className="code">B+</p>
                <p className="code">A</p>
                <p className="code">A</p>
                <p className="code">B</p>
                <p className="code">B+</p>
            </div>
            <div className="contd"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">CREDIT</h4></strong>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
            </div>
            <div className="conte"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GPT</h4></strong>
                <p className="code">6</p>
                <p className="code">10.5</p>
                <p className="code">12</p>
                <p className="code">12</p>
                <p className="code">9</p>
                <p className="code">10.5</p>
            </div>
        </div>
        <div className="cont2 my-4"
        style={{display: "flex", justifyContent:"space-between"}}>
        <h4 className="aqwer">
            <strong>Academic Year:</strong> 2021/2022
        </h4>
        <h4 className="aqwer">
            <strong>Semester:</strong> Second Semester
        </h4>
        <h4 className="aqwer">
            <strong> CCT:</strong> 36
         </h4>
         <h4 className="aqwer">
            <strong>CCP:</strong> 36
         </h4>
         <h4 className="aqwer">
            <strong>CGPA:</strong> 3.15
         </h4>
         </div>
         <div className="cont3"
         style={{display: "flex"}}>
            <div className="conta"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert"> CODE</h4></strong>
                <p className="code"> UGRC 150</p>
                <p className="code"> DCIT 103</p>
                <p className="code"> MATH 126</p>
                <p className="code"> STAT 122</p>
                <p className="code"> DCIT 102</p>
                <p className="code"> MATH 122</p>
            </div>
            <div className="contb"
            style={{display: "block",
            flex: "2"}}>
                <strong><h4 className="wert">COURSE TITLE</h4></strong>
                <p className="code">CRITICAL THINKING</p>
                <p className="code">OFFICE PRODUCTIVITY TOOLS</p>
                <p className="code">ALGEBRA AND GEOMETRY II</p>
                <p className="code"> STATISTICAL METHOD</p>
                <p className="code"> COMPUTER HARDWARE</p>
                <p className="code">CALCULUS I</p>
            </div>
            <div className="contc"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GRADE</h4></strong>
                <p className="code">A</p>
                <p className="code">B</p>
                <p className="code">A</p>
                <p className="code">A</p>
                <p className="code">C</p>
                <p className="code">B+</p>
            </div>
            <div className="contd"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">CREDIT</h4></strong>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
            </div>
            <div className="conte"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GPT</h4></strong>
                <p className="code">12</p>
                <p className="code">9</p>
                <p className="code">12</p>
                <p className="code">12</p>
                <p className="code">6</p>
                <p className="code">10.5</p>
            </div>
        </div>
        <div className="cont2 my-4"
        style={{display: "flex", justifyContent:"space-between"}}>
        <h4 className="aqwer">
            <strong>Academic Year:</strong> 2022/2023
        </h4>
        <h4 className="aqwer">
            <strong>Semester:</strong> First Semester
        </h4>
        <h4 className="aqwer">
            <strong> CT:</strong> 54
         </h4>
         <h4 className="aqwer">
            <strong>CP:</strong> 54
         </h4>
         <h4 className="aqwer">
            <strong>CGPA:</strong> 3.6
         </h4>
         </div>
         <div className="cont3"
         style={{display: "flex"}}>
            <div className="conta"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert"> CODE</h4></strong>
                <p className="code"> UGRC 220</p>
                <p className="code"> STAT 240</p>
                <p className="code"> MATH 130</p>
                <p className="code"> DCITT 104</p>
                <p className="code"> DCIT 205</p>
                <p className="code"> DCITT 201</p>
            </div>
            <div className="contb"
            style={{display: "block",
            flex: "2"}}>
                <strong><h4 className="wert">COURSE TITLE</h4></strong>
                <p className="code">ACADEMIC WRITING II</p>
                <p className="code">INTRODUCTION TO DATA MINING</p>
                <p className="code">INTRODUCTION COMPUTATIONAL MATHEMATICS</p>
                <p className="code">PROGRAMMING FUNDAMENTALS</p>
                <p className="code">WEB DESIGN AND DEVELOPMENT</p>
                <p className="code">PROGRAMMING I</p>
            </div>
            <div className="contc"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GRADE</h4></strong>
                <p className="code">B+</p>
                <p className="code">B+</p>
                <p className="code">A</p>
                <p className="code">A</p>
                <p className="code">B</p>
                <p className="code">B+</p>
            </div>
            <div className="contd"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">CREDIT</h4></strong>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
            </div>
            <div className="conte"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GPT</h4></strong>
                <p className="code">10.5</p>
                <p className="code">10.5</p>
                <p className="code">12</p>
                <p className="code">12</p>
                <p className="code">9</p>
                <p className="code">10.5</p>
            </div>
        </div>
        <div className="cont2 my-4"
        style={{display: "flex", justifyContent:"space-between"}}>
        <h4 className="aqwer">
            <strong>Academic Year:</strong> 2022/2023
        </h4>
        <h4 className="aqwer">
            <strong>Semester:</strong> Second Semester
        </h4>
        <h4 className="aqwer">
            <strong> CCT:</strong> 72
         </h4>
         <h4 className="aqwer">
            <strong>CCP:</strong> 71
         </h4>
         <h4 className="aqwer">
            <strong>CGPA:</strong> 3.6
         </h4>
         </div>
         <div className="cont3"
         style={{display: "flex"}}>
            <div className="conta"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert"> CODE</h4></strong>
                <p className="code"> UGRC 223</p>
                <p className="code"> STAT 230</p>
                <p className="code"> MATH 230</p>
                <p className="code">STAT 223</p>
                <p className="code">MATH 223</p>
                <p className="code">STAT 221</p>
            </div>
            <div className="contb"
            style={{display: "block",
            flex: "2"}}>
                <strong><h4 className="wert">COURSE TITLE</h4></strong>
                <p className="code">INTRODUCTION TO AFRICAN STUDIES</p>
                <p className="code">DATA MINING</p>
                <p className="code">COMPUTATIONAL MATHEMATICS</p>
                <p className="code">ELEMENTARY STATISTICAL METHOD I</p>
                <p className="code"> CALCULUS II</p>
                <p className="code">INTRODUCTION TO PROBABILITY I</p>
            </div>
            <div className="contc"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GRADE</h4></strong>
                <p className="code">N/A</p>
                <p className="code">B+</p>
                <p className="code">A</p>
                <p className="code">A</p>
                <p className="code">B</p>
                <p className="code">B+</p>
            </div>
            <div className="contd"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">CREDIT</h4></strong>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
                <p className="code">3</p>
            </div>
            <div className="conte"
            style={{display: "block",
            flex: "1"}}>
                <strong><h4 className="wert">GPT</h4></strong>
                <p className="code">N/A</p>
                <p className="code">10.5</p>
                <p className="code">12</p>
                <p className="code">12</p>
                <p className="code">9</p>
                <p className="code">10.5</p>
            </div>
        </div>
    <div>
        <Footer />
    </div>
    </div>
    </div>
   )
}


export default GradeReport