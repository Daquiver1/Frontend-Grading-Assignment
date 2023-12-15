import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";


export const VisibilityHandler = ({children, notAllowedRoute}) => {

    const location = useLocation();
    const [isVisiable, setIsVisiable] = useState(null);

    const notEmtpy = arr => arr.some( el => el === null );
    const allowed = ( arr ) => {
        let res = notEmtpy(arr.map((path) => location.pathname.match(path) ));
        if(!res) return null
        return true
    }

    useEffect( ()=> {
        setIsVisiable(allowed(notAllowedRoute));
    }, [location, window.location])

    return (
        <>
          { isVisiable && children }
        </>
    )
}

const SubHeader = () => {
    return (
        <>
        <li><Link to="/grade_report">Grade Report</Link></li>
        <li><Link to="/Missing_grade_form">Report Missing Grade</Link></li>
        {/* <li><Link to="/instructor_contact">Talk to Instructors</Link></li>
        <li><Link to="/help">Help and Support</Link></li> */}
        </>
    )
}
const HeaderStyle = {
    height: "50px",
    paddingTop: "15px",
}

const Header = () => {
    return (
        <>
        <SubHeader></SubHeader>
            <header id="header">
                <h1><Link to="#"><img src="/ug_standard_new_sl_1.png" style={ HeaderStyle } class="NavLogo"></img></Link></h1>
                <nav id="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>                            
                            <VisibilityHandler notAllowedRoute={["home", "/"]}>
                                <>
                                    <li><Link to="/grade_report">Grade Report</Link></li>
                                    <li><Link to="/Missing_grade_form">Report Missing Grade</Link></li>
                                    <li><Link to="/instructor_contact">Talk to Instructors</Link></li>
                                    <li><Link to="/help">Help and Support</Link></li>
                                </>
                            </VisibilityHandler>
                        <li><Link to="/login" className="button">Login</Link></li>
                    </ul>
                </nav>
            </header>
            </>

    );
}

export default Header