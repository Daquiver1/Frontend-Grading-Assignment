import "./CustomHome.css"
import { useState, useEffect } from "react"

const Home = () => {

    const [count, setCount ] =  useState(0)
    const [ countTeachers, setCountTeachers ] = useState(0)

    useEffect(() => {
         const intervalId = setInterval(() => {
            if(count < 7000){
                setCount((prevCount) => prevCount + 100)
            }
            else{
                clearInterval(intervalId)
            }
         }, 100)
         return () => clearInterval(intervalId)
    }, [count])

    useEffect(() => {
        const intervalTD = setInterval(() => {
            if(countTeachers < 1000){
                setCountTeachers((prevCount) => prevCount + 10)
            }
            else{
                clearInterval(intervalTD)
            }
        }, 100)

        return () => clearInterval(intervalTD)
    }, [countTeachers])
    return (
        <div>

                {/* <div className="container-fluid pt-5 hero-session">
                    <div className="hero-content text-white">
                        <h1>
                            Student Grading System
                        </h1>
                        <button type="button" className="btn btn-outline-light mt-2 rounded">
                            Read More
                        </button>

                    </div>
                </div>*/}

                   

                
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                            <div className="card bg-blue">
                                <div className="card-body py-2 text-white">
                                    <p className="fs-1">
                                    <i className="bi bi-people"></i>
                                    </p>
                                    <span className="fs-1 fw-bolder me-2">
                                        {count}
                                    </span> <br />
                                    <span>Students</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                            <div className="card bg-blue">
                                <div className="card-body py-2 text-white">
                                    <p className="text-white">
                                        <img style={{height: "60px", width: "90px", color: "white"}} src="https://thenounproject.com/api/private/icons/44224/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0" alt="" />
                                    </p>
                                    <span className="fs-1 fw-bolder me-2">
                                        {countTeachers}
                                    </span> <br />
                                    <span>Teachers</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                            <h5 className="ms-2 text-white">Announcements</h5>
                            <div className="card bg-blue" style={{borderRadius: "20px"}}>
                                <div className="card-body">
                                    <div className="py-1">
                                      <span className="card-text" style={{fontSize: "14px"}}><b>Academic:</b> Summer training internship with live projects</span>
                                      <br /><span className="text-primary" style={{fontSize: "12px", padding: "2px 0px"}}>2 minutes ago</span>
                                    </div>
                                    <div className="py-1">
                                        <span className="card-text" style={{fontSize: "14px"}}><b>Co-curricular:</b> Global internship opportunity by Student Organization</span>
                                        <br /><span className="text-primary" style={{fontSize: "12px", padding: "2px 0px"}}>30 minutes ago</span>
                                    </div>
                                    <div className="py-1">
                                       <span className="card-text" style={{fontSize: "14px"}}><b>Examination:</b> Insructions for Mid Term Examination</span>
                                       <br /><span className="text-primary" style={{fontSize: "12px", padding: "2px 0px"}}>Yesterday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                 <section>
                        <div className="container bg-white mt-5">
                            <div className="row">
                                <div className="col col-12 col-md-6 col-sm-12 col-xs-12">
                                <div className="content mt-5 p-5">
                                    <h2 className="mb-3 text-primary">Our Mission</h2>
                                    <p>
                                        To empower students by providing a transparent and efficient
                                        platform for tracking and reporting grades in real-time. With 
                                        a user-friendly interface, the system facilitates seamless 
                                        interactions between students and instructors, enabling the 
                                        submission of missing grades and fostering open communication channels. The mission encompasses
                                        ensuring data security, promoting educational equity, and offering academic support services. 
                                    </p>
                                    <button type="button" className="btn btn-primary text-white btn-sm py-2 px-3 mt-2">Read More</button>
                                </div>
                                </div>
                                <div className="col col-12 col-md-6 col-sm-12 col-xs-12">
                                    <div className="img mt-5 p-3">
                                    <img src="https://www.mystudentplan.ca/_images/student-plan-landing.png" className="img-fluid" alt="student image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
            
        </div>
    )
}

export default Home;