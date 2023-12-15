import React from "react";

function FAQanswers() {
  return (
    <>
      <div className="flex-col justify-center items-center border-2 object-center  text-center">
        <div id="answer1  " className="p-4 m-4 bg-black text-white">
          <p>
            You get started by logging in first, you see your current result and
            then you click on grade from the navbar to check all your grades
          </p>
        </div>
        <div id="answer2" className="p-4 m-4 bg-black text-white">
          <p>
            On your dasboard , there is a section that has a button review
            grades, click on it to report your missing grades{" "}
          </p>
        </div>
        <div id="answer3" className="p-4 m-4 bg-black text-white">
          <p>
            You cannot create an account by yourself, You are supposed to be a
            nember of the institution to get an account ,You can contact the
            information system to report any issue of logging in{" "}
          </p>
        </div>
        <div id="answer4" className="p-4 m-4 bg-black text-white">
          <p>No, A student only have access to one account .</p>
        </div>
      </div>
    </>
  );
}

export default FAQanswers;
