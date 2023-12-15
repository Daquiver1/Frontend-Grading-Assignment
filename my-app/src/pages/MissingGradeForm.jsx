import React, { Component } from 'react';

class MissingGradeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: '',
      instructorName: '',
      expectedGrade: '',
      explanation: '',
      submitted: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { courseName, instructorName, expectedGrade, explanation, submitted } = this.state;

    return (
      <div>
        <h2>Missing Grade Form</h2>
        {submitted ? (
          <p>Thank you for reporting the missing grade. We will look into it.</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="courseName">Course Name:</label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={courseName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="instructorName">Instructor Name:</label>
              <input
                type="text"
                id="instructorName"
                name="instructorName"
                value={instructorName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="expectedGrade">Expected Grade:</label>
              <input
                type="text"
                id="expectedGrade"
                name="expectedGrade"
                value={expectedGrade}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="explanation">Explanation:</label>
              <textarea
                id="explanation"
                name="explanation"
                value={explanation}
                onChange={this.handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default MissingGradeForm;