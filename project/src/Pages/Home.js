import React from 'react'
import DashNav from './DashNav';
import './Home.css';
import Table from 'react-bootstrap/Table';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';




const Home = () => {
    return(
        <>
           <div className='px-3 overview'>
           <DashNav />

            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-4'>
                        <div className='p-3 bg-white shaodow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>Grade Records </h3>
                                <p className='fs-5'>See grades for respective resgisted courses. Open grade records to view<br />
                                <ReactBootStrap.Nav.Link href="/Pages/GradeReport"><i className='bi bi-arrow-right'></i></ReactBootStrap.Nav.Link>
                                </p>
                            </div>
                            <i className='bi bi-file-earmark-text p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='p-3 bg-white shaodow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>Report Missing Grades </h3>
                                <p className='fs-5'>Fill a report form to track missing grades<br />
                                <ReactBootStrap.Nav.Link href="/Pages/MissingGrade"><i className='bi bi-arrow-right'></i></ReactBootStrap.Nav.Link>
                                </p>
                            </div>
                            <i className='bi bi-exclamation-triangle p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='p-3 bg-white shaodow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>Contact Course Instructor </h3>
                                <p className='fs-5'>Contact the course instructors of the respective courses<br />
                                <ReactBootStrap.Nav.Link href="/Pages/ContactInstructor"> <i className='bi bi-arrow-right'></i></ReactBootStrap.Nav.Link>
                                </p>
                            </div>
                            <i className='bi bi-chat-dots p-3 fs-1'></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='dataContainer'>
                <p className='tableHeading'> ACADEMIC YEAR :  2023/2024  FIRST SEMESTER    CCT:   CCP:    CGPA: </p>
            <Table className='' striped="columns">
                        <thead>
                            <tr>
                            <th>Code</th>
                            <th>Course Title</th>
                            <th>Credit</th>
                            <th>Grade</th>
                            <th>Gpt</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>CBAS210</td>
                            <td>Academic Writng II</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>DCIT201</td>
                            <td>Programming I</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>

                            </tr>
                            <tr>
                            <td>DCIT203</td>
                            <td>Digital And Logic Systems Design</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>DCIT205</td>
                            <td>Multimedia And Web Design</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>MATH223</td>
                            <td>Calculus II</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            <tr>
                            <td>STATS223</td>
                            <td>Elementary Statistical Methods</td>
                            <td>3</td>
                            <td>N/A</td>
                            <td>N/A</td>
                            </tr>
                            
                        </tbody>
                        </Table>
                        </div>
            </>
           
    )
}


export default Home;