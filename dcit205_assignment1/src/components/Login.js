
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from 'react-router-dom';


    const Login = () => {

        const navigate = useNavigate();

        const handleSubmit = (event) => {
        event.preventDefault(); 
        alert('You have successfully logged in. Click OK to continue.');
        navigate('/Dashboard');
  }
        return ( 
    <div className="login">
      <div className="container-fluid vh-100" >
        <h1 className="text-center text-primary">Student Portal</h1>
            <div className="" >
                <div className="rounded d-flex justify-content-center">
                    <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
                        <div className="text-center">
                            <h3 className="text-primary">Login</h3>
                        </div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-primary"><i
                                            className="bi bi-person-plus-fill text-white"></i></span>
                                    <input type="text" className="form-control" placeholder="StudentID" required/>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-primary"><i
                                            className="bi bi-key-fill text-white"></i></span>
                                    <input type="password" className="form-control" placeholder="PIN" required/>
                                </div>
                                
                                <input type="submit" value="Login" className="btn btn-primary text-center mt-2" onClick="window.location.href = 'https://website.com/my-account'" >
                                </input>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  
    );
}

 
export default Login;