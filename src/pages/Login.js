import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../StudentContext";

const Login = () => {
    const { student, setStudent } = useContext(StudentContext);
    const [studentId, setStudentId] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [rememberStd, setRememberStd] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // save to localStorage
        setStudent({
            studentId: studentId,
            studentPassword: studentPassword,
            rememberStd: rememberStd
        });
        localStorage.setItem("student", JSON.stringify(student));
        // redirect to grade page
        navigate("/grade");
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-9 col-md-10">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                {/* <!-- Nested Row within Card Body --> */}
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form onSubmit={handleLogin} className="user">
                                                <div className="form-group">
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="student_id" 
                                                        placeholder="Enter Student ID"
                                                        name="student_id"
                                                        autocomplete="false"
                                                        onChange={(e) => setStudentId(e.target.value) }
                                                        required
                                                        />
                                                </div>
                                                <div className="form-group">
                                                    <input 
                                                        type="password" 
                                                        className="form-control"
                                                        id="student_password"
                                                        placeholder="Enter Password"
                                                        autocomplete="new-password"
                                                        name="student_password"
                                                        onChange={(e) => setStudentPassword(e.target.value) }
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input 
                                                            type="checkbox" 
                                                            className="custom-control-input"
                                                            id="student_remember" 
                                                            name="student_remember"
                                                            onChange={(e) => setRememberStd(e.currentTarget.checked) }
                                                        />
                                                        <label className="custom-control-label" for="student_remember">Remember
                                                            Me</label>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                                <hr/>
                                                <a href="index.html" className="btn btn-google btn-user btn-block">
                                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                                </a>
                                                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                </a>
                                            </form>
                                            <hr/>
                                            <div className="text-center">
                                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                                            </div>
                                            <div className="text-center">
                                                <a className="small" href="register.html">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;