import "./Navbar.css"
import logo from "../images/University_of_Ghana.png"


const Navbar = () =>{
    return (
        
            <div className="nav">
                <nav className="navbar">
                    <div class="logoo">
                        <img id="logo" src = {logo}  alt="a logo pic" />
                    </div>    
                        <ul class="nav-link">
                            <li class="nav-linkss"><a href="/"> Home</a></li>
                            <li class="nav-links"><a href="LogIn">LogIn</a></li>
                            <li class="nav-links"><a href="Contact">Contact</a></li>

                        </ul> 
                </nav>
            </div>
       
    );
}


export default Navbar;