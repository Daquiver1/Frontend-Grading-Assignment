import React, { useState } from 'react';
import { Container, Table, Form, Toast } from 'react-bootstrap';

const AppDashboard = () => {
  const [showNotification, setShowNotification] = useState(false);

  const gradeData = [
    { course: 'DCIT203', grade: 'A' },
    { course: 'CBAS201', grade: 'B' },
    { course: 'Math223', grade: 'A-' },
    { course: 'DCIT207', grade: 'C' },
    { course: 'DCIT205', grade: '' }, // Missing grade
    { course: 'DCIT201', grade: 'C' },
  ];

  const handleShowNotification = () => setShowNotification(true);
  const handleCloseNotification = () => setShowNotification(false);

  const isMissingGrade = gradeData.some((data) => data.grade === '');

  return (
    <>
      <Container className="my-5">
        <h1 className="text-center mb-4">Dashboard</h1>

        <Toast
          show={showNotification && isMissingGrade}
          onClose={handleCloseNotification}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
          }}
          bg="warning"
          delay={5000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>
            {isMissingGrade ? (
              <>
                <p>You have a missing grade. Please check and update your grade report!!!</p>
              </>
            ) : (
              'Your grade report is up to date.'
            )}
          </Toast.Body>
        </Toast>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {gradeData.map((data, index) => (
              <tr key={index}>
                <td>{data.course}</td>
                <td>{data.grade}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Form className="mt-4">
          <Form.Floating className="mb-3">
            <Form.Control id="floatingInput" type="text" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </Form.Floating>
        </Form>

        <Toast.Body>
  {isMissingGrade ? (
    <div>
      You have a missing grade. Please check and update your grade report.
      <p dangerouslySetInnerHTML={{ __html: 'You have a missing grade for DCIT205.' }} />
    </div>
  ) : (
    'Your grade report is up to date.'
  )}
</Toast.Body>
      </Container>
    </>
  );
};

export default AppDashboard;
