import React from 'react';

class GradeReport extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      courses: [
        { id: 1, subject: 'Math', grade: 'A', semester: 'Spring 2022' },
        { id: 2, subject: 'Science', grade: 'B', semester: 'Spring 2022' },
        { id: 3, subject: 'History', grade: 'C', semester: 'Fall 2021' },
        { id: 4, subject: 'English', grade: 'A', semester: 'Fall 2021' },
        { id: 5, subject: 'Geography', grade: 'B', semester: 'Spring 2021' },
      ],
      selectedYear: 'All',
    };
  }

  handleChangeYear = (e) => {
    this.setState({ selectedYear: e.target.value });
  };

  render() {
    const { courses, selectedYear } = this.state;

    const filteredCourses = selectedYear === 'All' ? courses : courses.filter(course => course.semester.includes(selectedYear));

    return (
      <div>
        <h2>Grade Report</h2>
        <label htmlFor="yearFilter">Filter by Year:</label>
        <select id="yearFilter" value={selectedYear} onChange={this.handleChangeYear}>
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td>{course.subject}</td>
                <td>{course.grade}</td>
                <td>{course.semester}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GradeReport;