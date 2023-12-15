import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

// This is a functional component to display a single question and its answer.


export default function SingleQuestion({ question, answer }) {
   // State to manage whether the answer is visible or not
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
    {/* Container for the question and answer */}
      <div className="border border-gray-400 rounded-lg bg-white">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
           {/* Buttons for expanding and collapsing the answer */}
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                  {/* Button to hide the answer */}
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>
 
         {/* Section for the answer, visible only when showAnswer is true */}
        <article
          className={`${showAnswer && "border-t border-gray-400 p-4 lg:p-6"}`}
        >
          {/* Display the answer if showAnswer is true */}
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}