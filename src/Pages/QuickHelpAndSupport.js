import Footer from "../Components/footer";
import LoginPageBody from "../Components/loginPageBody";
import Header from "../Components/header";

export default function QuickHelpAndSupport() {
    return(
        <>
            <Header/>
            <div class="container card text-bg-success" id="QuickHelpAndSuppportbg">
                <div className="container" >
                    <h1>FAQ section regarding Grade Reporting.</h1>
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
                            <strong>How can I access my grades?</strong>
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            You can typically access your grades directly on the grade report page of this site or alternatively 
                            through the institution's online student portal or learning management system (LMS). Log into any using your student 
                            credentials and navigate to the Grade Report section to view your current and past grades.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>What if I see an error in my grade report?</strong>
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                If you believe there's an error in your grade report, immediately go to the missing grade section
                                of this page and fill the the form there. Provide details and evidence regarding the discrepancy
                                to facilitate a review and resolution process.                            
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <strong>Will my grades affect my academic standing?</strong>
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, grades play a significant role in determining academic standing. They can impact eligibility for
                                    honors, scholarships, academic probation, or graduation requirements. It's crucial to maintain 
                                    satisfactory grades to meet academic standards.                            
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            <strong>Can I request a grade review or appeal?</strong>
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Most educational institutions have procedures in place for grade reviews or appeals.
                                    If you disagree with a grade, follow the institution's formal process for requesting
                                    a review or filing an appeal within the specified timeframe.                            
                                </div>
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
                        <textarea id="issue" name="issue" rows="3" cols="50" required></textarea><br/>

                        <label for="details">Additional Details (optional):</label><br/>
                        <textarea id="details" name="details" rows="3" cols="50"></textarea><br/>

                        <input className="btn btn-primary" type="submit" value="Submit"></input>
                            
                    </form>
            </div>

            
            <Footer/>
        </>
    ) ;   
}