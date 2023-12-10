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
            Can I change my password?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingThree"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Yes, you can change your password by going to the Account Settings page and following the instructions.
          </div>
        </div>
      </div>

      {/* Additional FAQ Entries */}
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
            How do I reset my password?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFour"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            To reset your password, click on the "Forgot Password" link on the login page and follow the instructions sent to your email.
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
            Is the platform mobile-friendly?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseFive"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingFive"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Yes, the platform is designed to be fully responsive and accessible on various devices, including mobile phones and tablets.
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
            What browsers are supported?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseSix"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingSix"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            The platform is optimized for the latest versions of Chrome, Firefox, Safari, and Edge. Please ensure your browser is up to date for the best experience.
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
            Can I download my grade reports?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseSeven"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingSeven"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Yes, you can download your grade reports in PDF format from the Reports section of your dashboard.
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
            How do I contact support?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseEight"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingEight"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            You can contact our support team through the "Contact Us" page on the platform, or email support@gradereport.com.
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
            How often are grades updated?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseNine"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingNine"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Grade updates vary by instructor but are typically done weekly. You will receive notifications when new grades are available.
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
            Are my personal details secure?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTen"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTen"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Yes, we prioritize the security of your personal information. Our platform uses industry-standard encryption and security measures to protect your data.
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
            Can I customize my dashboard?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseEleven"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingEleven"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            Yes, you can customize your dashboard by rearranging widgets and choosing the information you want to see.
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
            What do I do if I forget my username?
          </button>
        </h2>
        <div
          id="gradeReportAccordionCollapseTwelve"
          className="accordion-collapse collapse"
          aria-labelledby="gradeReportHeadingTwelve"
          data-bs-parent="#gradeReportAccordion"
        >
          <div className="accordion-body">
            If you forget your username, you can recover it by providing the email associated with your account. Instructions will be sent to your email.
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppHelpandSupport;
