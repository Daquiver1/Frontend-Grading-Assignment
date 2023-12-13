
import "./LogInstyle.css"
import Imagelogo from "../images/University_of_Ghana.png"
import {useNavigate} from "react-router-dom";



export default function LogIn() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        studentId: data.get('studentId'),
        password: data.get('password'),
      });
  
      const studentId = data.get('studentId');
      const password = data.get('password');
  
      if (studentId && password) {
        console.log('Navigating to DashboardPage');
        navigate('/Dashboard');
      } else {
        console.log('Not navigating. ID or password is empty.');
      }
    };


    return (
        <div>
            
           <div>
            <div class="image">
                <img class="image"src={Imagelogo} alt="a good view of the logo" />
                </div>
                <div className="login-page">
                <form className="login-form" noValidate onSubmit={handleSubmit}>
                    <div className="titles">Registered Users: LogIn</div>
                    <input type="Id" name="studentId"placeholder="Student's ID" required />
                    <input type="password" name="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
                </div>
               </div> 
            </div>    

    );
}


