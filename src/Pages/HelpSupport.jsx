import React from 'react'
import NavBar from '../Components/Header2'
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

const HelpSupport = () => {
  return (
    <>
      <NavBar />
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <Sidebar />
        </div>

        <div className="col-md-12 col-lg-8">
          <div className="container">
            <h1 className="text-center text-info mt-4 fw-bolder mb-4">
              Help & Support{" "}
            </h1>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Q1: When are grades typically released?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> Grade release dates vary by
                    educational institution and the specific course. However, in
                    many cases, grades are typically released shortly after the
                    completion of final exams or assignments. Check with your
                    institution or instructor for specific timelines.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Q2: How can I access my grades?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER: </strong>Most educational institutions
                    provide an online portal or system where students can access
                    their grades. This portal is usually accessible through the
                    institution's website, and you may need to log in with your
                    student credentials to view your grades.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Q3: What if I can't find my grades online?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> If you're having trouble finding
                    your grades, first ensure that you are checking the correct
                    online portal designated by your institution. If the issue
                    persists, reach out to your instructor or the academic
                    support office for assistance.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Q4: Can I request a review of my grades?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> Yes, many institutions have a grade
                    review or appeal process. If you believe there is an error
                    in the grading of an assignment or exam, contact your
                    instructor to discuss the matter. Each institution will have
                    its own procedures for grade appeals.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Q5: What do the different grade symbols mean (e.g., A, B, C,
                    etc.)?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> A: Grade symbols vary between
                    institutions, but generally, they follow a standard letter
                    grading system. A is often the highest grade, followed by B,
                    C, D, and F. Some institutions may also use plus (+)
                    modifiers to indicate variations within each letter grade.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Q6: How can I calculate my GPA?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> GPA (Grade Point Average) is
                    calculated based on the grades you receive in your courses.
                    Each letter grade is assigned a numerical value (e.g.,
                    A=4.0, B=3.0, etc.), and the GPA is the average of these
                    values. Your institution's registrar's office or academic
                    support services can provide guidance on GPA calculation.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    Q7: Can I retake a course to improve my grade?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> Many institutions allow students to
                    retake courses to improve their grades. However, policies
                    regarding retakes vary. Some institutions may replace the
                    previous grade with the new one, while others may calculate
                    an average of the two grades. Check with your institution's
                    academic policies for specific information.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    Q8: What happens if I miss the deadline to drop a course or
                    withdraw?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> Missing the deadline to drop a
                    course or withdraw may result in the assignment of a grade,
                    often based on the work you've completed up to that point.
                    The specific consequences will depend on your institution's
                    policies, and it's advisable to consult with your instructor
                    or academic advisor for guidance.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Q9: How can I address a discrepancy in my final grade after
                    the term has ended?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> If you notice a discrepancy in your
                    final grade after the term has ended, promptly reach out to
                    your instructor to discuss the issue. If the matter is not
                    resolved, contact the academic affairs office or the
                    department responsible for the course for further
                    assistance.
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    Q10: Is there a difference between an "incomplete" and a
                    "withdrawal" on my transcript?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>ANSWER:</strong> Yes, an "incomplete" typically
                    indicates that you did not complete all required coursework
                    by the end of the term, and you may have the opportunity to
                    finish the work at a later date. A "withdrawal" indicates
                    that you officially dropped the course within the
                    established withdrawal period. Both will appear on your
                    transcript, but they carry different implications for your
                    academic record.
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="form">
                <form action="" className="">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email address:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Report your complaint:
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Type your message here"
                    ></textarea>
                  </div>

                  <button
                    className="btn btn-outline-info mb-4 fw-bold"
                    type="submit"
                  >
                    Submit form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default HelpSupport