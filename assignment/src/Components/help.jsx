import React from 'react';
import { Accordion } from 'react-bootstrap';

function HelpAndSupportPage() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I view my grades?</Accordion.Header>
        <Accordion.Body>
          You can view your grades by navigating to the "Grades" section on your dashboard. It provides a detailed breakdown of your grades for each subject and semester.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I see my grades for a specific semester?</Accordion.Header>
        <Accordion.Body>
          Yes, you can filter your grades based on the semester. Use the filter options provided on the Grades page to select the desired semester and view your grades accordingly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How often are grades updated?</Accordion.Header>
        <Accordion.Body>
          Grades are typically updated at the end of each semester. However, it's advisable to check with your instructors or the academic department for specific timelines.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What do I do if I have missing grades?</Accordion.Header>
        <Accordion.Body>
          If you have missing grades, please contact your instructors or the academic support department. They will assist you in resolving any discrepancies or missing information.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How can I improve my academic performance?</Accordion.Header>
        <Accordion.Body>
          To improve your academic performance, consider seeking help from tutors, attending study groups, and communicating with your instructors. Additionally, make use of available resources such as the library and online materials.
        </Accordion.Body>
      </Accordion.Item>
      {/* Add more FAQ items as needed */}
    </Accordion>
  );
}

export default HelpAndSupportPage;
