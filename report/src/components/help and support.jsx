import React from 'react';
import { Container, Accordion, Card, Button, Form } from 'react-bootstrap';
import './styles/FAQs.css'

function AppHelp() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>

      <Accordion defaultActiveKey="0">
      <Card>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Q: How do I access my grade report?</Accordion.Header>
            <Accordion.Body>
              A: You can access your grade report by logging into the student portal and navigating to the
              "Grade Report" section.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 2 */}
        <Card>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Q: When are grade reports typically released?</Accordion.Header>
            <Accordion.Body>
              A: Grade reports are typically released at the end of each semester. The exact dates may vary, so
              please check the academic calendar for specific information.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 3 */}
        <Card>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Q: How are grades calculated?</Accordion.Header>
            <Accordion.Body>
              A: Grades are calculated based on a combination of assignments, exams, and other assessment
              criteria specified by each course instructor. Refer to the course syllabus for details.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 4 */}
        <Card>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Q: Can I request a re-evaluation of my grades?</Accordion.Header>
            <Accordion.Body>
              A: Yes, you can request a re-evaluation of your grades. Please follow the grade appeal process
              outlined in the academic policies.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 5 */}
        <Card>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Q: Where can I find my GPA on the grade report?</Accordion.Header>
            <Accordion.Body>
              A: Your GPA is usually displayed on the grade report. It reflects your overall academic
              performance based on the grades you've earned in your courses.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 6 */}
        <Card>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Q: What does an incomplete (I) grade mean?</Accordion.Header>
            <Accordion.Body>
              A: An incomplete grade (I) is given when a student is unable to complete the required coursework
              within the semester. Check with your instructor for details on completing the remaining work.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 7 */}
        <Card>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Q: How can I appeal a grade decision?</Accordion.Header>
            <Accordion.Body>
              A: If you believe there was an error in the grading process, you can follow the grade appeal
              process outlined in the university's academic policies.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 8 */}
        <Card>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Q: Can I view my grade report online?</Accordion.Header>
            <Accordion.Body>
              A: Yes, you can view your grade report online through the student portal. The grade report is
              usually available shortly after grades are finalized.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 9 */}
        <Card>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Q: Are there any consequences for academic probation?</Accordion.Header>
            <Accordion.Body>
              A: Academic probation may result in restrictions on course registration or other academic
              consequences. It's essential to consult with academic advisors to address any probation-related
              concerns.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* FAQ 10 */}
        <Card>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Q: How long does it take for grades to be posted?</Accordion.Header>
            <Accordion.Body>
              A: Grades are typically posted within a few days after the end of the semester. Delays may occur
              during peak periods, such as finals week.
            </Accordion.Body>
          </Accordion.Item>
        </Card>

        {/* Repeat the above structure for each FAQ item */}
      </Accordion>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your message" required />
          </Form.Group>
            <div className='spacer'>
          <Button variant="primary" type="submit" > 
            Submit
          </Button>
          </div>
        </Form>
      </Container>
    </Container>
  );
}

export default AppHelp;
