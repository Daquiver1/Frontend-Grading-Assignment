import { Link } from "react-router-dom";

const Button = (props) => {
    return ( 
        <button onClick={() =><Link to="/login"></Link>}className="bg-blue-700 text-white font-serif py-2 px-6 rounded md:ml-8 hover:bg-yellow-500 hover:text-blue-700 duration-500"  >
            {props.children}
            <Link to="/Login"></Link>
        </button>
     );
}
 
export default Button;