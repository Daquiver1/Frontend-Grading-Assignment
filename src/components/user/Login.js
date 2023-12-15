import React from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import Error from "../alert/Error";
import Success from "../alert/Success";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentID: "",
      password: "",
      isLoggedIn: false,
      error: false,
      success: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  login = (e) => {
    e.preventDefault();

    // Mock user data
    const mockUserData = {
      studentID: "01410113",
      password: "12345",
      firstName: "Michael",
      lastName: "Budu-Biney",
    };

    let studentID = this.state.studentID;
    let password = this.state.password;

    if (studentID.length === 0 || password.length === 0) throw new Error();
    // Check if entered credentials match mock data
    if (
      studentID === mockUserData.studentID &&
      password === mockUserData.password
    ) {
      //set user session flag in localStorage
      localStorage.setItem("studentID", studentID);
      localStorage.setItem("firstname", mockUserData.firstName);
      localStorage.setItem("lastname", mockUserData.lastName);
      localStorage.setItem("isLoggedIn", "true");

      this.setState({ success: true, isLoggedIn: true });
      this.props.history.push("/studenthome");
    } else {
      // Failed login
      this.setState({
        error: true,
      });
    }
  };

  render() {
    // const { username } = this.state;
    return (
      <React.Fragment>
        {this.state.error ? (
          <Error
            message={
              "The username or password entered does not match our records. Please try again!"
            }
          />
        ) : (
          ""
        )}
        {/* {this.state.success ? (
          <Success message={`Welcome back ${username}`} />
        ) : (
          ""
        )} */}
        <Container className="mt-5">
          <Row className="justify-content-md-center">
            <Col md="6">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={this.login} className="box-form">
                <Form.Group controlId="formStudentID">
                  <FloatingLabel
                    controlId="floatingStudentID"
                    label="StudentID"
                    className="mb-3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="StudentID"
                      name="studentID"
                      value={this.state.studentID}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
              </Form>
              {/* {this.state.error && (
                <Alert variant="danger" className="mt-3">
                  {this.state.error}
                </Alert>
              )} */}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
