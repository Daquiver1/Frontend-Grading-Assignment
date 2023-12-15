import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Check } from "react-bootstrap-icons";

class GradeReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          class: "DCIT 101",
          name: "Introduction to Computer Science",
          description:
            "ntroduction to Computer Science teaches the basics of coding and problem-solving, laying the groundwork for understanding how computers function and their practical uses.",
          instructor: "Dr Ferdinand",
          grade: "A",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 2,
          class: "DCIT 103",
          name: "Office Productivity Tools",
          description:
            "Office productivity tools, like Microsoft Office or Google Workspace, streamline tasks by offering essential applications such as word processing, spreadsheets, and presentation software, enhancing efficiency in professional environments.",
          instructor: "Mark Attah",
          grade: "B",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 3,
          class: "DCIT 105",
          name: "Mathematics for IT Professionals",
          description:
            "Mathematics for IT professionals delves into advanced concepts like discrete mathematics, linear algebra, and calculus, providing a theoretical foundation essential for complex algorithm design, artificial intelligence, and other advanced IT applications.",
          instructor: "Dr Solomon",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 4,
          class: "ECON 101",
          name: "Introduction to Economics I",
          description:
            "Introduction to Economics explores fundamental principles of micro and macroeconomics, analyzing how individuals, businesses, and governments make decisions, allocate resources, and impact global markets..",
          instructor: "Emmanuel",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 5,
          class: "STAT 111",
          name: "Introduction to Statistics and Probability I",
          description:
            "Introduction to Statistics and Probability I introduces students to foundational concepts, probability theory, and statistical methods, laying the groundwork for data analysis, decision-making, and understanding uncertainty in various disciplines.",
          instructor: "Rm",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 6,
          class: "UGRC 150",
          name: "Critical Thinking and Logical Reasoning ",
          description:
            "Critical Thinking and Logical Reasoning foster advanced analytical skills, enabling students to evaluate arguments, solve complex problems, and make sound decisions by applying rigorous logical principles and evidence-based reasoning.",
          instructor: "Dr. Nancy Miles",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 1st semester",
          status: "Taken",
        },
        {
          id: 7,
          class: "DCIT 104",
          name: "Computer hardware fundamentals and circuits",
          description:
            "hardware fundamentals and circuits focus on the foundational principles of electronic systems. Students learn about basic components like resistors and transistors, delve into digital and analog circuitry, and explore computer architecture. The goal is to provide a solid understanding of how electronic devices work and the skills to design and troubleshoot circuits.",
          instructor: "Dr. Aziz",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 2nd semester",
          status: "Taken",
        },

        {
          id: 8,
          class: "DCIT 105",
          name: "Programming fundamentals",
          description:
            "programming fundamentals involve learning the core principles of computer programming. Students cover concepts such as variables, control structures, data types, and algorithms. The goal is to build a foundational understanding of how to write, analyze, and debug code, enabling the development of software applications and problem-solving skills.",
          instructor: "Dr. Michael Soli",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 2nd semester",
          status: "Taken",
        },
        {
          id: 9,
          class: "ECON 102",
          name: "Introduction to Economics II",
          description:
            " Introduction to Economics II expands on foundational economic concepts, exploring topics like market structures, macroeconomic principles, and policy analysis. Students delve into advanced economic theories, gaining insights into factors influencing national economies and policy implications.",
          instructor: "Dr. Eammanuel",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 2nd semester",
          status: "Taken",
        },
        {
          id: 10,
          class: "MATH 122",
          name: "Calculus I",
          description:
            "calculus involves advanced mathematical concepts, including limits, derivatives, and integrals. Students apply calculus to model and analyze real-world problems, mastering techniques for optimization and understanding the fundamental principles of rates of change and accumulation.",
          instructor: "Professor Sebah",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 2nd semester",
          status: "Taken",
        },
        {
          id: 11,
          class: "STAT 122",
          name: "Introduction to Statistics and Probability II",
          description:
            "Introduction to Statistics and Probability extends beyond basics, exploring advanced topics such as regression analysis, hypothesis testing, and multivariate statistical methods. Students build on foundational knowledge to analyze complex data sets and draw meaningful conclusions.",
          instructor: "Dr Emmanuel Sakyi Yeboah",
          grade: "A-",
          credit: "3",
          semester: "Level 100 - 2nd semester",
          status: "Taken",
        },
      ],
      selectedSemester: "All",
    };
  }

  handleSemesterChange = (e) => {
    const selectedSemester = e.target.value;
    this.setState({ selectedSemester: selectedSemester });
  };

  render() {
    const { courses, selectedSemester } = this.state;

    const filteredCourses =
      selectedSemester === "All"
        ? courses
        : courses.filter((course) => course.semester === selectedSemester);

    return (
      <Container className="mt-5">
        <h3>Course History</h3>
        <label>
          Filter by Semester:
          <select value={selectedSemester} onChange={this.handleSemesterChange}>
            <option value="All">All</option>
            <option value="Level 100 - 1st semester">
              Level 100 - 1st semester
            </option>
            <option value="Level 100 - 2nd semester">
              Level 100 - 2nd semester
            </option>
            {/* Add more semester options as needed */}
          </select>
        </label>
        <Table borderd hover>
          <thead>
            <tr>
              <th>Class</th>
              <th>Course Name</th>
              <th>Instructor</th>
              <th>Description</th>
              <th>Term</th>
              <th>Grade</th>
              <th>Gredits</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map((course) => (
              <tr key={course.id}>
                <td style={{ fontWeight: 700 }}>{course.class}</td>
                <td>{course.name}</td>
                <td>{course.instructor}</td>
                <td>{course.description}</td>
                <td>{course.semester}</td>
                <td>{course.grade}</td>
                <td>{course.credit}</td>
                <td>
                  <Check color="green" size={20} />
                  {course.status}
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default GradeReport;
