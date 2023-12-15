import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
} from "react-bootstrap";
import Error from "../alert/Error";
import Success from "../alert/Success";

class MissingGradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: "",
      instructorName: "",
      expectedGrade: "",
      reason: "",
      error: false,
      success: false,
    };
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  submitMissingGrade = (e) => {
    e.preventDefault();

    const { courseName, instructorName, expectedGrade, reason } = this.state;

    if (!courseName || !instructorName || !expectedGrade || !reason) {
      this.setState({
        error: true,
      });
    } else {
      // simulate submitting missing grade data
      console.log("Submitted Missing Grade: ", {
        courseName,
        instructorName,
        expectedGrade,
        reason,
      });

      // Display sucess message
      this.setState({
        success: true,
        error: false,
        courseName: "",
        instructorName: "",
        expectedGrade: "",
        reason: "",
      });

      this.props.history.push("/report-missing-grade");
    }
  };

  render() {
    const { courseName, instructorName, expectedGrade, reason } = this.state;

    return (
      <React.Fragment>
        {this.state.error ? (
          <Error message={"All fields are required for submission!"} />
        ) : (
          ""
        )}
        {this.state.success ? (
          <Success
            message={"Your grade request has been submitted successfully!"}
          />
        ) : (
          ""
        )}
        <Container className="mt-5 ">
          <h2 className="c-text">Submit Missing Grade</h2>
          <Form
            onSubmit={this.submitMissingGrade}
            className="box-form w-form c-margin"
          >
            <Form.Group controlId="formCourseName">
              <FloatingLabel
                controlId="floatingInput"
                label="Course Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Course Name"
                  name="courseName"
                  value={courseName}
                  onChange={this.handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group>
              <FloatingLabel
                controlId="floatingInput"
                label="Instructor Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Instructor Name"
                  name="instructorName"
                  value={instructorName}
                  onChange={this.handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="formExpectedGrade">
              <FloatingLabel
                controlId="floatingInput"
                label="Expected Grade"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Expected Grade"
                  name="expectedGrade"
                  value={expectedGrade}
                  onChange={this.handleInputChange}
                />
              </FloatingLabel>
            </Form.Group>

            <Form.Group controlId="formExplanation">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Your reasons"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Your reasons"
                  rows={8}
                  name="reason"
                  value={reason}
                  onChange={this.handleInputChange}
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Submit Grade
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(MissingGradeForm);
