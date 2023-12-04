// // Dashboard.js

// import React, { useState, useEffect } from "react";
// import { Alert, Card, ListGroup } from "react-bootstrap";

// const Dashboard = () => {
//   // Example state for student's grades
//   const [grades, setGrades] = useState([
//     { subject: "Math", grade: 85 },
//     { subject: "Science", grade: 92 },
//     // Add more subjects and grades as needed
//   ]);

//   // Example state for missing grades
//   const [missingGrades, setMissingGrades] = useState([]);

//   useEffect(() => {
//     // Simulate fetching missing grades from a backend (replace with actual API call)
//     fetchMissingGrades()
//       .then((missingGradesData) => setMissingGrades(missingGradesData))
//       .catch((error) => console.error("Error fetching missing grades:", error));
//   }, []);

//   // Simulate fetching missing grades from a backend
//   const fetchMissingGrades = () => {
//     return new Promise((resolve, reject) => {
//       // Simulate API call
//       setTimeout(() => {
//         // Example: If the student is missing grades in 'History' and 'English'
//         const missingGradesData = ["History", "English"];
//         resolve(missingGradesData);
//       }, 1000);
//     });
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>

//       {/* Displaying Overview of Grades */}
//       <Card>
//         <Card.Header>Current Grades</Card.Header>
//         <ListGroup variant="flush">
//           {grades.map((grade, index) => (
//             <ListGroup.Item key={index}>
//               {grade.subject}: {grade.grade}
//             </ListGroup.Item>
//           ))}
//         </ListGroup>
//       </Card>

//       {/* Displaying Alerts/Notifications for Missing Grades */}
//       {missingGrades.length > 0 && (
//         <Alert variant="danger" className="mt-4">
//           <Alert.Heading>Missing Grades</Alert.Heading>
//           <ul>
//             {missingGrades.map((missingGrade, index) => (
//               <li key={index}>{missingGrade}</li>
//             ))}
//           </ul>
//         </Alert>
//       )}
//     </div>
//   );
// };

// export default Dashboard;
