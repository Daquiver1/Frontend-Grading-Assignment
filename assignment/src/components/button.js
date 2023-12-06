import { Link } from "react-router-dom";
const Button = (props) => {
    return ( 
        <button className="bg-blue-700 text-white font-serif py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 hover:text-blue-700 duration-500" onClick={<Link to ="/login">Login</Link>}>
            {props.children}
        </button>
     );
}
 
export default Button;