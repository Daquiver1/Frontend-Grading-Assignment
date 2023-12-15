import React from 'react'
import './Accordion.css'

function Accordion() {
  return (
    <>
   <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How can I report a missing grade?      
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
    You can report a missing grade by navigating to the "Missing Grade" page and filling out the required form with details such as course name, instructor name, expected grade, and an explanation.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What information is required to log in?     
       </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      To log in, you need to enter your student ID and PIN (Personal Identification Number).   
         </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do I view my current grades?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Your current grades are displayed on the "Dashboard" page upon successful login.
  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Can I filter grades by semester or academic year?
</button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Yes, on the "Grade Report" page, you can filter grades based on the semester or academic year.
  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      How do I contact my instructor regarding a missing grade?
</button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      You can find the contact details of your instructors on the "Instructor Contact" page. Additionally, you can use the "Send Email" feature to simulate sending an email to your instructor.
  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      Is there a deadline for reporting missing grades?
</button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      While there is no strict deadline, it is advisable to report missing grades as soon as possible to ensure timely resolution.
  </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      What do I do if I encounter technical issues?
</button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      If you encounter technical issues, you can reach out to our technical support team using the form provided on this page.
  </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Accordion
