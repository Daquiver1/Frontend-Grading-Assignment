import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
function MissingGrade (){

    const handleSubmit = () => {
        alert("Form Submitted")
    }

    return(
        <>
        <Header></Header>
        <div className="welcome-message">
            <h1 id="missing">Missing Grade Form</h1>
        </div>
        <form className="missing">
            <input type="text" placeholder="Course Name" required/>
            <input type="text" placeholder="Instructor Name" required/>
            <input type="text" placeholder="Expected Grade" required minLength={1} maxLength={2}/>
            <textarea name="explanation" id="explain" cols="30" rows="5" placeholder="Explanation Field" required></textarea>
            <Link to="/"><button className="submit" onClick={handleSubmit}>Submit</button></Link>
        </form> <hr />
        <Footer></Footer>
        </>

    )
}
export default MissingGrade