
import "./CustomLogin.css";
import { useState } from "react"

const Login = () => {

    const [studentId, setStudentId ] = useState('')
    const [pin, setPin ] = useState('')
    // const [errorMessage, setErrorMessage] = useState('')

    const mockupId = "11254394"
    const mockupPin = "1234"

    const handleLogin = (e) => {
        e.preventDefault();
        if(studentId === mockupId && pin === mockupPin){
            alert("Login successful")
        }
        else {
            alert('Invalid Student Id or Pin')
        }
    }
    return (
        <div>
            <div className="container-fluid login-container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div className="card card0 border-0">
                    <div className="bg-blue py-5">
                        
                    </div>
                    <div className="row d-flex">
                        
                        <div className="col-lg-6">
                            <div className="card1 pb-5">
                                
                                <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais" className="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card2 card border-0 px-4 py-5">
                                <div className="row mb-4 mx-auto px-3 profile">
                                    <div>
                                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8ddM1QIfpYGCah6V6xY3dsQ_mS6JPMGPng&usqp=CAU" className="img-fluid float-center" alt="" />
                                    </div>
                                </div>
                                <form>

                                    <div className="form-floating mb-3 mt-3">
                                        <input type="text" value={studentId} onChange={e => setStudentId(e.target.value)} className="form-control mt-2" name="studentId" id="floatingInputText" placeholder="1211282" />
                                        <label htmlFor="floatingInputText">Student Id</label>
                                    </div>

                                    <div className="form-floating mb-3 mt-3">
                                        <input type="password" value={pin} onChange={e => setPin(e.target.value)} className="form-control" name="pin" id="floatingPassword" placeholder="Password" />
                                        <label htmlFor="floatingPassword">Student Pin</label>
                                    </div>

                                    <div className="d-grid mb-2 mt-3">
                                      <button className="btn btn-lg btn-primary btn-login" onSubmit={handleLogin} type="submit">Login</button>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue py-5">
                       
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;