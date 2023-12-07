import { NavLink } from "react-router-dom";

const Home = () => {
  // 7-page website that acts as the front for a "Missing Grade Reporting System". This system is designed to help students track and report grades that are not recorded in their academic profiles. The goal is to create an interactive, user-friendly interface that enables students to view their grades, report missing grades, and communicate with their instructors or academic administration.

    return (
        // landing page
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Hey There!</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p>
                        Welcome to the Missing Grade Reporting System. 
                        This system is designed to help students track and 
                        report grades that are not recorded in their academic profiles. 
                    </p>

                    <h2>How to use this system</h2>
                    <p>
                        This system is designed to be user-friendly and easy to use. 
                        To get started, please select one of the following options from the navigation bar:
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <NavLink to="/grades">Grades Report</NavLink>
                        </li>
                        <li className="list-group-item">
                            <NavLink to="/report">Report Missing Grade</NavLink>
                        </li>
                        <li className="list-group-item">
                            <NavLink to="/contact">Contact Instructor</NavLink>
                        </li>
                        <li className="list-group-item">
                            <NavLink to="/help">Help and Support</NavLink>
                        </li>
                    </ul>

                    {/* Note */}
                    <div className="alert alert-info my-4">
                        <strong>Note:</strong> You must be logged in to use this system.
                    </div>

                    <h2>How to report a missing grade</h2>

                    <p>
                        To report a missing grade, please select the "Report Missing Grade" option from the navigation bar. 
                        You will be prompted to enter the following information:
                    </p>

                    <ul className="list-group">
                        <li className="list-group-item">
                            Course Name
                        </li>
                        <li className="list-group-item">
                            Course Number
                        </li>
                        <li className="list-group-item">
                            Instructor Name
                        </li>
                        <li className="list-group-item">
                            Grade
                        </li>
                        <li className="list-group-item">
                            Date
                        </li>
                        <li className="list-group-item">
                            Comments
                        </li>
                    </ul>

                    <p>
                        Once you have entered all of the required information, please select the "Submit" button. 
                        Your grade will be submitted to the instructor for review.
                    </p>                
                </div>
            </div>
        </div>
    );
}

export default Home;