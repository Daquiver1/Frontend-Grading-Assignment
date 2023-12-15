
import React from 'react';
import Layout from './Layout';

import './MissingGradeFormPage.css';


   


class MissingGradeFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
      isSubmitted: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ isSubmitted: true });
  };

  render() {
    const { courseName, instructorName, expectedGrade, explanation, isSubmitted } = this.state;

    return (
      <Layout>
        <div className="missing-grade-form-container">
          <h2>Report Missing Grade</h2>

          {isSubmitted ? (
            <div className="confirmation-message">
              <p>Your missing grade report has been submitted!</p>
            </div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={courseName}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                name="instructorName"
                value={instructorName}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                name="expectedGrade"
                value={expectedGrade}
                onChange={this.handleChange}
                required
              />

              <label htmlFor="explanation">Explanation:</label>
              <textarea
                id="explanation"
                name="explanation"
                value={explanation}
                onChange={this.handleChange}
                required
              />

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </Layout>
    );
  }
}

export default MissingGradeFormPage;
