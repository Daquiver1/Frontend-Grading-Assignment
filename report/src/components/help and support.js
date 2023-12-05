import React from 'react';


const AppHelpandSupport = () => {
  return (
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
            How can I view my grades?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingOne"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            You can view your grades by logging into your account and navigating to the Dashboard section.
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
            What do I do if I have missing grades?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTwo"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            If you have missing grades, please contact your instructor or use the Missing Grade Form to report the issue.
          </div>
        </div>
      </div>
      {/* Add more FAQ entries as needed */}
    </div>
  );
};

export default AppHelpandSupport;
