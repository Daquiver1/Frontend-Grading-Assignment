import { Form } from "react-router-dom";
import Footer from "../Components/footer";
import Sidebar from "../Components/sidebar";

export default function HelpAndSupport() {
    return(
      <>

      <div id="Parent">
          <div id="sidebarPositioning" >
              <Sidebar/>
          </div>

          <div id="sidebarContentPositioning">
            <div class="container card text-bg-dark" id="helpandsupportbg">
                <div className="container" >
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>When are grades typically released?</strong> 
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Grades for each semester or term are usually released within a few days to a couple of weeks after the end of the term. Specific release dates can vary depending on the institution's policies and the complexity of the grading process.     
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                When are grades typically released?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong> You can typically access your grades through the institution's online student portal or learning management system (LMS). Log in using your student credentials and navigate to the grades section to view your current and past grades.
                                </strong>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How can I access my grades?
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            You can typically access your grades through the institution's online student portal or learning management system (LMS). Log in using your student credentials and navigate to the grades section to view your current and past grades.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            How can I access my grades?
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            You can typically access your grades through the institution's online student portal or learning management system (LMS). Log in using your student credentials and navigate to the grades section to view your current and past grades.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            How can I access my grades?
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            You can typically access your grades through the institution's online student portal or learning management system (LMS). Log in using your student credentials and navigate to the grades section to view your current and past grades.
                            </div>
                            </div>
                        </div>
                    </div>

                    
                    <h1>Contact Form for Technical Support</h1>

                    <form action="/submit_form" method="post">
                        <label for="name">Full Name:</label><br/>
                        <input type="text" id="name" name="name" required/><br/>

                        <label for="email">Email:</label><br/>
                        <input type="email" id="email" name="email" required/><br/>

                        <label for="issue">Issue:</label><br/>
                        <textarea id="issue" name="issue" rows="4" cols="50" required></textarea><br/>

                        <label for="details">Additional Details (optional):</label><br/>
                        <textarea id="details" name="details" rows="4" cols="50"></textarea><br/>

                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                            
                    </form>
                </div>
            </div>  
                
              <Footer/>    
          </div>

      </div>
  
      </> 
    ) ;   
}