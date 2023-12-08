import { useContext, useEffect } from "react";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";

import { NavLink } from "react-router-dom";
import { StudentContext } from "../StudentContext";
import reportData from "../data/ReportData";

const Grades = () => {

    useEffect(() => {
        $(document).ready(function () {
            $('#gradesTable').DataTable({
                dom: 'Bfrtip',
                "bDestroy": true,
            });
        });
    }, []);

    const { student } = useContext(StudentContext);

    const isLogin = student.studentId !== "" ? true : false;

    if (!isLogin) {
        return (
            <div>
                <h2>Not Login</h2>
            </div>
        );
    }
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Grades Report</h1>
            <p className="mb-4">
                This is your grades report. Theses are the grades 
                that are recorded in your academic profile. If you find 
                any missing grades, please report them using the 
                <NavLink to="/report">Report Missing Grade</NavLink> option.
                You can see your course name with code, Grade, GPA, Credit hours and Instructor name.
            </p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h4 className="m-0 font-weight-bold text-primary">Grades Report</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="gradesTable" className="table table-bordered table-striped table-hover" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Course Code</th>
                                    <th>Grade</th>
                                    <th>GPA</th>
                                    <th>Credit Hours</th>
                                    <th>Instructor Name</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Course Code</th>
                                    <th>Grade</th>
                                    <th>GPA</th>
                                    <th>Credit Hours</th>
                                    <th>Instructor Name</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {reportData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.courseName}</td>
                                        <td>{data.courseCode}</td>
                                        <td>{data.grade}</td>
                                        <td>{data.gpa}</td>
                                        <td>{data.creditHours}</td>
                                        <td>{data.instructorName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Grades;