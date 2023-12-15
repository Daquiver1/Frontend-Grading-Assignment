import React, { useState } from "react";
import "./TranscriptComponent.css";

const TranscriptComponent = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const transcriptData = {
    level100: {
      firstSemester: [
        { course: "UGRC 150", grade: "A" },
        { course: "DCIT 101", grade: "B" },
        { course: "DCIT 103", grade: "B+" },
        { course: "STAT 111", grade: "C" },
        { course: "MATH 121", grade: "B+" },
        { course: "MATH 123", grade: "A" },
      ],
      secondSemester: [
        { course: "UGRC 110", grade: "A" },
        { course: "DCIT 102", grade: "A" },
        { course: "DCIT 104", grade: "C+" },
        { course: "STAT 112", grade: "B" },
        { course: "MATH 122", grade: "B+" },
        { course: "MATH 126", grade: "A" },
      ],
    },
    level200: {
      firstSemester: [
        { course: "CBAS 210", grade: "N/A" },
        { course: "DCIT 201", grade: "N/A" },
        { course: "DCIT 203", grade: "N/A" },
        { course: "DCIT 205", grade: "N/A" },
        { course: "DCIT 207", grade: "N/A" },
        { course: "MATH 223", grade: "N/A" },
      ],
      secondSemester: [
        { course: "UGRC 220", grade: "N/A" },
        { course: "DCIT 202", grade: "N/A" },
        { course: "DCIT 204", grade: "N/A" },
        { course: "DCIT 206", grade: "N/A" },
        { course: "DCIT 208", grade: "N/A" },
        { course: "MATH 214", grade: "N/A" },
      ],
    },
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setSelectedSemester(null);
  };

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
  };

  return (
    <div className="transcript-container">
      <h2>View Your Transcript Below By Selecting The Level And Semester </h2>

      <div className="level-buttons">
        {Object.keys(transcriptData).map((level) => (
          <button
            key={level}
            onClick={() => handleLevelClick(level)}
            className={selectedLevel === level ? "selected" : ""}
          >
            {level}
          </button>
        ))}
      </div>

      {selectedLevel && (
        <div className="semester-buttons">
          {["firstSemester", "secondSemester"].map((semester) => (
            <button
              key={semester}
              onClick={() => handleSemesterClick(semester)}
              className={selectedSemester === semester ? "selected" : ""}
            >
              {semester}
            </button>
          ))}
        </div>
      )}

      {selectedLevel && selectedSemester && (
        <div className="transcript-table">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {transcriptData[selectedLevel][selectedSemester].map((course) => (
                <tr key={course.course}>
                  <td>{course.course}</td>
                  <td>{course.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TranscriptComponent;
