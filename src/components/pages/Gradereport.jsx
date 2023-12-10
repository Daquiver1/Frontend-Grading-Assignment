import { useEffect, useState } from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import Header from "./header";

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

  const resetTable = () => {
    setTableData([]);
  };
  const updateTable = () => {
    setTableData([...tableData, inputData]);
    setInputData({
      studentId: "",
      program: "",
      date: "",
      courseCode: "",
      grade: "",
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
      <TopBar></TopBar>
      <Header></Header>
      <div className="container">
        <div className="flex justify-center flex-col place-items-center">
          <p className="text-4xl italic text-blue-900 slide-text">
            Fill the form below for a review of your courses
          </p>
          <p className="text-red-500 text-4xl">(Your data will be saved)</p>
        </div>
        <form className="flex flex-col bg-blue-50 bg-opacity-40 justify-center place-items-center w-screen gap-10 mt-10">
          <label className="mr-5 label" htmlFor="courseCode">
            Enter your course code here:
          </label>
          <input
            className="mr-5"
            id="courseCode"
            name="courseCode"
            type="text"
            value={inputData.courseCode}
            onChange={handleInputChange}
            autoComplete
            autoFocus
            autoSave
          />
          <label className="mr-5 label" htmlFor="studentId">
            Enter your student id here:
          </label>
          <input
            className="mr-5"
            id="studentId"
            name="studentId"
            type="text"
            value={inputData.studentId}
            onChange={handleInputChange}
            autoComplete
            autoSave
          />
          <label className="mr-5 label" htmlFor="program">
            What is your program of study? :
          </label>
          <input
            className="mr-5"
            id="program"
            name="program"
            type="text"
            value={inputData.program}
            onChange={handleInputChange}
            autoComplete
            autoCorrect
            autoSave
            autoCapitalize="on"
          />
          <label className="mr-5 label" htmlFor="date">
            Select date here:
          </label>
          <input
            className="mr-5 hover:cursor-pointer"
            id="date"
            name="date"
            type="date"
            value={inputData.date}
            onChange={handleInputChange}
            autoSave
          />
          <button
            type="button"
            onClick={updateTable}
            className="font-bold bg-blue-300 rounded-md text-blue-700 text-xl hover:bg-blue-700 hover:text-blue-300 duration-[0.5s]"
          >
            Update Records
          </button>
          <button
            type="button"
            onClick={resetTable}
            title="Click to reset the table"
            className="font-bold bg-red-400 rounded-md text-blue-700 text-xl hover:bg-blue-700 hover:text-red-500 duration-[0.5s]"
          >
            Reset Table
          </button>
        </form>
        <div className="tableData flex justify-center place-items-center mt-5 max-w-fit bg-blue-200 bg-opacity-40">
          <table className="tables flex justify-center place-items-center flex-col">
            <thead>
              <tr className="gap-3 flex text-blue-700 text-2xl italic will-change-scroll">
                <th className="gap-3">Student ID</th>
                <th className="gap-3">Program of Study</th>
                <th className="gap-3">Date</th>
                <th className="gap-3">Course Code</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr
                  key={index}
                  className="gap-3 flex text-blue-700 text-2xl italic will-change-scroll"
                >
                  <td className="">{data.studentId}</td>
                  <td className="">{data.program}</td>
                  <td className="">{data.date}</td>
                  <td className="">{data.courseCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Gradereport;
