import { FaChalkboardTeacher, FaBook } from "react-icons/fa";
import { MdGrade } from "react-icons/md";

const Missing = () => {
  return (
    <div className="missing-wrapper">
      <form action="">
        <h1>Missing Grade Form</h1>
        <div className="missing-input-box">
          <input type="text" placeholder="Course Name" required />
          <FaBook className="icon" />
        </div>
        <div className="missing-input-box">
          <input type="text" placeholder="Instructor Name" required />
          <FaChalkboardTeacher className="icon" />
        </div>
        <div className="missing-input-box">
          <input type="text" placeholder="Expected Grade" required />
          <MdGrade className="icon" />
        </div>
        <div className="complain-area">
          <textarea type="message" placeholder="What do you have to say?" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Missing;
