import App from "../App";
import schlogo from './schlogo.png';
// const Home = () => {
//   return <h1>Home</h1>;
// };

// export default Home;

// function Enter() {
//     return(
//         {App}
        

//     );
// }
// function Out() {
//     return(
//         { Login}
//     )
// }
const Login = () => {
    return (
        <>
        <header>
        <div id="flexbox">
          <div id="schlogo"><img src={schlogo} className="deptlogo" alt="Ug DCS logo"   ></img></div>
          <div id="navbar">
            <ul className="horiznav">
               {/* <li>Grade Report</li>
               <li>Dashboard</li>
               <li>Missing Grade Form</li>
               <li>Insructor</li>
               <li>Help &amp; Support</li> */}
               <button className="frontgate"><li>Log Out</li></button>

            </ul>
          </div>
        </div>
      </header>
      <br></br>
      <h1 style={{color:"#BD9C6C"}}>Log In</h1>
      <div id="flexbox">
        <form style={{alignItems:"center",alignSelf:"center"}}>
            <label>Student ID: <input type="text" placeholder="StudentID" maxLength={8}></input>  </label>
            <label>PIN: <input type="text" placeholder="PIN" maxLength={5}></input></label>
            <button onClick={App}>Login</button>
                           
        </form>
      </div>
        </>
        
    )
  };
  export default Login;
  
  
