import MainLayout from "../layout/MainLayout";

function HelpAndSupport() {
  return (
    <MainLayout>
      <div className="container mt-3">
        <h2>Frequently Asked Questions</h2>
        <div>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>
                  <div className="faqquestion">
                    1. Where on the application do I send a missing grade
                    report?
                  </div>
                  <div className="faqanswers">
                    <p>
                      Go to the "Report Missing Grade" page and complete the
                      form to submit your report.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="faqquestion">
                    2. How do I print my grades for the current academic year?
                  </div>
                  <div className="faqanswers">
                    <p>
                      Go to the "Grades Report" page and filter your grades for
                      the current academic year. There is an option to download
                      your filtered report as Pdf.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="faqquestion">
                    3. What should i do when my grades are not loading?
                    </div>
                  <div className="faqanswers">
                    <p>
                      Go to the university of Ghana computer science department
                      and lodge your complaints to the receptionists.
                     
                  
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="faqquestion">
                    4. Question 4
                    </div>
                  <div className="faqanswers">
                    <p>
                      Sampl Answer: If you have a knowledge base, then you may
                      want to add the FAQ page as a section of this resource. In
                      this case, make sure your FAQ page is extremely searchable
                      and includes plenty of keywords that will make it easily
                      accessible to customers searching your website.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default HelpAndSupport;
