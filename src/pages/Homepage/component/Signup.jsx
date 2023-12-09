import "../css/index.css";
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate ();
  return (
    <div>
         <form className="form" method="post">
           <label htmlFor="userId"className="user">Student Name:</label>
           <input type="id" name="" value="" required/>

           <label htmlFor="userId"className="user">Student ID:</label>
           <input type="id" name="" value="" required/>

           <label className="user" htmlFor="userPassword">Password:</label>
           <input type="password" name="" value="" required/>

           <button className="submit" type="submit">Login</button>
           </form>

             {/* <Routes>
                      <Route index element={<Homepage/>}/>
                      <Route path='/Login' element={<Login/>}/>
                      <Route path="/Signup" element={<Signup/>}/>
                 </Routes>  */}

                 <button type="" onClick={()=> navigate("/Login")}>qqwerty</button>
    </div>
  )
}

export default Signup