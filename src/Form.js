import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Button from "./Button";
function Form(){
    const handleClick = () => alert("Form Submitted");
    return(
        <>
        <Header/>
        <div className ="container">
        <Navigation/>
        <form className="report-container">
            <p>Report Missing Grade</p>
            <label for="c-form">Course Name: </label><br/>
            <input type="text" className="c-form" required/>
            <label for="c-form">Instructor Name: </label><br/>
            <input type="text" className="c-form" required/>
            <label for="c-form">Expected Grade: </label><br/>
            <input type="text" className="c-form" maxLength={2}required/>
            <label for="t-form">Explanation</label><br/>
            <textarea className="t-form" rows={4} required/>            
            <Button whenClicked={handleClick} name="getStarted" elname="Submit Report"/>
            
        </form>
        </div>
        <Footer/>
        </>
       
    )
    
}
export default Form;