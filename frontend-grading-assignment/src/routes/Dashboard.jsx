import Footer from "../components/Footer"
import logo from "../images/logo.png"
const Dashboard = () => {
    return (
        <div>
 <nav className="navbar navbar-expand-lg bg-primary fixed-top mb-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt=""  style={{width: "70px", height: "60px"}}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="login">Login</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="dashboard">Dashboard</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="grade-report">Grade Report</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="grade-form">Grade Form</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="instructor">Instructors Page</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="help">Help & Support</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                        <div className="notification-btn">
                            <i className="bi bi-bell-fill fs-3 px-2" style={{color: "gold"}}></i>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid" style={{marginTop: "7rem"}}>
            <div>
        <h1 className="mkiy">
            Welcome to the University of Ghana Missing Grade 
            Reporting System Dashboard page! 
        </h1>
        <p className="wsxdt fs-4">
            This page allows the student to view his or her current 
            academic report and also allows the student to be able 
            to view a notification of the students missing grades.
        </p>
     </div>
     <h3 className="current text-center my-3"> STUDENTS CURRENT GRADE</h3>
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
            <strong>Academic Year:</strong> 2022/2023
        </h4>
        <h4 className="aqwer">
            <strong>Semester:</strong> Second Semester
        </h4>
        <h4 className="aqwer">
            <strong> CT:</strong> 18
         </h4>
         <h4 className="aqwer">
            <strong>CP:</strong> 15
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
                <p className="code">ELEMENTTARY STATISTICAL METHOD I</p>
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
     </div>
            </div>

            <Footer />
        </div>
    )
}

export default Dashboard