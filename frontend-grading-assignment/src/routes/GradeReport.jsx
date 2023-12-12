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
                        <td>Garrett Winters</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>63</td>
                        <td>2011-07-25</td>
                    </tr>
                    <tr>
                        <td>Ashton Cox</td>
                        <td>Junior Technical Author</td>
                        <td>San Francisco</td>
                        <td>66</td>
                        <td>2009-01-12</td>
                    
                    </tr>
                    <tr>
                        <td>Cedric Kelly</td>
                        <td>Senior Javascript Developer</td>
                        <td>Edinburgh</td>
                        <td>22</td>
                        <td>2012-03-29</td>
                        
                    </tr>
                    <tr>
                        <td>Airi Satou</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008-11-28</td>
                        
                    </tr>
                </tbody>
           </table>
        </div>
    )
}

export default GradeReport;