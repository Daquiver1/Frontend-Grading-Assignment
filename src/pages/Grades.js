import { useContext, useEffect, useState } from "react";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "datatables.net-bs4/js/dataTables.bootstrap4.min.js";
import "datatables.net-bs4/css/dataTables.bootstrap4.min.css";

import { NavLink } from "react-router-dom";
import { StudentContext } from "../StudentContext";
import allReportData from "../data/ReportData";

const Grades = () => {
    const [filter, setFilter] = useState("2020/2021");
    let [reportData, setReportData] = useState(allReportData.filter((data) => data.accademicYear === filter));

    const handleFilter = (e) => {
        setFilter(e.target.value);
        setReportData(allReportData.filter((data) => data.accademicYear === e.target.value));
    };

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
                {/* Option to filter by academic year. */}
                <div className="card-header py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="m-0 font-weight-bold text-primary">Filter by Academic Year</h6>
                        </div>
                        <div className="col-md-6">
                            <select className="form-control" onChange={(e) => handleFilter(e)}>
                                <option value="2020/2021">2020/2021</option>
                                <option value="2019/2020">2019/2020</option>
                            </select>
                        </div>
                    </div>
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