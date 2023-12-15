import React, { useState } from 'react';
import Header from "../components/Header";

const TranscriptViewer = () => {
  const [selectedLevel, setSelectedLevel] = useState("100");
  const [selectedSemester, setSelectedSemester] = useState("1");
  const [transcript, setTranscript] = useState([]);
  const [totalCredits, setTotalCredits] = useState(0);
  const [cgpa, setCGPA] = useState(0);

  const transcriptData = [
    // ... (your provided transcript data)
      { code: "DCIT 101", title: "Introduction to Computer Science", grade: "A", credits: 3, level: 100, semester: 1, gpt: 12 },
      { code: "DCIT 103", title: "Office  Productivity Tools", grade: "A", credits: 3, level: 100, semester: 1, gpt: 12 },
      { code: "MATH 121", title: "Algebra and Trigonometry", grade: "B+", credits: 3, level: 100, semester: 1, gpt: 10.5 },
      { code: "MATH 123", title: "Vectors and Geometry", grade: "B", credits: 3, level: 100, semester: 1, gpt: 9 },
      { code: "STAT 111", title: "Introduction to Statistics and Probability", grade: "B", credits: 3, level: 100, semester: 1, gpt: 9 },
      { code: "UGRC 150", title: "Critical Thinking and Practical Reasoning", grade: "A", credits: 3, level: 100, semester: 1, gpt: 12 },
      { code: "DCIT 102", title: "Computer Hardware Fundamentals and Circuits", grade: "B", credits: 3, level: 100, semester: 2, gpt: 9 },
      { code: "DCIT 104", title: "Programming Fundamentals", grade: "A", credits: 3, level: 100, semester: 2, gpt: 12 },
      { code: "MATH 122", title: "Calculus I", grade: "B+", credits: 3, level: 100, semester: 2, gpt: 10.5 },
      { code: "MATH 126", title: "Algebra and Geometry", grade: "A", credits: 3, level: 100, semester: 2, gpt: 12 },
      { code: "STAT 112", title: "Introduction to Statistics and Probability II", grade: "A", credits: 3, level: 100, semester: 2, gpt: 12 },
      { code: "UGRC 110", title: "Academic Writing I", grade: "B+", credits: 3, level: 100, semester: 2, gpt: 10.5 },
      { code: "CBAS 210", title: "Academic Writing I", grade: "B+", credits: 3, level: 200, semester: 1, gpt: 10.5 },
      { code: "DCIT 201", title: "Programming I", grade: "A", credits: 3, level: 200, semester: 1, gpt: 12 },
      { code: "DCIT 203", title: "Digital and Logic Systems Design", grade: "B+", credits: 3, level: 200, semester: 1, gpt: 10.5 },
      { code: "DCIT 205", title: "Multi-Media and Web Design", grade: "A", credits: 3, level: 200, semester: 1, gpt: 12 },
      { code: "DCIT 207", title: "Computer Organization and Architecture", grade: "B+", credits: 3, level: 200, semester: 1, gpt: 10.5 },
      { code: "MATH 223", title: "Calculus II", grade: "A", credits: 3, level: 200, semester: 1, gpt: 12 },
      { code: "UGRC 220", title: "Introduction to African Studies", grade: "B", credits: 3, level: 200, semester: 2, gpt: 9 },
      { code: "DCIT 202", title: "Mobile Application Development", grade: "A", credits: 3, level: 200, semester: 2, gpt: 12 },
      { code: "DCIT 204", title: "Data Structures and Algorithm I", grade: "B", credits: 3, level: 200, semester: 2, gpt: 9 },
      { code: "DCIT 206", title: "Systems Administration", grade: "B+", credits: 3, level: 200, semester: 2, gpt: 10.5 },
      { code: "DCIT 208", title: "Software Engineering", grade: "A", credits: 3, level: 200, semester: 2, gpt: 12 },
      { code: "DCIT 301", title: "Operating Systems", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 303", title: "Computer Networks", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 305", title: "Database Fundamentals", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 313", title: "Introduction to Artificial Intelligence", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 359", title: "Discrete Mathematics", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 307", title: "Mini-Project", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      { code: "DCIT 311", title: "Machine Learning", grade: "N/A", credits: "N/A", level: 300, semester: 1, gpt: "N/A" },
      
      // ... (add more courses as needed)
  ];

  const filterTranscript = () => {
    const filteredTranscript = transcriptData.filter(course => {
      return course.level === parseInt(selectedLevel, 10) && course.semester === parseInt(selectedSemester, 10);
    });

    setTranscript(filteredTranscript);
    calculateCGPA(filteredTranscript);
  };

  const calculateCGPA = (transcript) => {
    // CGPA calculation logic based on the filtered transcript
    // ...

    // For now, let's assume CGPA is the average of GPT values
    const totalGPT = transcript.reduce((total, course) => total + parseFloat(course.gpt), 0);
    const totalCredits = transcript.reduce((total, course) => total + course.credits, 0);


    const cgpa = totalGPT / totalCredits;

    setTotalCredits(totalCredits);

    // Update CGPA state
    // You may need to format the CGPA as needed
    // For simplicity, rounding to two decimal places
    setCGPA(cgpa.toFixed(2));
  };

  const displayTranscript = () => {
    return transcript.map(course => (
      <tr key={course.code}>
        <td>{course.code}</td>
        <td>{course.title}</td>
        <td>{course.grade}</td>
        <td>{course.credits}</td>
        <td>{course.gpt}</td>
      </tr>
    ));
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <main>
        <h2>Grade Search</h2>
        <div className="filter-form">
          <label htmlFor="level"><b>Select Level:</b></label>
          <select id="level" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
            {/* Options for selecting level */}
            <option value="100">Level 100</option>
            <option value="200">Level 200</option>
            <option value="300">Level 300</option>
            
          </select>
          <br />
          <label htmlFor="semester"><b>Select Semester:</b></label>
          <select id="semester" value={selectedSemester} onChange={(e) => setSelectedSemester(e.target.value)}>
            {/* Options for selecting semester */}
            <option value="1">First Semester</option>
            <option value="2">Second Semester</option>
          </select>
          <br />
          <button onClick={filterTranscript}>Filter</button>
        </div>

        <nav>
          {/* Display CGPA and other information */}
          <p>ACADEMIC YEAR: 2022/2023</p>
          <p>{selectedSemester === '1' ? 'FIRST'  : 'SECOND' } SEMESTER</p>
          {/* Display other information as needed */}
          <p>CCT: {totalCredits}</p>
          <p>CCP: {totalCredits}</p>
          <p>CGPA: {cgpa}</p>
        </nav>

        <table id="transcriptTable">
          <thead>
            <tr>
              <th>CODE</th>
              <th>COURSE CODE</th>
              <th>GRADE</th>
              <th>CREDITS</th>
              <th>GPT</th>
            </tr>
          </thead>
          <tbody>
            {displayTranscript()}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default TranscriptViewer;