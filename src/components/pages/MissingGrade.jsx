import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./header";
import "../../Styles/utils.css";
import Bars from "../Bars";
import MinFooter from "./MinFooter";

const MissingGrade = () => {
  const [getUserInput, setGetUserInput] = useState({
    courseCode: "",
    programstudy: "",
    lecturer: "",
    expectedgrade: "",
    date: "",
    largetext: "",
  });
  const [userHistory, setUserHistory] = useState([]);
  //   const [userSubmit, setUserSubmit] = useState(true);

  const trackInput = (e) => {
    const { name, value } = e.target;
    setGetUserInput({ ...getUserInput, [name]: value });
  };
  const setHistory = () => {
    setUserHistory([...userHistory, getUserInput]);
    setGetUserInput({
      courseCode: "",
      programstudy: "",
      lecturer: "",
      expectedgrade: "",
      date: "",
      largetext: "",
    });
  };
  const resetTable = () => {
    setUserHistory([]);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await fetch(
        "https://www.jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(getUserInput),
        }
      );
      userResponse.ok
        ? window.alert("Your data were sent successfully")
        : window.alert(
            "There was an error sending your form. Try again later."
          );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData()
  })
  return (
    <>
      <Bars></Bars>
      <Header></Header>
      <div className="container">
        <form onSubmit={fetchData} className="form-style">
          <label htmlFor="courseCode" className="label">
            Enter Course Code Here:{" "}
          </label>
          <input
            className="placeholder"
            type="text"
            name="courseCode"
            onChange={trackInput}
            value={getUserInput.courseCode}
            placeholder="Course Code"
          />
          <label htmlFor="program" className="label">
            Enter Program of Study{" "}
          </label>
          <input
            className="placeholder"
            type="text"
            onChange={trackInput}
            name="programstudy"
            value={getUserInput.programstudy}
            placeholder="Study Program"
          />
          <select
            name="lecturer"
            id="selectLecturer"
            className="lecturer transition-all duration-200 text-green-700"
            onChange={trackInput}
            value={getUserInput.lecturer}
          >
            <option value="" selected disabled>
              <p className="text-red-400 italic">Selelct Lecturer Here</p>
            </option>
            <option value="Mr. Abosi">Mr. Abosi(abosi123@gmail.com)</option>
            <option value="Mr. Aziz">
              Mr.Aziz Abdullah(abdulla246@gmail.com)
            </option>
            <option value="Mr. Ferdinand">
              Mr.Ferdinand Katsriku(ferdinand428@gmail.com)
            </option>
            <option value="Mr. Sorli">Mr. Sorli(sorli875@gmail.com)</option>
            <option value="Mr. Daquiver">
              Mr. Daquiver(daquiver1@gmail.com)
            </option>
            <option value="Mr. Dickson">
              Mr. Dickson(dickson187@gmail.com)
            </option>
          </select>
          <label htmlFor="expected-grade" className="label">
            Expected Grade:{" "}
          </label>
          <input
            className="placeholder"
            type="text"
            onChange={trackInput}
            name="expectedgrade"
            value={getUserInput.expectedgrade}
            placeholder="Expected Grade"
          />
          <input
            type="date"
            name="date"
            value={getUserInput.date}
            onChange={trackInput}
            className="text-green-600"
          />
          <textarea
            className="placeholder"
            name="largetext"
            id="largetext"
            cols="60"
            rows="5"
            value={getUserInput.largetext}
            placeholder="Explain your issue here"
            onChange={trackInput}
          ></textarea>
          <div className="flex gap-7">
            <button
              onClick={setHistory}
              className="button"
              onKeyDown={(e) => {
                if (e.key == "enter") {
                  setHistory();
                }
              }}
            >
              Submit
            </button>
            <button onClick={resetTable} className="button-reset">
              Reset
            </button>
          </div>
        </form>
        {/*Iterator function for the history of reports made */}
        <table>
          <thead>
            <div>
              <th className="font-semibold text-xl text-orange-950">
                Track your history from here
              </th>
              <tbody>
                {userHistory.map((history, index) => (
                  <div key={index}>
                    <div key={index} className="flex">
                      <p>Your History on {history.date}</p>
                    </div>
                    <div key={index} className="flex">
                      <p>Your course code: {history.courseCode}</p>
                    </div>
                    <div key={index} className="flex">
                      <p>Your program of Study: {history.programstudy}</p>
                    </div>
                    <div key={index} className="flex">
                      <p>Made Report to {history.lecturer}</p>
                    </div>
                    <div key={index} className="flex">
                      <p>Expected Grade: {history.expectedgrade}</p>
                    </div>
                    <div key={index} className="flex">
                      <p>Accompanying message: {history.largetext}</p>
                    </div>
                  </div>
                ))}
              </tbody>
            </div>
          </thead>
        </table>
      </div>
      <MinFooter></MinFooter>
      <Footer></Footer>
    </>
  );
};

export default MissingGrade;
