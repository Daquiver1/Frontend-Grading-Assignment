import React from 'react';

const MissingGrade = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="content">
          <div className="left-side">
          </div>
          <div className="right-side">
            <div className="topic-text">Report Missing Grade</div>
            <p>If you have a missing grade, please fill out the form below to report it.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Course Name" />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Details about the missing grade"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Report Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissingGrade;
