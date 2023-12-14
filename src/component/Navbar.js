


function Navbar() {
   
return (
  <nav className="nav">
        <img src="https://dcs.ug.edu.gh/img/comScience_logo.png" alt="/" />
     <ul>
         <CustomLink href="/home">Home</CustomLink>
        <CustomLink href="/login">Login</CustomLink>
        <CustomLink href="/dashboard">Dashboard</CustomLink>
        <CustomLink href="/HelpAndSupport">HelpAndSupport</CustomLink>
        <CustomLink href="/missing_grade_form">MissingGrade</CustomLink>
        <CustomLink href="/instructor_contact">InstructorContact</CustomLink>
        <CustomLink href="/grade_report">GradeReport</CustomLink>
        

     </ul>
  </nav>
)

}

function CustomLink ({ href, children, ...props}) {
   const path = window.location.pathname
   return (
      <li className={path === href ? "active" : ""}>
        <li><a href={href}{...props}>{children}</a></li>

      </li>
   )

}
export default Navbar;