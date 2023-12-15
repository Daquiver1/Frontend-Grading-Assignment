import React from "react";
import { Link } from "react-router-dom";
import {  Form, Button } from 'react-bootstrap';
function Dashboard() {

    return (
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>
                        MAXWELL ADOM SARKODIE     
                        11299043
                    </h2>

                </div>

                    <div>
                    <Button variant="secondary" type="submit">

            <Link to="/GradeReport">Grade Report</Link>
                </Button>
                    </div>
                
                    <div>
                        <Button variant="secondary " type="submit">

                            <Link to="/MissingGrade">Missing Grade</Link>
                </Button>
                </div>
              

                



            </div>

        </div>
    );

}



export default Dashboard;
