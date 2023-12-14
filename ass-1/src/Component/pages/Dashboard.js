import React, { useState, useEffect } from "react";

import NavBar from "../includes/Navigation bar";
import Footer from "../includes/footer";
const grades = [
  { name: "Math", grade: 90, semester: "First Semester", academicYear: "2021" },
  {
    name: "Data Structures and Algorithms",
    grade: 75,
    semester: "First Semester",
    academicYear: "2023",
  },
  {
    me: "Software Development",
    grade: 96,
    semester: "First Semester",
    academicYear: "2023",
  },
];

const missingGrades = [
  {
    name: "Software Development",

    // semester: "First Semester",
    // academicYear: "2023",
  },
];

const Dashboard = () => {
  const [showMissingGradesAlert, setShowMissingGradesAlert] = useState(false);

  useEffect(() => {
    // Mock logic to check for missing grades
    if (missingGrades.length > 0) {
      setShowMissingGradesAlert(true);
    }
  }, []);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h2>Dashboard</h2>
        {showMissingGradesAlert && (
          <div className="alert">
            <h4>Missing Grades!</h4>
            <p>You have missing grades for the following courses:</p>
            <ul>
              {missingGrades.map((missingGrade) => (
                <li key={missingGrade.courseName}>
                  {missingGrade.courseName} ({missingGrade.semester})
                </li>
              ))}
            </ul>
            <p>
              Please contact your instructors for updates on your missing
              grades.
            </p>
          </div>
        )}
        <h3>Current Grades</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Semester</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((grade) => (
              <tr key={grade.courseName}>
                <td>{grade.courseName}</td>
                <td>{grade.semester}</td>
                <td>{grade.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;

// import React, { useState, useEffect } from "react";

// const grades = [
//   {  name: "Math",
//   grade: 90,
//   semester: "First Semester",
//   academicYear: "2021", },
//   {  name: "Data Structures and Algorithms",
//   grade: 75,
//   semester: "First Semester",
//   academicYear: "2023" },
//   { me: "Software Development",
//   grade: 96,
//   semester: "First Semester",
//   academicYear: "2023", },
// ];

// const missingGrades = [
//   { me: "Software Development",

//   semester: "First Semester",
//   academicYear: "2023", },
// ];

// function DashboardPage() {
//   const [showMissingGradesAlert, setShowMissingGradesAlert] = useState(false);

//   useEffect(() => {
//     // Mock logic to check for missing grades
//     if (missingGrades.length > 0) {
//       setShowMissingGradesAlert(true);
//     }
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {showMissingGradesAlert && (
//         <div className="alert">
//           <h4>Missing Grades!</h4>
//           <p>You have missing grades for the following courses:</p>
//           <ul>
//             {missingGrades.map((missingGrade) => (
//               <li key={missingGrade.courseName}>
//                 {missingGrade.courseName} ({missingGrade.semester})
//               </li>
//             ))}
//           </ul>
//           <p>Please contact your instructors for updates on your missing grades.</p>
//         </div>
//       )}
//       <h3>Current Grades</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Course Name</th>
//             <th>Semester</th>
//             <th>Grade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {grades.map((grade) => (
//             <tr key={grade.courseName}>
//               <td>{grade.courseName}</td>
//               <td>{grade.semester}</td>
//               <td>{grade.grade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default DashboardPage;
