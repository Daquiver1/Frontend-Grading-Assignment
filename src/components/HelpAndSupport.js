
import React, { useState } from 'react';


const AppHelpAndSupport = () => {
  const [userQuestion, setUserQuestion] = useState('');

  const handleUserQuestionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const handleSubmitQuestion = () => {
    
    console.log('User Question:', userQuestion);

    
    setUserQuestion('');
  };


  return (
    
    <div>
    <div className="mb-4">
      <h2 style={{ color: '#0D47A1'  }}>Let's answer some of your questions</h2>
    </div>
    
   
    <div>
    <div className="accordion w-100" id="gradeReportAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseOne"
            aria-expanded="false"
            aria-controls="gradeReportCollapseOne"
          >
          How do I access my grade information?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingOne"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          You can check your grades by signing in to your account and going to the Dashboard section.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseTwo"
            aria-expanded="false"
            aria-controls="gradeReportCollapseTwo"
          >
           If I believe there's been a grading error, how should I address it?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTwo"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Communicate with your instructor, explaining your concern and providing evidence if possible.
          </div>
        </div>
      </div>

      
      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseThree"
            aria-expanded="false"
            aria-controls="gradeReportCollapseThree"
          >
            How is the GPA calculated?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingThree"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            GPA is calculated by assigning a numerical value to each letter grade and averaging them. 
            Refer to University of Ghana's GPA scale for details.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseFour"
            aria-expanded="false"
            aria-controls="gradeReportCollapseFour"
          >
            Can missing grades affect my academic standing or GPA?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFour"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Yes, missing grades can potentially impact your academic standing and GPA. 
          It's essential to address these issues promptly to avoid any negative consequences.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingFive">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseFive"
            aria-expanded="false"
            aria-controls="gradeReportCollapseFive"
          >
            What grading scale is used for the courses?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFive"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            The grading scale is usually outlined in the course syllabus. 
            Common scales include A (90-100), B (80-89), C (70-79), etc. 
            Check with your instructor for any variations.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingSix">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseSix"
            aria-expanded="false"
            aria-controls="gradeReportCollapseSix"
          >
            Is there a specific office or department responsible for handling missing grades?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingSix"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          The registrar's office or the academic affairs office is generally responsible for handling missing grades.
           Contact them for guidance and assistance in resolving the issue.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingSeven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseSeven"
            aria-expanded="false"
            aria-controls="gradeReportCollapseSeven"
          >
           Are there any common reasons why grades might be delayed or go missing?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingSeven"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Grades can be delayed or go missing for various reasons, including technical issues, administrative errors, or unforeseen circumstances affecting the instructor. 
          Understanding the specific cause can help in addressing the issue more effectively.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingEight">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseEight"
            aria-expanded="false"
            aria-controls="gradeReportCollapseEight"
          >
            What steps should I take if I have missing grades from multiple courses?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingEight"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          If you have missing grades from multiple courses, address each course individually. 
          Contact each instructor and follow up with the academic affairs office to ensure all missing grades are reported and resolved.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingNine">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseNine"
            aria-expanded="false"
            aria-controls="gradeReportCollapseNine"
          >
            Can I appeal a grade if I believe it was unfairly assigned or recorded incorrectly?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseNine"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingNine"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Yes, the University have a formal grade appeal process. If you believe a grade was unfairly assigned or recorded incorrectly, follow the university's established procedures for filing a grade appeal. 
          This often involves submitting a written appeal with supporting documentation.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingTen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseTen"
            aria-expanded="false"
            aria-controls="gradeReportCollapseTen"
          >
           How does the university handle technical issues that may lead to missing grades?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTen"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Universities typically have protocols in place to address technical issues affecting grade submissions. 
          Instructors may work with the IT department or academic affairs office to resolve any technical challenges promptly.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingEleven">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseEleven"
            aria-expanded="false"
            aria-controls="gradeReportCollapseEleven"
          >
           How do I request a transcript?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseEleven"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingEleven"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          You can request an official transcript through the registrar's office. 
          Follow their guidelines for transcript requests.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingTwelve">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseTwelve"
            aria-expanded="false"
            aria-controls="gradeReportCollapseTwelve"
          >
           How can I access my final grades at the end of the semester?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTwelve"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTwelve"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Final grades are usually available on the student portal or through the university's official grade reporting system.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingThirteen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseThirteen"
            aria-expanded="false"
            aria-controls="gradeReportCollapseThirteen"
          >
           How long does it usually take for missing grades to be updated in the system?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseThirteen"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingThirteen"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          The duration can vary. 
          If it exceeds the typical grading period, inquire with the instructor or the department responsible for grading.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingFourteen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseFourteen"
            aria-expanded="false"
            aria-controls="gradeReportCollapseFourteen"
          >
           What information should I include when reporting a missing grade?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFourteen"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFourteen"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
          Provide your full name, student ID, course details, and any relevant documentation, such as graded assignments or communication with the instructor.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="gradeReportHeadingFifteen">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#gradeReportAccordionCollapseFifteen"
            aria-expanded="false"
            aria-controls="gradeReportCollapseFifteen"
          >
           Can I still graduate if I have unresolved missing grades on my record?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFifteen"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFifteen"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            It's generally a requirement to have all grades resolved before graduating. Ensure that all missing grades are addressed and recorded correctly before the graduation deadline.
             Contact the academic affairs office for guidance on specific graduation requirements.
          </div>
        </div>
      </div>
      
    </div>
    <br></br>
    <br></br>
    
    <div className="mb-4">
    <h2 style={{ color: '#0D47A1' }}>Not satisfied? Ask your own question</h2>
    <div className="mb-3">
      <textarea
        className="form-control"
        placeholder="Type your question here..."
        value={userQuestion}
        onChange={handleUserQuestionChange}
      ></textarea>
    </div>
    <button className="btn btn-primary"  onClick={handleSubmitQuestion}>
      Submit Question
    </button>
  </div>
</div>
</div>
    

    
  );
};

export default AppHelpAndSupport;
