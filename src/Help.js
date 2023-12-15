import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import QaS from "./QaS";
import Button from "./Button";
function Help(){
    const handleClick =()=>{
        alert("Email sent.")
    }
    return(
   <>
   <Header/>
   <>
        <div className ="helpContainer">
        <Navigation/>
        <div className="helpHolder">
        <h2 className="myp">Help And Support</h2>
        <h3>Frequently Asked Questions(FAQS)</h3>
         <QaS Question="Q: How do I view my current grades?" Answer="A: Navigate to your Dashboard page where you
         can find an overview of your current grades."/>
         <QaS Question="Q: What should I do if I can't find some of my grades?" Answer="A: Visit the Missing Grade Form page to report any
         missing grades. Fill in the required details and submit the form."/>
         <QaS Question="Q: How can I contact my instructors?" Answer="A: Go to the Contact Instructors page to find a list of instructors with their contact details.
         You can also send them a simulated email from there."/>
        <h3>Additional Support</h3>
        <p className="text1">If you need further assistance or have technical issues, please fill out the form below.</p>
        <div className="form2">
        <label for ="Name">Name</label>
        <input className="c-form" type="text"/>
        <label for="c-form">Email</label>
        <input className="c-form" type="email"/>
        <label for="t-form">Message</label>
        <textarea className="t-form" rows={4} required/>  
        <Button name="getStarted" elname="Submit" whenClicked={handleClick}/>   
        </div>
        </div>
        </div>
        </>
   <Footer/>
   </>
    );
}
export default Help;