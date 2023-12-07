import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "../Components/Styling/Navbar.css"

function BottomNavbar() {
  return (
    <div style={{width:"500px",gap:"17px",height:"50px",borderRadius:"30px",backgroundColor:"#0000ff7e",marginBottom:"30px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
         <Link to="Home" id="link" >Home</Link> 
         <Link to="Form" id="link" >Form</Link>
         <Link to="Ins" id="link" >Instructors</Link>
         <Link to="Help" id="link" >Help</Link>
         <Link to="Logout" id="link" >Logout</Link>
    </div>
  )
}

export default BottomNavbar