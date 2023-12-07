import { useEffect, useState } from "react";

const Gradereport = () => {
  //Define states for the form data and the table data for user data and input
  const [inputData, setInputData] = useState({
    studentId: "",
    program: "",
    date: "",
    courseCode: "",
    gpa: "",
    score: "",
    gpt: "",
  });
  const [tableData, setTableData] = useState([]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const updateTable = () => {
    setTableData([...tableData, inputData]);
    setInputData({
      studentId: "",
      program: "",
      date: "",
      courseCode: "",
      gpa: "",
      score: "",
      gpt: "",
    });
  };
  useEffect(() => {
    localStorage.setItem("storedInput", JSON.stringify(tableData));
  }, [tableData]);

  useEffect(() => {
    const getData = localStorage.getItem("storedInput");
    if (getData) {
      setTableData(JSON.parse(getData));
    }
  }, []);
  return (
    <>
      <div className="container">
        <form action="">
          <label className="mr-5" htmlFor="courseCode">
            Enter your course code here:
          </label>
          <input
            className="mr-5"
            id="courseCode"
            name="courseCode"
            type="text"
            value={inputData.courseCode}
            onChange={handleInputChange}
          />
          <label className="mr-5" htmlFor="studentId">
            Enter your student id here:
          </label>
          <input
            className="mr-5"
            id="studentId"
            name="studentId"
            type="text"
            value={inputData.studentId}
            onChange={handleInputChange}
          />
          <label className="mr-5" htmlFor="program">
            What is your program of study? :
          </label>
          <input
            className="mr-5"
            id="program"
            name="program"
            type="text"
            value={inputData.program}
            onChange={handleInputChange}
          />
          <label className="mr-5" htmlFor="date">
            Select date here:
          </label>
          <input
            className="mr-5"
            id="date"
            name="date"
            type="date"
            value={inputData.date}
            onChange={handleInputChange}
          />
          <button type="button" onClick={updateTable}>
            Update Records
          </button>
        </form>
        <div className="tableData">
          <table className="tables">
            <thead>
              <tr className="gap-3">
                <th className="gap-3">Student ID</th>
                <th className="gap-3">Program of Study</th>
                <th className="gap-3">Date</th>
                <th className="gap-3">Course Code</th>
                <th className="gap-3">GPA</th>
                <th className="gap-3">GPT</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index} className="gap-3">
                  <td className="gap-3">{data.studentId}</td>
                  <td className="gap-3">{data.program}</td>
                  <td className="gap-3">{data.date}</td>
                  <td className="gap-3">{data.courseCode}</td>
                  <td className="gap-3">{data.gpa}</td>
                  <td className="gap-3">{data.gpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Gradereport;
