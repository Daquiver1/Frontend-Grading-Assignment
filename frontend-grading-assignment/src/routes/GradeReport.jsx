import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const GradeReport =()=>{
    return (
        <div>
            <Navbar />
                
                <div className="container my-4">
                    <h3 className="my-5 text-center fs-1">Awura's Academic Records</h3>
                    <div className="row mt-4 justify-content-between">
                        <div className="col col-md-6">
                            <h4>Student Name: <span className="text-blue">Awura</span></h4>
                        </div>
                    
                        <div className="col col-md-6">
                            <div className="form-container">
                                <form action="#" method="post">
                                <label htmlFor="academic">Select Year</label>
                                    <select name="academic-year" id="" className="bg-blue w-50 form-control">
                                        <option value="">2020/2021</option>
                                        <option value="">2021/2022</option>
                                        <option value="">2022/2023</option>
                                        <option value="">2023/2024</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="container">
                <table id="example" className="table table-striped table-primary" style={{width:"100%",boxShadow: "0 5px 5px 10px rgba(0, 0, 0, 0.2)"}}>
                   <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Course Title</th>
                            <th>Credit Hours</th>
                            <th>Grade</th>
                            <th>GPT</th>
                        </tr>
                   </thead>
                  <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
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
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )

}
export default GradeReport 