import { Link } from "react-router-dom";

function LogInComp(props){
    return(
        <Link className="login" to="login">{props.content}</Link>
    );

}

export default LogInComp;