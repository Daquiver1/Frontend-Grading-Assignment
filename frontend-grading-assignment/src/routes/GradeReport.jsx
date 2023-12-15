import { useEffect } from "react"
// import "https://cdn.datatables.net/1.13.7/css/dataTables.bootstrap.min.css";
import "https://code.jquery.com/jquery-3.7.0.js"
import "https://cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"
import "https://cdn.datatables.net/1.13.7/js/dataTables.bootstrap.min.js"

const GradeReport = () => {
    useEffect(() => {
        $('#example').DataTable();
    },[])
    
    return(
        <div>
            <div className="container my-5 py-4 px-4 bg-blue" style={{boxShadow: "0px 4px 8px 0px #757575"}}>
                <div className="row">
                    <div className="col-md-6">
                        <p>Welcome: <span>Richmond Manu Andoh</span></p>
                        <p>Student Number: <span>11254304</span></p>
                    </div>
                    <div className="col-md-6">
                        <form action="">
                            <div className="container">
                                <label htmlFor="year">Select Academic Year: </label>
                                <select name="" id="year" className="form-control w-25 bg-blue">
                                    <option value="">2020-2021</option>
                                    <option value="">2021-2022</option>
                                    <option value="">2022-2023</option>
                                    <option value="">2023-2024</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <table id="example" className="table table-striped table-bordered" style={{width:"100%", marginTop: "5rem", boxShadow: "0px 4px 8px 0px #757575"}}>
                <thead>
                    <tr>
                        <th>COURSE TITLE</th>
                        <th>COURSE CODE</th>
                        <th>CREDIT</th>
                        <th>GRADE</th>
                        <th>GPT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                        <td>DCIT101</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>10.5</td>
                    </tr>
                    <tr>
                        <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                        <td>DCIT101</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>10.5</td>
                    </tr>
                    <tr>
                        <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                        <td>DCIT101</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>10.5</td>
                    </tr>
                    <tr>
                        <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                        <td>DCIT101</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>10.5</td>
                    </tr>
                    <tr>
                        <td>INTRODUCTION TO COMPUTER SCIENCE</td>
                        <td>DCIT101</td>
                        <td>3</td>
                        <td>B+</td>
                        <td>10.5</td>
                    </tr>
                </tbody>
           </table>
        </div>
    )
}

export default GradeReport;