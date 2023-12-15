import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
function LoginMain (){
    

    return(
        <>
        <Header></Header>
        <form className="form">
            <h1>Login</h1>
            <input type="text" name="user" id="" placeholder="Student ID"  maxLength={8}  required/>
            <input type="password" name="" id="" placeholder="Password"  maxLength={5} />
            <Link to="/sk"><button>Login</button></Link>
        </form>
        <Footer></Footer>
        
        

        </>
    )
}
export default LoginMain