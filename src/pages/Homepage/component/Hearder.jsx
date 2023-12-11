import "../css/index.css"
import { useNavigate } from "react-router-dom" 




const Hearder =()=>{
  const navigate = useNavigate();
  return (
   

    <nav className="header-nav">
      <div className="inner_header"> 
<div className="logo">
<h1>myLogo</h1>
</div>
            <ul className="navigation">
               <a onClick={()=>navigate("")}><li>Home</li></a>
               <a onClick={()=>navigate("")}><li>About</li></a>
            <a onClick={()=>navigate("Missinggrade")}><li >Missing grade</li></a> 
               <a onClick={()=>navigate("Missinggrade")}><li>Dashboard</li></a>
               <a onClick={()=>navigate("Missinggrade")}><li>Contact</li></a>
               <a onClick={()=>navigate("Missinggrade")}><li>FAQs</li></a>
             </ul>
      </div>
    </nav>
  )
}

export default Hearder