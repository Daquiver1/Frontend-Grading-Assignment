import './CustomDashboard.css'

const Dashboard = () => {
      
    return (
        <div>
            <div className="row mt-3 px-3">
                    <div className="col-12 col-md-4">
                        <div className="card bg-secondary py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        4
                                    </span> <br />
                                    <span>Levels</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-database"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card bg-warning py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        6
                                    </span> <br />
                                    <span>Faculties</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-building"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card bg-danger py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        0
                                    </span> <br />
                                    <span>Failed No.</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-x-circle-fill"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="row mt-5 px-3">
                    <div className="col-12 col-md-4">
                        <div className="card bg-blue py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        1
                                    </span> <br />
                                    <span>Least Credit Hour</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-arrow-down-circle"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card bg-success py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        3
                                    </span> <br />
                                    <span>Highest Credit Hours</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-arrow-up-circle"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="card bg-info py-3">
                            <div className="card-body py-2 text-white d-flex justify-content-around">
                                <div>
                                    <span className="fs-1 fw-bolder me-2">
                                        0
                                    </span> <br />
                                    <span>Passed No.</span>
                                </div>
                                <div>
                                    <p className="fs-1">
                                    <i class="bi bi-check-circle"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <h2 className="text-center mt-5 bg-blue fw-bolder py-5 mx-3">RICHMOND's ACADEMIC RECORDS</h2>
            <div classNmae="container">
                <div className="d-flex justify-content-around p-4 mt-5">
                    <p className='fw-bold'>
                        ACADMIC YEAR : <span>2021-2022</span>
                    </p>
                    <p className='fw-bold'>
                        FIRST SEMESTER
                    </p>
                </div>

                <table id="example" className="table table-striped table-bordered" style={{width:"100%", marginTop: "rem", boxShadow: "0px 4px 8px 0px #757575"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011-07-25</td>
                            <td>$170,750</td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009-01-12</td>
                            <td>$86,000</td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012-03-29</td>
                            <td>$433,060</td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008-11-28</td>
                            <td>$162,700</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div classNmae="container">
                <div className="d-flex justify-content-around p-4 mt-5">
                    <p className='fw-bold'>
                        ACADMIC YEAR : <span>2021-2022</span>
                    </p>
                    <p className='fw-bold'>
                        SECOND SEMESTER RECORDS
                    </p>
                </div>

                <table id="example" className="table table-striped table-bordered" style={{width:"100%", marginTop: "rem", boxShadow: "0px 4px 8px 0px #757575"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011-07-25</td>
                            <td>$170,750</td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009-01-12</td>
                            <td>$86,000</td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012-03-29</td>
                            <td>$433,060</td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008-11-28</td>
                            <td>$162,700</td>
                        </tr>
                    </tbody>
                </table>
           </div>

           <div classNmae="container">
                <div className="d-flex justify-content-around p-4 mt-5">
                    <p className='fw-bold'>
                        ACADMIC YEAR : <span>2022-2023</span>
                    </p>
                    <p className='fw-bold'>
                        FIRST SEMESTER RECORDS
                    </p>
                </div>

                <table id="example" className="table table-striped table-bordered" style={{width:"100%", marginTop: "rem", boxShadow: "0px 4px 8px 0px #757575"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011-04-25</td>
                            <td>$320,800</td>
                        </tr>
                        <tr>
                            <td>Garrett Winters</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>63</td>
                            <td>2011-07-25</td>
                            <td>$170,750</td>
                        </tr>
                        <tr>
                            <td>Ashton Cox</td>
                            <td>Junior Technical Author</td>
                            <td>San Francisco</td>
                            <td>66</td>
                            <td>2009-01-12</td>
                            <td>$86,000</td>
                        </tr>
                        <tr>
                            <td>Cedric Kelly</td>
                            <td>Senior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>22</td>
                            <td>2012-03-29</td>
                            <td>$433,060</td>
                        </tr>
                        <tr>
                            <td>Airi Satou</td>
                            <td>Accountant</td>
                            <td>Tokyo</td>
                            <td>33</td>
                            <td>2008-11-28</td>
                            <td>$162,700</td>
                        </tr>
                    </tbody>
                </table>
           </div>
          

        </div>
    )
}

export default Dashboard;