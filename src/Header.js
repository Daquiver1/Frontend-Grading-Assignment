import logo from './Assets/LegLogo.png'
import LogInComp from './LogInComp';
function Header(){
    return(
       <header className="head-container">
            <div className="imgDiv"><img className="headLogo" src={logo} alt="legLogo"></img>
            <div>
            <h3 className="imgText">University Of Ghana</h3>
            <h3 className="imgText1">Grade Report System</h3>
            </div>
            </div>
            <div className="srch-log">
            <i class="fa fa-envelope icon"/>
            <input className="searchBox" type="search" placeholder="I am looking for.. " ></input>
            </div>
       </header>
    );
}

export default Header;